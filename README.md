# Pre Requisite

- Text Editor, Visual Studio Code
- HTML, Javascript Dasar
- CORS, untuk ambil data dari backend website luar

# Javascript-Asynchronous

Tentang pemrograman Javascript yang modern, meliputi Asynchronous, Callback, AJAX, Promise, Fetch, Async Await, Error Handling.

# Apa itu Synchronous?

- Program dalam Javascript secara default akan dieksekusi baris per baris.
- Secara default, proses di Javascript akan dieksekusi secara Synchronous, artinya baris selanjutnya akan dieksekusi setelah baris sebelumnya selesai dikerjakan.
- Proses Synchronous juga biasa disebut Blocking, karena harus menunggu tiap proses selesai, baru proses selanjutnya bisa dilakukan.

# Apa itu Asynchronous?

- Walaupun secara default proses di Javascript dieksekusi secara Synchronous, namun kita bisa membuatnya menjadi Asynchronous.
- Berbeda dengan Synchronous, pada proses Asynchronous, Javascript tidak akan menunggu proses tersebut selesai. Melainkan Javascript akan melanjutkan baris selanjutnya, tanpa harus menunggu proses Asynchronous selesai.
- Proses Asynchronous juga bisa disebut Non-Blocking.

# Apa itu Callback?

- Callback merupakan mekanisme untuk memanggil kembali kode yang ada di program dari proses Async.
- Callback biasanya dibaut dalam bentuk function, dan function tersebut akan dieksekusi saat proses Async selesai.
- Dengan menggunakan Callback, program bisa menerima informasi yang dibutuhkan dari proses yang berjalan secara Async.

# Contoh Async Method

Ada banyak method Async yang terdapat di JavaScript, yang akan kita bahas kali ini adalah:

- setTimeout(handler, time) -> digunakan untuk menjalankan proses Async sekali dalam waktu tertentu. Handler akan di call setelah waktunya habis.
- setInterval(handler, time) -> digunakan untuk menjalankan proses Async secara periodik dalam waktu tertentu. Handler nya akan di call berkali-kali secara periodik.

# setTimeout

setTimeout(function (){
// do something there
}, 5000);

# setInterval

setInterval(function (){
// do something there
}, 5000);

# Apa itu AJAX?

- AJAX singkatan dari Asynchronous Javascript and XML.
- AJAX dapat digunakan untuk mengmbil data dari sever setelah halaman web tampil (client side render).
- AJAX dapat digunakan untuk mengubah tampilkan web tanpa harus me-load ulang web.
- AJAX dapat mengirim data ke server secara async di background.

# Cara Kerja AJAX

AJAX akan mengirimkan Request ke Server untuk mengambil data. Server akan merespon dan mengembalikan data dari BackEnd menuju AJAX. Kemudian AJAX akan melakukan Render Response di HTML Web. AJAX otomatis menggunakan callback dalam menjalankannya.

# Membuat AJAX

const ajax = new XMLHttpRequest();
ajax.open("METHOD", "url");
ajax.send();

- Secara otomatis semua requestnya akan dikirimkan ke backend secara asynchronous.

# AJAX Callback

- Problem : kalau untuk mendapatkan data Ajaxnya kita menggunakan proses synchronous, ternyata tidak bisa. Seharusnya menggunakan asynchronous. Dan artinya untuk menerima hasil dari AJAX-nya kita perlu menggunakan callback.

- AJAX biasanya digunakan untukmengirim data ke Server atau menerima data dari Server.
- Tiap request AJAX yang dilakukan, biasanya kita ingin mendapat informasi response yang diberikan oleh Server.
- Kita tidak bisa langsung mengambil response AJAX, karena proses AJAX adalah Asynchronous, sehingga kita perlu menunggu sampai proses Asynchronous nya selesai.
- Untuk mendapatkan informasi AJAX, kita bisa menggunakan AJAX Callback, yang akan dieksekusi setelah proses AJAX selesai.

