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

      with(/^\/html5devconf\/?$/)         { @import pages/html5devconf/register.ts }
      with(/^\/html5devconf\/register$/)  { @import pages/html5devconf/register.ts }
      with(/^\/html5devconf\/submit$/)    { @import pages/html5devconf/submit.ts }
      with(/^\/html5devconf\/submitted$/) { @import pages/html5devconf/submitted.ts }
      with(/^\/html5devconf\/thanks$/)    { @import pages/html5devconf/thanks.ts }

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
