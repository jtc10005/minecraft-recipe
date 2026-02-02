// Forestry Recipes
const FORESTRY_RECIPES = {
    // Beekeeping
    "apiary": { 
        name: "Apiary", 
        ingredients: [
            { item: "oak_planks", count: 7 }, 
            { item: "honeycomb", count: 1 }
        ], 
        category: "forestry",
        note: "Houses bees to produce honeycombs" 
    },
    "honeycomb": { 
        name: "Honeycomb", 
        ingredients: null, 
        category: "raw",
        note: "Produced by bees in apiary" 
    },
    "honey_drop": { 
        name: "Honey Drop", 
        ingredients: [{ item: "honeycomb", count: 1 }], 
        category: "forestry",
        note: "Centrifuge honeycomb" 
    },
    "bee_house": { 
        name: "Bee House", 
        ingredients: [
            { item: "oak_planks", count: 6 }, 
            { item: "honeycomb", count: 3 }
        ], 
        category: "forestry",
        note: "Basic housing for bees" 
    },
    "scoop": { 
        name: "Scoop", 
        ingredients: [
            { item: "wool", count: 1 }, 
            { item: "stick", count: 2 }
        ], 
        category: "forestry",
        note: "Catches bees from hives" 
    },
    "centrifuge": { 
        name: "Centrifuge", 
        ingredients: [
            { item: "copper_ingot", count: 5 }, 
            { item: "glass", count: 2 }
        ], 
        category: "forestry",
        note: "Processes honeycombs and pollen" 
    },
    
    // Farming
    "farm_block": { 
        name: "Farm Block", 
        ingredients: [
            { item: "oak_planks", count: 5 }, 
            { item: "copper_ingot", count: 3 }, 
            { item: "chest", count: 1 }
        ], 
        category: "forestry",
        note: "Automated farming multiblock" 
    },
    "farm_gearbox": { 
        name: "Farm Gearbox", 
        ingredients: [
            { item: "bronze_ingot", count: 4 }, 
            { item: "tin_ingot", count: 4 }
        ], 
        category: "forestry" 
    },
    "farm_hatch": { 
        name: "Farm Hatch", 
        ingredients: [
            { item: "oak_planks", count: 5 }, 
            { item: "bronze_ingot", count: 3 }, 
            { item: "chest", count: 1 }
        ], 
        category: "forestry" 
    },
    "farm_valve": { 
        name: "Farm Valve", 
        ingredients: [
            { item: "oak_planks", count: 5 }, 
            { item: "bronze_ingot", count: 3 }, 
            { item: "glass", count: 1 }
        ], 
        category: "forestry" 
    },
    
    // Processing
    "carpenter": { 
        name: "Carpenter", 
        ingredients: [
            { item: "bronze_ingot", count: 5 }, 
            { item: "glass", count: 2 }
        ], 
        category: "forestry",
        note: "Advanced crafting with fluids" 
    },
    "fermenter": { 
        name: "Fermenter", 
        ingredients: [
            { item: "bronze_ingot", count: 5 }, 
            { item: "glass", count: 2 }
        ], 
        category: "forestry",
        note: "Converts biomass to ethanol" 
    },
    "still": { 
        name: "Still", 
        ingredients: [
            { item: "bronze_ingot", count: 5 }, 
            { item: "glass", count: 2 }
        ], 
        category: "forestry",
        note: "Refines biomass fuel" 
    },
    "sturdy_casing": { 
        name: "Sturdy Casing", 
        ingredients: [{ item: "bronze_ingot", count: 8 }], 
        category: "forestry" 
    },
};
