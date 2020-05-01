import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
    @import url('https://fonts.googleapis.com/css?family=Dosis|Julius+Sans+One|Merienda&display=swap');

    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }

    body {
        font-family: 'Merienda', sans-serif;
    }

    body, html, #root {
        height: 100%;
    }
`;