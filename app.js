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
