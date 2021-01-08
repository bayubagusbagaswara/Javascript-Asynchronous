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
