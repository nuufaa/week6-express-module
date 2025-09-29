# Assignment: Express.js & Modul Node.js

## Identitas
- Nama : Fitri Nufa Dastana  
- NIM  : F1D02310052 

## Deskripsi Tugas
Tujuan dari tugas ini adalah untuk melatih pemahaman dasar dalam membangun server menggunakan Express.js, memanfaatkan modul lokal di Node.js, menghubungkan route modular, serta mengintegrasikan data dari sumber internal (array) maupun eksternal (API publik) dengan pendekatan modul ESM. Server memiliki beberapa route:
- / untuk menampilkan identitas (NIM dan Nama).
- /hitung untuk menampilkan hasil operasi hitungan dari modul math.js.
- /profile untuk menampilkan data profil mahasiswa dalam format JSON.
- /profile/:id untuk menampilkan detail profil mahasiswa berdasarkan ID.

## Hasil
Berikut adalah hasil run server:

### •	GET http://localhost:3000/ 
Menampilkan identitas berupa NIM dan Nama mahasiswa sebagai halaman utama server.
<img width="1920" height="1080" alt="image" src="https://github.com/user-attachments/assets/9654230f-f597-40c5-b6be-37ca470ddde5" />

### •	GET http://localhost:3000/hitung 
Menampilkan hasil hitungan yang dipanggil dari modul lokal `math.js`.  
<img width="1920" height="1080" alt="image" src="https://github.com/user-attachments/assets/ea61610f-07a5-43a7-95d0-ec5254f2c837" />

### •	GET http://localhost:3000/profile 
Mengambil dan menampilkan data user dari API eksternal
<img width="1920" height="1080" alt="image" src="https://github.com/user-attachments/assets/d27ab575-fc44-458f-b9d6-9a9b38dca852" />

### •	GET http://localhost:3000/profile/10
Menampilkan detail user dari API eksternal berdasarkan ID tertentu pada contoh ID=10.
<img width="1920" height="1080" alt="image" src="https://github.com/user-attachments/assets/d0ceaf55-d2d6-4f6f-8f09-a7d2c154d3cb" />

### •	GET http://localhost:3000/profileUser
Menampilkan daftar data profil mahasiswa yang disimpan pada array lokal.
<img width="1920" height="1080" alt="image" src="https://github.com/user-attachments/assets/86843fa6-5b41-44cb-b101-afa72d53c6b0" />

### •	GET http://localhost:3000/profileUser/1 
Menampilkan detail profil mahasiswa berdasarkan ID dari data array lokal pada gambar contoh ID=1 yang berisi data diri sendiri.
<img width="1920" height="1080" alt="image" src="https://github.com/user-attachments/assets/66799ee8-23d0-4e27-8202-f7bfde8dbcd6" />

