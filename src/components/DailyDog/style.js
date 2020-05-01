import styled from 'styled-components';

export const Container = styled.div`
    height: 100vh;
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    background-image: linear-gradient(to right bottom, #726ea1, #655f9c, #585197, #4b4291, #3d348b);

    h2 {
        margin-bottom: 30px;
        color: #fff;
        position: relative;
        font-weight: 400;
        text-transform: uppercase;
        font-size: 20px;

        &:after {
            width: 300px;
            height: 80px;
        }
    }
`;

export const Dog = styled.div`
    padding: 20px;
    height: 400px;
    width: 400px;
    background: url(${ props => props.image });
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
`;