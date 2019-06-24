
 
function updatePriceItem(){
    
    for(let i=0; i<2; i++)
    {
    var price = document.getElementsByClassName('product-price')[i+1].innerText
    var quantity= document.getElementsByClassName('quantity')[i].value
    document.getElementsByClassName('product-line-price')[i+1].innerText= (quantity*price).toFixed(2)
    }
    document.getElementsByClassName('totals-value')[0].innerText=
    (document.getElementsByClassName('product-line-price')[1].innerText*document.getElementsByClassName('quantity')[0].value
    +document.getElementsByClassName('product-line-price')[2].innerText*document.getElementsByClassName('quantity')[1].value).toFixed(2)
}