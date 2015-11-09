;(function(){
    function ajax(a){
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
                yaCounter33309968.reachGoal('sendEmailSite');
                $('.contact-container').prepend('<div class="alert alert-success" role="alert"><strong>Ваша заявка отправлена!</strong></div>');
                $('.contact').css('display', 'none');
            },
            error: function (){
                $('.contact h4').after('<div class="alert alert-danger" role="alert"><strong>Произошла ошибка!</strong> Попробуйте повторить отправку или повторите позже.</div>');
            }
        });
    }
    function checkForIE(name, tel, comment){
        if (document.all && !window.atob) {
            var error = [], text = '';
            if (name.length == 0) {
                error.push('имя');
            }
            if (tel.length == 0) {
                error.push('телефон');
            }
            if (comment.length == 0) {
                error.push('комментарий');
            }
            console.log(error);
            switch (error.length) {
                case 0:
                    console.log(0);
                    return true;
                case 1:
                    text = 'Поле ' + error[0] + ' обязательно для заполнения!';
                    console.log(text);
                    $('.contact').before('<div class="alert alert-danger" role="alert"><strong>' + text + '</strong></div>');
                    return false;
                case 2:
                    console.log(text);
                    text = 'Поля ' + error[0] + ' и ' + error[1] + ' обязательны для заполнения!';
                    $('.contact').before('<div class="alert alert-danger" role="alert"><strong>' + text + '</strong></div>');
                    return false;
                case 3:
                    console.log(text);
                    text = 'Поля ' + error[0] + ', ' + error[1] + ' и ' + error[2] + ' обязательны для заполнения!';
                    $('.contact').before('<div class="alert alert-danger" role="alert"><strong>' + text + '</strong></div>');
                    return false;
                default:
                    console.log('def');
                    return true;
            }
        }
        return true;
    }
    $('#modalContact').on('submit', function (e){
        e.preventDefault();
        $(".alert.alert-danger").alert('close');
        var name = $('#inputName2').val(),
            email =  $('#inputEmail2').val(),
            tel = $('#inputTel2').val(),
            comment = $('#inputComment2').val();
        if (checkForIE(name, tel, comment)){
            ajax([name, email, tel, comment]);
        }
    });
    $('#contact').on('submit', function (e){
        e.preventDefault();
        $(".alert-danger").alert('close');
        var name = $('#inputName').val(),
            email =  $('#inputEmail').val(),
            tel = $('#inputTel').val(),
            comment = $('#inputComment').val();
        if (checkForIE(name, tel, comment)) {
            ajax([name, email, tel, comment]);
        }
    });
    $('#contactUsModal').on('hidden.bs.modal', function (e) {
        $(".alert.alert-danger").alert('close');
    });
    if (document.all && !window.atob) {
        $('label[for="inputComment"]').html('Комментарий*:').css('display', 'block');
        $('label[for="inputName"]').html('Имя*:').css('display', 'block');
        $('label[for="inputEmail"]').html('Email:').css('display', 'block');
        $('label[for="inputTel"]').html('Телефон*:').css('display', 'block');
        $('label[for="inputComment2"]').html('Комментарий*:').css('display', 'block');
        $('label[for="inputName2"]').html('Имя*:').css('display', 'block');
        $('label[for="inputEmail2"]').html('Email:').css('display', 'block');
        $('label[for="inputTel2"]').html('Телефон*:').css('display', 'block');
    }
})();