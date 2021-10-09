import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
    *{
        margin:0;
        padding:0;
        box-sizing:border-box;
        outline:0;
    }

    button{
        cursor:pointer;
    }

    :root {
        --white:#f5f5f5;
        --vanilla: #f1ede0;
        --black: #0c0d0d;
        --gray: #666360;
        --darkgray: #2C2A42;
    }`;
