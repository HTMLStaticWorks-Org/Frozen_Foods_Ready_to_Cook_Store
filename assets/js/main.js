/**
 * FROZEN FOODS & READY-TO-COOK STORE — MAIN JAVASCRIPT (ES6+)
 * Frontend interactions: Product Catalog, Category Filters, Search, Sorting,
 * Enquiry Cart (localStorage), Contact Prefill & Validation, FAQ Accordion,
 * Sticky Header & Responsive Mobile Navigation.
 */

'use strict';

/* ==========================================================================
   1. SAMPLE PRODUCT CATALOG DATA (20 PRODUCTS ACROSS 4 CATEGORIES)
   ========================================================================== */
const PRODUCT_CATALOG = [
  // CATEGORY 1 — SNACKS (5 Products)
  {
    id: 'snk-01',
    name: 'Vegetable Samosa',
    category: 'Snacks',
    diet: 'veg',
    packSize: '400g (10 Pcs)',
    price: 145,
    featured: true,
    image: 'assets/images/frozen-samosa.webp',
    description: 'Crispy triangular pastry pockets filled with seasoned potatoes, green peas and aromatic kitchen spices. Ready to fry or air-fry straight from the freezer.'
  },
  {
    id: 'snk-02',
    name: 'Chicken Nuggets',
    category: 'Snacks',
    diet: 'nonveg',
    packSize: '450g (18 Pcs)',
    price: 235,
    featured: true,
    image: 'assets/images/chicken-nuggets.webp',
    description: 'Tender minced chicken bites coated in a golden, crunchy breadcrumb batter for quick evening snacks and family sharing platters.'
  },
  {
    id: 'snk-03',
    name: 'Vegetable Spring Rolls',
    category: 'Snacks',
    diet: 'veg',
    packSize: '360g (12 Pcs)',
    price: 165,
    featured: true,
    image: 'assets/images/spring-rolls.webp',
    description: 'Delicate, extra-crisp pastry rolls generously stuffed with julienned cabbage, carrots, bell peppers and savoury seasoning.'
  },
  {
    id: 'snk-04',
    name: 'Cheese Balls',
    category: 'Snacks',
    diet: 'veg',
    packSize: '350g (15 Pcs)',
    price: 210,
    featured: false,
    image: 'assets/images/cheese-balls.webp',
    description: 'Golden herb-crusted bite-sized spheres filled with a creamy blend of melted cheese, sweet corn and mild cracked pepper.'
  },
  {
    id: 'snk-05',
    name: 'Potato Wedges',
    category: 'Snacks',
    diet: 'veg',
    packSize: '500g Pack',
    price: 150,
    featured: false,
    image: 'assets/images/potato-wedges.webp',
    description: 'Thick-cut skin-on potato wedges lightly seasoned with garlic, oregano and paprika for a fluffy interior and crisp outer crunch.'
  },

  // CATEGORY 2 — PARATHAS (5 Products)
  {
    id: 'par-01',
    name: 'Plain Paratha',
    category: 'Parathas',
    diet: 'veg',
    packSize: '400g (5 Pcs)',
    price: 115,
    featured: false,
    image: 'assets/images/plain-paratha.webp',
    description: 'Homestyle triangular layered flatbreads that puff up warm and flaky on a hot tawa in just minutes without rolling or kneading.'
  },
  {
    id: 'par-02',
    name: 'Aloo Paratha',
    category: 'Parathas',
    diet: 'veg',
    packSize: '450g (4 Pcs)',
    price: 155,
    featured: true,
    image: 'assets/images/aloo-paratha.webp',
    description: 'Hearty whole-wheat flatbreads generously stuffed with spiced mashed potatoes, fresh coriander leaves and toasted cumin.'
  },
  {
    id: 'par-03',
    name: 'Malabar Paratha',
    category: 'Parathas',
    diet: 'veg',
    packSize: '450g (5 Pcs)',
    price: 140,
    featured: false,
    image: 'assets/images/malabar-paratha.webp',
    description: 'Traditional South Indian ribbon-layered parottas with delicate, flaky spiral layers that pair effortlessly with curries and gravies.'
  },
  {
    id: 'par-04',
    name: 'Whole Wheat Paratha',
    category: 'Parathas',
    diet: 'veg',
    packSize: '400g (5 Pcs)',
    price: 125,
    featured: false,
    image: 'assets/images/wheat-paratha.webp',
    description: 'Soft everyday whole wheat flatbreads prepared for quick pan-heating on busy weekday mornings and lunchbox packing.'
  },
  {
    id: 'par-05',
    name: 'Mixed Vegetable Paratha',
    category: 'Parathas',
    diet: 'veg',
    packSize: '450g (4 Pcs)',
    price: 165,
    featured: false,
    image: 'assets/images/veg-paratha.webp',
    description: 'Wholesome stuffed parathas filled with finely grated carrots, cauliflower, green peas, potatoes and mild ginger-chilli seasoning.'
  },

  // CATEGORY 3 — VEGETARIAN (5 Products)
  {
    id: 'veg-01',
    name: 'Frozen Green Peas',
    category: 'Vegetarian',
    diet: 'veg',
    packSize: '500g Pack',
    price: 110,
    featured: true,
    image: 'assets/images/green-peas.webp',
    description: 'Selected tender garden green peas shelled and frozen to lock in natural sweetness for pulao, curries, soups and everyday stir-fries.'
  },
  {
    id: 'veg-02',
    name: 'Sweet Corn',
    category: 'Vegetarian',
    diet: 'veg',
    packSize: '500g Pack',
    price: 120,
    featured: false,
    image: 'assets/images/sweet-corn.webp',
    description: 'Plump, juicy golden sweet corn kernels ready to steam, toss with butter and pepper, or add to salads, pasta and soups.'
  },
  {
    id: 'veg-03',
    name: 'Mixed Vegetables',
    category: 'Vegetarian',
    diet: 'veg',
    packSize: '500g Pack',
    price: 130,
    featured: false,
    image: 'assets/images/mixed-vegetables.webp',
    description: 'Pre-cut medley of diced carrots, green peas, sweet corn kernels and French beans—washed, prepped and ready for the pan.'
  },
  {
    id: 'veg-04',
    name: 'Frozen Broccoli',
    category: 'Vegetarian',
    diet: 'veg',
    packSize: '400g Pack',
    price: 175,
    featured: false,
    image: 'assets/images/frozen-broccoli.webp',
    description: 'Trimmed, bite-sized green broccoli florets ready for quick steaming, roasting, pasta bakes and Asian-style wok tosses.'
  },
  {
    id: 'veg-05',
    name: 'Vegetable Cutlets',
    category: 'Vegetarian',
    diet: 'veg',
    packSize: '400g (8 Pcs)',
    price: 160,
    featured: false,
    image: 'assets/images/veg-cutlets.webp',
    description: 'Crumb-coated spiced vegetable patties crafted with potatoes, beetroot, carrots and green beans for tea-time plates and burger fillings.'
  },

  // CATEGORY 4 — NON-VEGETARIAN (5 Products)
  {
    id: 'nvg-01',
    name: 'Chicken Kebabs',
    category: 'Non-Vegetarian',
    diet: 'nonveg',
    packSize: '400g (8 Pcs)',
    price: 265,
    featured: true,
    image: 'assets/images/chicken-kebab.webp',
    description: 'Succulent minced chicken seekh kebabs blended with fresh herbs, garlic, ginger and roasted spices—ready to pan-sear or grill.'
  },
  {
    id: 'nvg-02',
    name: 'Chicken Strips',
    category: 'Non-Vegetarian',
    diet: 'nonveg',
    packSize: '400g (10 Pcs)',
    price: 275,
    featured: false,
    image: 'assets/images/chicken-strips.webp',
    description: 'Whole chicken breast tenders coated in a seasoned crispy batter—ideal for wraps, quick meals or dipping sauces.'
  },
  {
    id: 'nvg-03',
    name: 'Chicken Sausages',
    category: 'Non-Vegetarian',
    diet: 'nonveg',
    packSize: '450g (10 Pcs)',
    price: 250,
    featured: false,
    image: 'assets/images/chicken-sausages.webp',
    description: 'Classic lightly smoked chicken sausages that pan-sear in minutes for hearty breakfasts, hot dogs and pasta dishes.'
  },
  {
    id: 'nvg-04',
    name: 'Frozen Fish Fillets',
    category: 'Non-Vegetarian',
    diet: 'nonveg',
    packSize: '500g Pack',
    price: 340,
    featured: false,
    image: 'assets/images/fish-fillets.webp',
    description: 'Boneless, skinless white fish fillets neatly trimmed and portioned for pan-grilling, baking or homestyle fish curries.'
  },
  {
    id: 'nvg-05',
    name: 'Frozen Prawns',
    category: 'Non-Vegetarian',
    diet: 'nonveg',
    packSize: '400g Pack',
    price: 390,
    featured: false,
    image: 'assets/images/frozen-prawns.webp',
    description: 'Cleaned, peeled and deveined medium prawns ready to thaw and cook in garlic butter, stir-fries, pasta or coastal curries.'
  }
];

