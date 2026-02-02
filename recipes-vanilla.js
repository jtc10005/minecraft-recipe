// Vanilla Minecraft Recipes
const VANILLA_RECIPES = {
    // ========== RAW MATERIALS ==========
    "oak_log": { name: "Oak Log", ingredients: null, category: "raw" },
    "spruce_log": { name: "Spruce Log", ingredients: null, category: "raw" },
    "birch_log": { name: "Birch Log", ingredients: null, category: "raw" },
    "cobblestone": { name: "Cobblestone", ingredients: null, category: "raw" },
    "iron_ore": { name: "Iron Ore", ingredients: null, category: "raw" },
    "coal": { name: "Coal", ingredients: null, category: "raw" },
    "redstone": { name: "Redstone", ingredients: null, category: "raw" },
    "diamond": { name: "Diamond", ingredients: null, category: "raw" },
    "gold_ore": { name: "Gold Ore", ingredients: null, category: "raw" },
    "sand": { name: "Sand", ingredients: null, category: "raw" },
    "sandstone": { name: "Sandstone", ingredients: [{ item: "sand", count: 4 }], category: "basic" },
    "gravel": { name: "Gravel", ingredients: null, category: "raw" },
    "clay_ball": { name: "Clay Ball", ingredients: null, category: "raw" },
    "string": { name: "String", ingredients: null, category: "raw" },
    "feather": { name: "Feather", ingredients: null, category: "raw" },
    "flint": { name: "Flint", ingredients: null, category: "raw" },
    "leather": { name: "Leather", ingredients: null, category: "raw" },
    "wool": { name: "Wool", ingredients: null, category: "raw" },
    "sugar_cane": { name: "Sugar Cane", ingredients: null, category: "raw" },
    "cactus": { name: "Cactus", ingredients: null, category: "raw" },
    "slime_ball": { name: "Slime Ball", ingredients: null, category: "raw" },
    "obsidian": { name: "Obsidian", ingredients: null, category: "raw" },
    "ender_pearl": { name: "Ender Pearl", ingredients: null, category: "raw" },
    "blaze_rod": { name: "Blaze Rod", ingredients: null, category: "raw" },
    "emerald": { name: "Emerald", ingredients: null, category: "raw" },
    "nether_quartz": { name: "Nether Quartz", ingredients: null, category: "raw" },
    "wheat": { name: "Wheat", ingredients: null, category: "raw" },
    "lapis_lazuli": { name: "Lapis Lazuli", ingredients: null, category: "raw" },
    "glowstone_dust": { name: "Glowstone Dust", ingredients: null, category: "raw" },
    "charcoal": { name: "Charcoal", ingredients: [{ item: "oak_log", count: 1 }, { item: "coal", count: 0.125 }], category: "smelted" },
    "red_dye": { name: "Red Dye", ingredients: null, category: "raw" },
    "yellow_dye": { name: "Yellow Dye", ingredients: null, category: "raw" },
    "stone_button": { name: "Stone Button", ingredients: [{ item: "stone", count: 1 }], category: "basic" },

    // ========== SMELTED ITEMS ==========
    "iron_ingot": { 
        name: "Iron Ingot", 
        ingredients: [{ item: "iron_ore", count: 1 }, { item: "coal", count: 0.125 }], 
        category: "smelted" 
    },
    "gold_ingot": { 
        name: "Gold Ingot", 
        ingredients: [{ item: "gold_ore", count: 1 }, { item: "coal", count: 0.125 }], 
        category: "smelted" 
    },
    "glass": { 
        name: "Glass", 
        ingredients: [{ item: "sand", count: 1 }, { item: "coal", count: 0.125 }], 
        category: "smelted" 
    },
    "brick": { 
        name: "Brick", 
        ingredients: [{ item: "clay_ball", count: 1 }, { item: "coal", count: 0.125 }], 
        category: "smelted" 
    },
    "stone": { 
        name: "Stone", 
        ingredients: [{ item: "cobblestone", count: 1 }, { item: "coal", count: 0.125 }], 
        category: "smelted" 
    },

    // ========== BASIC CRAFTED ITEMS ==========
    "oak_planks": { 
        name: "Oak Planks", 
        ingredients: [{ item: "oak_log", count: 0.25 }], 
        category: "basic",
        yield: 4 
    },
    "spruce_planks": { 
        name: "Spruce Planks", 
        ingredients: [{ item: "spruce_log", count: 0.25 }], 
        category: "basic",
        yield: 4 
    },
    "birch_planks": { 
        name: "Birch Planks", 
        ingredients: [{ item: "birch_log", count: 0.25 }], 
        category: "basic",
        yield: 4 
    },
    "stick": { 
        name: "Stick", 
        ingredients: [{ item: "oak_planks", count: 0.5 }], 
        category: "basic",
        yield: 4 
    },
    "crafting_table": { 
        name: "Crafting Table", 
        ingredients: [{ item: "oak_planks", count: 4 }], 
        category: "basic" 
    },
    "chest": { 
        name: "Chest", 
        ingredients: [{ item: "oak_planks", count: 8 }], 
        category: "storage" 
    },
    "furnace": { 
        name: "Furnace", 
        ingredients: [{ item: "cobblestone", count: 8 }], 
        category: "basic" 
    },
    "torch": { 
        name: "Torch", 
        ingredients: [{ item: "coal", count: 0.25 }, { item: "stick", count: 0.25 }], 
        category: "basic",
        yield: 4 
    },
    "iron_block": { 
        name: "Iron Block", 
        ingredients: [{ item: "iron_ingot", count: 9 }], 
        category: "basic" 
    },
    "orange_dye": { 
        name: "Orange Dye", 
        ingredients: [
            { item: "red_dye", count: 1 }, 
            { item: "yellow_dye", count: 1 }
        ], 
        category: "basic" 
    },
    "chiseled_sandstone": { 
        name: "Chiseled Sandstone", 
        ingredients: [{ item: "sandstone_slab", count: 2 }], 
        category: "basic" 
    },
    "smooth_sandstone": { 
        name: "Smooth Sandstone", 
        ingredients: [{ item: "sandstone", count: 4 }], 
        category: "basic" 
    },
    "sandstone_slab": { 
        name: "Sandstone Slab", 
        ingredients: [{ item: "sandstone", count: 3 }], 
        category: "basic",
        yield: 6 
    },

    // ========== TOOLS ==========
    "wooden_pickaxe": { 
        name: "Wooden Pickaxe", 
        ingredients: [{ item: "oak_planks", count: 3 }, { item: "stick", count: 2 }], 
        category: "tools" 
    },
    "stone_pickaxe": { 
        name: "Stone Pickaxe", 
        ingredients: [{ item: "cobblestone", count: 3 }, { item: "stick", count: 2 }], 
        category: "tools" 
    },
    "iron_pickaxe": { 
        name: "Iron Pickaxe", 
        ingredients: [{ item: "iron_ingot", count: 3 }, { item: "stick", count: 2 }], 
        category: "tools" 
    },
    "diamond_pickaxe": { 
        name: "Diamond Pickaxe", 
        ingredients: [{ item: "diamond", count: 3 }, { item: "stick", count: 2 }], 
        category: "tools" 
    },
    "wooden_axe": { 
        name: "Wooden Axe", 
        ingredients: [{ item: "oak_planks", count: 3 }, { item: "stick", count: 2 }], 
        category: "tools" 
    },
    "stone_axe": { 
        name: "Stone Axe", 
        ingredients: [{ item: "cobblestone", count: 3 }, { item: "stick", count: 2 }], 
        category: "tools" 
    },
    "iron_axe": { 
        name: "Iron Axe", 
        ingredients: [{ item: "iron_ingot", count: 3 }, { item: "stick", count: 2 }], 
        category: "tools" 
    },
    "diamond_axe": { 
        name: "Diamond Axe", 
        ingredients: [{ item: "diamond", count: 3 }, { item: "stick", count: 2 }], 
        category: "tools" 
    },
    "wooden_shovel": { 
        name: "Wooden Shovel", 
        ingredients: [{ item: "oak_planks", count: 1 }, { item: "stick", count: 2 }], 
        category: "tools" 
    },
    "stone_shovel": { 
        name: "Stone Shovel", 
        ingredients: [{ item: "cobblestone", count: 1 }, { item: "stick", count: 2 }], 
        category: "tools" 
    },
    "iron_shovel": { 
        name: "Iron Shovel", 
        ingredients: [{ item: "iron_ingot", count: 1 }, { item: "stick", count: 2 }], 
        category: "tools" 
    },
    "diamond_shovel": { 
        name: "Diamond Shovel", 
        ingredients: [{ item: "diamond", count: 1 }, { item: "stick", count: 2 }], 
        category: "tools" 
    },
    "wooden_sword": { 
        name: "Wooden Sword", 
        ingredients: [{ item: "oak_planks", count: 2 }, { item: "stick", count: 1 }], 
        category: "tools" 
    },
    "stone_sword": { 
        name: "Stone Sword", 
        ingredients: [{ item: "cobblestone", count: 2 }, { item: "stick", count: 1 }], 
        category: "tools" 
    },
    "iron_sword": { 
        name: "Iron Sword", 
        ingredients: [{ item: "iron_ingot", count: 2 }, { item: "stick", count: 1 }], 
        category: "tools" 
    },
    "diamond_sword": { 
        name: "Diamond Sword", 
        ingredients: [{ item: "diamond", count: 2 }, { item: "stick", count: 1 }], 
        category: "tools" 
    },
    "bow": { 
        name: "Bow", 
        ingredients: [{ item: "stick", count: 3 }, { item: "string", count: 3 }], 
        category: "tools" 
    },
    "arrow": { 
        name: "Arrow", 
        ingredients: [{ item: "flint", count: 0.25 }, { item: "stick", count: 0.25 }, { item: "feather", count: 0.25 }], 
        category: "tools",
        yield: 4 
    },
    "shears": { 
        name: "Shears", 
        ingredients: [{ item: "iron_ingot", count: 2 }], 
        category: "tools" 
    },
    "fishing_rod": { 
        name: "Fishing Rod", 
        ingredients: [{ item: "stick", count: 3 }, { item: "string", count: 2 }], 
        category: "tools" 
    },

    // ========== ARMOR ==========
    "iron_helmet": { 
        name: "Iron Helmet", 
        ingredients: [{ item: "iron_ingot", count: 5 }], 
        category: "armor" 
    },
    "iron_chestplate": { 
        name: "Iron Chestplate", 
        ingredients: [{ item: "iron_ingot", count: 8 }], 
        category: "armor" 
    },
    "iron_leggings": { 
        name: "Iron Leggings", 
        ingredients: [{ item: "iron_ingot", count: 7 }], 
        category: "armor" 
    },
    "iron_boots": { 
        name: "Iron Boots", 
        ingredients: [{ item: "iron_ingot", count: 4 }], 
        category: "armor" 
    },
    "diamond_helmet": { 
        name: "Diamond Helmet", 
        ingredients: [{ item: "diamond", count: 5 }], 
        category: "armor" 
    },
    "diamond_chestplate": { 
        name: "Diamond Chestplate", 
        ingredients: [{ item: "diamond", count: 8 }], 
        category: "armor" 
    },
    "diamond_leggings": { 
        name: "Diamond Leggings", 
        ingredients: [{ item: "diamond", count: 7 }], 
        category: "armor" 
    },
    "diamond_boots": { 
        name: "Diamond Boots", 
        ingredients: [{ item: "diamond", count: 4 }], 
        category: "armor" 
    },

    // ========== REDSTONE ==========
    "piston": { 
        name: "Piston", 
        ingredients: [
            { item: "oak_planks", count: 3 }, 
            { item: "cobblestone", count: 4 }, 
            { item: "iron_ingot", count: 1 }, 
            { item: "redstone", count: 1 }
        ], 
        category: "redstone" 
    },
    "redstone_torch": { 
        name: "Redstone Torch", 
        ingredients: [{ item: "redstone", count: 1 }, { item: "stick", count: 1 }], 
        category: "redstone" 
    },
    "repeater": { 
        name: "Repeater", 
        ingredients: [{ item: "redstone_torch", count: 2 }, { item: "redstone", count: 1 }, { item: "stone", count: 3 }], 
        category: "redstone" 
    },
    "comparator": { 
        name: "Comparator", 
        ingredients: [{ item: "redstone_torch", count: 3 }, { item: "nether_quartz", count: 1 }, { item: "stone", count: 3 }], 
        category: "redstone" 
    },
    "hopper": { 
        name: "Hopper", 
        ingredients: [{ item: "iron_ingot", count: 5 }, { item: "chest", count: 1 }], 
        category: "redstone" 
    },

    // ========== ADVANCED ITEMS ==========
    "paper": { 
        name: "Paper", 
        ingredients: [{ item: "sugar_cane", count: 1 }], 
        category: "basic",
        yield: 3 
    },
    "book": { 
        name: "Book", 
        ingredients: [{ item: "paper", count: 3 }, { item: "leather", count: 1 }], 
        category: "basic" 
    },
    "bookshelf": { 
        name: "Bookshelf", 
        ingredients: [{ item: "oak_planks", count: 6 }, { item: "book", count: 3 }], 
        category: "decoration" 
    },
    "enchanting_table": { 
        name: "Enchanting Table", 
        ingredients: [{ item: "book", count: 1 }, { item: "diamond", count: 2 }, { item: "obsidian", count: 4 }], 
        category: "advanced" 
    },
    "ender_chest": { 
        name: "Ender Chest", 
        ingredients: [{ item: "obsidian", count: 8 }, { item: "ender_eye", count: 1 }], 
        category: "storage" 
    },
    "ender_eye": { 
        name: "Eye of Ender", 
        ingredients: [{ item: "ender_pearl", count: 1 }, { item: "blaze_powder", count: 1 }], 
        category: "advanced" 
    },
    "blaze_powder": { 
        name: "Blaze Powder", 
        ingredients: [{ item: "blaze_rod", count: 0.5 }], 
        category: "basic",
        yield: 2 
    },
    "brewing_stand": { 
        name: "Brewing Stand", 
        ingredients: [{ item: "blaze_rod", count: 1 }, { item: "cobblestone", count: 3 }], 
        category: "advanced" 
    },
    "anvil": { 
        name: "Anvil", 
        ingredients: [{ item: "iron_block", count: 3 }, { item: "iron_ingot", count: 4 }], 
        category: "advanced" 
    },

    // ========== MISCELLANEOUS ==========
    "ladder": { 
        name: "Ladder", 
        ingredients: [{ item: "stick", count: 7/3 }], 
        category: "basic",
        yield: 3 
    },
    "door": { 
        name: "Wooden Door", 
        ingredients: [{ item: "oak_planks", count: 6 }], 
        category: "basic" 
    },
    "trapdoor": { 
        name: "Trapdoor", 
        ingredients: [{ item: "oak_planks", count: 6 }], 
        category: "basic",
        yield: 2 
    },
    "fence": { 
        name: "Oak Fence", 
        ingredients: [{ item: "oak_planks", count: 4/3 }, { item: "stick", count: 2/3 }], 
        category: "basic",
        yield: 3 
    },
    "fence_gate": { 
        name: "Oak Fence Gate", 
        ingredients: [{ item: "oak_planks", count: 2 }, { item: "stick", count: 4 }], 
        category: "basic" 
    },
    "bed": { 
        name: "Bed", 
        ingredients: [{ item: "oak_planks", count: 3 }, { item: "wool", count: 3 }], 
        category: "basic" 
    },
    "painting": { 
        name: "Painting", 
        ingredients: [{ item: "stick", count: 8 }, { item: "wool", count: 1 }], 
        category: "decoration" 
    },
    "item_frame": { 
        name: "Item Frame", 
        ingredients: [{ item: "stick", count: 8 }, { item: "leather", count: 1 }], 
        category: "decoration" 
    },
    "bucket": { 
        name: "Bucket", 
        ingredients: [{ item: "iron_ingot", count: 3 }], 
        category: "basic" 
    },
    "clock": { 
        name: "Clock", 
        ingredients: [{ item: "gold_ingot", count: 4 }, { item: "redstone", count: 1 }], 
        category: "basic" 
    },
    "compass": { 
        name: "Compass", 
        ingredients: [{ item: "iron_ingot", count: 4 }, { item: "redstone", count: 1 }], 
        category: "basic" 
    },
    "minecart": { 
        name: "Minecart", 
        ingredients: [{ item: "iron_ingot", count: 5 }], 
        category: "transportation" 
    },
    "rails": { 
        name: "Rails", 
        ingredients: [{ item: "iron_ingot", count: 1 }, { item: "stick", count: 1/16 }], 
        category: "transportation",
        yield: 16 
    },
    "powered_rails": { 
        name: "Powered Rails", 
        ingredients: [{ item: "gold_ingot", count: 1 }, { item: "stick", count: 1/6 }, { item: "redstone", count: 1/6 }], 
        category: "transportation",
        yield: 6 
    },
};
