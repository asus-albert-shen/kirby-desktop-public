x$.ready ->
  toggleControl = x$('.image-toggle-control')
  toggleControl.find('a').on 'click', (e) ->
    e.preventDefault()
    $target = x$(e.target)

    # update toggle switch
    toggleControl.find('a').removeClass('selected')
    $target.addClass('selected')

    # update image
    $imagesContainer = x$(toggleControl.attr('data-image-toggle')[0])
    $imagesContainer.find('img').removeClass('selected')
    $imagesContainer.find("img[data-type='#{$target.attr('data-image')[0]}']").addClass('selected')
