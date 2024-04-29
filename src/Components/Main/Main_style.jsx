import styled from "styled-components";

export const Inicio = styled.section`


.inicio{
    background: linear-gradient(to top, rgba(30,35,38,.8), #000b11);
    background-size: cover;
    height: 100vh;
    color: #fff;
    display: flex;
    align-items: center;
}
.inicio .contenido-banner{
    padding: 20px;
    background-color: #1e2326;
    max-width: 350px;
    margin: auto;
    text-align: center;
    border-radius: 40px;
}
.inicio .contenido-banner img{
    margin-top: 40px;
    border: 10px solid #1CB698;
    display: block;
    width: 80%;
    margin: auto;
    border-radius: 100%;
}
.inicio .contenido-banner h1{
    margin-top: 40px;
    font-size: 42px;
    font-family: 'Righteous';
}
.inicio .contenido-banner h2{
    font-size: 15px;
    font-weight: normal;
}
.inicio .contenido-banner .redes a{
    color: #fff;
    display: inline-block;
    text-decoration: none;
    border: 1px solid #fff;
    border-radius: 100%;
    width: 42px;
    height: 42px;
    line-height: 42px;
    margin: 40px 5px;
    font-size: 20px;
    transition: .3s;
}
.inicio .contenido-banner .redes a:hover{
    background-color: #1CB698;
}
.sobremi{
    background-color: #1e2326;
    color: #fff;
    padding: 50px 20px;
}
.sobremi .contenido-seccion{
    max-width: 1100px;
    margin: auto;
}
.sobremi h2{
    font-size: 48px;
    font-family: 'Righteous';
    text-align: center;
    padding: 20px 0;

}
.sobremi .contenido-seccion p{
    font: 18px;
    line-height: 22px;
    margin-bottom: 20px;
}
.sobremi .contenido-seccion p span{
    color: #1CB698;
    font-weight: bold;
}
.sobremi .fila{
    display: flex;
}
.sobremi .fila .col
{
    width: 50%;
}
.sobremi .fila .col h3{
    font-size: 28px;
    font-family: 'Righteous';
    margin-bottom: 25px;
}
.sobremi .fila .col ul{
    list-style: none;
}
.sobremi .fila .col ul li{
    margin: 12px 0;
}
.sobremi .fila .col ul li strong{
    display: inline-block;
    color: #1CB698;
    width: 130px;
}
.sobremi .fila .col ul li span{
    background-color: #1CB698;
    padding: 3px;
    font-weight: bold;
    border-radius: 5px;
}
.sobremi .fila .col .contenedor-intereses{
    display: flex;
    flex-wrap: wrap;
}
.sobremi .fila .col .contenedor-intereses .interes{
    width: 100px;
    height: 100px;
    background-color: #252A2E;
    border-radius: 10px;
    margin: 0 15px 15px 0;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    transition: .3s;
}.sobremi .fila .col .contenedor-intereses .interes:hover{
    background-color: #1CB698;
}
.sobremi .fila .col .contenedor-intereses .interes i{
    font-size: 30px;
    margin-bottom: 10px;
}
.sobremi button{
    cursor: pointer;
    background-color: transparent;
    border: 2px solid #fff;
    width: fit-content;
    display: block;
    margin: 20px auto;
    padding: 10px 22px;
    font-size: 16px;
    color: #fff;
    position: relative;
    z-index: 10;
}
.sobremi button .overlay{
    position: absolute;
    top: 0;
    left: 0;
    width: 0;
    height: 100%;
    background-color: #1CB698;
    z-index: -1;
    transition: 1s;
}
.sobremi button:hover .overlay{
    width: 100%;
}

`

