// Main application logic

let selectedItem = null;

// Toggle mod filters section
function toggleModFilters() {
    const checkboxGroup = document.getElementById('mod-checkbox-group');
    const icon = document.getElementById('mod-toggle-icon');
    
    checkboxGroup.classList.toggle('collapsed');
    
    if (checkboxGroup.classList.contains('collapsed')) {
        icon.textContent = '▶';
    } else {
        icon.textContent = '▼';
    }
}

// Toggle search section
function toggleSearchSection() {
    const searchContent = document.getElementById('search-content');
    const icon = document.getElementById('search-toggle-icon');
    
    searchContent.classList.toggle('collapsed');
    
    if (searchContent.classList.contains('collapsed')) {
        icon.textContent = '▶';
    } else {
        icon.textContent = '▼';
    }
}

// Select all mods
function selectAllMods() {
    const checkboxes = document.querySelectorAll('.mod-filters input[type="checkbox"]:not([disabled])');
    checkboxes.forEach(checkbox => {
        if (!checkbox.checked) {
            checkbox.checked = true;
            const modName = checkbox.id.replace('mod-', '');
            toggleMod(modName, true);
        }
    });
}

// Deselect all mods
function deselectAllMods() {
    const checkboxes = document.querySelectorAll('.mod-filters input[type="checkbox"]:not([disabled])');
    checkboxes.forEach(checkbox => {
        if (checkbox.checked) {
            checkbox.checked = false;
            const modName = checkbox.id.replace('mod-', '');
            toggleMod(modName, false);
        }
    });
}

// Initialize the app
document.addEventListener('DOMContentLoaded', () => {
    populateItemSelect();
    setupEventListeners();
});

// Populate the item select dropdown
function populateItemSelect() {
    const itemSelect = document.getElementById('item-select');
    const items = getAllItemNames();
    
    // Clear existing options except the first one
    itemSelect.innerHTML = '<option value="">-- Select an item --</option>';
    
    items.forEach(item => {
        const option = document.createElement('option');
        option.value = item.id;
        option.textContent = item.name;
        itemSelect.appendChild(option);
    });
    
    // Clear the search input
    const searchInput = document.getElementById('item-search');
    if (searchInput) {
        searchInput.value = '';
    }
    
    // Clear any displayed recipe tree
    const recipeTree = document.getElementById('recipe-tree');
    const materialsSummary = document.getElementById('materials-summary');
    if (recipeTree) {
        recipeTree.innerHTML = '';
    }
    if (materialsSummary) {
        materialsSummary.style.display = 'none';
    }
}

// Setup event listeners
function setupEventListeners() {
    const searchInput = document.getElementById('item-search');
    const itemSelect = document.getElementById('item-select');
    const craftButton = document.getElementById('craft-button');

    // Search functionality
    searchInput.addEventListener('input', (e) => {
        const searchTerm = e.target.value.toLowerCase();
        const options = itemSelect.querySelectorAll('option');
        
        options.forEach(option => {
            if (option.value === '') return;
            const itemName = option.textContent.toLowerCase();
            option.style.display = itemName.includes(searchTerm) ? '' : 'none';
        });
    });

    // Select item on click
    itemSelect.addEventListener('change', (e) => {
        selectedItem = e.target.value;
        if (selectedItem) {
            craftButton.disabled = false;
        }
    });

    // Double-click to craft
    itemSelect.addEventListener('dblclick', () => {
        if (selectedItem) {
            showCraftingTree();
        }
    });

    // Craft button
    craftButton.addEventListener('click', showCraftingTree);
}

