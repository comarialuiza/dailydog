import React, { useState } from 'react';
import Loader from 'react-loader-spinner';
import axios from 'axios';

import { Container, Dog, DogContainer, Footer, Heart } from './style';

export default function DailyDog() {
    const [ dog, setDog ] = useState('');
    const [ loading, setLoading ] = useState(false);

    const getDog = async() => {
        try {
            setLoading(true);
            const res = await axios.get('https://dog.ceo/api/breeds/image/random');
            const dogImg = res.data.message;
            setDog(dogImg);
            setLoading(false);
        } catch (err) {
            console.log(err);
        }
    }

    return(
        <Container>
            <DogContainer>
                <h2>Daily dog!</h2>
                <p>Get your healthy daily dose of dogs by clicking the button below!</p>
                <button onClick={ getDog }>Get dog!</button>
                { dog && !loading && <Dog image={ dog } ></Dog>}
                { loading && <Loader type="Hearts" color="#B0C7BF" height={40} width={40} className="loader" /> }

                <Footer>
                    <p>Made with <Heart /> by <a href="https://comarialuiza.netlify.app/" target="_blank" rel="noopener noreferrer">Malu</a></p>
                </Footer>
            </DogContainer>
        </Container>
    );
}