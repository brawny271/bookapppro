import React, { useState } from 'react';
import axios from 'axios';
import { useDispatch } from 'react-redux';
import { setBooks, setBooksError } from '../redux/AllDataSlice';
import './addbook.css'

const API_URL = "http://64.227.142.191:8080/application-test-v1.1/books";

const AddBookForm = () => {
    const [formData, setFormData] = useState({
        title: '',
        author: '',
        country: '',
        language: '',
        link: '',
        pages: '',
        year: ''
    });
    const dispatch = useDispatch();

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prevData => ({
            ...prevData,
            [name]: value
        }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.post(API_URL, formData);
            if (response.status === 201) {
                dispatch(setBooks(response.data));
                alert("Book added successfully!");
                setFormData({
                    title: '',
                    author: '',
                    country: '',
                    language: '',
                    link: '',
                    pages: '',
                    year: ''
                });
            }
        } catch (error) {
            dispatch(setBooksError(error.toString()));
            alert("Failed to add the book.");
        }
    };

    return (
        <form onSubmit={handleSubmit} className="add-book-form">
            <input
                type="text"
                name="title"
                value={formData.title}
                onChange={handleChange}
                placeholder="Title"
                required
            />
            <input
                type="text"
                name="author"
                value={formData.author}
                onChange={handleChange}
                placeholder="Author"
                required
            />
            <input
                type="text"
                name="country"
                value={formData.country}
                onChange={handleChange}
                placeholder="Country"
            />
            <input
                type="text"
                name="language"
                value={formData.language}
                onChange={handleChange}
                placeholder="Language"
            />
            <input
                type="text"
                name="link"
                value={formData.link}
                onChange={handleChange}
                placeholder="Link"
            />
            <input
                type="number"
                name="pages"
                value={formData.pages}
                onChange={handleChange}
                placeholder="Pages"
            />
            <input
                type="text"
                name="year"
                value={formData.year}
                onChange={handleChange}
                placeholder="Year"
            />
            <button type="submit">Add to Books List</button>
        </form>
    );
};


export default AddBookForm;
