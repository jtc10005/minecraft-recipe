// Pam's HarvestCraft Recipes
const HARVESTCRAFT_RECIPES = {
    // Tools
    "fresh_water": { 
        name: "Fresh Water", 
        ingredients: [{ item: "bucket", count: 1 }], 
        category: "harvestcraft",
        note: "Right-click water source with bucket" 
    },
    "pot": { 
        name: "Pot", 
        ingredients: [{ item: "iron_ingot", count: 5 }], 
        category: "harvestcraft",
        note: "Cooking tool" 
    },
    "skillet": { 
        name: "Skillet", 
        ingredients: [{ item: "iron_ingot", count: 5 }], 
        category: "harvestcraft",
        note: "Frying tool" 
    },
    "sauce_pan": { 
        name: "Sauce Pan", 
        ingredients: [{ item: "iron_ingot", count: 5 }], 
        category: "harvestcraft",
        note: "Cooking tool" 
    },
    "bakeware": { 
        name: "Bakeware", 
        ingredients: [{ item: "iron_ingot", count: 5 }], 
        category: "harvestcraft",
        note: "Baking tool" 
    },
    "cutting_board": { 
        name: "Cutting Board", 
        ingredients: [{ item: "oak_planks", count: 3 }], 
        category: "harvestcraft",
        note: "Prep tool" 
    },
    "mixing_bowl": { 
        name: "Mixing Bowl", 
        ingredients: [{ item: "oak_planks", count: 4 }], 
        category: "harvestcraft",
        note: "Mixing tool" 
    },
    
    // Crops
    "tomato": { 
        name: "Tomato", 
        ingredients: null, 
        category: "raw",
        note: "Grown from seed" 
    },
    "lettuce": { 
        name: "Lettuce", 
        ingredients: null, 
        category: "raw",
        note: "Grown from seed" 
    },
    "rice": { 
        name: "Rice", 
        ingredients: null, 
        category: "raw",
        note: "Grown from seed" 
    },
    "corn": { 
        name: "Corn", 
        ingredients: null, 
        category: "raw",
        note: "Grown from seed" 
    },
    "cucumber": { 
        name: "Cucumber", 
        ingredients: null, 
        category: "raw",
        note: "Grown from seed" 
    },
    
    // Basic foods
    "toast": { 
        name: "Toast", 
        ingredients: [
            { item: "bread", count: 1 }, 
            { item: "skillet", count: 0 }
        ], 
        category: "harvestcraft",
        note: "Skillet is not consumed" 
    },
    "bread": { 
        name: "Bread", 
        ingredients: [{ item: "wheat", count: 3 }], 
        category: "basic" 
    },
    "hamburger": { 
        name: "Hamburger", 
        ingredients: [
            { item: "beef", count: 1 }, 
            { item: "bread", count: 1 }, 
            { item: "tomato", count: 1 },
            { item: "lettuce", count: 1 }
        ], 
        category: "harvestcraft" 
    },
    "beef": { 
        name: "Raw Beef", 
        ingredients: null, 
        category: "raw",
        note: "Dropped by cows" 
    },
    "spaghetti": { 
        name: "Spaghetti", 
        ingredients: [
            { item: "wheat", count: 2 }, 
            { item: "tomato", count: 1 }, 
            { item: "fresh_water", count: 1 },
            { item: "pot", count: 0 }
        ], 
        category: "harvestcraft",
        note: "Pot is not consumed" 
    },
    "salad": { 
        name: "Garden Salad", 
        ingredients: [
            { item: "lettuce", count: 2 }, 
            { item: "tomato", count: 1 }, 
            { item: "cucumber", count: 1 },
            { item: "mixing_bowl", count: 0 }
        ], 
        category: "harvestcraft",
        note: "Mixing bowl is not consumed" 
    },
};