export const Skills = styled.section`

.skills{
    background-color: #252A2E;
    color: #fff;
    padding: 50px 20px;
    position: relative;
}
.skills .contenido-seccion{
    max-width: 1100px;
    margin: auto;
}
.skills h2{
    font-size: 48px;
    font-family: 'Righteous';
    text-align: center;
    padding: 20px 0;

}
.skills .fila{
    display: flex;
}
.skills .fila .col{
    width: 50%;
    padding: 0 20px;
}
.skills .fila .col h3{
    font-size: 28px;
    font-family: 'Righteous';
    margin-bottom: 25px;
}
.skills .skill > span{
    font-weight: bold;
    display: block;
    margin-bottom: 10px;
    border: solid red;
}

.title-text {
    text-align: center;
    background-color: #1CB698;
    color: #fff;
    font-weight: 400;
    border-radius: 50px;
    margin-top: 15px;
    margin-bottom: 30px;
}

.container .skill-box {
    width: 100%;
    margin: 25px 0;
}

.skill-box .title{
    display: block;
    font-size: 14px;
    font-weight: 600;
    color: white;
}

.skill-box .skill-bar{
    height: 8px;
    width: 100%;
    border-radius: 6px;
    margin-top: 6px;
    background: rgba(0,0, 0, 0.1);
}

.skill-box .skill-per{
    position: relative;
    display: block;
    height: 100%;
    width: 85%;
    border-radius: 6px;
    background: #1CB698;
    animation: progress 0.4s ease-in-out forwards;
    opacity: 0;
}

.skill-per.css {
    width: 70%;
    animation-delay: 0.1s;
}

.skill-per.javascript{
    width: 60%;
    animation-delay: 0.2s;
}

.skill-per.react{
    width: 50%;
    animation-delay: 0.3s;
}
.skill-per.comunicacion{
    width: 85%;
    animation-delay: 0.1s;
}

.skill-per.trabajo{
    width: 80%;
    animation-delay: 0.2s;
}

.skill-per.creatividad{
    width: 90%;
    animation-delay: 0.3s;
}

.skill-per.dedicacion{
    width: 90%;
    animation-delay: 0.4s;
}



@keyframes progress {
    0% {
        width: 0;
        opacity: 1;
    }

    100% {
        opacity: 1;
    }
}

.skill-per .tooltip{
    position: absolute;
    right: -14px;
    top: -28px;
    font-size: 9px;
    font-weight: 500;
    color: #fff;
    padding: 2px 6px;
    border-radius: 3px;
    background: #1CB698;
    z-index: 1;
}

.tooltip::before {
    content: '';
    position: absolute;
    left: 50%;
    bottom: -2px;
    height: 10px;
    width: 10px;
    z-index: -1;
    background-color: #1CB698;
    transform: translateX(-50%) rotate(45deg);
}
`

