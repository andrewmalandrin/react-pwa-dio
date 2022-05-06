import { createGlobalStyle } from 'styled-components'
import CovidImg from "../../assets/images/covid.jpg"

const GlobalStyle = createGlobalStyle`
    * {
        outline: none;
        box-sizing: border-box;
    }

    body {
        line-height: normal;
    }

    html, body {
        width: 100%;
        min-height: 100%;
        display: flex;
        padding: 0;
        margin: 0;
    }

    #root {
        background: rgba(0,0,0,0.7) url(${CovidImg});
        height: 100%;
        width: 100%;
        background-size:  cover;
        background-position: center center;
        background-blend-mode: darken;
    }

    .mb-2{
        margin-bottom: 16px;
    }

    .pt-2{
        margin-bottom: 16px;
    }

    .cursor {
        cursor:pointer;
    }
`

export default GlobalStyle