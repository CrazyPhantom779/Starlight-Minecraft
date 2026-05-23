
ServerEvents.recipes(event => {
    // You can replace `event` with any name you like, as
    // long as you change it inside the callback too!

    event.forEachRecipe({ type: "avaritia:shaped_table" }, r => {
        const avarita = JSON.parse(r.json.toString())
        const create = {
            "type": "create:mechanical_crafting",
            "key": avarita.key,
            "pattern": avarita.pattern,
            "result": avarita.result,
            "accept_mirrored": false,
            "neoforge:conditions": avarita["neoforge:conditions"]
        }
        event.custom(create)
    })

    event.forEachRecipe({ type: "avaritia:shapeless_table" }, r => {
        const avarita = JSON.parse(r.json.toString())
        const create = {
            "type": "create:mixing",
            "ingredients": r.ingredients,
            "heat_requirement": "superheated",
            "results": [r.result],
        }
        event.custom(create)
    })
    // This part, inside the curly braces, is the callback.
    // You can modify as many recipes as you like in here,
    // without needing to use ServerEvents.recipes() again.

    console.log('Hello! The recipe event has fired!')
})