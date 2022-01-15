import { createGlobalStyle } from 'styled-components';

export const GlobalStyles = createGlobalStyle`
    html {    
        font-family: system-ui;
    }
    
    *,
    *::before,
    *::after {
        margin: 0;    
        box-sizing: border-box;
    }
`;
