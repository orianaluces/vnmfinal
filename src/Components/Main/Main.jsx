import React from 'react';
import cardapio from "../../assets/cardapio.png";
import juegojs from "../../assets/juegojs.png";
import mcdonals from "../../assets/mcdonals.png";
import prime from "../../assets/prime.png";
import selfcare from "../../assets/selfcare.png";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faFacebook, faLinkedin} from "@fortawesome/free-brands-svg-icons";
import {faHeadphones, faPlane, faHouse, faCamera, faBook, faFilm, faPersonChalkboard, faPersonSwimming} from "@fortawesome/free-solid-svg-icons";
import * as S from "./Main_style";

export default function Main() {

        const desafios = [
            { imagem: selfcare, titulo: "SelfCare", link: "https://orianaluces.github.io/Desafiofinal_vnw/", descricao: "HTML y CSS"},
            { imagem: juegojs, titulo: "Juego JS", link: "https://lucesitasud.github.io/juego_js/", descricao: "HTML, CSS e JavaScrip"},
            { imagem: prime, titulo: "Prime Video", link: "https://orianaluces.github.io/primevideo/", descricao: "HTML y CSS"},
            { imagem: mcdonals, titulo: "Mcdonals", link: "https://github.com/orianaluces/Mcdonalsf", descricao: "React"},
            { imagem: cardapio, titulo: "Cardapio", link: "https://lucesitasud.github.io/cardapio-ent/", descricao: "HTML y CSS"},
            
        ]


  return (
    
    <main>
        
        <S.Inicio>
            {/*parte del inicio*/}
            <section id="inicio" className="inicio">
                <div class="contenido-banner">
                    <h1>ORIANA LUCES</h1>
                    <h2>Profesora de Ciencias Sociales - Estudiante de Desarrollo Web</h2>
                        <div class="redes">
                            <a href="https://www.facebook.com/oriana.luces" target="_blank"><FontAwesomeIcon  icon={faFacebook}/></a>
                            <a href="https://www.linkedin.com/in/oriana-luces-022b07262/" target="_blank"><FontAwesomeIcon  icon={faLinkedin}/></a>
                        </div>
                </div>
            </section>
            {/*parte del sobre mi*/}
            <section id="sobremi" className="sobremi">
                <div class="contenido-seccion">
                    <h2>Sobre Mí</h2>
                    <p><span>Hola, soy Oriana Luces.</span> Soy Venezolana, esposa y madre de dos hermosos principes. Soy profesora de Ciencias Sociales. Soy migrante, actualmente vivo en Brasil y estoy en proceso
                    de transición de carrera al area de TI. </p>

                    <div class="fila">
                        {/*Datos Personales*/}
                        <div class="col">
                        <h3>Datos Personales</h3>
                            <ul>
                                <li>
                                    <strong>Email</strong>
                                    orianalucess21@gmail.com
                                </li>
                       
                                <li>
                                    <strong>Dirección</strong>
                                    Curitiba, Paraná, Brasil
                                </li>
                                <li>
                                    <strong>Cargo</strong>
                                    <span>FREELANCE</span>
                                </li>
                            </ul>
                        </div>

                    {/*intereses*/}
                    <div className="col">
                        <h3>Intereses</h3>
                        <div className="contenedor-intereses">
                            <div className="interes">
                                <FontAwesomeIcon  icon={faHouse}/>
                                <span>FAMILIA</span>
                            </div>
                            <div className="interes">
                                <FontAwesomeIcon  icon={faHeadphones}/>
                                <span>MUSICA</span>
                            </div>
                            <div className="interes">
                                <FontAwesomeIcon  icon={faPlane}/>
                                <span>VIAJAR</span>
                            </div>
                            
                                <div className="interes">
                                    <FontAwesomeIcon  icon={faBook}/>
                                    <span>LIBROS</span>
                                </div>

                                <div className="interes">
                                    <FontAwesomeIcon  icon={faCamera}/>
                                    <span>FOTOS</span>
                                </div>
                                <div class="interes">
                                    <FontAwesomeIcon  icon={faFilm}/>
                                    <span>PELICULAS</span>
                                </div>
                                <div className="interes">
                                    <FontAwesomeIcon  icon={faPersonSwimming}/>
                                    <span>NADAR</span>
                                </div>
                                <div class="interes">
                                    <FontAwesomeIcon  icon={faPersonChalkboard}/>
                                    <span>ENSEÑANZA</span>
                                </div>
                            </div>
                        </div>
                    </div>           
                    <a href="https://lucesitasud.github.io/curriculof/" target="_blank">
                        <button>
                            Descargar CV <i class="fa-solid fa-download"></i>
                            <span className="overlay"></span>
                        </button>
                    </a>
                </div>
            </section>
        </S.Inicio>
        <S.Skills>
            <section class="skills" id="skills">

                <div className="container">
                    <h2 className="title-text">Skills</h2>
                        <div class="fila">
                        {/*<!-- Technical Skill -->*/}
                            <div class="col">
                                <h3>Technical Skills</h3>
                                    <div className="skill-box">
                                    <span className="title">HTML</span>
                                        <div className="skill-bar">
                                        <span className="skill-per html">
                                            <span className="tooltip">85%</span>
                                        </span>
                                        </div>
                                    </div>
                                    <div className="skill-box">
                                    <span className="title">CSS</span>
                                        <div className="skill-bar">
                                        <span className="skill-per css">
                                            <span className="tooltip">70%</span>
                                        </span>
                                        </div>
                                    </div>
                                    <div className="skill-box">
                                    <span className="title">JavaScript</span>
                                        <div className="skill-bar">
                                        <span className="skill-per javascript">
                                            <span className="tooltip">60%</span>
                                        </span>
                                        </div>
                                    </div>
                
                                    <div className="skill-box">
                                        <span className="title">React</span>
                                        <div className="skill-bar">
                                            <span className="skill-per react">
                                                <span className="tooltip">50%</span>
                                            </span>
                                        </div>
                                    </div>
                            </div>
                    {/*<!-- Professional Skills -->*/}
                            <div class="col">
                                <h3>Professional Skills</h3>
                                    <div className="skill-box">
                                        <span className="title">Comunicación</span>
                                            <div className="skill-bar">
                                            <span className="skill-per comunicacion">
                                                <span className="tooltip">85%</span>
                                            </span>
                                            </div>
                                    </div>
                                    <div className="skill-box">
                                        <span className="title">Trabajo en Equipo</span>
                                        <div className="skill-bar">
                                            <span className="skill-per trabajo">
                                                <span className="tooltip">80%</span>
                                            </span>
                                        </div>
                                    </div>
                                    <div className="skill-box">
                                        <span className="title">Creatividad</span>
                                        <div className="skill-bar">
                                            <span className="skill-per creatividad">
                                                <span className="tooltip">90%</span>
                                            </span>
                                        </div>
                                    </div>
                                    <div className="skill-box">
                                        <span className="title">Dedicación</span>
                                        <div className="skill-bar">
                                            <span className="skill-per dedicacion">
                                                <span className="tooltip">90%</span>
                                            </span>
                                        </div>
                                    </div>
                            </div>
                        </div>
                </div>
            </section>
        </S.Skills>

        {/*<!-- SECCION CURRICULUM -->*/}
        <S.Curriculum>
           
            <section id="curriculum" className="curriculum">
                <div class="contenido-seccion">
                    <h2>Curriculum</h2>
                    <div class="fila">
                        <div class="col izquierda">
                            <h3>Educación</h3>
                                <div class="item izq">
                                    <h4>Profesora de Ciencias Sociales</h4>
                                        <span class="casa">Universidad Pedagógica Experimental "Libertador"</span>
                                        <span class="fecha">2005 - 2010</span>
                                        <div class="conectori">
                                            <div class="circuloi"></div>
                                        </div>
                                </div>
                                <div class="item izq">
                                    <h4>Gerencia Administrativa</h4>
                                        <span class="casa">Instítuto Universitario de Tecnología Venezuela</span>
                                        <span class="fecha">2014 - 2016</span>
                                        <div class="conectori">
                                            <div class="circuloi"></div>
                                        </div>
                                </div>
                        </div>
                        <div class="col derecha">
                            <h3>Cursos profesionalizantes en TI</h3>
                                <div class="item der">
                                    <h4>Introdução ao HTML e CSS</h4>
                                        <span class="casa">UDEMY</span>
                                        <span class="fecha">2023</span>
                                        <div class="conectord">
                                            <div class="circulod"></div>
                                        </div>
                                </div>
                                <div class="item der">
                                    <h4>Web Development with Python</h4>
                                        <span class="casa">IBM</span>
                                        <span class="fecha">2023</span>
                                        <div class="conectord">
                                            <div class="circulod"></div>
                                        </div>
                                </div>
                                <div class="item der">
                                    <h4>Programación web desde cero</h4>
                                    <span class="casa">Egg Academy</span>
                                    <span class="fecha">2023</span>
                                    <div class="conectord">
                                        <div class="circulod"></div>
                                    </div>
                                </div>
                                <div class="item der">
                                    <h4>Desenvolvimento web - Front End</h4>
                                    <span class="casa">Vai na Web</span>
                                    <span class="fecha">2023 - 2024</span>
                                    <div class="conectord">
                                        <div class="circulod"></div>
                                    </div>
                                </div>
                        </div>
                    </div>
                </div>
            </section>
        </S.Curriculum>

       {/* <!-- SECCION PORTFOLIO -->*/}
        <S.Portafolio>
            <section id="portfolio" className="portfolio">
                <div className= "contenido-seccion">
                <h2>PORTFOLIO</h2>
                    <div class="galeria">
                        {desafios.map((item) => (
                            <div className="proyecto">
                                <a href={item.link} target="_blank"> <img src={item.imagem} alt={item.titulo}/></a>
                                    <div className="overlay">
                                        <h3>{item.titulo}</h3>
                                        <p>{item.descricao}</p>
                                    </div>
                            </div>
                        ))}
                    </div>
                </div>
            
            </section>
        </S.Portafolio>

       {/*<!-- SECCION CONTACTO -->*/}
       <S.Contacto>
            <section id="contacto" className="contacto">
                <div className="contenido-seccion">
                    <h2>CONTACTO</h2>
                        <div className="fila">
                            {/*<!-- Formulario -->*/}
                            <div className="col">
                                <input type="text" placeholder="Tu Nombre"/>
                                <input type="text" placeholder="Número telefónico"/>
                                <input type="text" placeholder="Dirección de correo"/>
                                <input type="text" placeholder="Tema"/>    
                                <textarea name="" id="" cols="30" rows="10" placeholder="Mensaje"></textarea>
                                <button>
                                    Enviar Mensaje
                                    <span className="overlay"></span>
                                </button>   
                            </div>
                        
                            <div className="col">
                                <div className="info">
                                    <ul>
                                        <li>
                                            Curitiba, Paraná, Brasil
                                        </li>
                                        <li>
                                            Email: orianalucess21@gmail.com
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                </div>
            </section>
        </S.Contacto>
    </main>
)
}