// Show the crafting tree for the selected item
function showCraftingTree() {
    if (!selectedItem) return;

    const recipe = RECIPES[selectedItem];
    if (!recipe) return;

    // Collapse the search section
    const searchContent = document.getElementById('search-content');
    const searchIcon = document.getElementById('search-toggle-icon');
    if (searchContent && !searchContent.classList.contains('collapsed')) {
        searchContent.classList.add('collapsed');
        searchIcon.textContent = '▶';
    }

    const treeContainer = document.getElementById('recipe-tree');
    treeContainer.innerHTML = '';

    // Create the tree
    const treeNode = createTreeNode(selectedItem, 1, 0);
    treeContainer.appendChild(treeNode);

    // Calculate and show raw materials
    const rawMaterials = calculateRawMaterials(selectedItem, 1);
    displayRawMaterials(rawMaterials);
}

// Create a tree node for an item
function createTreeNode(itemId, quantity, depth) {
    const recipe = RECIPES[itemId];
    
    // If recipe doesn't exist (ingredient from disabled mod), show as unavailable
    if (!recipe) {
        const node = document.createElement('div');
        node.className = 'tree-node';
        node.style.marginLeft = `${depth * 20}px`;
        
        const header = document.createElement('div');
        header.className = 'item-header';
        
        const itemInfo = document.createElement('span');
        itemInfo.className = 'item-info';
        const displayQty = quantity % 1 === 0 ? quantity : quantity.toFixed(2);
        itemInfo.innerHTML = `<strong>${itemId}</strong> × ${displayQty} <span style="color: #ff9800;">(requires disabled mod)</span>`;
        
        header.appendChild(itemInfo);
        node.appendChild(header);
        return node;
    }
    
    const node = document.createElement('div');
    node.className = 'tree-node';
    node.style.marginLeft = `${depth * 20}px`;

    // Create the item header
    const header = document.createElement('div');
    header.className = 'item-header';

    const hasIngredients = recipe.ingredients && recipe.ingredients.length > 0;
    
    // Add expand/collapse button if item has ingredients
    if (hasIngredients) {
        const toggleBtn = document.createElement('span');
        toggleBtn.className = 'toggle-btn';
        toggleBtn.textContent = '▼';
        toggleBtn.onclick = () => toggleNode(node, toggleBtn);
        header.appendChild(toggleBtn);
    } else {
        // Add spacer for alignment
        const spacer = document.createElement('span');
        spacer.className = 'toggle-btn';
        spacer.style.visibility = 'hidden';
        header.appendChild(spacer);
    }

    // Add item name and quantity
    const itemInfo = document.createElement('span');
    itemInfo.className = 'item-info';
    
    // Format quantity nicely
    const displayQty = quantity % 1 === 0 ? quantity : quantity.toFixed(2);
    itemInfo.innerHTML = `<strong>${recipe.name}</strong> × ${displayQty}`;
    
    // Add crafting station if available
    if (recipe.craftedIn) {
        const craftingStation = document.createElement('span');
        craftingStation.className = 'crafting-station';
        craftingStation.textContent = `🔧 ${recipe.craftedIn}`;
        craftingStation.title = `Click to see how to craft ${recipe.craftedIn}`;
        craftingStation.onclick = (e) => {
            e.stopPropagation();
            expandCraftingStation(node, recipe.craftedIn, depth);
        };
        itemInfo.appendChild(craftingStation);
    }
    
    // Add category badge
    const badge = document.createElement('span');
    badge.className = `category-badge ${recipe.category}`;
    badge.textContent = recipe.category;
    itemInfo.appendChild(badge);

    header.appendChild(itemInfo);
    node.appendChild(header);

    // Create children container
    if (hasIngredients) {
        const childrenContainer = document.createElement('div');
        childrenContainer.className = 'children-container';

        recipe.ingredients.forEach(ingredient => {
            const ingredientQty = quantity * ingredient.count;
            const childNode = createTreeNode(ingredient.item, ingredientQty, depth + 1);
            childrenContainer.appendChild(childNode);
        });

        node.appendChild(childrenContainer);
    }

    return node;
}

