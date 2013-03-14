$$('.project') {
  insert_top('div', class: 'header') {

    move_here('../div[@data-type="creator"]') {
      insert_top('img', src: '/avatar.png') { add_class('avatar') }
    }

    insert('hgroup') {
      move_here('../../h1')
      move_here('../../p[@data-type="short-description"]') { name('h2') }
    }
  }

  insert('div', class: 'two-up') {

    insert('div', class: 'remixed') {
      insert('h3', 'Remixed')
      move_here('../../img[@data-type="full-shot"]')
    }

    insert('div', class: 'original') {
      insert('h3', 'Original')
      move_here('../../img[@data-type="original-shot"]')
    }
  }

  insert('div', class: 'data') {

    insert('div', class: 'urls') {
      insert('div', 'Remixed:', class: 'original') {
        move_here('../../../a[@data-type="original-url"]')
      }
      insert('div', 'Try it:', class: 'remixed') {
        move_here('../../../a[@data-type="remixed-url"]')
      }
    }

    move_here('../div[@data-type="view-count"]') {
      add_class('views')
    }

    insert('div', class: 'source-code') {
      move_here('../../a[@data-type="source-code"]')
    }

    insert('div', class: 'like') {
      insert('a', 'Like', href: '#')
    }

    insert('div', class: 'tweet') {
      insert('a', 'Tweet', href: '#')
    }
  }

  insert('div', class: 'meta') {
    move_here('../section[@data-type="extended-description"]')
    move_here('../section[@data-type="comments"]')
  }
}
