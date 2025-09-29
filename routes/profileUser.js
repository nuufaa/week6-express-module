import express from "express";

const userRouter = express.Router();

const dataMahasiswa = [
    {id: 1, NIM: "F1D02310052", Nama: "Nufa", Usia: "20"},
    {id: 2, NIM: "F1D02310048", Nama: "Fadila", Usia: "20"},
    {id: 3, NIM: "F1D02310098", Nama: "Abdi", Usia: "19"},
    {id: 4, NIM: "F1D02310114", Nama: "Izzat", Usia: "20"},
    {id: 5, NIM: "F1D02310138", Nama: "Wahyu", Usia: "19"},
];

async function getUser() {
    return dataMahasiswa;
}

userRouter.get('/', async (req, res) => {
    const dataUser = await getUser()
    res.json(dataUser);
});


userRouter.get("/:id", async(req, res) => {
    const users = await getUser();
    const id = parseInt(req.params.id);
    const user = users.find(i => i.id === id);

    if (!user) {
        return res.status(404).json({ message: "User tidak ditemukan" });
    }

    res.json(user);
});

export default userRouter;
