

let products = [
    {
        id: 1,
        name: "Diamond Necklace",
        img: "https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?w=600",
        price: 4999
    },
    {
        id: 2,
        name: "Diamond Ring",
        img: "https://images.unsplash.com/photo-1605100804763-247f67b3557e?w=600",
        price: 2499
    },
    {
        id: 3,
        name: "Gold Bracelet",
        img: "https://images.unsplash.com/photo-1611591437281-460bfbe1220a?w=600",
        price: 1999
    },
    {
        id: 4,
        name: "Diamond Earrings",
        img: "https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?w=600",
        price: 1799
    },
    {
        id: 5,
        name: "Pearl Necklace",
      img: "https://plus.unsplash.com/premium_photo-1674255466849-b23fc5f5d3eb?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=NHwxMjA3fDA%3D",
        price: 2999
    },
    {
        id: 6,
        name: "Silver Ring",
      img: "https://images.unsplash.com/photo-1589674781759-c21c37956a44?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=NHwxMjA3fDA%3D",
        price: 999
    },
    {
        id: 7,
        name: "Charm Bracelet",
        img: "https://images.unsplash.com/photo-1573408301185-9146fe634ad0?w=600",
        price: 1499
    },
    {
        id: 8,
        name: "Heart Pendant",
        img: "https://images.unsplash.com/photo-1611652022419-a9419f74343d?w=600",
        price: 1299
    },
    {
        id: 9,
        name: "Diamond Stud Earrings",
        img: "https://images.unsplash.com/photo-1617038220319-276d3cfab638?w=600",
        price: 2299
    },
    {
        id: 10,
        name: "Gold Hoop Earrings",
        img: "https://images.unsplash.com/photo-1630019852942-f89202989a59?w=600",
        price: 1599
    },
    {
        id: 11,
        name: "Layered Necklace",
      img:"https://images.unsplash.com/photo-1633934542430-0905ccb5f050?q=80&w=1025&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=NHwxMjA3fDA%3D",
        price: 1899
    },
    {
        id: 12,
        name: "Luxury Jewellery Set",
        img: "https://images.unsplash.com/photo-1619119069152-a2b331eb392a?w=600",
        price: 5999
    }
];

let localCartItem = JSON.parse(localStorage.getItem("cart")) || [];

// Display all products
function showProduct(searchText = "") {
    const productList = document.getElementById("product-list");

    productList.innerHTML = "";

    const filteredProducts = products.filter(p =>
        p.name.toLowerCase().includes(searchText.toLowerCase())
    );

    if (filteredProducts.length === 0) {
        productList.innerHTML =
            `<div class="col-12 text-center">
                <h4>No products found</h4>
            </div>`;
        return;
    }

    filteredProducts.forEach(p => {
        productList.innerHTML += `
            <div class="col-12 col-md-6 col-lg-4 d-flex">
                <div class="card product-card">

                    <img
                        src="${p.img}"
                        class="card-img-top product-img"
                        alt="${p.name}"
                        onerror="this.onerror=null; this.src='https://placehold.co/600x400?text=Image+Not+Available';"
                    >

                    <div class="card-body">

                        <h5 class="card-title">${p.name}</h5>

                        <h5 class="card-text">₹${p.price}</h5>

                        <div class="product-buttons">

                            <button
                                class="btn btn-primary"
                                onclick="addToCart(${p.id})">
                                Add to Cart
                            </button>

                            <button
                                class="btn btn-warning text-white"
                                onclick="updateProduct(${p.id})">
                                Update
                            </button>

                            <button
                                class="btn btn-danger"
                                onclick="deleteToCart(${p.id})">
                                Delete
                            </button>

                        </div>
                    </div>
                </div>
            </div>
        `;
    });
}

showProduct();

// serach bar 

document.getElementById("searchForm").addEventListener("submit", function(e) {
    e.preventDefault();

    let searchText = document.getElementById("searchInput").value.trim();

    showProduct(searchText);
});


// Search products
document.getElementById("searchForm").addEventListener("submit", function (e) {
    e.preventDefault();

    const searchText = document.getElementById("searchInput").value.trim();

    showProduct(searchText);
});

// Add product to cart
function addToCart(id) {
    try {
        let productItem = localCartItem.find(p => p.id === id);

        if (productItem) {
            productItem.qty++;
        } else {
            productItem = products.find(p => p.id === id);

            if (!productItem) {
                alert("Product not found");
                return;
            }

            localCartItem.push({
                ...productItem,
                qty: 1
            });
        }

        updateLocalStorage();

        alert("Item added successfully");
    } catch (error) {
        console.log(error);
    }
}

// Update cart in local storage
function updateLocalStorage() {
    localStorage.setItem("cart", JSON.stringify(localCartItem));

    showCartData();
    grandTotal();
}

// Show cart modal
function showCartItem() {
    const cartModal = document.getElementById("cartModal");
    const modal = bootstrap.Modal.getOrCreateInstance(cartModal);

    modal.show();

    showCartData();
    grandTotal();
}

