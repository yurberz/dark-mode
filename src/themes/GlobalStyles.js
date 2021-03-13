import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
body {
  background: ${(props) => props.theme.colors.pageBackground}; 
  color :${(props) => props.theme.colors.tagLineColor};
  transition: all .5s ease; 
}

.container {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  width: 100%;
  
}

.wrapper {
  display: flex;
  flex-direction: column;
  align-items: center;
}

.toggle-button {
  position: fixed;
  top: 50px;
  right: 50px;
  cursor: pointer;
  height: 100px;
  width: 100px;
  border-radius: 50%;
  border: none;
  background-color: ${(props) => props.theme.colors.titleColor};
  color: ${(props) => props.theme.colors.pageBackground};

   &:focus {
   outline: none;
  }
}

h1 {
  color: ${(props) => props.theme.colors.titleColor};
}

span {
  color: ${(props) => props.theme.colors.tagLineColor};
  font-size: 18px;
  font-style: italic;
}
`;

export default GlobalStyle;
