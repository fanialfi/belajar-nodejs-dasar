# belajar nodejs

## pengenalan

`nodejs` diperkenalkan pertama kali oleh _ryan dahl_ pada tahun 2009, nodejs merupakan teknologi yang digunakan untuk menjalankan kode javascript diluar web browser. nodejs dibuat dari _V8 Engine_, yaitu engine untuk chrome.

karena nodejs tidak berjalan di browser, jadi tidak semua fitur di javascript bisa dilakukan di nodejs, fitur seperti DOM, dan banyak web api tidak bisa dijalankan di nodejs, hal ini karena DOM dan beberapa web api berjalan membutuhkan web browser.

## Web Application

web application adalah aplikasi yang berjalan di server dan ditampilkan di browser client, saat membuat web application, biasanya akan dibagi menjadi 3 bagian, **client**, **server**, dan **database**.

## REPL

kepanjangan dari _Read Eval Print Loop_, yaitu sebuah mekanisme dimana program bisa membaca langsung kode program yang diketikkan, lalu menjalankan, menampilkan hasil-nya, lalu mengulangi lagi dari awal.
NodeJs mendukung _REPL_, sehingga lebih mudah untuk belajar, untuk menggunakan NodeJs REPL, cukup jalankan aplikasi node saja.

## Modules

standard library yang ada didalam nodejs bisa kita gunakan layaknya javascript modules, karena nodejs menggunakan modules, jika kita ingin menggunakan modules, kita juga perlu memberitahu bahwa file javascript kita menggunakan modules, caranya dengan mengubah nama file dari _.js_ ke _.mjs_.

selain mengubah nama file menjadi _.msj_ bisa juga dengan menambahkan `"type": "module"` didalam file _package.json_.

## require function

awal ketika nodejs dirilis, fitur javascript modules belum rilis, namun sekarang javascript sudah banyak menggunakan javascript modules. NodeJs pun awalnya tidak menggunakan javascript modules, namun sekarang nodejs sudah bisa menggunakan javascript modules dan sangat direkomendasikan menggunakan-nya.

awal sebelum javascript modules belum rilis, nodejs menggunakan function `require()` untuk melakukan import modules.

jika menggunakan `require()` function nama file nya bisa dengan menggunakan javascript file (_.js_)

## global async

saat belajar javascript, untuk menggunakan `async` `await`, biasanya kita perlu menandai terlebih dahulu function-nya sebagai `async`, tapi di nodejs saat kita menggunakan modules, secara default, global code adalah `async`, oleh karena itu kita bisa menggunakan `async` `await`. Kecuali jika kita membuat function, maka function tersebut harus kita tandai sebagai `async` jika ingin menggunakan `async` `await`.

jika menggunakan javascript modules, level paling atas di code program by default sudah merupakan async function.

## OS

os merupakan standard library yang bisa digunakan untuk mendapatkan informasi tentang sistem operasi yang sedang digunakan.
