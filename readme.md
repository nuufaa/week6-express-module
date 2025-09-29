# Assignment: Express.js & Modul Node.js

## Identitas
- Nama : Fitri Nufa Dastana  
- NIM  : F1D02310052 

## Deskripsi Tugas
Tujuan dari tugas ini adalah untuk melatih pemahaman dasar dalam membangun server menggunakan Express.js, memanfaatkan modul lokal di Node.js, menghubungkan route modular, serta mengintegrasikan data dari sumber internal (array) maupun eksternal (API publik). Server memiliki beberapa route:
- / untuk menampilkan identitas (NIM dan Nama).
- /hitung untuk menampilkan hasil operasi penjumlahan dari modul math.js.
- /profile untuk menampilkan data profil mahasiswa dalam format JSON.
- /profile/:id untuk menampilkan detail profil mahasiswa berdasarkan ID.

## Hasil
Berikut adalah hasil run server:

### 1. Route `/`
Menampilkan identitas mahasiswa (NIM dan Nama).  


### 2. Route `/hitung`
Menampilkan hasil penjumlahan dengan fungsi dari modul `math.js`.  


### 3. Route `/profile`


### 4. Route `/profile/1`
Menampilkan detail profil mahasiswa dengan id=1 (data diri sendiri).  

## Penjelasan Singkat
- **index.js** berfungsi sebagai entry point server Express.  
- **math.js** di dalam folder `utils/` berisi fungsi `tambah` dan `kali` yang dapat dipanggil dari `index.js`.  
- **profile.js** di dalam folder `routes/` menangani route `/profile` dan `/profile/:id`.  
- Saat server dijalankan dengan `node index.js`, server aktif di `http://localhost:3000/`.  
