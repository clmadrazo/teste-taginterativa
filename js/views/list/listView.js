define([
    'doT'
            , 'views/baseView'
            , 'text!templatesFolder/list/listCow.html'
            , 'text!templatesFolder/list/cows.html'
            , 'collections/cow/cowCollection'
]
        , function (doT, BaseView, ListCowTemplate,CowsTemplate,CowCollection) {

            var ListView = BaseView.extend({
                el: '#main-wrapper',
                template: doT.template(ListCowTemplate),
                cows: doT.template(CowsTemplate),
                collection: new CowCollection,
                events: {
                },
                initialize: function (options) {
                    BaseView.prototype.initialize.call(this, options); // calling super.initializeMethod()
                    this.collection.getCowList();
                },
                render: function () {

                    BaseView.prototype.render.call(this);
                    this.$el.empty().append(this.template({}));
                    var that = this;

                    this.listenToOnce(that.collection,'reset',that.renderCows);
                },
                bestCow: function(){

                    var cows = that.collection.models,
                        cowsAux = new Array();
                    for(var i = 0; i < cows.length; i++) {
                        var obj = new Object();
                        obj.id = cows[i].attributes.id;
                        obj.age = cows[i].attributes.age;
                        obj.price = cows[i].attributes.price;
                        obj.weight = cows[i].attributes.weight;
                        cowsAux.push(obj);
                    }
                    that.searchBestCow(cowsAux);
                },
                searchBestCow: function(cows){
                    var averagePrice = that.averagePrice(cows),
                        averageWeight = that.averageWeight(cows),
                        averageAge = that.averageAge(cows),
                        list = new Array();

                    for(var i = 0; i < cows.length; i++) {
                        var cowScore = new Object();
                        cowScore.id = cows[i].id;
                        cowScore.age = cows[i].age;
                        cowScore.price = cows[i].price;
                        cowScore.weight = cows[i].weight;
                        cowScore.score = 0;
                        if(cows[i].price <= averagePrice)
                            cowScore.score++;
                        if(cows[i].age <= averageAge)
                            cowScore.score++;
                        if(cows[i].weight <= averageWeight)
                            cowScore.score++;
                        list.push(cowScore);
                    }
                    var scoreBase = that.maxScore(list);
                    if(scoreBase) {
                        list = list.filter(function (el) {
                            return (el.score == scoreBase);
                        });

                        if(list.length == 1) {
                            that.champion_message(list[0].id);
                        }
                        else {
                            that.searchBestCow(list);
                        }
                    }
                    else {
                        that.champion_message(list[0].id);
                    }
                },
                champion_message: function(id){
                    PNotify.removeAll();
                    new PNotify({
                        text: "A melhor vaca tem id: "+id,
                        hide: true,
                        buttons: {
                            closer: true,
                            sticker: true
                        },
                        icon: 'fa fa-check'
                    });
                    $('table tbody tr.cow_'+id).css('background','#eee');
                },
                maxScore: function(cows){
                    var scores = new Array();
                    for(var i = 0; i < cows.length; i++) {
                        scores.push(cows[i].score);
                    }
                    if(cows.length == 2 && cows[0].score == cows[1].score) {
                        return false;
                    }
                    else
                        return Math.max.apply(null, scores);
                },
                averagePrice: function(cows){
                    var sum = 0;
                    for(var i = 0; i < cows.length; i++) {
                        sum += cows[i].price;
                    }
                    return sum/cows.length;
                },
                averageWeight: function(cows){
                    var sum = 0;
                    for(var i = 0; i < cows.length; i++) {
                        sum += cows[i].weight;
                    }
                    return sum/cows.length;
                },
                averageAge: function(cows){
                    var sum = 0;
                    for(var i = 0; i < cows.length; i++) {
                        sum += cows[i].age;
                    }
                    return sum/cows.length;
                },
                renderCows: function(){
                    if(that.collection.models.length > 0) {
                        $('table tbody').empty().append(that.cows({'cows': that.collection.models}));
                        that.bestCow();
                    }
                    else {
                        $('table tbody').empty().append('<tr> <td></td> <td>Não existem vaquinhas cadastradas</td> </tr>');
                    }
                },
                close: function () {
                    this.$el.empty().off();
                }

            });

            return ListView;

        });
