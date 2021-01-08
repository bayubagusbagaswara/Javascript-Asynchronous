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

// Function displayProducts dihilangkan karena sudah di chain langsung pada promise
// function displayProducts(data) {
//   data.data.products.forEach((product) => displayProduct(product));
// }

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
      // langsung tampilkan products nya
      products.forEach(function (product) {
        displayProduct(product);
      });
    });
}

/* ===== Noted 
- kalau mau chain seterusnya/memakai beberapa method, pastikan method sebelumnya itu mereturn hasil datanya.
- Jadi tidak perlu menggunakan callback lagi
===== */
