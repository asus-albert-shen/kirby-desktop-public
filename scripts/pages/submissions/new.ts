$('//div[contains(@class, "moov-form")]') {
  $('.//fieldset[contains(@class, "inputs")]') { add_class('first') }

  $('.//fieldset[contains(@class, "actions")]') {
    insert_before('fieldset', class: 'inputs') {
      insert('ol') {
        move_here('./../../..//li[@id="submission_description_input"]')
      }
    }
  }
}