export const Curriculum = styled.section`

/* SECCION CURRICULUM */
.curriculum{
    background-color: #1e2326;
    color: #fff;
    padding: 50px 20px;
}
.curriculum .contenido-seccion{
    max-width: 1100px;
    margin: auto;
}
.curriculum h2{
    font-size: 48px;
    font-family: 'Righteous';
    text-align: center;
    padding: 20px 0;

}
.curriculum .fila{
    display: flex;
    justify-content: space-between;
}
.curriculum .fila .col{
    width: 49%;
    padding: 0 20px;
}
.curriculum .fila .col h3{
    font-size: 28px;
    font-family: 'Righteous';
    margin-bottom: 25px;
}
.curriculum .fila .izquierda{
    border-right: 2px solid #252A2E;
}
.curriculum .fila .derecha{
    border-left: 2px solid #252A2E;
}
.curriculum .fila .item{
    padding: 25px;
    margin-bottom: 30px;
    background-color: #252A2E;
    position: relative;
}
.curriculum .fila .item h4{
    font-size: 20px;
    margin-bottom: 10px;
}
.curriculum .fila .item .casa{
    color: #1CB698;
    font-size: 22px;
    font-weight: bold;
    display: block;
}
.curriculum .fila .item .fecha{
    display: block;
    color: #1CB698;
    margin-bottom: 10px;
}
.curriculum .fila .item p{
    line-height: 24px;
}
.curriculum .fila .izq{
    border-right: 2px solid #1CB698;
    margin-right: 20px;
}
.curriculum .fila .der{
    border-left: 2px solid #1CB698;
    margin-left: 20px;
}
.curriculum .fila .item .conectori{
    height: 2px;
    background-color: #1CB698;
    width: 47px;
    position: absolute;
    top: 50%;
    right: -47px;
    z-index: 5;
}
.curriculum .fila .item .conectori .circuloi{
    display: block;
    height: 10px;
    width: 10px;
    border-radius: 50%;
    background-color: #1CB698;
    float: right;
    position: relative;
    bottom: 4px;
}
.curriculum .fila .item .conectord{
    height: 2px;
    background-color: #1CB698;
    width: 47px;
    position: absolute;
    top: 50%;
    left: -47px;
    z-index: 5;
}
.curriculum .fila .item .conectord .circulod{
    display: block;
    height: 10px;
    width: 10px;
    border-radius: 50%;
    background-color: #1CB698;
    float: left;
    position: relative;
    bottom: 4px;
}

`
export const Portafolio = styled.section`

.portfolio{
    background-color: #252A2E;
    color: #fff;
    padding: 50px 20px;
}
.portfolio .contenido-seccion{
    max-width: 1100px;
    margin: auto;
}
.portfolio h2{
    font-size: 48px;
    font-family: 'Righteous';
    text-align: center;
    padding: 20px 0;
}
.portfolio .galeria{
    display: flex;
    flex-wrap: wrap;
    justify-content: space-around;
}
.portfolio .galeria .proyecto{
    max-width: 340px;
    height: fit-content;
    margin: 10px;
    cursor: pointer;
}
.portfolio .galeria .proyecto img{
    width: 100%;
    display: block;
}
.portfolio .galeria .proyecto .overlay{
    position: relative;
    top: 0;
    width: 100%;
    height: 100%;
    text-align: center;
    background: linear-gradient(rgba(28,182,152,.8), rgba(28,182,152,.8));
    display: flex;
    flex-direction: column;
    justify-content: center;
    transition: 1s;
    font-size: 18px;
    letter-spacing: 3px;
    opacity: 0;
}
.portfolio .galeria .proyecto .overlay h3{
    margin-bottom: 20px;
    transition: 1s;
}
.portfolio .galeria .proyecto .overlay:hover{
    opacity: 1;
}
.portfolio .galeria .proyecto .overlay:hover h3{
    margin-bottom: 0px;
}


`
export const Contacto = styled.section`
/* SECCION CONTACTO */
.contacto{
    background-color: #1e2326;
    color: #fff;
    padding: 50px 0;
}
.contacto .contenido-seccion{
    max-width: 1100px;
    margin: auto;
}
.contacto h2{
    font-size: 48px;
    font-family: 'Righteous';
    text-align: center;
    padding: 20px 0;
}
.contacto .fila{
    display: flex;
}
.contacto .col{
    width: 50%;
    padding: 10px;
    position: relative;
}
.contacto .col input, .contacto .col textarea{
    display: block;
    width: 100%;
    padding: 18px;
    border: none;
    margin-bottom: 20px;
    background-color: #252A2E;
    color: #fff;
    font-size: 18px;
}
.contacto button{
    cursor: pointer;
    background-color: transparent;
    border: 2px solid #fff;
    width: fit-content;
    display: block;
    margin: 20px auto;
    padding: 10px 22px;
    font-size: 16px;
    color: #fff;
    position: relative;
    z-index: 10;
}
.contacto button .overlay{
    position: absolute;
    top: 0;
    left: 0;
    width: 0;
    height: 100%;
    background-color: #1CB698;
    z-index: -1;
    transition: 1s;
}
.contacto button:hover .overlay{
    width: 100%;
}
.contacto .col img{
    width: 100%;
}
.contacto .col .info{
    position: absolute;
    top: 40%;
    background-color: #252A2E;
    padding: 20px;
    max-width: 350px;
    left: 50%;
    transform: translate(-50%, -50%);
}
.contacto .col .info ul{
    list-style: none;
}
.contacto .col .info ul li{
    margin-bottom: 20px;
}
.contacto .col .info ul li i{
    color: #1CB698;
    display: inline-block;
    margin-right: 20px;
}

`

