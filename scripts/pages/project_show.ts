$$('.project') {
  insert_top('div', class: 'detail') {
    move_here('../h1')

    insert('div', class: 'urls') {
      insert('div', 'Remixed:', class: 'original') {
        move_here('../../../a[@data-type="original-url"]')
      }
      insert('div', 'Try it:', class: 'remixed') {
        move_here('../../../a[@data-type="remixed-url"]')
      }
    }

    move_here('../p[@data-type="short-description"]')

    insert('div', class: 'image-toggle-control') {
      insert('div', 'Remixed', class: 'remixed-toggle selected')
      insert('div', 'Original', class: 'original-toggle')
    }

    insert('div', class: 'image-toggle') {
      move_here('../../img[@data-type="original"]')
      move_here('../../img[@data-type="zoomed-in"]')
    }

    move_here('../section[@data-type="extended-description"]')

    move_here('../section[@data-type="comments"]')
  }

  insert('div', class: 'meta') {
    insert('div', class: 'data alpha') {
      insert('ul') {

        move_here('../../../div[@data-type="view-count"]') {
          name('li')
          add_class('views')
        }

        /* TODO: need logins first
        insert('li', '31 Likes', class: 'likes')
        */

        /* TODO: need comments first
        insert('li', '2 Comments', class: 'comments')
        */

        insert('li', class: 'source-code') {
          move_here('../../../../a[@data-type="source-code"]')
        }

        /* TODO: need logins first
        insert('li', class: 'like') {
          insert('a', 'Like', href: '#')
        }
        */

        insert('li', class: 'tweet') {
          insert('a', 'Tweet', href: '#')
        }
      }
    }
    move_here('../div[@data-type="creator"]') {
      insert('p', 'By')
      insert('img', src: '/avatar.png')
      insert('div', 'Debbie Designer', class: 'name')
      insert('a', 'http://debbiedesigns.com', href: 'http://debbiedesigns.com')
    }
    insert('nav') {
      insert('a', 'View Next Remix', href: '#')
      insert('a', 'View Previous Remix', href: '#')
    }
  }
}
