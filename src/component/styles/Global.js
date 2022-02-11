import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`
   @import url('https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;600;700&display=swap');

   *{
      box-sizing: border-box;
   }
   body{
      /* background-color: #B1FEE6; */
      background-color: #e8fff8;
      color: #1C1E53;
      font-family: 'Poppins', sans-serif;
      font-size: 1.15em;
      margin: 0;
      max-width: 120rem;
   }
   
`;

export default GlobalStyles;
