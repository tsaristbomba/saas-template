import { createGlobalStyle } from "styled-components"
import { primaryFont, secondaryFont } from "./fonts"

const GlobalStyles = createGlobalStyle`
    * {
        box-sizing: border-box;
        margin: 0;
        padding: 0;
        font-family: ${primaryFont}, ${secondaryFont}, sans-serif;
        line-height: 1.7rem;
    }
`
export default GlobalStyles
