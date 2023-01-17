import { createGlobalStyle } from 'styled-components'

export const GlobalStyles = createGlobalStyle`

* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;


  ::-webkit-scrollbar {
      width: 0.45rem;
    }
  ::-webkit-scrollbar-track {
      background: ${({ theme }) => theme.colors['base-border']}
    }
  ::-webkit-scrollbar-thumb {
      background: ${({ theme }) => theme.colors['brand-blue']};
      border-radius: 999px;
    }
}
:focus {
  outline: 0;
  box-shadow: 0 0 0 1px ${({ theme }) => theme.colors['brand-blue']};
}

 body, input, textarea, button {
  font: 400 ${({ theme }) => theme.textSizes['text-text-m']} Nunito,sans-serif;
  line-height: 160%;
 }  

 body {
  background-color: ${(props) => props.theme.colors['base-background']};
  color: ${({ theme }) => theme.colors['base-text']};
  -webkit-font-smoothing: antialiased;
}

ul {
  list-style: none;
}
a {
  color: inherit;
  text-decoration: none;
}
button {
  cursor: pointer;
}


`