// Toggle node expansion
function toggleNode(node, toggleBtn) {
    const childrenContainer = node.querySelector('.children-container');
    if (!childrenContainer) return;

    const isExpanded = childrenContainer.style.display !== 'none';
    
    if (isExpanded) {
        childrenContainer.style.display = 'none';
        toggleBtn.textContent = '▶';
        toggleBtn.classList.add('collapsed');
    } else {
        childrenContainer.style.display = 'block';
        toggleBtn.textContent = '▼';
        toggleBtn.classList.remove('collapsed');
    }
}

// Expand crafting station recipe
function expandCraftingStation(parentNode, stationName, depth) {
    // Try to find the recipe for the crafting station
    // Convert name to likely item ID (e.g., "Crafting Table" -> "crafting_table")
    const stationId = stationName.toLowerCase().replace(/\s+/g, '_');
    
    const stationRecipe = RECIPES[stationId];
    if (!stationRecipe) {
        alert(`Recipe for ${stationName} not found. Add it to the database!`);
        return;
    }
    
    // Check if station recipe is already expanded
    const existingStation = parentNode.querySelector(`[data-station-id="${stationId}"]`);
    if (existingStation) {
        // Already showing, remove it
        existingStation.remove();
        
        // If children container is now empty, hide it
        const childrenContainer = parentNode.querySelector('.children-container');
        if (childrenContainer && childrenContainer.children.length === 0) {
            childrenContainer.style.display = 'none';
            const toggleBtn = parentNode.querySelector('.toggle-btn');
            if (toggleBtn) {
                toggleBtn.textContent = '▶';
                toggleBtn.classList.add('collapsed');
            }
        }
        
        // Recalculate raw materials
        recalculateRawMaterials();
        return;
    }
    
    // Create a children container if it doesn't exist
    let childrenContainer = parentNode.querySelector('.children-container');
    if (!childrenContainer) {
        childrenContainer = document.createElement('div');
        childrenContainer.className = 'children-container';
        parentNode.appendChild(childrenContainer);
    }
    
    // Create the station node
    const stationNode = createTreeNode(stationId, 1, depth + 1);
    stationNode.setAttribute('data-station-id', stationId);
    
    // Insert at the beginning
    childrenContainer.insertBefore(stationNode, childrenContainer.firstChild);
    
    // Make sure it's visible
    childrenContainer.style.display = 'block';
    
    // Update toggle button if exists
    const toggleBtn = parentNode.querySelector('.toggle-btn');
    if (toggleBtn) {
        toggleBtn.textContent = '▼';
        toggleBtn.classList.remove('collapsed');
    }
    
    // Recalculate raw materials
    recalculateRawMaterials();
}

// Recalculate raw materials from the current tree
function recalculateRawMaterials() {
    if (!selectedItem) return;
    
    // Get all visible items in the tree and calculate their raw materials
    const materials = {};
    
    function gatherFromNode(node) {
        // Get the item ID from the node
        const itemHeader = node.querySelector('.item-header');
        if (!itemHeader) return;
        
        // Skip if this is a collapsed node's children
        if (node.style.display === 'none') return;
        
        // Get item info from the header
        const itemName = itemHeader.querySelector('strong')?.textContent;
        if (!itemName) return;
        
        // Find the recipe by name
        let itemId = null;
        for (const [id, recipe] of Object.entries(RECIPES)) {
            if (recipe.name === itemName) {
                itemId = id;
                break;
            }
        }
        
        // Get quantity
        const quantityText = itemHeader.textContent.match(/×\s*([\d.]+)/);
        const quantity = quantityText ? parseFloat(quantityText[1]) : 1;
        
        if (itemId) {
            addMaterialsToList(itemId, quantity, materials);
        }
        
        // Process children
        const childrenContainer = node.querySelector('.children-container');
        if (childrenContainer && childrenContainer.style.display !== 'none') {
            const childNodes = childrenContainer.querySelectorAll(':scope > .tree-node');
            childNodes.forEach(childNode => gatherFromNode(childNode));
        }
    }
    
    function addMaterialsToList(itemId, qty, materialsList) {
        const recipe = RECIPES[itemId];
        if (!recipe) {
            materialsList[itemId] = (materialsList[itemId] || 0) + qty;
            return;
        }
        
        if (!recipe.ingredients || recipe.ingredients.length === 0) {
            materialsList[itemId] = (materialsList[itemId] || 0) + qty;
        } else {
            recipe.ingredients.forEach(ingredient => {
                const ingredientQty = qty * ingredient.count;
                addMaterialsToList(ingredient.item, ingredientQty, materialsList);
            });
        }
    }
    
    // Start with the root item
    const treeContainer = document.getElementById('recipe-tree');
    const rootNode = treeContainer.querySelector('.tree-node');
    if (rootNode) {
        gatherFromNode(rootNode);
    }
    
    displayRawMaterials(materials);
}

