// Extra Utilities Recipes
const EXTRAUTILITIES_RECIPES = {
    // Nodes
    "transfer_node_items": { 
        name: "Transfer Node (Items)", 
        ingredients: [
            { item: "stone", count: 6 }, 
            { item: "redstone", count: 2 }, 
            { item: "piston", count: 1 }
        ], 
        category: "extrautilities",
        note: "Extracts items from inventories" 
    },
    "transfer_node_liquids": { 
        name: "Transfer Node (Liquids)", 
        ingredients: [
            { item: "stone", count: 6 }, 
            { item: "bucket", count: 1 }, 
            { item: "redstone", count: 2 }
        ], 
        category: "extrautilities",
        note: "Extracts fluids from tanks" 
    },
    "transfer_pipe": { 
        name: "Transfer Pipe", 
        ingredients: [{ item: "stone", count: 6 }], 
        category: "extrautilities",
        yield: 16,
        note: "Connects transfer nodes" 
    },
    "retrieval_node_items": { 
        name: "Retrieval Node (Items)", 
        ingredients: [
            { item: "transfer_node_items", count: 1 }, 
            { item: "ender_pearl", count: 1 }
        ], 
        category: "extrautilities",
        note: "Pulls items into inventories" 
    },
    "world_interaction_upgrade": { 
        name: "World Interaction Upgrade", 
        ingredients: [
            { item: "redstone", count: 4 }, 
            { item: "lapis_lazuli", count: 4 }, 
            { item: "diamond_pickaxe", count: 1 }
        ], 
        category: "extrautilities",
        note: "Allows nodes to mine/place blocks" 
    },
    "speed_upgrade": { 
        name: "Speed Upgrade", 
        ingredients: [
            { item: "redstone", count: 4 }, 
            { item: "lapis_lazuli", count: 4 }, 
            { item: "sugar_cane", count: 1 }
        ], 
        category: "extrautilities",
        note: "Increases node transfer speed" 
    },
    
    // Generators
    "survivalist_generator": { 
        name: "Survivalist Generator", 
        ingredients: [
            { item: "cobblestone", count: 5 }, 
            { item: "redstone", count: 2 }, 
            { item: "furnace", count: 1 }
        ], 
        category: "extrautilities",
        note: "Burns items for RF power" 
    },
    "furnace_generator": { 
        name: "Furnace Generator", 
        ingredients: [
            { item: "iron_ingot", count: 5 }, 
            { item: "redstone", count: 2 }, 
            { item: "furnace", count: 1 }
        ], 
        category: "extrautilities",
        note: "Burns furnace fuel for RF" 
    },
    "lava_generator": { 
        name: "Lava Generator", 
        ingredients: [
            { item: "iron_ingot", count: 5 }, 
            { item: "redstone", count: 2 }, 
            { item: "bucket", count: 1 }
        ], 
        category: "extrautilities",
        note: "Burns lava for RF power" 
    },
    "ender_generator": { 
        name: "Ender Generator", 
        ingredients: [
            { item: "iron_ingot", count: 5 }, 
            { item: "redstone", count: 2 }, 
            { item: "ender_pearl", count: 1 }
        ], 
        category: "extrautilities",
        note: "Burns ender pearls for RF" 
    },
    
    // Utilities
    "unstable_ingot": { 
        name: "Unstable Ingot", 
        ingredients: [
            { item: "iron_ingot", count: 1 }, 
            { item: "diamond", count: 1 }
        ], 
        category: "extrautilities",
        note: "Explodes if not used quickly" 
    },
    "division_sigil": { 
        name: "Division Sigil", 
        ingredients: null, 
        category: "raw",
        note: "Rare drop from wither, used to craft unstable ingots safely" 
    },
    "ender_quarry": { 
        name: "Ender Quarry", 
        ingredients: [
            { item: "iron_ingot", count: 4 }, 
            { item: "diamond_pickaxe", count: 1 }, 
            { item: "ender_pearl", count: 2 },
            { item: "book", count: 1 }
        ], 
        category: "extrautilities",
        note: "Mines entire chunks silently" 
    },
    "filing_cabinet": { 
        name: "Filing Cabinet", 
        ingredients: [
            { item: "oak_planks", count: 7 }, 
            { item: "chest", count: 1 }, 
            { item: "iron_ingot", count: 1 }
        ], 
        category: "extrautilities",
        note: "Compact item storage" 
    },
};
