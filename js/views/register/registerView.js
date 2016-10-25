define(['views/baseView', 'doT', 'text!templatesFolder/register/register.html','models/cow/cowModel','jquery.price_format','jquery.validate'], function (BaseView, doT, RegisterTemplate,CowModel) {
    var RegisterView = BaseView.extend({
        el: '#main-wrapper',
        model : new CowModel(),
        template: doT.template(RegisterTemplate),
        events: {
            "click .btn-submit": "register"
        },
        initialize: function (options) {
            BaseView.prototype.initialize.call(this, options); // calling super.initializeMethod()
        },
        register: function(e){
            e.preventDefault();

            if(!$(e.currentTarget).hasClass('disabled')){
                var dataObj = new Object(),
                    that = this;
                    notice = this.notification_wait();
                dataObj.weight = $('#weight').val();
                dataObj.age = $('#age').val();
                dataObj.price = $('#price').val();
                var data = JSON.stringify(dataObj);
                this.model.fetch({
                    type: 'POST',
                    data: data,
                    complete: function (response) {
                        if (response.status == 200 || response.status == 201) {
                            that.notification_done(notice, "success","Sua vaquinha foi cadastrada com sucesso.");
                            $('form#cow')[0].reset();
                        }
                        else {
                            that.notification_done(notice, "error","Error API - "+response.status);
                        }
                    }
                });

            }

        },
        render: function () {

            BaseView.prototype.render.call(this);
            var that = this;
            this.$el.empty().append(this.template({}));
            $('input.price').priceFormat({
                prefix: '',
                thousandsSeparator: ''
            });
            $('#cow').bind('change keyup', function() {
                if($(this).validate({
                        rules: {
                            price: {
                                required: true
                            },
                            weight: {
                                required: true
                            },
                            age: {
                                required: true,
                                max: 20
                            }
                        },
                        messages: {
                            price: "Informe o preço da vaca",
                            weight: "Informe o peso da vaca",
                            age: "Informe a idade da vaca lembrando que não pode ser maior de 20 anos."
                        }
                    }).checkForm()) {

                    $('.btn-submit').removeClass('disabled');

                } else {

                    $('.btn-submit').addClass('disabled');

                }
            });
        },
        close: function () {
            this.$el.empty().off();
        }
    });

    return RegisterView;
});
