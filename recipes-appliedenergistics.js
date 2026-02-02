// Applied Energistics 2 Recipes
const APPLIEDENERGISTICS_RECIPES = {
    "certus_quartz": { 
        name: "Certus Quartz", 
        ingredients: null, 
        category: "raw" 
    },
    "pure_certus_quartz": { 
        name: "Pure Certus Quartz Crystal", 
        ingredients: [{ item: "certus_quartz", count: 1 }, { item: "sand", count: 1 }], 
        category: "gtnh",
        note: "Grown in water with crystal seeds" 
    },
    "fluix_crystal": { 
        name: "Fluix Crystal", 
        ingredients: [
            { item: "certus_quartz", count: 1 }, 
            { item: "nether_quartz", count: 1 }, 
            { item: "redstone", count: 1 }
        ], 
        category: "gtnh",
        note: "Throw in water" 
    },
    "calculation_processor": { 
        name: "Calculation Processor", 
        ingredients: [
            { item: "pure_certus_quartz", count: 1 }, 
            { item: "redstone", count: 1 }, 
            { item: "silicon", count: 1 }
        ], 
        category: "gtnh" 
    },
    "me_controller": { 
        name: "ME Controller", 
        ingredients: [
            { item: "calculation_processor", count: 4 }, 
            { item: "fluix_crystal", count: 4 }, 
            { item: "steel_plate", count: 4 }
        ], 
        category: "gtnh" 
    },
    "me_drive": { 
        name: "ME Drive", 
        ingredients: [
            { item: "calculation_processor", count: 2 }, 
            { item: "fluix_crystal", count: 4 }, 
            { item: "iron_plate", count: 2 }
        ], 
        category: "gtnh" 
    },
    "storage_cell_1k": { 
        name: "1k ME Storage Cell", 
        ingredients: [
            { item: "calculation_processor", count: 1 }, 
            { item: "fluix_crystal", count: 1 }, 
            { item: "redstone", count: 8 }
        ], 
        category: "gtnh" 
    },
};
