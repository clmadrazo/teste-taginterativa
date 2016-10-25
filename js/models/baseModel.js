define(['backbone'], function(Backbone) {
	var BaseModel = Backbone.Model.extend({
        note:null,
        sync: function(method, collection, options){
            options = options || {};
            options.beforeSend = function(xhr) {
                xhr.setRequestHeader('access-token', 'd43fc76c30');
                xhr.setRequestHeader('Content-Type', 'application/json');

            };
            return Backbone.sync.call(this,method, collection, options);
        },
        success:function(model,response){
            alert(response);
        }
	});
	return BaseModel;
});