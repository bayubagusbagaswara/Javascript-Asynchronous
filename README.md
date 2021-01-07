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
