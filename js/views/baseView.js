define(['backbone', 'doT'], function (Backbone, doT) {
    var BaseView = Backbone.View.extend({
        notification_wait: function () {
            var notice = new PNotify({
                text: "Por favor aguarde...",
                type: 'info',
                icon: 'fa fa-spinner fa-pulse fa-fw',
                hide: false,
                buttons: {
                    closer: false,
                    sticker: false
                }
            });
            $('body').addClass('window-disable');
            return notice;
        },
        notification_done: function (notice,type,text) {
            var message = '';
            if(text) {
                message = text;
            }
            var options = {
                type: type,
                text: message,
                hide: true,
                buttons: {
                    closer: true,
                    sticker: true
                },
                icon: 'fa fa-check'
            };
            $('body').removeClass('window-disable');
            notice.update(options);
        },
        initialize: function (options) {
            //only to build the method afterRender

            _.bindAll(this, 'beforeRender', 'render', 'afterRender');
            obj = this;
            _this = this;
            that = this;
            //only to build the method afterRender
            this.render = _.wrap(this.render, function (render) {
                this.beforeRender();
                render(arguments);
                //////////////////////////
                this.afterRender();
                ////////////////////////////////////////////////
                return this;
            });
        },
        beforeRender: function () {
        },
        afterRender: function(){

        },
        fetch: function (arg) {
            options = arg;
            options.beforeSend = function (xhr) {
                xhr.setRequestHeader('access-token', 'd43fc76c30');
                xhr.setRequestHeader('Content-Type', 'application/json');
            };

            //Call Backbone's fetch
            return Backbone.Model.prototype.fetch.call(this, options);
        }
    });
    return BaseView;
});
