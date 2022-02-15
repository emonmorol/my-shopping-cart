function increaseDecrease(id,price,willAdd){
    const getId = document.getElementById(id + '-quantity');
    let inputText = getId.value;
        if( willAdd == true){
            inputText = parseInt(inputText) + 1; 
        }
        else if( willAdd == false && inputText > 0 ){
            inputText = parseInt(inputText) - 1; 
        }
        getId.value = inputText;
    const priceValue = document.getElementById(id + '-price');
    priceValue.innerText = inputText * price ;
    checkOutAllPrice();
}

function checkOutAllPrice(){
    const formalValue = document.getElementById('formal-price').innerText;
    const formalPrice = parseFloat(formalValue);
    const casualValue = document.getElementById('casual-price').innerText;
    const casualPrice = parseFloat(casualValue);
    
    const subTotal = document.getElementById('sub-total').innerText = formalPrice + casualPrice ;
    const taxValue = document.getElementById('tax').innerText = subTotal/10;
    document.getElementById('total-price').innerText = taxValue + subTotal;

}

document.getElementById('casual-plus').addEventListener('click',function(){
    increaseDecrease('casual',300,true);
});
document.getElementById('casual-minus').addEventListener('click',function(){
    increaseDecrease('casual',300,false);
});
document.getElementById('formal-plus').addEventListener('click',function(){
    increaseDecrease('formal',600,true);
});
document.getElementById('formal-minus').addEventListener('click',function(){
    increaseDecrease('formal',600,false);
});