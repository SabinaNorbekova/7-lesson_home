// Mahsulov nomi - ?
// Mahsulot miqdori - ?
// Mahsulot narxi - ?
// yana Mahsulot qo'shasizmi?

function getInfo(products) {
    const product = {};
    const productName = prompt("Mahsulot nomi?");
    if (!productName || productName.length == 0 || productName == undefined) {
      console.log("To'g'ri nom kiriting!");
    }
    product.name = productName;
    const productWeight = +prompt("Mahsulot miqdori?");
    if (isNaN(productWeight)) {
      console.log("To'g'ri moqdorini to'g'ri kiriting!");
    }
    product.weight = productWeight;
  
    const productPrice = +prompt("Mahsulot narxi?");
    if (isNaN(productPrice)) {
      console.log("To'g'ri narxini to'g'ri kiriting!");
    }
    product.price = productPrice;
    products.push(product)

    /////
    const request = confirm("yana mahsulot qo'shasizmi?")
    if(request){
        getInfo(products)
    }else{
        totalPrice(products)
    }
    /////
      
    return product;
  }

  //
  function totalPrice(products){
    let totalSum = 0
        for (let key of products){
            totalSum += key.price * key.weight
        }
        console.log(totalSum)
    return `Xaridingiz to'lovi ${totalSum} so'm`
  }
  //
  
  function productCalc(callback) {
    alert(`Assalomu alaykum Bizning shopimizga hush kelibsiz:)`);
    const userName = prompt("Ismingiz?");
  
    let products = [];
    const confirmation = confirm(`${userName} Siz mahsulot olishni hohlaysizmi?`);
    if (confirmation) {
      const product = callback(products);
      products.push(product);
    }
  }

  productCalc(getInfo);
  