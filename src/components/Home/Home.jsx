import React, { useEffect, useState } from 'react';
import Cloth from './Cloth';
import { Helmet } from 'react-helmet';

const Home = () => {
    const [cloth, setCloth] = useState([]);
    const [loading, setLoading] = useState(true);
    const [searchTerm, setSearchTerm] = useState('');
    const [debouncedSearchTerm, setDebouncedSearchTerm] = useState('');
    const [categoryFilter, setCategoryFilter] = useState('');
    const [brandFilter, setBrandFilter] = useState('');
    const [priceFilter, setPriceFilter] = useState('');
    const [sortOption, setSortOption] = useState('');

    // Pagination States
    const [currentPage, setCurrentPage] = useState(1);
    const [totalPages, setTotalPages] = useState(1);
    const [itemsPerPage] = useState(10); // Set your items per page here

    // Debounce the search term
    useEffect(() => {
        const handler = setTimeout(() => {
            setDebouncedSearchTerm(searchTerm);
        }, 300); // 300ms delay (adjust as needed)

        return () => {
            clearTimeout(handler);
        };
    }, [searchTerm]);

    // Fetch products with search, filter, sort, and pagination
    const fetchClothes = () => {
        setLoading(true);

        const queryParams = new URLSearchParams({
            page: currentPage,
            limit: itemsPerPage,
            searchTerm: debouncedSearchTerm || '',
            category: categoryFilter || '',
            brand: brandFilter || '',
            price: priceFilter || '',
            sort: sortOption || ''
        });

        fetch(`https://product-server-delta.vercel.app/clothes?${queryParams.toString()}`)
            .then(res => res.json())
            .then(data => {
                setCloth(data.clothes);
                setTotalPages(data.totalPages);
                setLoading(false);
            })
            .catch(error => {
                console.error('Error fetching data:', error);
                setLoading(false);
            });
    };

    useEffect(() => {
        fetchClothes();
    }, [currentPage, debouncedSearchTerm, categoryFilter, brandFilter, priceFilter, sortOption]);

    const handlePreviousPage = () => {
        if (currentPage > 1) setCurrentPage(currentPage - 1);
    };

    const handleNextPage = () => {
        if (currentPage < totalPages) setCurrentPage(currentPage + 1);
    };

    if (loading) {
        return <div>Loading...</div>;
    }

    return (
        <div>
            <Helmet>
                <title>Woman's Cloth | Home</title>
                <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
            </Helmet>
            <h2 className="text-4xl text-center my-12 font-bold text-sky-800">All Clothes</h2>

            {/* Search Bar */}
            <div className="flex justify-center mb-6">
                <input
                    type="text"
                    placeholder="Search products by name..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    className="input input-bordered w-full max-w-xs"
                />
            </div>

            {/* Filters */}
            <div className="flex justify-center flex-col lg:flex-row gap-4 mb-8 mx-24 lg:mx-2">
                <select
                    className="select select-bordered"
                    value={categoryFilter}
                    onChange={(e) => setCategoryFilter(e.target.value)}>
                    <option value="">All Categories</option>
                    <option value="Dresses">Dresses</option>
                    <option value="Bottoms">Bottoms</option>
                    <option value="Coats">Coats</option>
                    <option value="Accessories">Accessories</option>
                    <option value="Jackets">Jackets</option>
                    <option value="Tops">Tops</option>
                    <option value="Sweaters">Sweaters</option>
                </select>

                <select
                    className="select select-bordered"
                    value={brandFilter}
                    onChange={(e) => setBrandFilter(e.target.value)}>
                    <option value="">All Brands</option>
                    <option value="EcoStyle">EcoStyle</option>
                    <option value="DenimDream">DenimDream</option>
                    <option value="FurFab">FurFab</option>
                    <option value="GlamourGown">GlamourGown</option>
                    <option value="ElegantEdge">ElegantEdge</option>
                    <option value="RetroChic">RetroChic</option>
                    <option value="UrbanEdge">UrbanEdge</option>
                    <option value="UrbanClassic">UrbanClassic</option>
                    <option value="WoolWear">WoolWear</option>
                </select>

                <select
                    className="select select-bordered"
                    value={priceFilter}
                    onChange={(e) => setPriceFilter(e.target.value)}>
                    <option value="">All Price Ranges</option>
                    <option value="under50">Under $50</option>
                    <option value="50To100">$50 - $100</option>
                    <option value="over100">Over $100</option>
                </select>

                <select
                    className="select select-bordered"
                    value={sortOption}
                    onChange={(e) => setSortOption(e.target.value)}>
                    <option value="">Sort by</option>
                    <option value="priceLowToHigh">Price: Low to High</option>
                    <option value="priceHighToLow">Price: High to Low</option>
                    <option value="newestFirst">Newest First</option>
                </select>
            </div>

            {/* Displaying Clothes */}
            <div className="grid lg:grid-cols-3 sm:grid-cols-1 md:grid-cols-2 gap-y-5 mx-24 lg:mx-8 md:mx-12 sm:mx-24 ml-12 gap-12">
                {
                    cloth.map(cloth => <Cloth key={cloth._id} cloth={cloth}></Cloth>)
                }
            </div>

            {/* Pagination Controls */}
            <div className="flex justify-center my-8 gap-4">
                <button
                    className="btn"
                    onClick={handlePreviousPage}
                    disabled={currentPage === 1}>
                    Previous
                </button>
                <span>Page {currentPage} of {totalPages}</span>
                <button
                    className="btn"
                    onClick={handleNextPage}
                    disabled={currentPage === totalPages}>
                    Next
                </button>
            </div>
        </div>
    );
};

export default Home;
