import React, { useEffect, useState } from 'react'

export default function Effect() {

    const[product, setProduct] = useState([]);
    const[search, setSearch] = useState("");
    const[loading, setLoading] = useState(false);

    const getProduct = async (val)=> {
        const params = val ? `/search?q=${val}` : "";
        setLoading(true);
        const response = await fetch(`https://dummyjson.com/products${params}`);
        const data = await response.json();
        setProduct(data.products)
        setLoading(false);

    }

    useEffect(()=>{
        getProduct();
    }, []);

    const handleInput = (e) => {
        setSearch(e.target.value);
    }

    const handleSearch = () => {
        getProduct(search);
    }

    const getList = () => {
        if(loading) return <p>loading...</p>
        if(!loading && product.length === 0) return <p>product tidak ditemukan</p>
        return product.map((val, key)=>{
            return (
                <div key={key} style={{border : "1px solid black", marginBottom : "2px", padding : "8px"}}>
                    <p>brand: {val.brand}</p>
                    <p>category: {val.category}</p>
                    <p>title: {val.title}</p>
                    <p>description: {val.description}</p>
                    <p>price: {val.price}</p>
                </div>
            )
        })
    }

    return (
        <div style={{width : "500px", margin : "4px auto", alignItems : "center"}}>
            <h1>product auto success</h1>
            <div>
                <input onChange={handleInput}/>
                <button onClick={handleSearch}>search</button>
            </div>
            {getList()}
        </div>
    )
}
