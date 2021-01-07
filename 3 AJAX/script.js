function getProductsUrl(keyword) {
  return `https://www.blibli.com/backend/search/products?searchTerm=${keyword}`;
}

function getProducts(keyword) {
  // Code AJAX Here!

  // buat AJAX nya
  const ajax = new XMLHttpRequest();
  // ambil dari URL nya
  const url = getProductsUrl(keyword);
  ajax.open("GET", url);
  // panggil AJAX nya
  ajax.send();

  // untuk mendapatkan respon nya -> String JSON nya
  // tidak bisa dilakukan secara synchronous
  // const response = JSON.parse(ajax.responseText);
}

// Menghapus semua data product yang ada di list
function clearProducts() {
  const productUl = document.getElementById("products");
  productUl.textContent = "";
}

// Menampilkan data-data dari respon backend
function displayProducts(data) {
  data.data.products.forEach((product) => displayProduct(product));
}

// Menampilkan satu-satu data product kedalam list
function displayProduct(product) {
  const productLi = document.createElement("li");
  productLi.textContent = product.name;

  const productUl = document.getElementById("products");
  productUl.appendChild(productLi);
}

function buttonClick() {
  // panggil method getProducts dengan mengirimkan keyword berupa text yang diambil dari document elementbyid
  getProducts(document.getElementById("keyword").value);
}
