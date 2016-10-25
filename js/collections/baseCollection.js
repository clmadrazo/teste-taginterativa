define(['backbone'], function(Backbone) {
    var BaseCollection = Backbone.Collection.extend({
        note:null,
        loading:false,
        getCollection:function(){
            return this.fetch();
        },
        sync: function(method, collection, options){
            options = options || {};
            options.beforeSend = function(xhr) {
                xhr.setRequestHeader('access-token', 'd43fc76c30');
                xhr.setRequestHeader('Content-Type', 'application/json');
            };
            return Backbone.sync.call(this,method, collection, options);
        }

    });
    return BaseCollection;
});