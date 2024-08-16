import React from 'react';

const Cloth = ({ cloth }) => {

    const { _id, productName, productImage, description, price, brandName, category, ratings, createdAt } = cloth;

    return (
        <div className="card bg-base-200 w-full shadow-xl">
            <figure className="px-10 pt-10">
                <img
                    src={productImage}
                    alt="Clothes"
                    className="rounded-xl" />
            </figure>
            <div className="card-body items-center text-center">
                <h2 className="card-title">{productName}</h2>
                <p>{description}</p>
                <div className="card-actions gap-24">
                    <p>Category: {category}</p>
                    <p>Brand: {brandName}</p>
                </div>
                <div className="card-actions gap-24">
                    <p>Price: ${price}</p>
                    <p>Rating: {ratings}</p>
                </div>
                <p>Created At: {new Date(createdAt).toLocaleDateString()}</p>
            </div>
        </div>
    );
};

export default Cloth;