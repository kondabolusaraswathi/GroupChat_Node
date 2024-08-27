const Group = require('../models/Group');
const Message = require('../models/Message');

exports.createGroup = async (req, res) => {
    const { name, members } = req.body;
    try {
        let group = new Group({ name, members });
        await group.save();
        res.json(group);
    } catch (err) {
        res.status(500).send('Server error');
    }
};
