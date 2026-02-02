// Industrial Craft 2 Recipes
const INDUSTRIALCRAFT_RECIPES = {
    "ic2_machine_block": { 
        name: "IC2 Machine Block", 
        ingredients: [{ item: "iron_plate", count: 8 }], 
        category: "gtnh" 
    },
    "ic2_macerator": { 
        name: "IC2 Macerator", 
        ingredients: [
            { item: "ic2_machine_block", count: 1 }, 
            { item: "electronic_circuit", count: 2 }, 
            { item: "flint", count: 3 },
            { item: "cobblestone", count: 2 }
        ], 
        category: "gtnh" 
    },
    "ic2_electric_furnace": { 
        name: "IC2 Electric Furnace", 
        ingredients: [
            { item: "ic2_machine_block", count: 1 }, 
            { item: "redstone", count: 1 }
        ], 
        category: "gtnh" 
    },
    "ic2_extractor": { 
        name: "IC2 Extractor", 
        ingredients: [
            { item: "ic2_machine_block", count: 1 }, 
            { item: "electronic_circuit", count: 1 }, 
            { item: "crafting_table", count: 1 }
        ], 
        category: "gtnh" 
    },
    "ic2_compressor": { 
        name: "IC2 Compressor", 
        ingredients: [
            { item: "ic2_machine_block", count: 1 }, 
            { item: "electronic_circuit", count: 6 }, 
            { item: "stone", count: 1 }
        ], 
        category: "gtnh" 
    },
    "solar_panel": { 
        name: "Solar Panel", 
        ingredients: [
            { item: "glass", count: 3 }, 
            { item: "electronic_circuit", count: 2 }, 
            { item: "coal", count: 3 },
            { item: "copper_cable", count: 1 }
        ], 
        category: "gtnh" 
    },
    "battery": { 
        name: "RE Battery", 
        ingredients: [
            { item: "copper_cable", count: 1 }, 
            { item: "tin_ingot", count: 4 }, 
            { item: "redstone", count: 2 }
        ], 
        category: "gtnh" 
    },
    "bat_box": { 
        name: "BatBox (32 EU/t)", 
        ingredients: [
            { item: "ic2_machine_block", count: 1 }, 
            { item: "electronic_circuit", count: 1 }, 
            { item: "battery", count: 3 }
        ], 
        category: "gtnh" 
    },
};