const CART_STORAGE_KEY = 'ff_rtc_enquiry_cart_v1';

/* ==========================================================================
   2. ENQUIRY CART STATE MANAGEMENT (LOCALSTORAGE)
   ========================================================================== */
function getEnquiryCart() {
  try {
    const raw = localStorage.getItem(CART_STORAGE_KEY);
    if (!raw) return [];
    const parsed = JSON.parse(raw);
    return Array.isArray(parsed) ? parsed : [];
  } catch (err) {
    return [];
  }
}

function saveEnquiryCart(cart) {
  try {
    localStorage.setItem(CART_STORAGE_KEY, JSON.stringify(cart));
  } catch (err) {
    // Fallback if storage is restricted
  }
  updateAllCartUI();
}

function addToEnquiryCart(productId, btnElement = null) {
  const product = PRODUCT_CATALOG.find(item => item.id === productId);
  if (!product) return;

  const cart = getEnquiryCart();
  const existingIndex = cart.findIndex(item => item.id === productId);

  if (existingIndex > -1) {
    cart[existingIndex].qty += 1;
  } else {
    cart.push({
      id: product.id,
      name: product.name,
      category: product.category,
      packSize: product.packSize,
      price: product.price,
      qty: 1
    });
  }

  saveEnquiryCart(cart);

  // Pulse badge animation
  document.querySelectorAll('.cart-count-badge').forEach(badge => {
    badge.classList.remove('pulse');
    void badge.offsetWidth;
    badge.classList.add('pulse');
    setTimeout(() => badge.classList.remove('pulse'), 350);
  });

  // Button visual feedback
  if (btnElement) {
    const originalHTML = btnElement.innerHTML;
    btnElement.classList.add('is-added');
    btnElement.innerHTML = '<i class="bi bi-check2-circle"></i> Added to Enquiry';
    setTimeout(() => {
      btnElement.classList.remove('is-added');
      btnElement.innerHTML = originalHTML;
    }, 1200);
  }
}

