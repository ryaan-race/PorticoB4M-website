// Menu Items
const menuItems = [
  {id:1,name:"Margherita Pizza",category:"Pizza",price:8,img:"images/menu1.jpg"},
  {id:2,name:"Pepperoni Pizza",category:"Pizza",price:10,img:"images/menu2.jpg"},
  {id:3,name:"Veggie Burger",category:"Burger",price:7,img:"images/menu1.jpg"},
  {id:4,name:"Cheese Pasta",category:"Pasta",price:9,img:"images/menu2.jpg"},
  {id:5,name:"Chocolate Cake",category:"Dessert",price:5,img:"images/menu1.jpg"},
  {id:6,name:"Coke",category:"Beverage",price:2,img:"images/menu2.jpg"},
];

// Cart
let cart = [];

// Render Menu
function renderMenu(items){
  const grid = document.getElementById("menuGrid");
  grid.innerHTML = "";
  items.forEach(item=>{
    const card = document.createElement("div");
    card.className = "menu-card";
    card.innerHTML = `<img src="${item.img}" alt="${item.name}"><h4>${item.name}</h4><p>$${item.price}</p><button onclick="addToCart(${item.id})">Add to Cart</button>`;
    grid.appendChild(card);
  });
}
renderMenu(menuItems);

// Menu Filters
document.querySelectorAll(".menu-filters button").forEach(btn=>{
  btn.addEventListener("click", ()=>{
    document.querySelectorAll(".menu-filters button").forEach(b=>b.classList.remove("active"));
    btn.classList.add("active");
    const cat = btn.dataset.category;
    renderMenu(cat==="All"?menuItems:menuItems.filter(m=>m.category===cat));
  });
});

// Search
document.getElementById("headerSearch").addEventListener("input", e=>{
  const val =
