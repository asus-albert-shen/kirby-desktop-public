/*
  Mappings

  Mappings are matchers that we use to determine if we should execute a
  bit of Tritium during an execution. Aka, run something when we are
  are on a certain page.

  Example starting code:
*/

match($path) {

  with(/styleguide/) {
    # note that this will be served as a 404
    log("--> Loading static styleguide")
    $('//html') {
      remove('./body')
      insert('body') {
        inject(read("../assets/static/styleguide.html"))
      }
    }
  }

}

match($status) {

  with(/302/) { log("--> STATUS: 302") }

  with(/200/) {
    log("--> STATUS: 200")

    match($path) {
      with(/^\/$|^\/\?/) { @import pages/home.ts }

      with(/^\/hackathon\/?$/)         { @import pages/hackathon/register.ts }
      with(/^\/hackathon\/register$/)  { @import pages/hackathon/register.ts }
      with(/^\/hackathon\/submit$/)    { @import pages/hackathon/submit.ts }
      with(/^\/hackathon\/submitted$/) { @import pages/hackathon/submitted.ts }
      with(/^\/hackathon\/thanks$/)    { @import pages/hackathon/thanks.ts }

      else() { # tricky because the url for a remix could be anything
        match($$('body.projects.show')) {
          with('1') {
            log("--> Importing pages/project_show.ts in mappings.ts")
            @import pages/project_show.ts
          }
          else() { log("--> No page match in mappings.ts") }
        }
      }
    }
  }

  else() {
    # not 200 or 302 response status
    log("--> STATUS: " + $status + " assuming its an error code pages/error.ts")
    @import pages/error.ts
  }

}
