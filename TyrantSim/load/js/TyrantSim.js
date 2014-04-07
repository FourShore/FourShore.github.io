/** DOJO **/

define([
    // The dojo/dom module is required by this module, so it goes
    // in this list of dependencies.
    'dojo/dom', "dojo/on", "dojo/store/Memory", "dijit/form/FilteringSelect"
], function(dom, on, Memory, FilteringSelect){
    // Once all modules in the dependency list have loaded, this
    // function is called to define the demo/myModule module.
    //
    // The dojo/dom module is passed as the first argument to this
    // function; additional modules in the dependency list would be
    // passed in as subsequent arguments.

    //stateStore = new Memory({data: Cardlist});
    p1Cards = [];
    p2Cards = [];

    // filteringSelect = new FilteringSelect({
    //     id: "input1",
    //     name: "card",
    //     value: "Aegis",
    //     store: stateStore,
    //     searchAttr: "CardName"
    // }, "input1");
 
    //var oldText = {};

    // This returned object becomes the defined value of this module
    // return {
    //     setText: function (id, text) {
    //         var node = dom.byId(id);
    //         oldText[id] = node.innerHTML;
    //         node.innerHTML = text;
    //     },
 
    //     restoreText: function (id) {
    //         var node = dom.byId(id);
    //         node.innerHTML = oldText[id];
    //         delete oldText[id];
    //     }
    // };

    on(dom.byId("btn-sim"), "click", function(){
        p1Cards = getPlayer1Cards();
        p2Cards = getPlayer2Cards();

    });

    function getPlayer1Cards() {
        var toReturnArray = [];
        for (var i = 0; i <= 10; i++) {
            if (dom.byId("input" + i).value != "") toReturnArray.push({
                name: dom.byId("input" + i).value,
                lvl: "Lv." + dom.byId("sout" + i).innerText
            });
        };
        return toReturnArray;
    };

    function getPlayer2Cards() {
        var toReturnArray = [];
        for (var i = 20; i <= 30; i++) {
            if (dom.byId("input" + i).value != "") toReturnArray.push({
                name: dom.byId("input" + i).value,
                lvl: "Lv." + dom.byId("sout" + i).innerText
            });
        };
        return toReturnArray;
    };
});

/** JQuery **/

//Autocomplete for card input
$("#input0").autocomplete({source:CardNames, change: sliderChange("slider0")});
$("#input1").autocomplete({source:CardNames});
$("#input2").autocomplete({source:CardNames});
$("#input3").autocomplete({source:CardNames});
$("#input4").autocomplete({source:CardNames});
$("#input5").autocomplete({source:CardNames});
$("#input6").autocomplete({source:CardNames});
$("#input7").autocomplete({source:CardNames});
$("#input8").autocomplete({source:CardNames});
$("#input9").autocomplete({source:CardNames});
$("#input10").autocomplete({source:CardNames});
$("#input20").autocomplete({source:CardNames});
$("#input21").autocomplete({source:CardNames});
$("#input22").autocomplete({source:CardNames});
$("#input23").autocomplete({source:CardNames});
$("#input24").autocomplete({source:CardNames});
$("#input25").autocomplete({source:CardNames});
$("#input26").autocomplete({source:CardNames});
$("#input27").autocomplete({source:CardNames});
$("#input28").autocomplete({source:CardNames});
$("#input29").autocomplete({source:CardNames});
$("#input30").autocomplete({source:CardNames});

function sliderChange (id) {
    x = document.getElementById(id);
    x.setAttribute("max",4);
    x.setAttribute("value",4);
}

//$("#btn-sim").click()

//Updates level number from slider
function updateSout(id, val) {
    x = document.getElementById(id);
    x.innerText = val;
    //this.setAttribute("max",4);
};

