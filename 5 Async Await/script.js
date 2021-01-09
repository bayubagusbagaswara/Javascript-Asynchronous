function getProductsUrl(keyword) {
  return `https://www.blibli.com/backend/search/products?searchTerm=${keyword}`;
}

function getProducts(keyword) {
  // Code Promise Here!
  return new Promise(function (resolve, reject) {
    const ajax = new XMLHttpRequest();
    ajax.onload = function () {
      if (ajax.status === 200) {
        const data = JSON.parse(ajax.responseText);
        resolve(data);
      } else {
        reject(Error(ajax.statusText));
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

// method buttonClick adalah asynchronous
async function buttonClick() {
  // Code Async Await Here!

  //   BEFORE
  //   const promise = getProducts(document.getElementById("keyword").value);
  //   promise
  //     .then(function (value) {
  //       return value.data.products;
  //     })
  //     .then(function (products) {
  //       clearProducts();
  //       products.forEach(function (product) {
  //         displayProduct(product);
  //       });
  //     })
  //     .catch(function (error) {
  //       alert(error.message);
  //     })
  //     .finally(function () {
  //       console.log("Selesai memproses Promise");
  //     });

  // AFTER
  // bisa langsung dapetin data productnya
  // dengan await maka akan ditunggu sampai proses Promise berhasil mengembalikan data resolve nya yaitu JSON datanya.
  // value hasilnya promise
  // terus tinggal manipulasi hasil promise nya
  const value = await getProducts(document.getElementById("keyword").value);

  const products = value.data.products;
  clearProducts();
  products.forEach(function (product) {
    displayProduct(product);
  });
}
