define(['backbone', 'models/baseModel'], function (Backbone, BaseModel) {
    var CowModel = BaseModel.extend({
        url: 'http://recrutamento.taginterativa.com.br/api/v1/cows',
        parse: function (response) {
            return response.result;
        }
    });

    return CowModel;
});