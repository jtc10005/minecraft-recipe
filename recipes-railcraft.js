// Railcraft Recipes
const RAILCRAFT_RECIPES = {
    // Rails
    "high_speed_track": { 
        name: "High-Speed Track", 
        ingredients: [
            { item: "steel_ingot", count: 1 }, 
            { item: "blaze_powder", count: 1 }, 
            { item: "gold_ingot", count: 1 }
        ], 
        category: "railcraft",
        yield: 8,
        note: "Minecarts travel faster" 
    },
    "reinforced_track": { 
        name: "Reinforced Track", 
        ingredients: [
            { item: "steel_ingot", count: 1 }, 
            { item: "obsidian", count: 1 }, 
            { item: "rails", count: 1 }
        ], 
        category: "railcraft",
        yield: 8,
        note: "Explosion resistant" 
    },
    "electric_track": { 
        name: "Electric Track", 
        ingredients: [
            { item: "steel_ingot", count: 1 }, 
            { item: "copper_ingot", count: 1 }, 
            { item: "redstone", count: 1 }
        ], 
        category: "railcraft",
        yield: 8,
        note: "Powers electric locomotives" 
    },
    
    // Carts
    "steel_minecart": { 
        name: "Steel Minecart", 
        ingredients: [{ item: "steel_ingot", count: 5 }], 
        category: "railcraft",
        note: "More durable than iron" 
    },
    "chest_minecart_railcraft": { 
        name: "Chest Cart (Railcraft)", 
        ingredients: [
            { item: "steel_minecart", count: 1 }, 
            { item: "chest", count: 1 }
        ], 
        category: "railcraft" 
    },
    "tank_minecart": { 
        name: "Tank Cart", 
        ingredients: [
            { item: "steel_minecart", count: 1 }, 
            { item: "iron_tank", count: 1 }
        ], 
        category: "railcraft",
        note: "Transports fluids" 
    },
    "locomotive": { 
        name: "Steam Locomotive", 
        ingredients: [
            { item: "steel_ingot", count: 14 }, 
            { item: "gold_ingot", count: 4 }, 
            { item: "piston", count: 1 }
        ], 
        category: "railcraft",
        note: "Pulls trains with steam power" 
    },
    
    // Devices
    "rolling_machine": { 
        name: "Rolling Machine", 
        ingredients: [
            { item: "iron_ingot", count: 4 }, 
            { item: "piston", count: 1 }, 
            { item: "crafting_table", count: 1 }
        ], 
        category: "railcraft",
        note: "Crafts rails and railcraft items" 
    },
    "iron_tank": { 
        name: "Iron Tank Wall", 
        ingredients: [{ item: "iron_ingot", count: 4 }], 
        category: "railcraft",
        note: "Multiblock fluid storage" 
    },
    "iron_tank_valve": { 
        name: "Iron Tank Valve", 
        ingredients: [
            { item: "iron_tank", count: 1 }, 
            { item: "iron_ingot", count: 1 }
        ], 
        category: "railcraft",
        note: "Input/output for tank" 
    },
    "iron_tank_gauge": { 
        name: "Iron Tank Gauge", 
        ingredients: [
            { item: "iron_tank", count: 1 }, 
            { item: "glass", count: 1 }
        ], 
        category: "railcraft",
        note: "Shows tank fluid level" 
    },
    "blast_furnace_brick": { 
        name: "Blast Furnace Brick", 
        ingredients: [
            { item: "brick", count: 4 }, 
            { item: "soul_sand", count: 4 }, 
            { item: "nether_brick", count: 1 }
        ], 
        category: "railcraft",
        yield: 4,
        note: "Multiblock steel production" 
    },
    "soul_sand": { 
        name: "Soul Sand", 
        ingredients: null, 
        category: "raw",
        note: "Found in Nether" 
    },
    "nether_brick": { 
        name: "Nether Brick", 
        ingredients: [{ item: "netherrack", count: 1 }, { item: "coal", count: 0.125 }], 
        category: "smelted" 
    },
    "netherrack": { 
        name: "Netherrack", 
        ingredients: null, 
        category: "raw",
        note: "Found in Nether" 
    },
};