function updateCartItemQty(productId, delta) {
  let cart = getEnquiryCart();
  const idx = cart.findIndex(item => item.id === productId);
  if (idx === -1) return;

  cart[idx].qty += delta;
  if (cart[idx].qty <= 0) {
    cart.splice(idx, 1);
  }
  saveEnquiryCart(cart);
}

function removeCartItem(productId) {
  const cart = getEnquiryCart().filter(item => item.id !== productId);
  saveEnquiryCart(cart);
}

function clearEnquiryCart() {
  saveEnquiryCart([]);
}

function getCartTotals() {
  const cart = getEnquiryCart();
  const totalItems = cart.reduce((sum, item) => sum + item.qty, 0);
  const totalAmount = cart.reduce((sum, item) => sum + (item.price * item.qty), 0);
  return { cart, totalItems, totalAmount };
}

/* ==========================================================================
   3. RENDER ENQUIRY CART DRAWER & INLINE SUMMARY
   ========================================================================== */
function updateAllCartUI() {
  const { cart, totalItems, totalAmount } = getCartTotals();

  // Update header badges
  document.querySelectorAll('.cart-count-badge').forEach(badge => {
    badge.textContent = totalItems;
    badge.setAttribute('aria-label', `${totalItems} items in enquiry cart`);
  });

  // Update slide-over drawer body
  const drawerBody = document.getElementById('enquiryCartBody');
  const drawerTotal = document.getElementById('enquiryCartTotal');
  const drawerCount = document.getElementById('enquiryCartCount');
  const clearBtn = document.getElementById('clearEnquiryCartBtn');
  const sendBtn = document.getElementById('sendEnquiryCartBtn');

  if (drawerCount) {
    drawerCount.textContent = `${totalItems} ${totalItems === 1 ? 'Pack' : 'Packs'}`;
  }
  if (drawerTotal) {
    drawerTotal.textContent = `₹${totalAmount.toLocaleString('en-IN')}`;
  }

  if (drawerBody) {
    if (cart.length === 0) {
      drawerBody.innerHTML = `
        <div class="text-center py-5">
          <div class="mb-3" style="font-size: 2.5rem; color: var(--mint-secondary);">
            <i class="bi bi-basket2"></i>
          </div>
          <h4 class="mb-2">Your Enquiry List is Empty</h4>
          <p class="small mb-4">Add your favourite frozen snacks, parathas or meal essentials to request availability and order assistance.</p>
          <a href="products.html" class="btn-brand-primary btn-sm">Browse Frozen Range</a>
        </div>
      `;
      if (clearBtn) clearBtn.disabled = true;
      if (sendBtn) sendBtn.classList.add('disabled');
    } else {
      if (clearBtn) clearBtn.disabled = false;
      if (sendBtn) sendBtn.classList.remove('disabled');
      drawerBody.innerHTML = cart.map(item => `
        <div class="cart-item-row" data-cart-id="${item.id}">
          <div class="cart-item-info">
            <div class="cart-item-title">${item.name}</div>
            <div class="cart-item-meta">${item.packSize} &bull; ₹${item.price} / pack (Demo)</div>
          </div>
          <div class="cart-qty-controls" role="group" aria-label="Quantity controls for ${item.name}">
            <button type="button" class="qty-btn" data-action="dec" data-id="${item.id}" aria-label="Decrease quantity of ${item.name}">&minus;</button>
            <span class="qty-val">${item.qty}</span>
            <button type="button" class="qty-btn" data-action="inc" data-id="${item.id}" aria-label="Increase quantity of ${item.name}">&#43;</button>
          </div>
          <div class="text-end" style="min-width: 58px; font-family: var(--font-heading); font-weight: 700; font-size: 0.9rem;">
            ₹${item.price * item.qty}
          </div>
          <button type="button" class="cart-remove-btn" data-action="remove" data-id="${item.id}" aria-label="Remove ${item.name} from enquiry list" title="Remove product">
            <i class="bi bi-trash3"></i>
          </button>
        </div>
      `).join('');
    }
  }

  // Update inline enquiry bar on products.html if present
  const inlineBar = document.getElementById('inlineEnquirySummaryBar');
  const inlineSummaryText = document.getElementById('inlineEnquirySummaryText');
  if (inlineBar && inlineSummaryText) {
    if (totalItems > 0) {
      inlineBar.hidden = false;
      inlineSummaryText.innerHTML = `<strong>${totalItems} ${totalItems === 1 ? 'pack' : 'packs'}</strong> selected across <strong>${cart.length} ${cart.length === 1 ? 'product' : 'products'}</strong> &bull; Est. Sample Total: <strong>₹${totalAmount.toLocaleString('en-IN')}</strong> <span class="text-muted small">(Demo Price)</span>`;
    } else {
      inlineBar.hidden = true;
    }
  }
}

