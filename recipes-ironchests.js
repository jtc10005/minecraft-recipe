// Iron Chests Recipes
const IRONCHESTS_RECIPES = {
    "iron_chest": { 
        name: "Iron Chest", 
        ingredients: [
            { item: "iron_ingot", count: 8 }, 
            { item: "chest", count: 1 }
        ], 
        category: "ironchests",
        note: "54 slots (same as double chest)" 
    },
    "gold_chest": { 
        name: "Gold Chest", 
        ingredients: [
            { item: "gold_ingot", count: 8 }, 
            { item: "iron_chest", count: 1 }
        ], 
        category: "ironchests",
        note: "81 slots" 
    },
    "diamond_chest": { 
        name: "Diamond Chest", 
        ingredients: [
            { item: "diamond", count: 8 }, 
            { item: "gold_chest", count: 1 }
        ], 
        category: "ironchests",
        note: "108 slots (best storage)" 
    },
    "copper_chest": { 
        name: "Copper Chest", 
        ingredients: [
            { item: "copper_ingot", count: 8 }, 
            { item: "chest", count: 1 }
        ], 
        category: "ironchests",
        note: "45 slots" 
    },
    "silver_chest": { 
        name: "Silver Chest", 
        ingredients: [
            { item: "silver_ingot", count: 8 }, 
            { item: "copper_chest", count: 1 }
        ], 
        category: "ironchests",
        note: "72 slots" 
    },
    "silver_ingot": { 
        name: "Silver Ingot", 
        ingredients: [{ item: "silver_ore", count: 1 }, { item: "coal", count: 0.125 }], 
        category: "smelted" 
    },
    "silver_ore": { 
        name: "Silver Ore", 
        ingredients: null, 
        category: "raw" 
    },
    "crystal_chest": { 
        name: "Crystal Chest", 
        ingredients: [
            { item: "glass", count: 8 }, 
            { item: "diamond_chest", count: 1 }
        ], 
        category: "ironchests",
        note: "108 slots with transparent display" 
    },
    "obsidian_chest": { 
        name: "Obsidian Chest", 
        ingredients: [
            { item: "obsidian", count: 8 }, 
            { item: "diamond_chest", count: 1 }
        ], 
        category: "ironchests",
        note: "108 slots, explosion resistant" 
    },
};
