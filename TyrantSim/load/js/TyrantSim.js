/** DOJO **/

define([
    // The dojo/dom module is required by this module, so it goes
    // in this list of dependencies.
    'dojo/dom',"dojo/store/Memory", "dijit/form/FilteringSelect"
], function(dom, Memory, FilteringSelect){
    // Once all modules in the dependency list have loaded, this
    // function is called to define the demo/myModule module.
    //
    // The dojo/dom module is passed as the first argument to this
    // function; additional modules in the dependency list would be
    // passed in as subsequent arguments.

    //stateStore = new Memory({data: Cardlist});

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
});

/** JQuery **/

//Autocomplete for card input
$("#input0").autocomplete({source:CardNames});
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


//Updates level number from slider
function updateSout(id, val) {
    x = document.getElementById(id);
    x.innerText = val;
};