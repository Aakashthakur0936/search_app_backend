const searchSchema = require('../models/model')

exports.getSearchData = async (req, res) => {
    const { query } = req.body;
    try {
      const results = await searchSchema.find({ name: new RegExp(query, 'i') });
      res.status(200).json(results);
    } catch (err) {
      res.status(500).json({ message: err.message });
    }
  };