/* ==========================================================================
   4. PRODUCT CARD HTML GENERATOR
   ========================================================================== */
function createProductCardHTML(product) {
  const isVeg = product.diet === 'veg';
  const dietLabel = isVeg ? 'Veg' : 'Non-Veg';
  const dietClass = isVeg ? 'is-veg' : 'is-nonveg';

  return `
    <article class="product-card" data-product-id="${product.id}" data-category="${product.category}">
      <div class="product-card-media">
        <img src="${product.image}" alt="${product.name} - ${product.category} (${product.packSize})" loading="lazy" width="600" height="450">
        <span class="product-category-tag">${product.category}</span>
        <span class="diet-indicator ${dietClass}" title="${dietLabel} Product">
          <span class="diet-dot" aria-hidden="true"></span>
          ${dietLabel}
        </span>
      </div>
      <div class="product-card-body">
        <div>
          <h3 class="product-card-title">${product.name}</h3>
          <p class="product-card-desc">${product.description}</p>
        </div>
        <div>
          <div class="product-meta-row">
            <span class="product-pack-size"><i class="bi bi-box-seam me-1"></i>${product.packSize}</span>
            <div class="product-price-wrap">
              <span class="product-price">₹${product.price}</span>
              <span class="demo-price-tag">Sample Price</span>
            </div>
          </div>
          <button type="button" class="btn-brand-primary btn-add-enquiry" data-add-enquiry="${product.id}" aria-label="Add ${product.name} to Enquiry">
            <i class="bi bi-plus-circle"></i> Add to Enquiry
          </button>
        </div>
      </div>
    </article>
  `;
}

/* ==========================================================================
   5. HOME PAGE FEATURED PRODUCTS INITIALIZATION
   ========================================================================== */
function initHomeFeaturedProducts() {
  const featuredContainer = document.getElementById('homeFeaturedProductsGrid');
  if (!featuredContainer) return;

  const featuredList = PRODUCT_CATALOG.filter(item => item.featured).slice(0, 6);
  featuredContainer.innerHTML = featuredList.map(createProductCardHTML).join('');
}

/* ==========================================================================
   6. PRODUCTS PAGE CATALOG, FILTERING, SEARCH & SORTING
   ========================================================================== */
