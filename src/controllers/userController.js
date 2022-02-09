export const join = (req, res) => res.send("Join us");
export const login = (req, res) => res.send("Login Here");
export const userId = (req, res) => {
    return res.send(`Hi #${req.params.id}`);
};
export const logout = (req, res) => res.send("Log out");
export const edit = (req, res) => res.send("Edit User");
export const deleted = (req, res) => res.send("Delete User");
