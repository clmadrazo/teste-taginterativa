define(['collections/baseCollection', 'models/baseModel'], function(BaseCollection, BaseModel) {
    var CowCollection = BaseCollection.extend({
        title:'Listado de vaquinhas',
        model: BaseModel,
        url : 'http://recrutamento.taginterativa.com.br/api/v1/cows',
        getCowList: function(){
            new PNotify({
                text: "Analizando qual é a melhor vaca...",
                type: 'info',
                icon: 'fa fa-spinner fa-pulse fa-fw',
                hide: false,
                buttons: {
                    closer: false,
                    sticker: false
                }
            });
            return this.fetch({
                type: 'GET',
                reset: true,

                complete: function (response) {
                    if (response.status == 401) {
                        router.navigate('logout/401', {trigger:true});
                        return;
                    }
                }
            });
        },

        parse : function(response) {
            return response;
        }

    });
    return CowCollection;
});