function initProductsCatalogPage() {
  const catalogGrid = document.getElementById('productsCatalogGrid');
  if (!catalogGrid) return;

  const filterButtons = document.querySelectorAll('[data-category-filter]');
  const searchInput = document.getElementById('productSearchInput');
  const sortSelect = document.getElementById('productSortSelect');
  const countDisplay = document.getElementById('productCountDisplay');
  const emptyState = document.getElementById('catalogEmptyState');
  const resetFilterBtn = document.getElementById('resetCatalogFiltersBtn');

  let activeCategory = 'All';
  let searchQuery = '';
  let sortMode = 'featured';

  // Check URL query parameters (?category=Snacks or ?search=paratha)
  const urlParams = new URLSearchParams(window.location.search);
  const categoryParam = urlParams.get('category');
  const searchParam = urlParams.get('search');

  const validCategories = ['All', 'Snacks', 'Parathas', 'Vegetarian', 'Non-Vegetarian'];
  if (categoryParam && validCategories.includes(categoryParam)) {
    activeCategory = categoryParam;
  }
  if (searchParam && searchInput) {
    searchQuery = searchParam.trim();
    searchInput.value = searchQuery;
  }

  function syncFilterButtonStates() {
    filterButtons.forEach(btn => {
      const cat = btn.getAttribute('data-category-filter');
      const isMatch = cat === activeCategory;
      btn.classList.toggle('active', isMatch);
      btn.setAttribute('aria-pressed', isMatch ? 'true' : 'false');
    });
  }

  function renderFilteredProducts() {
    let filtered = PRODUCT_CATALOG.filter(product => {
      const matchesCategory = activeCategory === 'All' || product.category === activeCategory;
      const q = searchQuery.toLowerCase();
      const matchesSearch = !q ||
        product.name.toLowerCase().includes(q) ||
        product.description.toLowerCase().includes(q) ||
        product.category.toLowerCase().includes(q);
      return matchesCategory && matchesSearch;
    });

    // Apply sorting
    if (sortMode === 'price-asc') {
      filtered.sort((a, b) => a.price - b.price);
    } else if (sortMode === 'price-desc') {
      filtered.sort((a, b) => b.price - a.price);
    } else if (sortMode === 'name-asc') {
      filtered.sort((a, b) => a.name.localeCompare(b.name));
    } else {
      // Featured default order
      filtered.sort((a, b) => Number(b.featured) - Number(a.featured));
    }

    if (countDisplay) {
      countDisplay.textContent = `Showing ${filtered.length} of ${PRODUCT_CATALOG.length} Sample Products`;
    }

    if (filtered.length === 0) {
      catalogGrid.innerHTML = '';
      if (emptyState) emptyState.hidden = false;
    } else {
      if (emptyState) emptyState.hidden = true;
      catalogGrid.innerHTML = filtered.map(createProductCardHTML).join('');
    }
  }

  // Category filter clicks
  filterButtons.forEach(btn => {
    btn.addEventListener('click', () => {
      activeCategory = btn.getAttribute('data-category-filter') || 'All';
      syncFilterButtonStates();
      renderFilteredProducts();
    });
  });

  // Search input listener
  if (searchInput) {
    searchInput.addEventListener('input', (e) => {
      searchQuery = e.target.value.trim();
      renderFilteredProducts();
    });
  }

  // Sort select listener
  if (sortSelect) {
    sortSelect.addEventListener('change', (e) => {
      sortMode = e.target.value;
      renderFilteredProducts();
    });
  }

  // Reset filters button
  if (resetFilterBtn) {
    resetFilterBtn.addEventListener('click', () => {
      activeCategory = 'All';
      searchQuery = '';
      sortMode = 'featured';
      if (searchInput) searchInput.value = '';
      if (sortSelect) sortSelect.value = 'featured';
      syncFilterButtonStates();
      renderFilteredProducts();
    });
  }

  syncFilterButtonStates();
  renderFilteredProducts();
}

/* ==========================================================================
   7. CONTACT PAGE — CART PREFILL & FORM VALIDATION
   ========================================================================== */
