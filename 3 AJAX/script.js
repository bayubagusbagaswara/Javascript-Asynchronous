function getProductsUrl(keyword) {
  return `https://www.blibli.com/backend/search/products?searchTerm=${keyword}`;
}

// jadikan callbacknya sebagai argument
function getProducts(keyword, callbackSuccess, callbackError) {
  // Code AJAX Here!
  const ajax = new XMLHttpRequest();

  ajax.onload = function () {
    if (ajax.status === 200) {
      const data = JSON.parse(ajax.responseText);
      // tidak perlu manggil callback secara langsung
      callbackSuccess(data);
    } else {
      callbackError();
    }
  };

  const url = getProductsUrl(keyword);
  ajax.open("GET", url);
  ajax.send();
}

function getProductsError() {
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
// Function untuk clear data product dalam table
function clearTableProducts(data) {
  const productUl = document.getElementById("table-products");
  productUl.textContent = "";
}
// Function menampilkan data product dalam bentuk table
function displayTableProducts(data) {
  const table = document.createElement("table");
  table.setAttribute("border", 1);

  let index = 0;
  data.data.products.forEach((product) => {
    table.insertRow(index).insertCell(0).innerText = product.name;
    index++;
  });

  const tableProduct = document.getElementById("table-products");
  tableProduct.appendChild(table);
}

function buttonClick() {
  // selain value, kirimkan juga parameter callback success dan error
  getProducts(
    document.getElementById("keyword").value,
    function (data) {
      // function anonymous karena berisi 2 tugas untuk clear & display
      clearProducts();
      displayProducts(data);
    },
    function () {
      getProductsError;
    }
  );
  console.log("Success Click Button");
}
