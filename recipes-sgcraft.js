// SGCraft (Stargate) Recipes
const SGCRAFT_RECIPES = {
    "naquadah_ore": { 
        name: "Naquadah Ore", 
        ingredients: null, 
        category: "raw",
        note: "Found underground or under lava" 
    },
    "naquadah": { 
        name: "Naquadah", 
        ingredients: [{ item: "naquadah_ore", count: 1 }], 
        category: "gtnh",
        yield: 3.5,
        note: "Drops 2-6 naquadah per ore" 
    },
    "naquadah_alloy_ingot": { 
        name: "Naquadah Alloy Ingot", 
        ingredients: [
            { item: "naquadah", count: 1 }, 
            { item: "iron_ingot", count: 1 }
        ], 
        category: "gtnh" 
    },
    "naquadah_block": { 
        name: "Naquadah Alloy Block", 
        ingredients: [{ item: "naquadah_alloy_ingot", count: 9 }], 
        category: "gtnh" 
    },
    "stargate_core_crystal": { 
        name: "Stargate Core Crystal", 
        ingredients: [
            { item: "lapis_lazuli", count: 4 }, 
            { item: "redstone", count: 4 }, 
            { item: "diamond", count: 1 }
        ], 
        category: "gtnh",
        note: "Optional recipe - usually found in structures" 
    },
    "stargate_controller_crystal": { 
        name: "Stargate Controller Crystal", 
        ingredients: [
            { item: "orange_dye", count: 4 }, 
            { item: "redstone", count: 3 }, 
            { item: "diamond", count: 1 }
        ], 
        category: "gtnh",
        note: "Optional recipe - usually found in structures" 
    },
    "stargate_ring_block": { 
        name: "Stargate Ring Block", 
        ingredients: [
            { item: "chiseled_sandstone", count: 3 }, 
            { item: "naquadah_alloy_ingot", count: 3 }, 
            { item: "smooth_sandstone", count: 3 }
        ], 
        category: "gtnh" 
    },
    "stargate_chevron_block": { 
        name: "Stargate Chevron Block", 
        ingredients: [
            { item: "chiseled_sandstone", count: 2 }, 
            { item: "naquadah_alloy_ingot", count: 2 }, 
            { item: "smooth_sandstone", count: 2 },
            { item: "glowstone_dust", count: 2 },
            { item: "ender_pearl", count: 1 },
            { item: "redstone", count: 1 }
        ], 
        category: "gtnh" 
    },
    "stargate_base_block": { 
        name: "Stargate Base Block", 
        ingredients: [
            { item: "chiseled_sandstone", count: 2 }, 
            { item: "naquadah_alloy_ingot", count: 2 }, 
            { item: "smooth_sandstone", count: 2 },
            { item: "glowstone_dust", count: 1 },
            { item: "redstone", count: 1 },
            { item: "ender_pearl", count: 1 },
            { item: "ender_eye", count: 1 },
            { item: "stargate_core_crystal", count: 1 }
        ], 
        category: "gtnh" 
    },
    "stargate_dhd": { 
        name: "Stargate DHD (Dial Home Device)", 
        ingredients: [
            { item: "stone_button", count: 3 }, 
            { item: "obsidian", count: 4 }, 
            { item: "ender_pearl", count: 1 },
            { item: "redstone", count: 1 },
            { item: "stargate_controller_crystal", count: 1 }
        ], 
        category: "gtnh" 
    },
    "stargate_chevron_upgrade": { 
        name: "Stargate Chevron Upgrade", 
        ingredients: [
            { item: "naquadah_alloy_ingot", count: 1 }, 
            { item: "glowstone_dust", count: 2 }, 
            { item: "redstone", count: 2 },
            { item: "ender_pearl", count: 2 }
        ], 
        category: "gtnh",
        note: "Upgrades stargate from 7 to 9 chevrons" 
    },
    "stargate_iris_blade": { 
        name: "Stargate Iris Blade", 
        ingredients: [
            { item: "iron_ingot", count: 3 }, 
            { item: "charcoal", count: 1 }
        ], 
        category: "gtnh" 
    },
    "stargate_iris_upgrade": { 
        name: "Stargate Iris Upgrade", 
        ingredients: [
            { item: "stargate_iris_blade", count: 8 }, 
            { item: "redstone", count: 1 }
        ], 
        category: "gtnh",
        note: "Adds protective iris to stargate" 
    },
};
