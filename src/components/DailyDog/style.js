import styled from 'styled-components';

export const Container = styled.div`
    min-height: 100vh;
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    background-color: #B0C7BF;
    background-image: url('./blizzard.png');
    position: relative;

    @media (max-width: 600px) {
        padding: 20px 0 100px;
    }
`;

export const DogContainer = styled.div`
    padding: 20px;
    background-color: #fff;
    border-radius: 20px;
    text-align: center;

    @media (min-width: 381px) {
        width: 340px;
    }

    @media (max-width: 380px) {
        width: 300px;
    }

    .loader {
        margin-top: 20px;
    }

    h2 {
        margin-bottom: 30px;
        color: #000;
        position: relative;
        font-weight: 400;
        text-transform: uppercase;
        font-size: 20px;
        font-weight: 400;
        letter-spacing: 1.2px;
        color: #333;

        &:before {
            content: '';
            height: 70px;
            width: 70px;
            display: block;
            margin: 0 auto 20px;
            background: url('./pawprint.png');
            background-size: 100%;
        }
    }

    p {
        font-size: 12px;
        line-height: 20px;
        text-transform: uppercase;
        color: #444;
        margin-bottom: 20px;
    }

    button {
        background: #EA8692;
        outline: 0;
        border: 0;
        height: 40px;
        width: 100px;
        text-align: center;
        color: #fff;
        font-size: 12px;
        border-radius: 4px;
        text-transform: uppercase;
        cursor: pointer;
    }
`;

export const Dog = styled.div`
    padding: 20px;
    background: url(${ props => props.image });
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
    margin: 30px auto 0;
    border-radius: 10px;

    @media (min-width: 381px) {
        width: 300px;
        height: 300px;
    }

    @media (max-width: 380px) {
        width: 260px;
        height: 260px;
    }
`;

export const Footer = styled.footer`
    width: 100%;
    position: fixed;
    bottom: 0;
    left: 0;
    right: 0;

    @media (max-width: 600px) {
        background: #fff;
        padding-top: 20px;
    }

    p {
        display: flex;
        align-items: center;
        justify-content: center;

        a {
            color: #EA8692;
            text-decoration: none;
            margin-left: 5px;
        }
    }
`;

export const Heart = styled.span`
    height: 20px;
    width: 20px;
    background: url('./heart.png');
    background-size: 100%;
    display: block;
    margin: 0 5px;
`;