function initContactEnquiryPage() {
  const form = document.getElementById('orderEnquiryForm');
  if (!form) return;

  const fullNameInput = document.getElementById('fullName');
  const phoneInput = document.getElementById('phoneNumber');
  const emailInput = document.getElementById('emailAddress');
  const enquiryTypeSelect = document.getElementById('enquiryType');
  const productCategorySelect = document.getElementById('productCategory');
  const interestedProductsInput = document.getElementById('interestedProducts');
  const quantityInput = document.getElementById('productQuantity');
  const deliveryLocationInput = document.getElementById('deliveryLocation');
  const messageInput = document.getElementById('enquiryMessage');
  const prefillNotice = document.getElementById('cartPrefillNotice');
  const successAlert = document.getElementById('enquirySuccessConfirmation');
  const submittedSummaryBox = document.getElementById('submittedEnquirySummary');

  // Auto-populate from Enquiry Cart if items exist
  function populateFromCart() {
    const { cart, totalItems, totalAmount } = getCartTotals();
    if (cart.length === 0) return;

    const productSummary = cart.map(item => `${item.name} (${item.packSize}) x ${item.qty}`).join(', ');
    const uniqueCategories = [...new Set(cart.map(item => item.category))];

    if (interestedProductsInput) {
      interestedProductsInput.value = productSummary;
    }
    if (quantityInput) {
      quantityInput.value = `${totalItems} ${totalItems === 1 ? 'Pack' : 'Packs'} (Est. Sample Total: ₹${totalAmount.toLocaleString('en-IN')})`;
    }
    if (enquiryTypeSelect) {
      enquiryTypeSelect.value = 'Product Enquiry';
    }
    if (productCategorySelect) {
      if (uniqueCategories.length === 1) {
        productCategorySelect.value = uniqueCategories[0];
      } else if (uniqueCategories.length > 1) {
        productCategorySelect.value = 'Multiple Categories';
      }
    }
    if (messageInput && !messageInput.value.trim()) {
      messageInput.value = `Hello, I would like to enquire about product availability and delivery options for the following selected items:\n- ${cart.map(i => `${i.name} (${i.packSize}): ${i.qty} pack(s)`).join('\n- ')}`;
    }
    if (prefillNotice) {
      prefillNotice.hidden = false;
    }
  }

  populateFromCart();

  // Field validation helper
  function validateField(input, validatorFn) {
    if (!input) return true;
    const isValid = validatorFn(input.value.trim());
    input.classList.toggle('is-invalid', !isValid);
    input.setAttribute('aria-invalid', !isValid ? 'true' : 'false');
    return isValid;
  }

  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;
  const phoneRegex = /^[+]?[\d\s()-]{10,16}$/;

  const validators = [
    { el: fullNameInput, fn: val => val.length >= 2 },
    { el: phoneInput, fn: val => phoneRegex.test(val) && val.replace(/\D/g, '').length >= 10 },
    { el: emailInput, fn: val => emailRegex.test(val) },
    { el: enquiryTypeSelect, fn: val => val.length > 0 },
    { el: productCategorySelect, fn: val => val.length > 0 },
    { el: interestedProductsInput, fn: val => val.length >= 2 },
    { el: quantityInput, fn: val => val.length >= 1 },
    { el: deliveryLocationInput, fn: val => val.length >= 3 },
    { el: messageInput, fn: val => val.length >= 8 }
  ];

  validators.forEach(({ el, fn }) => {
    if (!el) return;
    el.addEventListener('input', () => {
      if (el.classList.contains('is-invalid')) {
        validateField(el, fn);
      }
    });
    el.addEventListener('change', () => {
      if (el.classList.contains('is-invalid')) {
        validateField(el, fn);
      }
    });
  });

  form.addEventListener('submit', (e) => {
    e.preventDefault();

    let allValid = true;
    let firstInvalidEl = null;

    validators.forEach(({ el, fn }) => {
      const ok = validateField(el, fn);
      if (!ok) {
        allValid = false;
        if (!firstInvalidEl) firstInvalidEl = el;
      }
    });

    if (!allValid) {
      if (firstInvalidEl) firstInvalidEl.focus();
      return;
    }

    // Build demo confirmation details
    if (submittedSummaryBox) {
      submittedSummaryBox.innerHTML = `
        <div class="row g-2 small mt-2 pt-2 border-top">
          <div class="col-sm-6"><strong>Customer Name:</strong> ${escapeHTML(fullNameInput.value.trim())}</div>
          <div class="col-sm-6"><strong>Contact Phone:</strong> ${escapeHTML(phoneInput.value.trim())}</div>
          <div class="col-sm-6"><strong>Enquiry Type:</strong> ${escapeHTML(enquiryTypeSelect.value)}</div>
          <div class="col-sm-6"><strong>Category:</strong> ${escapeHTML(productCategorySelect.value)}</div>
          <div class="col-12"><strong>Products & Quantity:</strong> ${escapeHTML(interestedProductsInput.value.trim())} (${escapeHTML(quantityInput.value.trim())})</div>
          <div class="col-12"><strong>Delivery Area:</strong> ${escapeHTML(deliveryLocationInput.value.trim())}</div>
        </div>
      `;
    }

    if (successAlert) {
      successAlert.hidden = false;
      successAlert.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
    }

    form.reset();
    validators.forEach(({ el }) => {
      if (el) {
        el.classList.remove('is-invalid');
        el.setAttribute('aria-invalid', 'false');
      }
    });
  });
}

function escapeHTML(str) {
  return String(str)
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#039;');
}

/* ==========================================================================
   8. FAQ ACCORDION (STORAGE & DELIVERY PAGE)
   ========================================================================== */
function initFaqAccordions() {
  const triggers = document.querySelectorAll('.faq-trigger');
  if (!triggers.length) return;

  triggers.forEach(trigger => {
    trigger.addEventListener('click', () => {
      const isExpanded = trigger.getAttribute('aria-expanded') === 'true';
      const targetId = trigger.getAttribute('aria-controls');
      const contentEl = targetId ? document.getElementById(targetId) : null;

      // Close sibling items for clean reading
      triggers.forEach(otherTrigger => {
        if (otherTrigger !== trigger) {
          otherTrigger.setAttribute('aria-expanded', 'false');
          const otherId = otherTrigger.getAttribute('aria-controls');
          const otherContent = otherId ? document.getElementById(otherId) : null;
          if (otherContent) otherContent.hidden = true;
        }
      });

      trigger.setAttribute('aria-expanded', !isExpanded ? 'true' : 'false');
      if (contentEl) {
        contentEl.hidden = isExpanded;
      }
    });
  });
}

/* ==========================================================================
   9. GLOBAL NAVIGATION, DRAWERS & EVENT DELEGATION
   ========================================================================== */
