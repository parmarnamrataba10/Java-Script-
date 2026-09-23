

const products = [
    {
        id: 1,
        name: "Wireless Headphones",
        img: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e",
        price: 1499,
    },

    {
        id: 2,
        name: "Smart Watch",
        img: "https://images.unsplash.com/photo-1523275335684-37898b6baf30",
        price: 2499,
    },

    {
        id: 3,
        name: "Running Shoes",
        img: "https://images.unsplash.com/photo-1542291026-7eec264c27ff",
        price: 1999,
    },

    {
        id: 4,
        name: "Backpack",
        img: "https://images.unsplash.com/photo-1553062407-98eeb64c6a62",
        price: 999,
    },

    {
        id: 5,
        name: "Sunglasses",
        img: "https://images.unsplash.com/photo-1511499767150-a48a237f0083",
        price: 799,
    },

    {
        id: 6,
        name: "Digital Camera",
        img: "https://images.unsplash.com/photo-1516035069371-29a1b244cc32",
        price: 15999,
    },

    {
        id: 7,
        name: "Laptop",
        img: "https://images.unsplash.com/photo-1496181133206-80ce9b88a853",
        price: 54999,
    },

    {
        id: 8,
        name: "Mechanical Keyboard",
        img: "https://images.unsplash.com/photo-1587829741301-dc798b83add3",
        price: 2999,
    },

    {
        id: 9,
        name: "Mobile Phone",
        img: "https://images.unsplash.com/photo-1511707171634-5f897ff02aa9",
        price: 24999,
    },

    {
        id: 10,
        name: "Leather Wallet",
        img: "https://images.unsplash.com/photo-1627123424574-724758594e93",
        price: 699,
    },

    {
        id: 11,
        name: "Coffee Mug",
        img: "https://images.unsplash.com/photo-1514228742587-6b1558fcca3d",
        price: 399,
    },

    {
        id: 12,
        name: "Bluetooth Speaker",
        img: "https://images.unsplash.com/photo-1608043152269-423dbba4e7e1",
        price: 1799,
    },
];

let localCartItem = JSON.parse(localStorage.getItem("cart")) || [];




function showProduct() {

    const productList = document.getElementById("product-list");

    productList.innerHTML = "";

    products.forEach((p) => {

        productList.innerHTML += `
            <div class="col-md-4 mt-3">

                <div class="card product-card">

                    <img 
                        src="${p.img}" 
                        class="card-img-top product-img" 
                        alt="${p.name}"
                    >

                    <div class="card-body">

                        <h5 class="card-title">
                            ${p.name}
                        </h5>

                        <p class="card-text">
                            ₹${p.price}
                        </p>

                        <button 
                            onclick="addToCart(${p.id})" 
                            class="btn btn-primary">
                            Add to Cart
                        </button>

                    </div>

                </div>

            </div>
        `;
    });
}

showProduct();



function addToCart(id) {

    try {

        let productItem = localCartItem.find((p) => p.id === id);

        if (productItem) {

            productItem.qty++;

        } else {

            productItem = products.find((p) => p.id === id);

            localCartItem.push({
                ...productItem,
                qty: 1,
            });
        }

        updateLocalStorage();

        alert("Item added successfully");

    } catch (error) {

        console.log(error);

    }
}



function updateLocalStorage() {

    localStorage.setItem("cart", JSON.stringify(localCartItem));

}

function showCartItem() {

    const cartModal = document.getElementById("cartModal");

    const modal = new bootstrap.Modal(cartModal);

    modal.show();

    showCartData();

}


function showCartData() {

    const tableBody = document.getElementById("table-body");

    tableBody.innerHTML = "";

    localCartItem.forEach((p, index) => {

        tableBody.innerHTML += `
            <tr>

                <td>
                    ${index + 1}
                </td>

                <td>

                    <img 
                        src="${p.img}" 
                        class="cartProductImg" 
                        alt="${p.name}"
                        width="60"
                    >

                </td>

                <td>
                    ${p.name}
                </td>

                <td>
                    ₹${p.price}
                </td>

                <td>

                    <div class="d-flex justify-content-center align-items-center gap-3">

                        <button 
                            class="btn btn-outline-success"
                            onclick="increaseQty(${p.id})">
                            +
                        </button>

                        <h5>
                            ${p.qty}
                        </h5>

                        <button 
                            class="btn btn-outline-warning"
                            onclick="decreaseQty(${p.id})">
                            -
                        </button>

                    </div>

                </td>

                <td>
                    ₹${p.qty * p.price}
                </td>

                <td>

                    <button 
                        class="btn btn-outline-danger"
                        onclick="removeItem(${p.id})">
                        Remove
                    </button>

                </td>

            </tr>
        `;
    });
}


function increaseQty(id) {

    let productItem = localCartItem.find((p) => p.id === id);

    if (productItem) {

        productItem.qty++;

    }

    updateLocalStorage();

    showCartData();

}

function decreaseQty(id) {

    let productItem = localCartItem.find((p) => p.id === id);

    if (productItem) {

        productItem.qty--;

        if (productItem.qty <= 0) {

            localCartItem = localCartItem.filter((p) => p.id !== id);

        }
    }

    updateLocalStorage();

    showCartData();

}



function removeItem(id) {

    localCartItem = localCartItem.filter((p) => p.id !== id);

    updateLocalStorage();

    showCartData();

}