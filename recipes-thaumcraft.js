// Thaumcraft Recipes
const THAUMCRAFT_RECIPES = {
    // Basic materials
    "thaumonomicon": { 
        name: "Thaumonomicon", 
        ingredients: [{ item: "book", count: 1 }, { item: "salis_mundus", count: 1 }], 
        category: "thaumcraft",
        note: "Research and knowledge book" 
    },
    "salis_mundus": { 
        name: "Salis Mundus", 
        ingredients: [
            { item: "redstone", count: 1 }, 
            { item: "flint", count: 1 }, 
            { item: "ender_pearl", count: 1 }
        ], 
        category: "thaumcraft",
        note: "Magical salt, right-click bookshelf to get Thaumonomicon" 
    },
    "thaumium_ingot": { 
        name: "Thaumium Ingot", 
        ingredients: [{ item: "iron_ingot", count: 1 }, { item: "magic_essence", count: 2 }], 
        category: "thaumcraft",
        note: "Infused in crucible" 
    },
    "magic_essence": { 
        name: "Magic Essence", 
        ingredients: null, 
        category: "raw",
        note: "Obtained from breaking down items in crucible" 
    },
    "vis_crystal": { 
        name: "Vis Crystal", 
        ingredients: null, 
        category: "raw",
        note: "Found naturally in world" 
    },
    
    // Tools
    "iron_wand_core": { 
        name: "Iron Wand Core", 
        ingredients: [{ item: "iron_ingot", count: 1 }, { item: "vis_crystal", count: 1 }], 
        category: "thaumcraft" 
    },
    "greatwood_wand_core": { 
        name: "Greatwood Wand Core", 
        ingredients: [{ item: "greatwood_log", count: 1 }, { item: "vis_crystal", count: 1 }], 
        category: "thaumcraft" 
    },
    "greatwood_log": { 
        name: "Greatwood Log", 
        ingredients: null, 
        category: "raw",
        note: "Magical tree, found in world" 
    },
    "iron_capped_wooden_wand": { 
        name: "Iron Capped Wooden Wand", 
        ingredients: [
            { item: "iron_wand_core", count: 2 }, 
            { item: "stick", count: 1 }
        ], 
        category: "thaumcraft",
        note: "Basic wand for casting" 
    },
    
    // Devices
    "arcane_worktable": { 
        name: "Arcane Worktable", 
        ingredients: [
            { item: "crafting_table", count: 1 }, 
            { item: "vis_crystal", count: 2 }
        ], 
        category: "thaumcraft" 
    },
    "research_table": { 
        name: "Research Table", 
        ingredients: [
            { item: "crafting_table", count: 1 }, 
            { item: "paper", count: 2 }, 
            { item: "vis_crystal", count: 1 }
        ], 
        category: "thaumcraft" 
    },
    "crucible": { 
        name: "Crucible", 
        ingredients: [{ item: "iron_ingot", count: 7 }], 
        category: "thaumcraft",
        note: "Used for infusion and alchemy" 
    },
    "arcane_alembic": { 
        name: "Arcane Alembic", 
        ingredients: [
            { item: "glass", count: 6 }, 
            { item: "iron_ingot", count: 1 }, 
            { item: "vis_crystal", count: 1 }
        ], 
        category: "thaumcraft",
        note: "Attaches to crucible to extract essentia" 
    },
    "warded_jar": { 
        name: "Warded Jar", 
        ingredients: [
            { item: "glass", count: 7 }, 
            { item: "vis_crystal", count: 1 }
        ], 
        category: "thaumcraft",
        note: "Stores essentia from alembic" 
    },
};
