const { allUsers, allEpisodes } = require("../utils/dataBase")

module.exports = {
    getController: async (req, res) => {
        try {
            res
                .status(200)
                .json({ users: allUsers })
        } catch (error) {
            res
                .status(400)
                .json({ message: "Faltan datos" })
        }

    },

    postController: async (req, res) => {
        try {
            const { name, email, password } = req.body;
            if (name && email && password) {
                allUsers.push({ name, email, password })
                res
                    .status(201)
                    .json({ allUsers, message: "Usuario agregado correctamente" })
            }
        } catch (error) {
            res
                .status(400)
                .json({ message: "Faltan datos" })
        }
    },

    putController: (req, res) => {
        res
            .status(200)
            .json({ message: "En la ruta Put" })
    },

    deleteController: (req, res) => {
        const userEmail = req.params.email
        const userdIndex = allUsers.findIndex(user => user.email === userEmail)
        if (userdIndex === -1) {
            res.status(404).json({ message: 'Usuario no encontrado' });
            return;
        }

        const eliminado = allUsers.splice(userdIndex, 1)[0];
        res.status(200).json({ message: `Usuario eliminado ${(eliminado.name)}` });
    }
}