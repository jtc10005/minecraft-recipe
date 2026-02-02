// OpenComputers Recipes
const OPENCOMPUTERS_RECIPES = {
    // Basic components
    "transistor": { 
        name: "Transistor", 
        ingredients: [
            { item: "iron_ingot", count: 1 }, 
            { item: "redstone", count: 1 }, 
            { item: "paper", count: 1 }
        ], 
        category: "opencomputers",
        yield: 8 
    },
    "microchip_t1": { 
        name: "Microchip (Tier 1)", 
        ingredients: [
            { item: "transistor", count: 6 }, 
            { item: "iron_ingot", count: 1 }, 
            { item: "redstone", count: 2 }
        ], 
        category: "opencomputers" 
    },
    "circuit_chip_t1": { 
        name: "Circuit Chip (Tier 1)", 
        ingredients: [
            { item: "transistor", count: 7 }, 
            { item: "redstone", count: 2 }
        ], 
        category: "opencomputers" 
    },
    "alu": { 
        name: "ALU (Arithmetic Logic Unit)", 
        ingredients: [
            { item: "transistor", count: 7 }, 
            { item: "iron_ingot", count: 2 }
        ], 
        category: "opencomputers" 
    },
    "control_unit": { 
        name: "Control Unit", 
        ingredients: [
            { item: "transistor", count: 7 }, 
            { item: "gold_ingot", count: 2 }
        ], 
        category: "opencomputers" 
    },
    "cpu_t1": { 
        name: "CPU (Tier 1)", 
        ingredients: [
            { item: "alu", count: 1 }, 
            { item: "control_unit", count: 1 }, 
            { item: "microchip_t1", count: 3 },
            { item: "redstone", count: 2 }
        ], 
        category: "opencomputers" 
    },
    "ram_t1": { 
        name: "Memory (Tier 1)", 
        ingredients: [
            { item: "microchip_t1", count: 4 }, 
            { item: "circuit_chip_t1", count: 2 }, 
            { item: "iron_ingot", count: 1 }
        ], 
        category: "opencomputers" 
    },
    
    // Devices
    "computer_case_t1": { 
        name: "Computer Case (Tier 1)", 
        ingredients: [
            { item: "iron_ingot", count: 7 }, 
            { item: "chest", count: 1 }, 
            { item: "microchip_t1", count: 2 }
        ], 
        category: "opencomputers",
        note: "Holds CPU, RAM, and components" 
    },
    "screen_t1": { 
        name: "Screen (Tier 1)", 
        ingredients: [
            { item: "iron_ingot", count: 8 }, 
            { item: "glass", count: 1 }, 
            { item: "redstone", count: 6 }
        ], 
        category: "opencomputers" 
    },
    "keyboard": { 
        name: "Keyboard", 
        ingredients: [
            { item: "iron_ingot", count: 8 }, 
            { item: "stone_button", count: 64 }
        ], 
        category: "opencomputers" 
    },
    "graphics_card_t1": { 
        name: "Graphics Card (Tier 1)", 
        ingredients: [
            { item: "alu", count: 1 }, 
            { item: "circuit_chip_t1", count: 2 }, 
            { item: "microchip_t1", count: 1 }
        ], 
        category: "opencomputers" 
    },
    "hard_disk_drive_t1": { 
        name: "Hard Drive (Tier 1)", 
        ingredients: [
            { item: "microchip_t1", count: 3 }, 
            { item: "piston", count: 1 }, 
            { item: "iron_ingot", count: 2 }
        ], 
        category: "opencomputers",
        note: "Persistent storage" 
    },
    "disk_drive": { 
        name: "Disk Drive", 
        ingredients: [
            { item: "microchip_t1", count: 2 }, 
            { item: "piston", count: 1 }, 
            { item: "iron_ingot", count: 4 }
        ], 
        category: "opencomputers",
        note: "Reads floppy disks" 
    },
    "floppy_disk": { 
        name: "Floppy Disk", 
        ingredients: [
            { item: "iron_ingot", count: 4 }, 
            { item: "paper", count: 4 }, 
            { item: "lever", count: 1 }
        ], 
        category: "opencomputers",
        note: "Stores programs and data" 
    },
    "lever": { 
        name: "Lever", 
        ingredients: [
            { item: "stick", count: 1 }, 
            { item: "cobblestone", count: 1 }
        ], 
        category: "basic" 
    },
};
