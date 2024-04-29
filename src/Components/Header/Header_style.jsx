import styled, { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`

@import url('https://fonts.googleapis.com/css2?family=Work+Sans:ital@0;1&display=swap');

 * {
     margin: 0;
     padding: 0;
     box-sizing: border-box;
     font-family: Work Sans;
    
    }
`;

export const Header = styled.header`
.contenedor-header{
    background: #1e2326;
    width: 100%;
    top: 0;
    left: 0;
    z-index: 99;
}
.contenedor-header header{
    max-width: 1100px;
    margin: auto;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 15px 20px;
}
.contenedor-header header .logo a{
    font-family: 'Righteous';
    font-size: 36px;
    color: #1CB698;
    text-decoration: none;
}
.contenedor-header header ul{
    display: flex;
    list-style: none;
}
.contenedor-header header nav ul li a{
    text-align: none;
    color: #fff;
    margin: 0 15px;
    padding: 3px;
    transition: .5s;
    text-decoration: none;
}
.contenedor-header header nav ul li a:hover{
    color: #1CB698;
}
.nav-responsive{
    background-color: #1CB698;
    color:#fff;
    padding: 5px 10px;
    border-radius: 5px;
    cursor: pointer;
    display: none;
}

`