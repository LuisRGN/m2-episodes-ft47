
module.exports = {
    getController: (req, res) => {
        res
            .status(200)
            .json({ message: "En la ruta Get" })
    },

    postController: (req, res) => {
        res
            .status(200)
            .json({ message: "En la ruta Post" })
    },
    putController: (req, res) => {
        res
            .status(200)
            .json({ message: "En la ruta Put" })
    },
    deleteController: (req, res) => {
        res
            .status(200)
            .json({ message: "En la ruta Delete" })
    },
}