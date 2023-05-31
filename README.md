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

## path

path merupakan standard library yang bisa kita gunakan untuk bekerja dengan lokasi file bukan file dan direktori.

## file system

file system merupakan standard library yang bisa digunakan untuk memanipulasi file system, dalam file system, terdapat 3 jenis library, pertama library yang bersifat blocking atau synchronous, kedua library yang bersifat non-blocking atau asynchronous menggunakan callback, yang ketiga library yang bersifat synchronous menggunakan promise.

## debugger

nodejs memiliki fitur bernama `debugger`, dimana kita bisa mengikuti tahapam eksekusi program di nodejs. sangat cocok ketika hendak melakukan proses debugging.

dalam debugging, terdapat istilah breakpoint, yaitu lokasi dimana kita ingin menghentikan sementara eksekusi kode program. biasanya digunakan untuk mengawasi data data di sekitar lokasi berhentinya tersebut., untuk menambahkan breakpoint, kita bisa menggunakan kata kunci `debugger`.

jika kita menjalankan file javascript hanya dengan menggunakan perintah `node namafile.js`, maka secara default dia tidak akan jalan dalam mode debug. agar jalan dalam mode debug, kita harus menambahkan perintah `inspect`.

```bash
node inspect namafile.js
```

saat masuk kedalam mode debug, ada beberapa perintah yang bisa digunakan dalam melakukan debugging.

| perintah | keterangan         |
| -------- | ------------------ |
| `cont`,c | continue execution |
| `next`,n | step next          |
| `step`,s | step in            |
| `out`,o  | step out           |
| `pause`  | pause running code |

untuk melihat variabel atau expression saat menjalankan debugging, gunakan keyword `watch("expression")`

## DNS

dns merupakan standard library yang digunakan untuk bekerja dengan dns (domain name server).

## events

merupakan standard library di nodejs yang bisa digunakan sebagai implementasi event listener. di dalam `Events` terdapat class yang bernama `EventEmitter` yang bisa digunakan untuk menampung data listener per jenis event, lalu untuk mentriger jenis event dan mengirim data ke event tersebut bisa menggunakan `emit`.

## globals

didalam nodejs terdapat variabel atau method yang secara global dapat diakses tanpa harus melakukan import, [detail](https://nodejs.org/docs/latest-v19.x/api/globals.html)

## process

merupakan standard library yang digunakan untuk mendapatkan informasi proses nodejs yang sedang berjalan, process juga merupakan instance dari EventEmitter, sehingga bisa menambahkan listener kedalam process. [detail](https://nodejs.org/docs/latest-v19.x/api/process.html)

## readline

merupakan standard library yang digunakan untuk membaca input

## report

report merupakan fitur yang terdapat di NodeJS untuk membuat laporan secara otomatis dalam file ketika sesuatu terjadi pada aplikasi NodeJS kita.

untuk menjalankan report sebenarnya ada beberapa cara, cara yang pertama adalah ketika menjalankan aplikasi bisa menambahkan parameter
`--report-uncaught-exception`, `--report-on-signal`, `--report-on-fatalerror`, `--report-filename namafile.json` dan nanti hasil report-nya dalam bentuk json.
Atau juga bisa memanfaatkan core module `process` dengan cara

```javascript
import "process" from "node:process";

process.report.reportOnFatalError = true;
process.report.reportOnUncaughtException = true;
process.report.reportOnSignal = true;
process.report.filename = "report.json";
```

## buffer

merupakan object yang berisikan urutan byte dengan panjang tetap, buffer merupakan turunan dari tipe data [`Uint8Array`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Uint8Array).

## stream

merupakan standard library untuk kontrak aliran data di NodeJS, _stream_ bisa jadi object yang bisa dibaca, atau bisa ditulis, dan stream adalah turunan dari `EventEmitter`.

## timers

merupakan standard library yang digunakan untuk melakukan scheduling (penjadwalan) function untuk di panggil terhadap batas waktu-nya, timers function berada didalam global, jadi tidak perlu melakukan import module untuk bisa menggunakan-nya, meskipun bisa saja melakukan import, Kecuali jenis timers nya promise, maka harus di import terlebih dahulu.

## net

merupakan standard library yang bisa digunakan membuat network server dan network client berbasis TCP, Net server dan Net client merupakan object stream, sehingga kita bisa baca data-nya dari stream-nya tersebut, atau juga menulis data-nya, selain itu Net juga merupakan turunan dari EventEmitter, sehingga bisa menambahkan listener.

## url

merupakan standard library yang digunakan untuk bekerja dengan url,
