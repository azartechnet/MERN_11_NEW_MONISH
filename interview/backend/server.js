const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const cors = require("cors");

const app = express();
app.use(cors());
app.use(bodyParser.json());

// MongoDB connection
mongoose.connect("mongodb://127.0.0.1:27017/booksDB", {
  useNewUrlParser: true,
  useUnifiedTopology: true
}).then(() => console.log("MongoDB connected"))
  .catch(err => console.log(err));

// Schema
const bookSchema = new mongoose.Schema({
  title: String,
  author: String
});

const Book = mongoose.model("Book", bookSchema);

// CREATE (Add Book)
app.post("/books", async (req, res) => {
  const { title, author } = req.body;
  const newBook = new Book({ title, author });
  await newBook.save();
  res.json({ message: "Book added!", book: newBook });
});

const PORT = 5000;
app.listen(PORT, () => console.log(`Server running on http://localhost:${PORT}`));