function initGlobalUI() {
  const siteHeader = document.querySelector('.site-header');
  const hamburgerBtn = document.getElementById('mobileMenuOpenBtn');
  const mobileCloseBtn = document.getElementById('mobileMenuCloseBtn');
  const mobileDrawer = document.getElementById('mobileNavDrawer');
  const sharedBackdrop = document.getElementById('sharedOverlayBackdrop');

  const cartOpenBtns = document.querySelectorAll('[data-open-cart]');
  const cartCloseBtn = document.getElementById('enquiryCartCloseBtn');
  const cartDrawer = document.getElementById('enquiryCartDrawer');
  const clearCartBtn = document.getElementById('clearEnquiryCartBtn');

  const searchToggleBtn = document.getElementById('headerSearchToggleBtn');
  const headerSearchBar = document.getElementById('headerSearchBar');
  const headerSearchForm = document.getElementById('headerSearchForm');
  const headerSearchInput = document.getElementById('headerSearchInput');

  // Sticky Header Scroll State
  window.addEventListener('scroll', () => {
    if (!siteHeader) return;
    if (window.scrollY > 24) {
      siteHeader.classList.add('is-scrolled');
    } else {
      siteHeader.classList.remove('is-scrolled');
    }
  }, { passive: true });

  function closeAllDrawers() {
    if (mobileDrawer) {
      mobileDrawer.classList.remove('is-open');
      mobileDrawer.setAttribute('aria-hidden', 'true');
    }
    if (hamburgerBtn) {
      hamburgerBtn.setAttribute('aria-expanded', 'false');
    }
    if (cartDrawer) {
      cartDrawer.classList.remove('is-open');
      cartDrawer.setAttribute('aria-hidden', 'true');
    }
    if (sharedBackdrop) {
      sharedBackdrop.classList.remove('is-open');
    }
    document.body.style.overflow = '';
  }

  function openMobileDrawer() {
    closeAllDrawers();
    if (mobileDrawer) {
      mobileDrawer.classList.add('is-open');
      mobileDrawer.setAttribute('aria-hidden', 'false');
    }
    if (hamburgerBtn) {
      hamburgerBtn.setAttribute('aria-expanded', 'true');
    }
    if (sharedBackdrop) {
      sharedBackdrop.classList.add('is-open');
    }
    document.body.style.overflow = 'hidden';
  }

  function openCartDrawer() {
    closeAllDrawers();
    if (cartDrawer) {
      cartDrawer.classList.add('is-open');
      cartDrawer.setAttribute('aria-hidden', 'false');
    }
    if (sharedBackdrop) {
      sharedBackdrop.classList.add('is-open');
    }
    document.body.style.overflow = 'hidden';
  }

  if (hamburgerBtn) {
    hamburgerBtn.addEventListener('click', openMobileDrawer);
  }
  if (mobileCloseBtn) {
    mobileCloseBtn.addEventListener('click', closeAllDrawers);
  }
  if (mobileDrawer) {
    mobileDrawer.querySelectorAll('a').forEach(link => {
      link.addEventListener('click', closeAllDrawers);
    });
  }

  cartOpenBtns.forEach(btn => {
    btn.addEventListener('click', openCartDrawer);
  });
  if (cartCloseBtn) {
    cartCloseBtn.addEventListener('click', closeAllDrawers);
  }
  if (sharedBackdrop) {
    sharedBackdrop.addEventListener('click', closeAllDrawers);
  }

  if (clearCartBtn) {
    clearCartBtn.addEventListener('click', () => {
      clearEnquiryCart();
    });
  }

  // Header Search Bar Toggle
  if (searchToggleBtn && headerSearchBar) {
    searchToggleBtn.addEventListener('click', () => {
      const isOpen = headerSearchBar.classList.toggle('is-open');
      searchToggleBtn.setAttribute('aria-expanded', isOpen ? 'true' : 'false');
      if (isOpen && headerSearchInput) {
        setTimeout(() => headerSearchInput.focus(), 100);
      }
    });
  }

  if (headerSearchForm && headerSearchInput) {
    headerSearchForm.addEventListener('submit', (e) => {
      e.preventDefault();
      const q = headerSearchInput.value.trim();
      const pageSearchInput = document.getElementById('productSearchInput');
      if (pageSearchInput) {
        pageSearchInput.value = q;
        pageSearchInput.dispatchEvent(new Event('input'));
        pageSearchInput.scrollIntoView({ behavior: 'smooth', block: 'center' });
      } else {
        window.location.href = `products.html?search=${encodeURIComponent(q)}`;
      }
    });
  }

  document.querySelectorAll('[data-drawer-search-form]').forEach(drawerForm => {
    drawerForm.addEventListener('submit', (e) => {
      e.preventDefault();
      const inputEl = drawerForm.querySelector('input[type="search"]');
      const q = inputEl ? inputEl.value.trim() : '';
      closeAllDrawers();
      const pageSearchInput = document.getElementById('productSearchInput');
      if (pageSearchInput) {
        pageSearchInput.value = q;
        pageSearchInput.dispatchEvent(new Event('input'));
        pageSearchInput.scrollIntoView({ behavior: 'smooth', block: 'center' });
      } else {
        window.location.href = `products.html?search=${encodeURIComponent(q)}`;
      }
    });
  });

  // Escape key closes drawers and search bar
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
      closeAllDrawers();
      if (headerSearchBar && headerSearchBar.classList.contains('is-open')) {
        headerSearchBar.classList.remove('is-open');
        if (searchToggleBtn) searchToggleBtn.setAttribute('aria-expanded', 'false');
      }
    }
  });

  // Global Event Delegation for Add-to-Enquiry and Cart Quantity buttons
  document.addEventListener('click', (e) => {
    const addBtn = e.target.closest('[data-add-enquiry]');
    if (addBtn) {
      const productId = addBtn.getAttribute('data-add-enquiry');
      addToEnquiryCart(productId, addBtn);
      return;
    }

    const cartActionBtn = e.target.closest('[data-action]');
    if (cartActionBtn) {
      const action = cartActionBtn.getAttribute('data-action');
      const id = cartActionBtn.getAttribute('data-id');
      if (action === 'inc') updateCartItemQty(id, 1);
      if (action === 'dec') updateCartItemQty(id, -1);
      if (action === 'remove') removeCartItem(id);
    }
  });

  // Scroll Reveal Observer
  const revealElements = document.querySelectorAll('.reveal-on-scroll');
  if ('IntersectionObserver' in window && revealElements.length > 0) {
    const observer = new IntersectionObserver((entries, obs) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-visible');
          obs.unobserve(entry.target);
        }
      });
    }, { threshold: 0.1 });

    revealElements.forEach(el => observer.observe(el));
  } else {
    revealElements.forEach(el => el.classList.add('is-visible'));
  }
}

