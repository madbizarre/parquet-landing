;(function(){
    function ajax(a){
        $(".alert.alert-danger").alert('close');
        $.ajax({
            url: '/mail',
            type: 'post',
            data: {
                name: a[0],
                email: a[1],
                tel: a[2],
                comment: a[3]
            },
            success: function (){
                $('.contact-container').prepend('<div class="alert alert-success" role="alert"><strong>Ваша заявка отправлена!</strong></div>');
                $('.contact').css('display', 'none');
                setTimeout(function(){
                    $('#contactUsModal').modal('hide');
                }, 1000);
            },
            error: function (){
                $('.contact h4').after('<div class="alert alert-danger" role="alert"><strong>Произошла ошибка!</strong> Попробуйте повторить отправку или повторите позже.</div>');
            }
        });
    }
    $('#modalContact').on('submit', function (e){
        e.preventDefault();
        ajax([$('#inputName2').val(), $('#inputEmail2').val(), $('#inputTel2').val(), $('#inputComment2').val()]);
    });
    $('#contact').on('submit', function (e){
        e.preventDefault();
        ajax([$('#inputName').val(), $('#inputEmail').val(), $('#inputTel').val(), $('#inputComment').val()]);
    });
    $('#contactUsModal').on('hidden.bs.modal', function (e) {
        $(".alert.alert-danger").alert('close');
    });
})();