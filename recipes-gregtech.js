// GregTech Recipes
const GREGTECH_RECIPES = {
    // GregTech modifications to vanilla recipes (makes them harder)
    "furnace": { 
        name: "Furnace", 
        ingredients: [
            { item: "cobblestone", count: 6 }, 
            { item: "flint", count: 3 }
        ], 
        category: "basic",
        note: "GregTech modifies vanilla recipe" 
    },
    "chest": { 
        name: "Chest", 
        ingredients: [
            { item: "oak_planks", count: 8 }
        ], 
        category: "storage",
        note: "GregTech modifies vanilla recipe (same ingredients, different arrangement)" 
    },
    "torch": { 
        name: "Torch", 
        ingredients: [
            { item: "stick", count: 1 }, 
            { item: "coal", count: 0.25 }
        ], 
        category: "basic",
        yield: 2,
        note: "GregTech modifies vanilla recipe (less yield)" 
    },
    "wooden_door": { 
        name: "Wooden Door", 
        ingredients: [
            { item: "oak_planks", count: 6 }, 
            { item: "iron_ingot", count: 1 }
        ], 
        category: "basic",
        note: "GregTech modifies vanilla recipe (requires iron)" 
    },
    "piston": { 
        name: "Piston", 
        ingredients: [
            { item: "oak_planks", count: 3 }, 
            { item: "cobblestone", count: 4 },
            { item: "iron_ingot", count: 1 },
            { item: "redstone", count: 1 }
        ], 
        category: "basic",
        note: "GregTech modifies vanilla recipe (requires iron)" 
    },
    "bowl": { 
        name: "Bowl", 
        ingredients: [
            { item: "oak_planks", count: 3 }
        ], 
        category: "basic",
        note: "GregTech modifies vanilla recipe (requires saw)" 
    },
    "bucket": { 
        name: "Bucket", 
        ingredients: [
            { item: "iron_ingot", count: 4 }
        ], 
        category: "basic",
        note: "GregTech modifies vanilla recipe (4 iron instead of 3)" 
    },
    
    // Raw materials
    "copper_ore": { 
        name: "Copper Ore", 
        ingredients: null, 
        category: "raw" 
    },
    "tin_ore": { 
        name: "Tin Ore", 
        ingredients: null, 
        category: "raw" 
    },
    "rubber_wood": { 
        name: "Rubber Wood", 
        ingredients: null, 
        category: "raw" 
    },

    // Basic processing
    "copper_ingot": { 
        name: "Copper Ingot", 
        ingredients: [{ item: "copper_ore", count: 1 }, { item: "coal", count: 0.125 }], 
        category: "gtnh" 
    },
    "tin_ingot": { 
        name: "Tin Ingot", 
        ingredients: [{ item: "tin_ore", count: 1 }, { item: "coal", count: 0.125 }], 
        category: "gtnh" 
    },
    "rubber": { 
        name: "Rubber", 
        ingredients: [{ item: "rubber_wood", count: 0.33 }], 
        category: "gtnh",
        yield: 3 
    },

    // Plates and components
    "iron_plate": { 
        name: "Iron Plate", 
        ingredients: [{ item: "iron_ingot", count: 1 }], 
        category: "gtnh",
        note: "Made with hammer or bending machine" 
    },
    "copper_plate": { 
        name: "Copper Plate", 
        ingredients: [{ item: "copper_ingot", count: 1 }], 
        category: "gtnh" 
    },
    "bronze_ingot": { 
        name: "Bronze Ingot", 
        ingredients: [{ item: "copper_ingot", count: 3 }, { item: "tin_ingot", count: 1 }], 
        category: "gtnh",
        yield: 4 
    },
    "bronze_plate": { 
        name: "Bronze Plate", 
        ingredients: [{ item: "bronze_ingot", count: 1 }], 
        category: "gtnh" 
    },
    "steel_ingot": { 
        name: "Steel Ingot", 
        ingredients: [{ item: "iron_ingot", count: 1 }, { item: "coal", count: 2 }], 
        category: "gtnh",
        note: "Requires blast furnace" 
    },
    "steel_plate": { 
        name: "Steel Plate", 
        ingredients: [{ item: "steel_ingot", count: 1 }], 
        category: "gtnh" 
    },

    // Cables
    "copper_cable": { 
        name: "Copper Cable", 
        ingredients: [{ item: "copper_plate", count: 0.5 }, { item: "rubber", count: 1 }], 
        category: "gtnh",
        yield: 2 
    },
    "gold_cable": { 
        name: "Gold Cable", 
        ingredients: [{ item: "gold_ingot", count: 0.5 }, { item: "rubber", count: 1 }], 
        category: "gtnh",
        yield: 2 
    },

    // Gears and rods
    "iron_rod": { 
        name: "Iron Rod", 
        ingredients: [{ item: "iron_ingot", count: 0.5 }], 
        category: "gtnh",
        yield: 2 
    },
    "iron_gear": { 
        name: "Iron Gear", 
        ingredients: [{ item: "iron_rod", count: 4 }, { item: "iron_plate", count: 4 }], 
        category: "gtnh" 
    },
    "steel_rod": { 
        name: "Steel Rod", 
        ingredients: [{ item: "steel_ingot", count: 0.5 }], 
        category: "gtnh",
        yield: 2 
    },
    "steel_gear": { 
        name: "Steel Gear", 
        ingredients: [{ item: "steel_rod", count: 4 }, { item: "steel_plate", count: 4 }], 
        category: "gtnh" 
    },

    // Circuits
    "resistor": { 
        name: "Resistor", 
        ingredients: [{ item: "coal", count: 1 }, { item: "copper_cable", count: 0.5 }, { item: "paper", count: 1 }], 
        category: "gtnh",
        yield: 2 
    },
    "vacuum_tube": { 
        name: "Vacuum Tube", 
        ingredients: [{ item: "glass", count: 1 }, { item: "copper_cable", count: 1 }, { item: "steel_rod", count: 1 }], 
        category: "gtnh" 
    },
    "electronic_circuit": { 
        name: "Electronic Circuit (LV)", 
        ingredients: [
            { item: "copper_cable", count: 4 }, 
            { item: "iron_plate", count: 2 }, 
            { item: "resistor", count: 2 },
            { item: "vacuum_tube", count: 2 }
        ], 
        category: "gtnh" 
    },
    "silicon": { 
        name: "Silicon", 
        ingredients: [{ item: "sand", count: 1 }], 
        category: "gtnh",
        note: "Processed in blast furnace" 
    },
    "silicon_plate": { 
        name: "Silicon Plate", 
        ingredients: [{ item: "silicon", count: 1 }], 
        category: "gtnh" 
    },
    "integrated_circuit": { 
        name: "Integrated Circuit (MV)", 
        ingredients: [
            { item: "electronic_circuit", count: 1 }, 
            { item: "silicon_plate", count: 2 }, 
            { item: "copper_cable", count: 2 }
        ], 
        category: "gtnh" 
    },

    // Machines - Steam Age
    "steam_furnace": { 
        name: "Steam Furnace (Bronze)", 
        ingredients: [{ item: "bronze_plate", count: 8 }], 
        category: "gtnh" 
    },
    "steam_macerator": { 
        name: "Steam Macerator", 
        ingredients: [{ item: "bronze_plate", count: 5 }, { item: "flint", count: 4 }], 
        category: "gtnh" 
    },

    // Machines - LV
    "lv_machine_hull": { 
        name: "LV Machine Hull", 
        ingredients: [{ item: "steel_plate", count: 8 }, { item: "copper_cable", count: 2 }], 
        category: "gtnh" 
    },
    "electric_motor_lv": { 
        name: "LV Electric Motor", 
        ingredients: [
            { item: "copper_cable", count: 2 }, 
            { item: "iron_rod", count: 2 }, 
            { item: "iron_ingot", count: 1 }
        ], 
        category: "gtnh" 
    },
    "lv_electric_furnace": { 
        name: "LV Electric Furnace", 
        ingredients: [
            { item: "lv_machine_hull", count: 1 }, 
            { item: "electronic_circuit", count: 2 }, 
            { item: "copper_cable", count: 2 },
            { item: "furnace", count: 1 }
        ], 
        category: "gtnh" 
    },
    "lv_macerator": { 
        name: "LV Macerator", 
        ingredients: [
            { item: "lv_machine_hull", count: 1 }, 
            { item: "electronic_circuit", count: 2 }, 
            { item: "electric_motor_lv", count: 2 },
            { item: "flint", count: 4 }
        ], 
        category: "gtnh" 
    },
    "electric_blast_furnace": { 
        name: "Electric Blast Furnace", 
        ingredients: [
            { item: "lv_machine_hull", count: 1 }, 
            { item: "electronic_circuit", count: 3 }, 
            { item: "copper_cable", count: 3 },
            { item: "electric_motor_lv", count: 1 },
            { item: "furnace", count: 3 }
        ], 
        category: "gtnh",
        note: "Requires 34 heat-proof machine casings" 
    },
    "chemical_reactor": { 
        name: "Chemical Reactor (LV)", 
        ingredients: [
            { item: "lv_machine_hull", count: 1 }, 
            { item: "electronic_circuit", count: 2 }, 
            { item: "electric_motor_lv", count: 2 },
            { item: "glass", count: 3 }
        ], 
        category: "gtnh" 
    },

    // Machines - MV
    "mv_machine_hull": { 
        name: "MV Machine Hull", 
        ingredients: [{ item: "steel_plate", count: 8 }, { item: "gold_cable", count: 2 }], 
        category: "gtnh" 
    },
};
