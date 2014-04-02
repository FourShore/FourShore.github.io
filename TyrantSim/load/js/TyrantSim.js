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

    stateStore = new Memory({data: Cardlist});

    var filteringSelect = new FilteringSelect({
        id: "input1",
        name: "card",
        value: "Aegis",
        store: stateStore,
        searchAttr: "CardName"
    }, "input1");
 
    var oldText = {};

    // This returned object becomes the defined value of this module
    return {
        setText: function (id, text) {
            var node = dom.byId(id);
            oldText[id] = node.innerHTML;
            node.innerHTML = text;
        },
 
        restoreText: function (id) {
            var node = dom.byId(id);
            node.innerHTML = oldText[id];
            delete oldText[id];
        }
    };
});


require([
    , "dojo/domReady!"
], function(){
    

    var filteringSelect = new FilteringSelect({
        id: "stateSelect",
        name: "state",
        value: "CA",
        store: stateStore,
        searchAttr: "name"
    }, "stateSelect");
});