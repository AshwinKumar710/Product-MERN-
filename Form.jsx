import React, { useState } from 'react';

const Form = () => {
    const [product, setProduct] = useState({
        name: '',
        image: '',
        price: '',
        category: '',
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setProduct({ ...product, [name]: value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log('Product added:', product);
    };

    return (
        <form onSubmit={handleSubmit}>
            <label>
                Product Name:
                <input
                    type="text"
                    name="name"
                    value={product.name}
                    onChange={handleChange}
                    required
                />
            </label>
            <label>
                Image:
                <input
                    type="file"
                    name="image"
                    onChange={(e) => setProduct({ ...product, image: e.target.files[0] })}
                    required
                />
            </label>
            <label>
                Price:
                <input
                    type="number"
                    name="price"
                    value={product.price}
                    onChange={handleChange}
                    required
                />
            </label>
            <label>
                Category:
                <input
                    type="text"
                    name="category"
                    value={product.category}
                    onChange={handleChange}
                    required
                />
            </label>
            <button type="submit">Add Product</button>
        </form>
    );
};

export default Form;