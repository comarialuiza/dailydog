import React, { useState, useEffect } from 'react';
import axios from 'axios';

export default function DailyDog() {
    const [ dog, setDog ] = useState('');

    const getDog = async(e) => {
        const res = await axios.get('https://dog.ceo/api/breeds/image/random');
        const dogImg = res.data.message;
        setDog(dogImg);
        console.log(res);
    }

    useEffect(() => {
        getDog();
    }, []);

    return(
        <> 
            { dog && <img src={ dog } alt="Dog!" /> }
        </>
    );
}