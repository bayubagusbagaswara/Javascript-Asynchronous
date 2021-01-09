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
- finally akan dieksekusi meskipun promisenya sukses ataupun gagal ===== */
