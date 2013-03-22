$('//ul[contains(@class, "judges")]') {
  $('./li[position() mod 4 = 1]') { add_class('alpha') }
}
