//publicationsController.js
const Publications = require('../models/Publications'); 
const Best_Publications = require('../models/Best_Publications');
const Patents = require('../models/Patents');
const Books = require('../models/Books');
const Book_Chapters = require('../models/Book_Chapters');


async function createPublications(req, res) {
    try {
      const { intj_paper, natj_paper, intc_paper, natc_paper, no_patent, no_book, no_bookch, google_link, app_number } = req.body;
      const newPublications = await Publications.create({ intj_paper, natj_paper, intc_paper, natc_paper, no_patent, no_book, no_bookch, google_link, app_number });
      res.status(201).json({
            ...newPublications.toJSON(),
            pub_id: newPublications.id, // Include the pub_id in the response
        });
    } catch (error) {
      console.error("Error creating publication:", error);
      return res.status(500).json({ message: "Failed to create publication." });
    }
}
async function getPublications(req, res) {
  try {
    const { app_number } = req.params; 
    const publications = await Publications.findOne({ where: { app_number }, attributes: ['id', 'intj_paper','natj_paper','intc_paper','natc_paper','no_patent','no_book','no_bookch','google_link','app_number'] });
    if (publications) {
      return res.status(200).json({ publications });
    } else {
      return res.status(404).json({ message: "Publications not found." });
    }
  } catch (error) {
    console.error("Error fetching Publications:", error);
    return res.status(500).json({ message: "Failed to fetch Publications." });
  }
}
/*--------------------------------------------------------------------------*/
async function addBestPublications(req, res) {
    try {
      const { author, title, name, yearvolpage, impact, doi, status, pub_id } = req.body;
      const newBestPublications = await Best_Publications.create({ author, title, name, yearvolpage, impact, doi, status, pub_id });
      return res.status(201).json(newBestPublications);
    } catch (error) {
      console.error("Error adding best publications:", error);
      return res.status(500).json({ message: "Failed to add best publications." });
    }
}
async function getBestPublications(req, res) {
  try {
    const { pub_id } = req.params; 
    const bestPublications = await Best_Publications.findAll({ where: { pub_id }, attributes: ['author','title','name','yearvolpage','impact','doi','status','pub_id'] });
    if (bestPublications.length > 0) {
      return res.status(200).json({ bestPublications });
    } else {
      return res.status(404).json({ message: "BestPublications not found." });
    }
  } catch (error) {
    console.error("Error fetching BestPublications:", error);
    return res.status(500).json({ message: "Failed to fetch BestPublications." });
  }
}
/*------------------------------------------------------------------------------------------------*/
async function addPatents(req, res) {
    try {
      const { inventor, title, country, number, date_file, date_publish, status, pub_id } = req.body;
      const newPatents = await Patents.create({ inventor, title, country, number, date_file, date_publish, status, pub_id });
      return res.status(201).json(newPatents);
    } catch (error) {
      console.error("Error adding patents:", error);
      return res.status(500).json({ message: "Failed to add patents." });
    }
}
async function getPatents(req, res) {
  try {
    const { pub_id } = req.params; 
    const patents = await Patents.findAll({ where: { pub_id }, attributes: ['inventor','title','country','number','date_file','date_publish','status','pub_id'] });
    if (patents.length > 0) {
      return res.status(200).json({ patents });
    } else {
      return res.status(404).json({ message: "Patents not found." });
    }
  } catch (error) {
    console.error("Error fetching Patents:", error);
    return res.status(500).json({ message: "Failed to fetch Patents." });
  }
}
/*--------------------------------------------------------------------------------------*/
async function addBooks(req, res) {
    try {
      const { author, title, year, isbn, pub_id } = req.body;
      const newBooks = await Books.create({ author, title, year, isbn, pub_id });
      return res.status(201).json(newBooks);
    } catch (error) {
      console.error("Error adding books:", error);
      return res.status(500).json({ message: "Failed to add books." });
    }
}
async function getBooks(req, res) {
  try {
    const { pub_id } = req.params; 
    const books = await Books.findAll({ where: { pub_id }, attributes: ['author','title','year','isbn','pub_id'] });
    if (books.length > 0) {
      return res.status(200).json({ books });
    } else {
      return res.status(404).json({ message: "Books not found." });
    }
  } catch (error) {
    console.error("Error fetching Books:", error);
    return res.status(500).json({ message: "Failed to fetch Books." });
  }
}
/*------------------------------------------------------------------------------------------*/
async function addBookChapters(req, res) {
    try {
      const { author, title, year, isbn, pub_id } = req.body;
      const newBookChapters = await Book_Chapters.create({ author, title, year, isbn, pub_id });
      return res.status(201).json(newBookChapters);
    } catch (error) {
      console.error("Error adding book chapters:", error);
      return res.status(500).json({ message: "Failed to add book chapters." });
    }
}
async function getBookChapters(req, res) {
  try {
    const { pub_id } = req.params; 
    const bookChapters = await Book_Chapters.findAll({ where: { pub_id }, attributes: ['author','title','year','isbn','pub_id'] });
    if (bookChapters.length > 0) {
      return res.status(200).json({ bookChapters });
    } else {
      return res.status(404).json({ message: "BookChapters not found." });
    }
  } catch (error) {
    console.error("Error fetching BookChapters:", error);
    return res.status(500).json({ message: "Failed to fetch BookChapters." });
  }
}


module.exports = { createPublications, getPublications, addBestPublications, getBestPublications, addPatents, getPatents, addBooks, getBooks, addBookChapters, getBookChapters };
