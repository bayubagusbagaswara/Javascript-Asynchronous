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
  // const promise = getProducts(document.getElementById("keyword").value);
  // promise
  //   .then(function (value) {
  //     return value.data.products;
  //   })
  //   .then(function (products) {
  //     clearProducts();
  //     products.forEach(function (product) {
  //       displayProduct(product);
  //     });
  //   })
  //   .catch(function (error) {
  //     alert(error.message);
  //   })
  //   .finally(function () {
  //     console.log("Selesai memproses Promise");
  //   });

  // Promise dari masing-masing keyword
  const promise1 = getProducts(document.getElementById("keyword").value);
  const promise2 = getProducts(document.getElementById("keyword2").value);
  const promise3 = getProducts(document.getElementById("keyword3").value);

  // penggabungan promise
  Promise.all([promise1, promise2, promise3])
    .then(function (values) {
      // dari data pencarian values kita map lagi, kita transform datanya, kita ambil datanya yang products nya doang
      return values.map((value) => value.data.products);
    })
    // datanya (values) sudah menjadi Array of products-products
    .then(function (values) {
      clearProducts();
      // dari data products nya kita lakukan forEach
      values.forEach(function (products) {
        // lalu products nya kita masukkan ke list
        products.forEach(function (product) {
          displayProduct(product);
        });
      });
    })
    .catch(function (error) {
      alert(error.message);
    })
    .finally(function () {
      console.log("Selesai memproses semua Promise");
    });
}
