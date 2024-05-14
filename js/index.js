let bar = document.querySelector(".bar")
// console.log(bar)
let list =document.querySelector(".contain")
// console.log(list)
let close=document.querySelector(".close")
if(bar){
    bar.addEventListener("click" , ()=>{
        list.classList.add("active")
    })
}
if(close){
    close.addEventListener("click" , ()=>{
        list.classList.remove("active")
    })
}
let cartClick=document.getElementsByClassName("click")[0]
let cartClickMobile=document.getElementsByClassName("click")[1]
console.log(cartClick)
let mainCart=document.getElementsByClassName("main-cart")[0]
console.log(mainCart)
cartClick.onclick=function(){
    if(mainCart.classList.contains("clicked")){
        mainCart.classList.remove("clicked")
    }else{
        mainCart.classList.add("clicked")
    }
}
cartClickMobile.onclick=function(){
    if(mainCart.classList.contains("clicked")){
        mainCart.classList.remove("clicked")
    }else{
        mainCart.classList.add("clicked")
    }
}
// ###########################################
if (document.readyState == "loading"){
    document.addEventListener("DOMContentLoaded" , ready)
}else{
    ready()
}
function ready(){
    let deleteIcon=document.getElementsByClassName("delete")
    console.log(deleteIcon)
    for(let i=0 ; i<deleteIcon.length ; i++){
        var button=deleteIcon[i]
        button.addEventListener("click" , removeItems)
    }
    var quantityInputs = document.getElementsByClassName("quantity")
    for(var i = 0 ; i<quantityInputs.length ; i++){
        var input = quantityInputs[i]
        input.addEventListener("change" , quantityChanged)
    }
    var addCart=document.getElementsByClassName("cart")
    for(var i=0 ; i<addCart.length ; i++){
        var button=addCart[i]
        button.addEventListener("click" , addCartClicked)
    }
    updateTotal()
}
function removeItems(event){ 
    var buttonClicked=event.target
    console.log(buttonClicked.parentElement)
    buttonClicked.parentElement.remove()
    updateTotal()
}
function quantityChanged(event){
    var input=event.target
    if(isNaN(input.value) ||input.value <=0){
        input.value=1
    }
    updateTotal()
}
function addCartClicked(event){
    var button=event.target
    var shopProduct=button.parentElement
    var title=shopProduct.getElementsByClassName("title")[0].innerText
    var brand=shopProduct.getElementsByClassName("brand")[0].innerText
    var img=shopProduct.getElementsByClassName("image")[0].src
    var price=shopProduct.getElementsByClassName("price")[0].innerText
    console.log(title, img , brand , price)
    addproductToCart(title , brand , img ,price )
    updateTotal()
}
function addproductToCart(title , brand , img , price){
    var cartShopBox=document.createElement("div")
    cartShopBox.classList.add("cart-box")
    var cartItems=document.getElementsByClassName("cart-content")[0]
    var cartItemsNames=document.getElementsByClassName("cart-title")
    var cartBoxContent=`<img src="${img}" width="500px">
    <span class="cart-prduct-brand">${brand}</span>
    <span class="cart-title">${title}</span>
        <span class="cart-price">${price}</span>
        <input type="number" value="1" class="quantity" ></input>
        <i class="fa-solid fa-trash delete"></i>`
        cartShopBox.innerHTML=cartBoxContent
        cartItems.append(cartShopBox)
        cartShopBox.getElementsByClassName("delete")[0].addEventListener("click" , removeItems)
        cartShopBox.getElementsByClassName("quantity")[0].addEventListener("change" , quantityChanged)
        updateTotal()
}
// update total
function updateTotal(){
    var total=0
    var cartContent=document.getElementsByClassName("cart-content")[0]
    var cartBoxes=cartContent.getElementsByClassName("cart-box")
    for(let i=0 ; i<cartBoxes.length ; i++){
        var cartBox=cartBoxes[i]
        var priceElement=cartBox.getElementsByClassName("cart-price")[0]
        var quantity=cartBox.getElementsByClassName("quantity")[0].value
        var price=parseFloat(priceElement.innerText.replace("$" , ""))
        console.log(price)
        console.log(quantity)
        total=total + (price*quantity)
        document.getElementsByClassName("total")[0].innerText= "$" + total
        document.getElementsByClassName("Sub-total")[0].innerText= "$" + total
    }
}

