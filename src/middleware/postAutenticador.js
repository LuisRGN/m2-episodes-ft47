module.exports = (req, res, next) => {
    const { name, email, password } = req.body;
    if (password.length < 5) {
        throw new Error("La contraseña debe tener mas de 5 caracteres")
    };
    next();
}