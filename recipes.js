// Recipe database loader - combines all modpack recipes

// Enabled mods configuration (can be toggled via UI)
let enabledMods = {
    vanilla: true,
    tinkers: true,
    gregtech: true,
    appliedenergistics: true,
    industrialcraft: true,
    buildcraft: true,
    sgcraft: true,
    thaumcraft: true,
    enderio: true,
    forestry: true,
    railcraft: true,
    extrautilities: true,
    botania: true,
    enderstorage: true,
    ironchests: true,
    opencomputers: true,
    harvestcraft: true
};

// Combined recipe database
let RECIPES = {};

// Function to rebuild recipes based on enabled mods
function rebuildRecipes() {
    RECIPES = {};
    
    if (enabledMods.vanilla) {
        Object.assign(RECIPES, VANILLA_RECIPES);
    }
    if (enabledMods.tinkers) {
        Object.assign(RECIPES, TINKERS_RECIPES);
    }
    if (enabledMods.gregtech) {
        Object.assign(RECIPES, GREGTECH_RECIPES);
    }
    if (enabledMods.appliedenergistics) {
        Object.assign(RECIPES, APPLIEDENERGISTICS_RECIPES);
    }
    if (enabledMods.industrialcraft) {
        Object.assign(RECIPES, INDUSTRIALCRAFT_RECIPES);
    }
    if (enabledMods.buildcraft) {
        Object.assign(RECIPES, BUILDCRAFT_RECIPES);
    }
    if (enabledMods.sgcraft) {
        Object.assign(RECIPES, SGCRAFT_RECIPES);
    }
    if (enabledMods.thaumcraft) {
        Object.assign(RECIPES, THAUMCRAFT_RECIPES);
    }
    if (enabledMods.enderio) {
        Object.assign(RECIPES, ENDERIO_RECIPES);
    }
    if (enabledMods.forestry) {
        Object.assign(RECIPES, FORESTRY_RECIPES);
    }
    if (enabledMods.railcraft) {
        Object.assign(RECIPES, RAILCRAFT_RECIPES);
    }
    if (enabledMods.extrautilities) {
        Object.assign(RECIPES, EXTRAUTILITIES_RECIPES);
    }
    if (enabledMods.botania) {
        Object.assign(RECIPES, BOTANIA_RECIPES);
    }
    if (enabledMods.enderstorage) {
        Object.assign(RECIPES, ENDERSTORAGE_RECIPES);
    }
    if (enabledMods.ironchests) {
        Object.assign(RECIPES, IRONCHESTS_RECIPES);
    }
    if (enabledMods.opencomputers) {
        Object.assign(RECIPES, OPENCOMPUTERS_RECIPES);
    }
    if (enabledMods.harvestcraft) {
        Object.assign(RECIPES, HARVESTCRAFT_RECIPES);
    }
}

// Get all recipe names sorted alphabetically
function getAllItemNames() {
    return Object.keys(RECIPES)
        .map(key => ({ id: key, name: RECIPES[key].name }))
        .sort((a, b) => a.name.localeCompare(b.name));
}

// Toggle a mod on/off
function toggleMod(modName, enabled) {
    enabledMods[modName] = enabled;
    rebuildRecipes();
    populateItemSelect(); // Refresh the dropdown
}

// Initialize recipes on load
rebuildRecipes();
