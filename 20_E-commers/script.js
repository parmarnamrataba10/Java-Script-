
const products = [
    {
        id: 1,
        name: "Wireless Headphones",
        img: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e",
        price: 1499
    },
    {
        id: 2,
        name: "Smart Watch",
        img: "https://images.unsplash.com/photo-1523275335684-37898b6baf30",
        price: 2499
    },
    {
        id: 3,
        name: "Running Shoes",
        img: "https://images.unsplash.com/photo-1542291026-7eec264c27ff",
        price: 1999
    },
    {
        id: 4,
        name: "Backpack",
        img: "https://images.unsplash.com/photo-1553062407-98eeb64c6a62",
        price: 999
    },
    {
        id: 5,
        name: "Sunglasses",
        img: "https://images.unsplash.com/photo-1511499767150-a48a237f0083",
        price: 799
    },
    {
        id: 6,
        name: "Digital Camera",
        img: "https://images.unsplash.com/photo-1516035069371-29a1b244cc32",
        price: 15999
    },
    {
        id: 7,
        name: "Laptop",
        img: "https://images.unsplash.com/photo-1496181133206-80ce9b88a853",
        price: 54999
    },
    {
        id: 8,
        name: "Mechanical Keyboard",
        img: "https://images.unsplash.com/photo-1587829741301-dc798b83add3",
        price: 2999
    },
    {
        id: 9,
        name: "Mobile Phone",
        img: "https://images.unsplash.com/photo-1511707171634-5f897ff02aa9",
        price: 24999
    },
    {
        id: 10,
        name: "Leather Wallet",
        img: "https://images.unsplash.com/photo-1627123424574-724758594e93",
        price: 699
    },
    {
        id: 11,
        name: "Coffee Mug",
        img: "https://images.unsplash.com/photo-1514228742587-6b1558fcca3d",
        price: 399
    },
    {
        id: 12,
        name: "Bluetooth Speaker",
        img: "https://images.unsplash.com/photo-1608043152269-423dbba4e7e1",
        price: 1799
    }
];


function showProduct() {

    const productList = document.getElementById("product-list")

    productList.innerHTML = "";

    products.forEach((p) => {

        productList.innerHTML += `<div class="col-md-4 mt-3">
        
        <div div class="card product-card" >

                <img src="${p.img}" class="card-img-top product-img alt="${p.name}">
                  <div class="card-body">
                  <h5 class="card-title">${p.name}</h5>
                 <p class="card-text">${p.price}</p>

                 <button class="btn btn-primary">Add to Cart</button>
                    </div>
                </div>
        
        
        </div>`


    })
}

showProduct()