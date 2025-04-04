import React, { useState, useEffect } from "react";
import './Card.css';
import { FetchApi } from '../Api/Api';

function Card() {
    const [data, setData] = useState([]); 
    const [searchQuery, setSearchQuery] = useState(''); 

    useEffect(() => {
        const getData = async () => {
            try {
                const response = await FetchApi(); 
                setData(response); 
            } catch (error) {
                console.error("Failed to fetch data", error); 
            }
        };
        getData();
    }, []);

    const handleChange = (e) => {
        setSearchQuery(e.target.value); 
    };

    const searchedData = data.filter(item =>
        item.common.toLowerCase().includes(searchQuery.toLowerCase())
    );

    if (!data.length) {
        return <div>Loading...</div>; 
    }

    return (
        <div>
            <div className='search'>
                <input 
                    type="text" 
                    placeholder="Search for countries"
                    value={searchQuery} 
                    onChange={handleChange}
                    style={{width: '600px', height: '30px'}} 
                />
            </div>
            <div className='container'>
                {searchedData.length > 0 ? (
                    searchedData.map((item, index) => (
                        <div key={index} className='countryCard'> 
                            <img src={item.png} alt={item.common} className='image' /> 
                            <h2 className='title'>{item.common}</h2>
                        </div>
                    ))
                ) : (
                    <div>No countries found.</div>
                )}
            </div>
        </div>
    );
}

export default Card;