/* ==========================================================================
   10. RTL & THEME (DARK / LIGHT) TOGGLE CONTROLLER
   ========================================================================== */
const THEME_STORAGE_KEY = 'ff_rtc_theme_v1';
const DIR_STORAGE_KEY = 'ff_rtc_dir_v1';

function applyThemePreference(theme) {
  const validTheme = theme === 'dark' ? 'dark' : 'light';
  document.documentElement.setAttribute('data-theme', validTheme);
  document.querySelectorAll('[data-toggle-theme], #themeToggleBtn').forEach(btn => {
    const icon = btn.querySelector('i');
    if (icon) {
      icon.className = validTheme === 'dark' ? 'bi bi-sun-fill' : 'bi bi-moon-stars';
    }
    btn.setAttribute('aria-pressed', validTheme === 'dark' ? 'true' : 'false');
    btn.setAttribute('title', validTheme === 'dark' ? 'Switch to Light Mode' : 'Switch to Dark Mode');
  });
}

function applyDirectionPreference(dir) {
  const validDir = dir === 'rtl' ? 'rtl' : 'ltr';
  document.documentElement.setAttribute('dir', validDir);
  document.querySelectorAll('[data-toggle-rtl], #rtlToggleBtn').forEach(btn => {
    const label = btn.querySelector('.rtl-badge-text');
    if (label) {
      label.textContent = validDir === 'rtl' ? 'LTR' : 'RTL';
    }
    btn.setAttribute('aria-pressed', validDir === 'rtl' ? 'true' : 'false');
    btn.setAttribute('title', validDir === 'rtl' ? 'Switch to LTR (Left-to-Right)' : 'Switch to RTL (Right-to-Left)');
  });
}

function initThemeAndDirectionToggles() {
  let savedTheme = 'light';
  let savedDir = 'ltr';
  try {
    savedTheme = localStorage.getItem(THEME_STORAGE_KEY) || 'light';
    savedDir = localStorage.getItem(DIR_STORAGE_KEY) || 'ltr';
  } catch (err) {
    // Default fallback
  }

  applyThemePreference(savedTheme);
  applyDirectionPreference(savedDir);

  document.querySelectorAll('[data-toggle-theme], #themeToggleBtn').forEach(btn => {
    btn.addEventListener('click', () => {
      const current = document.documentElement.getAttribute('data-theme') === 'dark' ? 'dark' : 'light';
      const next = current === 'dark' ? 'light' : 'dark';
      try {
        localStorage.setItem(THEME_STORAGE_KEY, next);
      } catch (err) {}
      applyThemePreference(next);
    });
  });

  document.querySelectorAll('[data-toggle-rtl], #rtlToggleBtn').forEach(btn => {
    btn.addEventListener('click', () => {
      const current = document.documentElement.getAttribute('dir') === 'rtl' ? 'rtl' : 'ltr';
      const next = current === 'rtl' ? 'ltr' : 'rtl';
      try {
        localStorage.setItem(DIR_STORAGE_KEY, next);
      } catch (err) {}
      applyDirectionPreference(next);
    });
  });
}

/* ==========================================================================
   11. INITIALIZE APPLICATION ON DOM READY
   ========================================================================== */
document.addEventListener('DOMContentLoaded', () => {
  initThemeAndDirectionToggles();
  updateAllCartUI();
  initHomeFeaturedProducts();
  initProductsCatalogPage();
  initContactEnquiryPage();
  initFaqAccordions();
  initGlobalUI();
});
