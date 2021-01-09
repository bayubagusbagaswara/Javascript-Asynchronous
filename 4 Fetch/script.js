function getProductsUrl(keyword) {
  return `https://www.blibli.com/backend/search/products?searchTerm=${keyword}`;
}

function getProducts(keyword) {
  // Code Fetch API Here!
  const url = getProductsUrl(keyword);
  return fetch(url, {
    method: "GET",
  }).then(function (response) {
    // kalau ingin mendapatkan body nya doang, perlu translate response nya menjadi data json body nya. Jadi gaperlu parse manual seperti AJAX
    return response.json();
  });
}

function clearProducts() {
  const productUl = document.getElementById("products");
  productUl.textContent = "";
}
function displaProducts(data) {
  data.data.products.forEach((product) => displayProduct(product));
}
function displayProduct(product) {
  const productLi = document.createElement("li");
  productLi.textContent = product.name;

  const productUl = document.getElementById("products");
  productUl.appendChild(productLi);
}

function buttonClick() {
  const promise = getProducts(document.getElementById("keyword").value);
  promise
    .then(function (value) {
      return value.data.products;
    })
    .then(function (products) {
      clearProducts();
      products.forEach(function (product) {
        displayProduct(product);
      });
    })
    .catch(function (error) {
      alert(error.message);
    })
    .finally(function () {
      console.log("Selesai memproses Promise");
    });
}
/* ===== Noted 
- dengan menggunakan fetch API tidak terlalu complicated kalo kita butuh data dari server, dan lebih sederhana dan otomatis ditranslate menjadi promise
===== */
