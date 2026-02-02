// Tinkers Construct Recipes
const TINKERS_RECIPES = {
    "grout": { 
        name: "Grout", 
        ingredients: [
            { item: "sand", count: 1 }, 
            { item: "gravel", count: 1 }, 
            { item: "clay_ball", count: 1 },
            { item: "water_bucket", count: 1 }
        ], 
        category: "tinkers",
        yield: 2,
        craftedIn: "Crafting Table",
        note: "GTNH requires water bucket" 
    },
    "seared_brick": { 
        name: "Seared Brick", 
        ingredients: [
            { item: "grout", count: 1 }, 
            { item: "wooden_form", count: 1 },
            { item: "coal", count: 0.125 }
        ], 
        category: "tinkers",
        craftedIn: "Furnace",
        note: "GTNH requires wooden form" 
    },
    "seared_bricks": { 
        name: "Seared Bricks", 
        ingredients: [{ item: "seared_brick", count: 4 }], 
        category: "tinkers",
        craftedIn: "Crafting Table"
    },
    "smeltery_controller": { 
        name: "Smeltery Controller", 
        ingredients: [{ item: "seared_bricks", count: 11 }], 
        category: "tinkers" 
    },
    "seared_tank": { 
        name: "Seared Tank", 
        ingredients: [{ item: "seared_bricks", count: 1 }, { item: "glass", count: 4 }], 
        category: "tinkers" 
    },
    "smeltery_drain": { 
        name: "Smeltery Drain", 
        ingredients: [{ item: "seared_brick", count: 5 }], 
        category: "tinkers",
        note: "Place in bottom of smeltery to drain fluids" 
    },
    "seared_faucet": { 
        name: "Seared Faucet", 
        ingredients: [{ item: "seared_brick", count: 3 }], 
        category: "tinkers",
        note: "Attaches to drain or tank to pour fluids" 
    },
    "blank_pattern": { 
        name: "Blank Pattern", 
        ingredients: [{ item: "stick", count: 4 }], 
        category: "tinkers" 
    },
    "blank_cast": { 
        name: "Blank Cast", 
        ingredients: [{ item: "gold_ingot", count: 2 }], 
        category: "tinkers",
        note: "Created in smeltery by pouring gold on table" 
    },
    "pattern_chest": { 
        name: "Pattern Chest", 
        ingredients: [{ item: "chest", count: 1 }, { item: "blank_pattern", count: 1 }], 
        category: "tinkers" 
    },
    "part_chest": { 
        name: "Part Chest", 
        ingredients: [{ item: "chest", count: 1 }, { item: "oak_planks", count: 1 }], 
        category: "tinkers" 
    },
    "stencil_table": { 
        name: "Stencil Table", 
        ingredients: [{ item: "oak_planks", count: 2 }, { item: "blank_pattern", count: 1 }], 
        category: "tinkers" 
    },
    "part_builder": { 
        name: "Part Builder", 
        ingredients: [{ item: "oak_planks", count: 2 }, { item: "oak_log", count: 1 }], 
        category: "tinkers" 
    },
    "tool_station": { 
        name: "Tool Station", 
        ingredients: [{ item: "oak_planks", count: 2 }, { item: "blank_pattern", count: 1 }], 
        category: "tinkers" 
    },
    "tool_forge": { 
        name: "Tool Forge", 
        ingredients: [{ item: "seared_bricks", count: 7 }, { item: "iron_block", count: 1 }], 
        category: "tinkers" 
    },
    "casting_table": { 
        name: "Casting Table", 
        ingredients: [{ item: "seared_bricks", count: 7 }], 
        category: "tinkers" 
    },
    "casting_basin": { 
        name: "Casting Basin", 
        ingredients: [{ item: "seared_bricks", count: 7 }], 
        category: "tinkers" 
    },
    
    // Raw materials for GTNH
    "wooden_form": {
        name: "Wooden Form",
        ingredients: null,
        category: "raw",
        note: "GTNH item"
    },
    "water_bucket": {
        name: "Water Bucket",
        ingredients: null,
        category: "raw",
        note: "Fill bucket with water"
    },
};
