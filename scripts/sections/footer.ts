# $("./body") {
#   insert_bottom("footer", class: "_footer") {
#     Move stuff here
#   }
# }

$$('body') {
  insert_top('div', id: 'root') {
    move_here('../header')
    move_here('../div[@id="main"]')
    insert('div', id: 'root_footer')
  }
}

$$('footer.page') {
  insert('div', class: 'footer-wrapper') {
    move_here('../p[@data-type="copyright"]')
    insert('div', class: 'buttons') {
      move_here('../../*[contains(@class, "btn")]')
    }
  }
}
