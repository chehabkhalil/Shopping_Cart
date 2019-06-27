
if (document.readyState == 'loading'){
    document.addEventListener('DOMContentLoaded', ready)
} else {
    ready()
}
function ready(){
    var removeproduct = document.getElementsByClassName('remove-product')
    for(var i=0; i<removeproduct.length ;i++){
        var btn_remove_line= removeproduct[i]
       btn_remove_line.addEventListener('click',removeCmdLine)
   }
  
}
function removeCmdLine(event){
    var btn_remove_line = event.target
    btn_remove_line.parentElement.parentElement.remove('product')
    var removeproduct = document.getElementsByClassName('remove-product')
    for(let i=0; i<removeproduct.length; i++)
    {
    var price = document.getElementsByClassName('product-price')[i+1].innerText
    var quantity= document.getElementsByClassName('quantity')[i].value
    document.getElementsByClassName('product-line-price')[i+1].innerText= (quantity*price).toFixed(2)
    }
     if(removeproduct.length==1){
        document.getElementsByClassName('totals-value')[0].innerText=
    (document.getElementsByClassName('product-line-price')[1].innerText*1).toFixed(2)
    }
    else if(removeproduct.length==0)
    {
        document.getElementsByClassName('totals-value')[0].innerText="0"
    }
}

function updatePriceItem(){
    var length = document.getElementsByClassName('remove-product').length
    if(length==2){
        for(let i=0; i<2; i++)
    {
    var price = document.getElementsByClassName('product-price')[i+1].innerText
    var quantity= document.getElementsByClassName('quantity')[i].value
    document.getElementsByClassName('product-line-price')[i+1].innerText= (quantity*price).toFixed(2)
    }
    document.getElementsByClassName('totals-value')[0].innerText=
    (document.getElementsByClassName('product-line-price')[1].innerText*1
    +document.getElementsByClassName('product-line-price')[2].innerText*1).toFixed(2)
    }
    else if(length==1)
    {
    var price = document.getElementsByClassName('product-price')[1].innerText
    var quantity= document.getElementsByClassName('quantity')[0].value
    document.getElementsByClassName('product-line-price')[1].innerText= (quantity*price).toFixed(2)
    document.getElementsByClassName('totals-value')[0].innerText=(quantity*price).toFixed(2)
    }
    
}
function checkout(){
        
    if(document.getElementsByClassName('remove-product').length==0)
    {
        alert('pas de cmd')
    }
    else
    {
       alert('commande validée')
    }
}