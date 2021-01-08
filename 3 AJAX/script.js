function getProductsUrl(keyword) {
  return `https://www.blibli.com/backend/search/products?searchTerm=${keyword}`;
}

function getProducts(keyword) {
  // Code AJAX Here!
  const ajax = new XMLHttpRequest();

  ajax.onload = function () {
    // pikir kalau Client dan Server selalu ada Problem, maka harus dicek
    if (ajax.status === 200) {
      // success
      const data = JSON.parse(ajax.responseText);
      clearProducts();
      displayProducts(data);
    } else {
      // error
      getProductsError();
    }
  };

  const url = getProductsUrl(keyword);
  ajax.open("GET", url);
  ajax.send();
}

// function untuk error saat proses callback
function getProductsError() {
  // untuk menguji error, coba salahkan url get product nya
  console.log("Error get products");
  alert("Error get products");
}

function clearProducts() {
  const productUl = document.getElementById("products");
  productUl.textContent = "";
}

function displayProducts(data) {
  data.data.products.forEach((product) => displayProduct(product));
}

function displayProduct(product) {
  const productLi = document.createElement("li");
  productLi.textContent = product.name;

  const productUl = document.getElementById("products");
  productUl.appendChild(productLi);
}

function buttonClick() {
  getProducts(document.getElementById("keyword").value);
}
