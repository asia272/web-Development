import React, { useState, useEffect } from 'react';

const DataFetcher = () => {
    let [data, setData] = useState([]);
    let [loading, setLoading] = useState(true);

    // It will run only on the first rendering
    useEffect(() => {
        fetch("https://jsonplaceholder.typicode.com/posts")
            .then((res) => res.json())
            .then((res) => {
                setData(res);
                setLoading(false);
            })
    }, []);

    return (
        <div>
            {loading ? (
                <h1>Loading...</h1>
            ) : (
                <ul>
                    {data.map((el) => (
                        <li key={el.id}>{el.title}</li>
                    ))}
                </ul>
            )}
        </div>
    );
};

export default DataFetcher;
