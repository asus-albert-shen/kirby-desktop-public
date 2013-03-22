@func XMLNode.numbered_ol() {
  add_class('numbered')

  $('./li') {
    %index = index()

    insert_top('div', class: ('number index-' + %index)) { text(%index) }
  }
}
