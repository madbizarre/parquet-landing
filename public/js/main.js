;(function(){
    $('.contact').on('submit', function (e){
        e.preventDefault();
        var inputName = $('#inputName').val(),
            inputEmail = $('#inputEmail').val(),
            inputTel = $('#inputTel').val(),
            inputComment = $('#inputComment').val();
        $.ajax({
            url: '/mail',
            type: 'post',
            data: {
                name: inputName,
                email: inputEmail,
                tel: inputTel,
                comment: inputComment
            },
            success: function (){
                $(".alert").alert('close');
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
    });
    $('#contactUsModal').on('hidden.bs.modal', function (e) {
        $(".alert .alert-danger").alert('close');
    });
})();