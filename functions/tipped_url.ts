@func XMLNode.tipped_url() {
  add_class('tooltipped')
  attribute('title', text())
  text() {
    replace(/https?:\/\/(?:www\.)?/, '')
    replace(/\/\Z/, '')
  }
}
