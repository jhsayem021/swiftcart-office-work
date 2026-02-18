let allProducts = [];
const loadAllProducts = () =>{
    fetch("https://fakestoreapi.com/products")
    .then((res) => res.json())
    .then((data) => {
        allProducts = data; 
        topRatedProducts(data);  
        displayAllProducts(data);
        console.log("All products loaded", displayAllProducts)
        
    })
}
const loadAllCategories = () =>{
    fetch("https://fakestoreapi.com/products/categories")
    .then((res) => res.json())
    .then((data) => {
      data.unshift('All')
      displayCategory(data)})
}
const displayAllProducts = (products)=>{

console.log(products)
const allProductContainer = document.getElementById("product-container")
    allProductContainer.innerHTML = ""

    for(let product of products){

        const productDiv = document.createElement("div")
        productDiv.classList.add("card" ,"bg-base-100", "w-84", "shadow-sm");
        productDiv.innerHTML=`
        
          <figure>
            <img class="max-h-[300px] min-h-[300px]" src="${product.image}" alt="Shoes" />
          </figure>
          <div class="card-body">
            <div class="flex justify-between items-center">
              <div class="bg-[#E0E7FF] text-[#3B25C1] text-[11px] font-bold px-3 py-1 rounded-full  text-center"> <p>${product.category}</p></div>
              <div class=""> <i class="fa-solid fa-star text-[#FED232]"></i>
                <span class="text-[#5B6473]">${product?.rating?.rate} (${product?.rating?.count})</span>
              </div>
            </div>
            <h2 class="card-title -mb-2 mt-4 truncate text-overflow: ellipsis;" >
              ${product.title}
            </h2>
            <p class="font-bold text-[15px]" >$ ${product.price}</p>
            <div class="card-actions justify-between mt-5">
              <button class="btn border-1 border-[#DBDEE4] hover:border-[#3B25C1] bg-[#FFFFFF] text-[#5B6473] hover:text-[#3B25C1] lg:w-34 w-28"> <i class="fa-regular fa-eye"></i> Default</button>
              <button class="btn border-1 border-[#3B25C1] hover:border-[#3B25C1] bg-[#3B25C1] hover:bg-[#FFFFFF] text-white hover:text-[#3B25C1] lg:w-34 w-28 "> <i class="fa-solid fa-cart-plus"></i> Add</button>
            </div>
          </div>
        
        `
        allProductContainer.append(productDiv)
    }

};

const filterByCategory = (categoryName) => {
    if(categoryName === "All"){
      console.log("Get all products")
        displayAllProducts(allProducts);
        return;
    }
    const filteredProducts = allProducts.filter(product =>
        product.category === categoryName
    );
    console.log("Get Category products")

    displayAllProducts(filteredProducts);
};
const topRatedProducts = (products) =>{
  // console.log("Get top rated products")
    const mostRatedProduct = products.filter(product =>(product?.rating?.count) > 450)
    // console.log(mostRatedProduct);
    displayTopProducts(mostRatedProduct);
   
}
const displayCategory = (categories)=>{
// console.log(categories)
const allCategories = document.getElementById("categories")
    allCategories.innerHTML = ""
    for(let category of categories){
        const categoryDiv = document.createElement("button")
        categoryDiv.classList.add("btn", "border-1" ,"border-[#3B25C1]", "hover:border-[#3B25C1]", "bg-[#FFFFFF]", "hover:bg-[#3B25C1]", "focus:bg-[#3B25C1]","focus:text-[#FFFFFF]", "text-[#3B25C1]", "hover:text-[#FFFFFF]", "focus:text-[#FFFFFF]" ,  "rounded-full");
        categoryDiv.innerHTML=`${category}`
        categoryDiv.onclick = () => {
            filterByCategory(category);   
        };
        allCategories.append(categoryDiv)
    }

};

const displayTopProducts = (products)=>{
// console.log(products)


    // topProductContainer.innerHTML = ""

    for(let product of products){
        const topProductContainer = document.getElementById("top-product-container")
        const productDiv = document.createElement("div")
        productDiv.classList.add("card" ,"bg-base-100", "lg:w-84", "shadow-sm");
        productDiv.innerHTML=`
        
          <figure>
            <img class="max-h-[300px] min-h-[300px] "  src="${product.image}" alt="Shoes" />
          </figure>
          <div class="card-body">
            <div class="flex justify-between items-center">
              <div class="bg-[#E0E7FF] text-[#3B25C1] text-[11px] font-bold px-3 py-1 rounded-full  text-center"> <p>${product.category}</p></div>
              <div class=""> <i class="fa-solid fa-star text-[#FED232]"></i>
                <span class="text-[#5B6473]">${product?.rating?.rate} (${product?.rating?.count})</span>
              </div>
            </div>
            <h2 class="card-title -mb-2 mt-4 truncate text-overflow: ellipsis;" >
              ${product.title}
            </h2>
            <p class="font-bold text-[15px]" >$ ${product.price}</p>
            <div class="card-actions justify-between mt-5">
              <button class="btn border-1 border-[#DBDEE4] hover:border-[#3B25C1] bg-[#FFFFFF] text-[#5B6473] hover:text-[#3B25C1] lg:w-34 w-28"> <i class="fa-regular fa-eye"></i> Default</button>
              <button class="btn border-1 border-[#3B25C1] hover:border-[#3B25C1] bg-[#3B25C1] hover:bg-[#FFFFFF] text-white hover:text-[#3B25C1] lg:w-34 w-28 "> <i class="fa-solid fa-cart-plus"></i> Add</button>
            </div>
          </div>
        
        `
        topProductContainer.append(productDiv)
    }

};


loadAllProducts();
loadAllCategories();

