$ ->
  $('a[data-type="add-teammate"]').on 'click', (e) ->
    e.preventDefault()
    unshown = $('.teammate').not('.shown')
    unshown.first().addClass('shown')
    $(e.target).parent('li.add-teammate').remove() if unshown.length == 1
