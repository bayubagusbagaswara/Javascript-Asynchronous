function getProductsUrl(keyword) {
  return `https://www.blibli.com/backend/search/products?searchTerm=${keyword}`;
}

function getProducts(keyword) {
  // Code Promise Here!
  const promise = new Promise(function (resolve, reject) {
    // code async

    const ajax = new XMLHttpRequest();
    ajax.onload = function () {
      if (ajax.status === 200) {
        const data = JSON.parse(ajax.responseText);
        // tidak perlu manggil callback secara langsung
        resolve(data);
      } else {
        reject(Error("Gagal mengambil data produk"));
      }
    };

    const url = getProductsUrl(keyword);
    ajax.open("GET", url);
    ajax.send();
  });
  return promise;
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
  // kembaliannya dalam promise lagi
  const promise = getProducts(document.getElementById("keyword").value);
  console.log("Success Click Button");
}

/* ===== 
- jadi tinggal mindahin code asynchronous, pindahin ke function callbacknya promise. Lalu kalau success panggil resolve, kalau gagal panggil reject.
===== */
