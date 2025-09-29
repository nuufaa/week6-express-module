import express from 'express';

const profileRouter = express.Router();

async function getUsers(){
    try{
        console.log("Ambil data user dari...");
        let response = await fetch("https://jsonplaceholder.typicode.com/users");
        let data = await response.json();
        console.log("Data user berhasil diambil..");
        return data;
    }catch(error){
        console.log("Terjadi error:", error);
    }
}

profileRouter.get('/', async (req, res) => {
    const users = await getUsers();
    res.json(users);
});

profileRouter.get("/:id", async(req, res) => {
    const users = await getUsers();
    const id = parseInt(req.params.id);
    const user = users.find(i => i.id === id);
    if (user) {
        res.json(user);
    } else {
        res.status(404).json({ message: "Mahasiswa Tidak Ditemukan" });
    }
});

export default profileRouter;