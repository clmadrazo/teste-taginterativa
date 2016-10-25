// Application Router
// =============

// Includes file dependencies
define([ "jquery","backbone"
        , "views/list/listView", "views/register/registerView"
    ],
    function( $, Backbone
        , listView, registerView) {

        var AppRouter = Backbone.Router.extend({

            // Backbone.js Routes
            routes: {
                // When there is no hash bang on the url, the default method is called
                '':  'list',
                "listado" : "list",
                "cadastro": "register",
            },
            list : function(){
                if (this.currentListView) this.currentListView.close();
                var list = new listView();
                this.currentListView = list;
                list.render();
            },
            register : function(){
                if (this.currentRegisterView) this.currentRegisterView.close();
                var register = new registerView();
                this.currentRegisterView = register;
                register.render();

            },
        });

        return AppRouter;


    });