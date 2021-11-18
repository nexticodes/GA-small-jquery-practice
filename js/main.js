$('button').on('click', function(e){
    // Get the value of the input.
    const $inputVal = $('input').val();
    // Grab content container;
    const $contentContainer = $('.content')
    // Append the inputVal in a P tag, and add an X button before it.
    $contentContainer.append(`
        <p class="user-input"><button class="remove btn-danger">X</button>${$inputVal}
    `)

    // Reset value when added.
    $('input').val('');
})