// Display cart products
function showCartData() {
    const tableBody = document.getElementById("table-body");

    tableBody.innerHTML = "";

    localCartItem.forEach((p, index) => {
        tableBody.innerHTML += `
            <tr>
                <td>${index + 1}</td>

                <td>
                    <img
                        src="${p.img}"
                        class="cartProductImg"
                        alt="${p.name}"
                    >
                </td>

                <td>${p.name}</td>

                <td>₹${p.price}</td>

                <td>
                    <div class="d-flex justify-content-center align-items-center gap-2">

                        <button
                            class="btn btn-outline-success"
                            onclick="increaseQty(${p.id})">
                            +
                        </button>

                        <span>${p.qty}</span>

                        <button
                            class="btn btn-outline-warning"
                            onclick="decreaseQty(${p.id})">
                            -
                        </button>

                    </div>
                </td>

                <td>₹${p.qty * p.price}</td>

                <td>
                    <button
                        class="btn btn-outline-danger"
                        onclick="removeProduct(${p.id})">
                        Remove
                    </button>
                </td>
            </tr>
        `;
    });
}

// Increase quantity
function increaseQty(id) {
    const product = localCartItem.find(p => p.id === id);

    if (product) {
        product.qty++;
        updateLocalStorage();
    }
}

// Decrease quantity
function decreaseQty(id) {
    const product = localCartItem.find(p => p.id === id);

    if (!product) {
        return;
    }

    product.qty--;

    if (product.qty <= 0) {
        localCartItem = localCartItem.filter(p => p.id !== id);
    }

    updateLocalStorage();
}

// Remove product from cart
function removeProduct(id) {
    localCartItem = localCartItem.filter(p => p.id !== id);

    updateLocalStorage();
}

// Calculate grand total
function grandTotal() {
    const total = document.getElementById("GrandTotal");

    const totalAmounts = localCartItem.reduce((acc, curr) => {
        return acc + Number(curr.price) * curr.qty;
    }, 0);

    total.innerHTML = `Grand Total: ₹${totalAmounts}`;
}

// Checkout
function checkOut() {
    if (localCartItem.length === 0) {
        alert("Your cart is empty. Please add some products.");
        return;
    }

    alert("Your order placed successfully");

    localCartItem = [];

    updateLocalStorage();

    const cartModal = document.getElementById("cartModal");
    const modal = bootstrap.Modal.getInstance(cartModal);

    if (modal) {
        modal.hide();
    }
}

// Show Add Product modal
function addProductModalShow() {
    const addProductModal = document.getElementById("addProductModal");

    bootstrap.Modal.getOrCreateInstance(addProductModal).show();
}

// Add a new product
document.getElementById("addProductForm").addEventListener("submit", function (e) {
    e.preventDefault();

    const productName = document.getElementById("productName").value.trim();
    const productPrice = Number(document.getElementById("ProductPrice").value);
    const productImage = document.getElementById("ProductImage").value.trim();

    if (!productName || !productImage || productPrice < 0 ||
        document.getElementById("ProductPrice").value === "") {
        alert("Please enter valid product details");
        return;
    }

    const newProduct = {
        id: Date.now(),
        name: productName,
        price: productPrice,
        img: productImage
    };

    products.push(newProduct);

    showProduct();

    this.reset();

    alert("New product added successfully");

    bootstrap.Modal.getInstance(
        document.getElementById("addProductModal")
    ).hide();
});

// Delete product
function deleteToCart(id) {
    const deleteProduct = products.find(p => p.id === id);

    if (!deleteProduct) {
        alert("Product not found");
        return;
    }

    if (!confirm("Are you sure you want to delete this product?")) {
        return;
    }

    products = products.filter(p => p.id !== id);

    // Also remove the deleted product from the cart
    localCartItem = localCartItem.filter(p => p.id !== id);

    updateLocalStorage();
    showProduct();

    alert("Product deleted successfully");
}

// Update product
function updateProduct(id) {
    const product = products.find(p => p.id === id);

    if (!product) {
        alert("Product not found");
        return;
    }

    document.getElementById("updateProductName").value = product.name;
    document.getElementById("updateProductPrice").value = product.price;
    document.getElementById("updateProductImage").value = product.img;

    const updateModal = document.getElementById("updateProductModal");

    bootstrap.Modal.getOrCreateInstance(updateModal).show();

    const form = document.getElementById("updateProductForm");

    // Save the updated product details
    form.onsubmit = function (e) {
        e.preventDefault();

        const newName = document.getElementById("updateProductName").value.trim();
        const newPrice = Number(document.getElementById("updateProductPrice").value);
        const newImage = document.getElementById("updateProductImage").value.trim();

        if (!newName || !newImage ||
            document.getElementById("updateProductPrice").value === "" ||
            newPrice < 0) {
            alert("Please enter valid product details");
            return;
        }

        // Update the product
        product.name = newName;
        product.price = newPrice;
        product.img = newImage;

        // Update matching item in the cart too
        localCartItem = localCartItem.map(p => {
            if (p.id === id) {
                return {
                    ...p,
                    name: newName,
                    price: newPrice,
                    img: newImage
                };
            }

            return p;
        });

        updateLocalStorage();
        showProduct();

        bootstrap.Modal.getInstance(updateModal).hide();

        alert("Product details updated successfully");
    };
}