# Membuat AJAX Callback

const ajax = new XMLHttpRequest();
ajax.onload = function(){
const response = ajax.responseText;
};
ajax.open("METHOD", "url");
ajax.send()

# AJAX Error Callback

- AJAX adalah proses komunikasi Client (Javascriptnya) dan Server (Backend).
- Dalam komunikasi Client dan Server, kita tidak bisa selalu menganggap proses tersebut akan berjalan lancar.
- Akan ada banyak hal-hal yang bisa mengganggu proses AJAX yang bisa menyebabkan error, seperti: koneksi internet bermasalah, error dari server, data dari client tidak valid, dan lain-lain.
- Hal-hal error seperti ini perlu ditangani pada kode program kita. Dan kita bisa menggunakan Error Callback di AJAX.

# Membuat AJAX Callback

const ajax = new XMLHttpRequest();
ajax.onload = function() {
if(ajax.status === 200){
const response = ajax.responseText;
} else {
// error handler here
}
};

- sebenarnya tidak ada error pada callback. Akan tetapi, kita bikin callback itu sepintar mungkin. Seperti contoh diatas, jika dari server mengembalikan data berupa status 200, maka dianggap prosesnya sukses. Dan sebaliknya jika error, kita bisa bikin hal-hal apa yang kita berikan/tampilkan ke user

# Dynamic Callback

- Kadang dalam membuat program Javascript, kita ingin membuat callback yang dinamis.
- Misal setelah kita dapat data dari AJAX nya tidak hanya ditampilkan di list, tapi bisa di tabel ataupun cuma log
- Bisa berubah-ubah sesuai kebutuhan kita.
- Untuk membuat Dynamic Callback, kita bisa memanfaatkan function as argument di Javascript, dimana callback function nya kita masukkan dalam argument, sehingga bisa diubah sesuai dengan keinginan kita.

# Masalah dengan Callback

doFirst(data,function(){
doSecond(data, function(){
doThird(data,function(){
// Callback Hell
})
})
})

- semakin banyak callback yang dimasukkan, maka akan semakin ribet code-nya, ini dinamakan problem Callback Hell.
- alernatif lain selain menggunakan callback yaitu menggunakan promise.

# Apa itu Promise?

- Promise merupakan proxy untuk sebuah nilai di masa depan (Future) yang belum diketahui saat pembuatan Promise tersebut.
- Biasa Promise digunakan sebagai proxy untuk proses Async.
- Penggunaan Promise sangat mudah, dan lebih mirip dengan kode Synchronous.

# Promise State

state : pending -- fulfilled -- rejected
result : undefined -- value -- error

# Membuat Promise

const promise = new Promise(function (resolve, reject){
if(success){
resolve(value)
} else {
reject(error)
}
})

# Promise Then Method

Gimana cara ketika kita mendapatkan nilainya, terus kita pengen manggil function yg kita mau?

- Pertanyaannya, bagaimana cara mendapatkan value yang ada di Promise ketika value nya sudah ada?
- Promise memiliki method yang bernama then. Then method ini bisa digunakan sebagai callback ketika value pada Promise telah di resolve (selesai/berhasil).
- Yang menarik menggunakan Then Method adalah kita bisa membuat chain method, sehingga tidak akan terjebak pada Callback Hell.

# Menggunakan Then pada Promise

promise
.then(function(value){
// do something here
return otherValue;
})
.then(function(otherValue){
// do something here
return otherValueAgain;
});

# Promise Catch Method

- Pada AJAX, jika terjadi error, kita bisa menggunakan Error Callback, bagaimana dengan Promise?
- Promise memiliki method yang bernama Catch. Catch Method ini digunakan sebagai Error Callback yang bisa digunakan seperti Then Method.

# Menggunakan Catch pada Promise

promise
.then(function(value){
// do something here
return otherValue;
})
.catch(function(error){
// do something here
})

# Promise Finally Method

