import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { Modal, Button } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './bookcard.css';
import { editBook } from '../redux/AllDataSlice';
import bookIcon from '../assets/bookIcon.svg'
import axios from 'axios';

const BookCard = ({ book }) => {
    const [show, setShow] = useState(false);
    const [formData, setFormData] = useState({ ...book });
    const dispatch = useDispatch();

    const API_URL = `http://64.227.142.191:8080/application-test-v1.1/books/${book.id}`;

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleSubmit = async () => {
        try {
            await axios.put(API_URL, formData);
            dispatch(editBook(formData));
            handleClose();
        } catch (error) {
            console.error("There was an error updating the book!", error);
        }
    };

    return (
        <div className="book-card">
            <div style={{ display: "flex", flexWrap: "wrap", height: "100%" }}>
                <div className='image-section'>
                    <img src={bookIcon} alt="Book Icon" />
                </div>
                <div className='product-content'>
                    <h3>{book.title}</h3>
                    <p><strong>Author:</strong> {book.author}</p>
                    <p><strong>Country:</strong> {book.country}</p>
                    <p><strong>Language:</strong> {book.language}</p>
                    <p><strong>Pages:</strong> {book.pages}</p>
                    <p><strong>Year:</strong> {book.year}</p>
                    <button className="edit-button" onClick={handleShow}>
                        Edit
                    </button>
                </div>
            </div>

            <Modal show={show} onHide={handleClose} centered>
                <Modal.Body>
                    <Modal.Title>Edit Book</Modal.Title>
                    <label htmlFor="title">Title</label>
                    <input
                        type="text"
                        id="title"
                        name="title"
                        value={formData.title}
                        onChange={handleChange}
                        placeholder="Title"
                    />
                    <label htmlFor="author">Author</label>
                    <input
                        type="text"
                        id="author"
                        name="author"
                        value={formData.author}
                        onChange={handleChange}
                        placeholder="Author"
                    />
                    <label htmlFor="country">Country</label>
                    <input
                        type="text"
                        id="country"
                        name="country"
                        value={formData.country}
                        onChange={handleChange}
                        placeholder="Country"
                    />
                    <label htmlFor="language">Language</label>
                    <input
                        type="text"
                        id="language"
                        name="language"
                        value={formData.language}
                        onChange={handleChange}
                        placeholder="Language"
                    />
                    <label htmlFor="link">Link</label>
                    <input
                        type="text"
                        id="link"
                        name="link"
                        value={formData.link}
                        onChange={handleChange}
                        placeholder="Link"
                    />
                    <label htmlFor="pages">Pages</label>
                    <input
                        type="number"
                        id="pages"
                        name="pages"
                        value={formData.pages}
                        onChange={handleChange}
                        placeholder="Pages"
                    />
                    <label htmlFor="year">Year</label>
                    <input
                        type="text"
                        id="year"
                        name="year"
                        value={formData.year}
                        onChange={handleChange}
                        placeholder="Year"
                    />

                    <div className='submit-buttons'>
                        <Button variant="secondary" onClick={handleClose}>
                            Close
                        </Button>
                        <Button variant="primary" onClick={handleSubmit}>
                            Save 
                        </Button>
                    </div>
                </Modal.Body>
            </Modal>
        </div>
    );
};

export default BookCard;