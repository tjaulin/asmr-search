import React, { useEffect, useState } from 'react';
// import axios from 'axios';

function App() {
    const [message, setMessage] = useState('');

    // useEffect(() => {
    //     axios.get('http://localhost:6000/')
    //         .then(response => setMessage(response.data))
    //         .catch(error => console.error(error));
    // }, []);
    const handleClick = async () => {
        const data = await fetch('/api/asmr');
        const json = await data.json();
        setMessage(json.message);
    }

    return (
        <div>
            <h1>ASMR Search</h1>
            <p>{message}</p>
            <button onClick={handleClick}>Dis bonjour</button>
        </div>
    );
}

export default App;
