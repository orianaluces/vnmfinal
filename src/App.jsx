import React from 'react'
import * as S from "./Components/Header/Header_style";
import Header from "./Components/Header/Header";
import Main from "./Components/Main/Main"
import Footer from "./Components/Footer/Footer";

export default function App() {
  return (
    <>
    <S.GlobalStyle />
    <Header/>
    <Main/>
    <Footer/>
    </>
  )
}