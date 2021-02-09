$(function(){
    $('.order').on('click', function(){
        $('.popup-container').css('display', 'flex');
    });

    $('.popup-container').on('click', function(event){
        if(event.target === this) {
            $('.popup-container').css('display', 'none');
        }
    });

    $('.send-order').on('click', function(){
        let name = $('#name').val();
        let email = $('#email').val();

        if(name.length == 0) {
            alert('Укажите имя');
            return;
        }

        if(email.length == 0) {
            alert('Укажите e-mail');
            return;
        }

        $.post('/api.php', {'name': name, 'email': email}, function(response){
            if(response == 1) {
                $('.popup-container').css('display', 'none');
                $('#name').val('');
                $('#email').val('');
            } else {
                alert('Что-то пошло не так :(');
            }
        });
    });
});