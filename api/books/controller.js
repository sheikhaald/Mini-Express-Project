const Book = require("../../module/books");

const getAllbooks = async (req, res) => {
  try {
    const books = await Book.find();
    return res.status(200).json(books);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const createBook = async (req, res) => {
  try {
    const newbook = await Book.create(req.body);
    return res.status(202).json(newbook);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const getOnebook = async (req, res) => {
  try {
    const getId = req.params.id;
    const getone = await Book.findById(getId);
    return res.status(202).json(getone);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const updateBook = async (req, res) => {
  try {
    const bookId = req.params.id;
    console.log(bookId);
    const update = await Book.findOneAndUpdate({ _id: bookId }, req.body);
    console.log(update);
    return res.status(202).json(update);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const deletBook = async (req, res) => {
  try {
    const deletId = req.params.id;
    const delet = await Book.findByIdAndRemove(deletId);
    return res.status(404).json();
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

module.exports = { getAllbooks, createBook, getOnebook, updateBook, deletBook };
