// EnderIO Recipes
const ENDERIO_RECIPES = {
    // Basic materials
    "silicon_item": { 
        name: "Silicon (EnderIO)", 
        ingredients: [{ item: "sand", count: 1 }], 
        category: "enderio",
        note: "Smelted in alloy smelter" 
    },
    "conduit_binder": { 
        name: "Conduit Binder", 
        ingredients: [
            { item: "sand", count: 4 }, 
            { item: "gravel", count: 4 }, 
            { item: "clay_ball", count: 1 }
        ], 
        category: "enderio",
        yield: 8 
    },
    "electrical_steel_ingot": { 
        name: "Electrical Steel Ingot", 
        ingredients: [
            { item: "iron_ingot", count: 1 }, 
            { item: "silicon_item", count: 1 }, 
            { item: "coal", count: 1 }
        ], 
        category: "enderio",
        note: "Made in alloy smelter" 
    },
    "energetic_alloy_ingot": { 
        name: "Energetic Alloy Ingot", 
        ingredients: [
            { item: "gold_ingot", count: 1 }, 
            { item: "redstone", count: 1 }, 
            { item: "glowstone_dust", count: 1 }
        ], 
        category: "enderio",
        note: "Made in alloy smelter" 
    },
    "vibrant_alloy_ingot": { 
        name: "Vibrant Alloy Ingot", 
        ingredients: [
            { item: "energetic_alloy_ingot", count: 1 }, 
            { item: "ender_pearl", count: 1 }
        ], 
        category: "enderio",
        note: "Made in alloy smelter" 
    },
    "dark_steel_ingot": { 
        name: "Dark Steel Ingot", 
        ingredients: [
            { item: "iron_ingot", count: 1 }, 
            { item: "coal", count: 1 }, 
            { item: "obsidian", count: 1 }
        ], 
        category: "enderio",
        note: "Made in alloy smelter" 
    },
    "pulsating_crystal": { 
        name: "Pulsating Crystal", 
        ingredients: [
            { item: "diamond", count: 1 }, 
            { item: "ender_pearl", count: 1 }
        ], 
        category: "enderio",
        note: "Made in alloy smelter" 
    },
    
    // Machines
    "simple_machine_chassis": { 
        name: "Simple Machine Chassis", 
        ingredients: [
            { item: "iron_ingot", count: 4 }, 
            { item: "electrical_steel_ingot", count: 4 }
        ], 
        category: "enderio" 
    },
    "basic_capacitor": { 
        name: "Basic Capacitor", 
        ingredients: [
            { item: "gold_ingot", count: 1 }, 
            { item: "redstone", count: 2 }
        ], 
        category: "enderio" 
    },
    "alloy_smelter": { 
        name: "Alloy Smelter", 
        ingredients: [
            { item: "simple_machine_chassis", count: 1 }, 
            { item: "basic_capacitor", count: 1 }, 
            { item: "furnace", count: 1 }
        ], 
        category: "enderio" 
    },
    "stirling_generator": { 
        name: "Stirling Generator", 
        ingredients: [
            { item: "simple_machine_chassis", count: 1 }, 
            { item: "basic_capacitor", count: 1 }, 
            { item: "furnace", count: 1 },
            { item: "piston", count: 1 }
        ], 
        category: "enderio" 
    },
    "sag_mill": { 
        name: "SAG Mill", 
        ingredients: [
            { item: "simple_machine_chassis", count: 1 }, 
            { item: "basic_capacitor", count: 1 }, 
            { item: "flint", count: 3 },
            { item: "piston", count: 1 }
        ], 
        category: "enderio" 
    },
    
    // Conduits
    "energy_conduit": { 
        name: "Energy Conduit", 
        ingredients: [
            { item: "conduit_binder", count: 3 }, 
            { item: "energetic_alloy_ingot", count: 1 }
        ], 
        category: "enderio",
        yield: 8 
    },
    "item_conduit": { 
        name: "Item Conduit", 
        ingredients: [
            { item: "conduit_binder", count: 3 }, 
            { item: "pulsating_crystal", count: 1 }
        ], 
        category: "enderio",
        yield: 8 
    },
    "fluid_conduit": { 
        name: "Fluid Conduit", 
        ingredients: [
            { item: "conduit_binder", count: 3 }, 
            { item: "glass", count: 5 }
        ], 
        category: "enderio",
        yield: 8 
    },
};
