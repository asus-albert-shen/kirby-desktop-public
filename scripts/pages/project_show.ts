$$('.project') {
  insert_top('div', class: 'header') {

    move_here('../div[@data-type="creator"]') {
      $('img') { add_class('avatar') }
      insert('div', 'by ', class: 'creator-name') {
        move_here('./../a[@data-type="name"]')
      }
      move_here('./a[@data-type="homepage"]') { wrap('div', class: 'homepage') }
    }

    insert('hgroup') {
      move_here('../../h1')
      move_here('../../p[@data-type="short-description"]') { name('h2') }
    }
  }

  insert('div', class: 'two-up') {

    insert('div', class: 'remixed') {
      insert('h3', 'Remixed')
      move_here('../../img[@data-type="full-shot"]') {
        attribute('style', 'height: 419px; width: 450px;')
        wrap('a', href: fetch('//a[@data-type="remixed-url"]/@href'), target: '_blank')
      }
    }

    insert('div', class: 'original') {
      insert('h3', 'Original')
      move_here('../../img[@data-type="original-shot"]') {
        attribute('style', 'height: 419px; width: 450px;')
        wrap('a', href: fetch('//a[@data-type="original-url"]/@href'), target: '_blank')
      }
    }
  }

  insert('div', class: 'data') {

    insert('div', class: 'urls') {
      insert('div', class: 'original-icon')
      insert('div', 'Remixed:', class: 'original') {
        move_here('../../../a[@data-type="original-url"]') {
          tipped_url()
        }
      }
      insert('div', class: 'remixed-icon')
      insert('div', 'Try it:', class: 'remixed') {
        move_here('../../../a[@data-type="remixed-url"]') {
          tipped_url()
        }
      }
    }

    insert('div', class: 'numbers') {
      insert('div', class: 'view-count-icon')
      move_here('../../div[@data-type="view-count"]') {
        add_class('views')
        text() {
          replace('Views', '')
        }
      }
      /*insert('div', class: 'comment-count') {*/
        /*insert('a') {*/
          /*attribute('href', concat($url, '#disqus_thread'))*/
        /*}*/
      /*}*/
    }

    insert('div', class: 'social') {
      move_here('//div[contains(@class, "fb-like")]')
      move_here('//a[contains(@class, "twitter-share-button")]')
    }
  }

  insert('div', class: 'source-code') {
    move_here('../a[@data-type="source-code"]') { text(){prepend('Get ')} }
  }

  insert('div', class: 'meta') {
    move_here('../section[@data-type="extended-description"]')
    insert('hr')
    insert('h3', 'Join the Discussion')
    move_here('../section[@data-type="comments"]')
  }
}
