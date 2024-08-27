const User = require('../models/User')

exports.createUser = async (req, res) => {
    const { username, password, role } = req.body;
    try {
        let user = new User({ username, password, role });
        await user.save();
        res.json(user);
    } catch (err) {
        res.status(500).send('Server error');
    }
};
