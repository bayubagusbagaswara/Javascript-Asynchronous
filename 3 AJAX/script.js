function getProductsUrl(keyword) {
  return `https://www.blibli.com/backend/search/products?searchTerm=${keyword}`;
}

function getProducts(keyword) {
  // di dalam method ini akan memanggil AJAX
  // Code AJAX Here!

  // buat AJAX nya
  const ajax = new XMLHttpRequest();
  // untuk mendapatkan respon AJAX menggunakan callback
  ajax.onload = function () {
    // panggil function displayProducts, harus kirim parameter data dulu
    const data = JSON.parse(ajax.responseText);

    // panggil clear Product, agar saat search diklik bisa menghapus product sebelumnya
    clearProducts();

    // masukkan data ke displayProducts
    displayProducts(data);
  };

  // ambil dari URL nya
  const url = getProductsUrl(keyword);
  ajax.open("GET", url);
  // panggil AJAX nya
  ajax.send();

  // syntaks dibawah tidak bisa dilakukan secara synchronous
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
  getProducts(document.getElementById("keyword").value);
  // coba untuk melihat apakah proses dilakukan secara asynchronous, ketik console.log
  console.log("Success Click Button"); // akan ditampilkan dahulu sebelum data product selesai diload dan ditampilkan
}
