# $("./body") {
#   insert_bottom("footer", class: "_footer") {
#     Move stuff here
#   }
# }

$$('body') {
  insert_top('div', id: 'root') {
    move_here('../header')
    move_here('../p[contains(@class, "hackathon-banner")]')
    move_here('../div[@id="main"]')
    insert('div', id: 'root_footer')
  }
}

$$('footer.page') {
  insert('div', class: 'footer-wrapper') {
    insert('div', class: 'fine-print') {
      move_here('../../p[@data-type="copyright"]')
      move_here('../../p[@data-type="attribution"]')
    }
    insert('div', class: 'buttons') {
      move_here('../../a[@data-type="submit-your-own"]') {
        wrap('div', class: 'btn-wrapper')
      }
      move_here('../../a[@data-type="moovweb-signup"]') {
        wrap('div', class: 'btn-wrapper')
      }
    }
  }
}
