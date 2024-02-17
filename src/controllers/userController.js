const { allUsers, allEpisodes } = require("../utils/dataBase")

module.exports = {
    getController: (req, res) => {
        res
            .status(200)
            .json({ users: allUsers })
    },

    postController: (req, res) => {
        const { name, email, password } = req.body;
        if (name && email && password) {
            allUsers.push({ name, email, password })
            res
                .status(200)
                .json({ allUsers, message: "Usuario agregado correctamente" })
        } else {
            res
                .status(400)
                .json({ message: "Faltan datos" })
        }
        // res.send(allUsers)
    },
    putController: (req, res) => {
        res
            .status(200)
            .json({ message: "En la ruta Put" })
    },
    deleteController: (req, res) => {
        const userName = req.params.email

        const filteredUsers = allUsers.filter(user => user.email !== userName);

        if (filteredUsers.length < allUsers.length) {
            allUsers = filteredUsers;
            res
                .status(200)
                .json({ user: allUsers, message: "El usuario a sido eliminado correctamente" })
        } else {
            res
                .status(404)
                .json({ message: "El usuario no fue encontrado" })
        }

    }
}