// Calculate raw materials needed
function calculateRawMaterials(itemId, quantity) {
    const materials = {};

    function addMaterials(itemId, qty) {
        const recipe = RECIPES[itemId];
        
        // If recipe doesn't exist (from disabled mod), count as raw material
        if (!recipe) {
            materials[itemId] = (materials[itemId] || 0) + qty;
            return;
        }
        
        // If this is a raw material (no ingredients), add it
        if (!recipe.ingredients || recipe.ingredients.length === 0) {
            materials[itemId] = (materials[itemId] || 0) + qty;
            return;
        }

        // Otherwise, recurse through ingredients
        recipe.ingredients.forEach(ingredient => {
            addMaterials(ingredient.item, qty * ingredient.count);
        });
    }

    addMaterials(itemId, quantity);
    return materials;
}

// Display raw materials summary
function displayRawMaterials(materials) {
    const summaryContainer = document.getElementById('materials-summary');
    const materialsList = document.getElementById('materials-list');
    
    materialsList.innerHTML = '';

    // Sort materials by name
    const sortedMaterials = Object.entries(materials)
        .map(([id, qty]) => {
            const recipe = RECIPES[id];
            return { 
                id, 
                name: recipe ? recipe.name : id, 
                qty,
                category: recipe ? recipe.category : 'unknown'
            };
        })
        .sort((a, b) => a.name.localeCompare(b.name));

    // Group by category
    const byCategory = {};
    sortedMaterials.forEach(material => {
        const category = material.category;
        if (!byCategory[category]) {
            byCategory[category] = [];
        }
        byCategory[category].push(material);
    });

    // Display each category
    Object.entries(byCategory).forEach(([category, items]) => {
        const categorySection = document.createElement('div');
        categorySection.className = 'material-category';
        
        const categoryTitle = document.createElement('h3');
        categoryTitle.textContent = category.charAt(0).toUpperCase() + category.slice(1);
        categorySection.appendChild(categoryTitle);

        const itemList = document.createElement('ul');
        items.forEach(item => {
            const li = document.createElement('li');
            const displayQty = item.qty % 1 === 0 ? item.qty : item.qty.toFixed(2);
            li.innerHTML = `<span class="material-name">${item.name}</span> <span class="material-qty">× ${displayQty}</span>`;
            itemList.appendChild(li);
        });

        categorySection.appendChild(itemList);
        materialsList.appendChild(categorySection);
    });

    summaryContainer.style.display = 'block';
    
    // Scroll to summary on mobile
    if (window.innerWidth <= 768) {
        setTimeout(() => {
            summaryContainer.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
        }, 100);
    }
}

// Collapse all nodes below a certain depth (for initial display)
function collapseDeepNodes() {
    const nodes = document.querySelectorAll('.tree-node');
    nodes.forEach(node => {
        const depth = parseInt(node.style.marginLeft) / 20;
        if (depth > 2) {
            const childrenContainer = node.querySelector('.children-container');
            const toggleBtn = node.querySelector('.toggle-btn');
            if (childrenContainer && toggleBtn) {
                childrenContainer.style.display = 'none';
                toggleBtn.textContent = '▶';
                toggleBtn.classList.add('collapsed');
            }
        }
    });
}
