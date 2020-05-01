import React, { useState, useEffect } from 'react';
import axios from 'axios';

import { Container, Dog } from './style';

export default function DailyDog() {
    const [ dog, setDog ] = useState('');

    const getDog = async(e) => {
        try {
            const res = await axios.get('https://dog.ceo/api/breeds/image/random');
            const dogImg = res.data.message;
            setDog(dogImg);
            console.log(res);
        } catch (err) {
            console.log(err);
        }
    }

    useEffect(() => {
        getDog();
    }, []);

    return(
        <Container>
            <h2>Get your daily dose of dogs!</h2>
            { dog && <Dog image={ dog } ></Dog>}
        </Container>
    );
}