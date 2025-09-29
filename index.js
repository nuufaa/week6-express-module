import {tambah, kali, kurang, bagi} from "./utils/math.js";
import profileRouter from "./routes/profile.js";
import userRouter from "./routes/profileUser.js";
import express from "express";

const app = express();
const PORT = 3000;

app.use("/profile", profileRouter);
app.use("/profileUser", userRouter);

app.get('/', (req, res) => {
    res.send('<br> NIM: F1D02310052 <br> Nama: Fitri Nufa Dastana');
});

app.get('/hitung', (req, res) => {
    const hasilTambah = tambah(50, 30);
    const hasilKali = kali(10, 5);
    const hasilKurang = kurang(19, 4);
    const hasilBagi = bagi(40, 2);
    res.send(`<br> Hasil tambah 50 + 30: ${hasilTambah} <br>
            Hasil kali 10 * 5: ${hasilKali} <br>
            Hasil kurang 19 - 4: ${hasilKurang} <br>
            Hasil bagi 40 / 2: ${hasilBagi}`);
});

app.listen(PORT, () => {
    console.log('Server run http://localhost:3000');
});