- Kadang kita ingin menjalankan kode tertentu, baik itu saat sukses ataupun error.
- Hal ini bisa dilakukan juga di Promise, menggunakan Finally Method.

# Menggunakan Finally pada Promise

promise
.then(function(value){
// do something here
return otherValue;
})
.finally(function(){
// do something
})

- function finally tidak perlu parameter
- instruksi didalam finally akan dieksekusi saat promise nya sukses maupun gagal/error.

# Promise All Method

- Kadang kita perlu berhadapan dengan beberapa proses Async sekaligus.
- Misal, mengambil detail pada produk dari Server pada satu halaman web, dimana satu halaman bisa menampilkan lebih dari satu produk.
- Menggunakan Promise satu per satu sangatlah menyulitkan jika terlalu banyak, tapi untungnya Promise memiliki method All.
- All method bisa kita gunakan untuk menggabungkan beberapa Promise, menjadi Promise baru yang berisi data Array hasil Promise-Promise tersebut.

# Menggunakan All pada Promise

Promise.all([promise1, promise2, promise...])
.then(function(values){
// do something with values
});

# Fetch API

- Fetch API adalah API baru untuk melakukan proses AJAX (pengganti/alternatif lain dari AJAX).
- Tidak seperti AJAX yang menggunakan Callback, Fetch API menggunakan Promise (secara Default), sehingga bisa mudah menggunakan Fetch API dibanding AJAX.
- https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API

- Karena AJAX itu tetap menggunakan Callback, sehingga jika ingin menggunakan Promise harus mengakali (bikin manual) biar bisa menge-call callbacknya Promise tersebut.

# Menggunakan Fetch API

fetch(url, config)
.then(function(response){
// do something here
})
.catch(function(error){
// do something here
})

# Async Await

- Async Await adalah fitur baru JavaScript yang digunakan untuk mempermudah proses pembuatan code Promise.
- Dengan menggunakan Async Await, kita bisa membuat kode Asynchronous dengan gaya Synchronous.
- Async digunakan untuk menandakan bahwa Function tersebut adalah Async, dan mengembalikan Promise.
- Await digunakan untuk mendapatkan value hasil dari Function yang mengembalikan Promise.
- Await hanya bisa digunakan dalam Async Function.

# Menggunakan Async Await

async function onSearch(keyword){
const products = await searchProducts(keyword);
clearProducts();
displayProducts(products);
}

# Async Await Error Handler

- Pada Callback dan Promise, ada mekanisme Error Handler yang bisa dilakukan. Bagaimana dengan Async Await?
- Pada Async Await, kita bisa menggunakan cara Synchronous untuk menggunakan Error Handlernya, yaitu menggunakan try-catch dan try-catch-finally

# Menggunakan Async Await Error Handler

async function onSearch(keyword){
try{
const products = await searchProducts(keyword);
clearProducts();
displayProducts(products);
} catch(error){
} finally{

    }

}

# Sebelum Belajar Web Worker

- JavaScript adalah Single Thread, artinya walaupun proses yang kita buat adalah Async, tapi tetap akan dijalankan dalam Thread yang sama.
- Kemampuan satu Thread dalam mengelola beberapa pekerjaan, dinamakan Concurrent.
- Kemampuan menjalankan beberapa Thread untuk mengelola satu atau lebih pekerjaan, dinamakan Paralel.
- Dan untuk membuat proses secara Paralel, kita bisa menggunakan Web Worker.

# Web Worker

- Web Worker adalah kemampuan yang untuk menjalankan proses di Thread yang berbeda dibanding Main Thread si Javascriptnya.
- Keuntungan menggunakan Web Worker adalah jika terdapat proses yang membutuhkan waktu lama, Web kita tidak akan Freeze, karena proses tersebut bisa kita jalankan di Thread yang berbeda dari Main Thread (yang biasa digunakan oleh UI).
- https://developer.mozilla.org/en-US/docs/Web/API/Web_Worker_API

# Membuat Web Worker

const worker = new Worker("file.js");
