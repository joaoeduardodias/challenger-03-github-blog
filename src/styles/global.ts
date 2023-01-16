import { createGlobalStyle } from 'styled-components'

export const GlobalTheme = createGlobalStyle`

*{
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


body: {
  background: ${(props) => props.theme.colors['base-background']};
  color: ${({ theme }) => theme.colors['base-text']};
  -webkit-font-smoothing: antialiased;
}

 body, input, textarea, button {
  font: 400 1rem Nunito,sans-serif
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
