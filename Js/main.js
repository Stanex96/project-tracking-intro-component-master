document.addEventListener('DOMContentLoaded', function() {
    $('.logo').click(() => {
        if($('.links').css('display') === 'none' || $('.links').css('display') === ''){
            $('.links').css('display', 'flex');
        } else if ($('.links').css('display') === 'flex'){
            $('.links').css('display', 'none');
        }
    });
});