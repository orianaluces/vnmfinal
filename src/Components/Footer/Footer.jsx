import React from "react";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faFacebook, faLinkedin} from "@fortawesome/free-brands-svg-icons";
import * as S from "./Footer_style";


export default function Footer(){
    return(
        <S.Footer>
            <a href="#inicio" className="arriba">
                <button>Inicio</button>
            </a>
            <div className="redes">
                <a href="https://www.facebook.com/oriana.luces" target="_blank"><FontAwesomeIcon  icon={faFacebook}/></a>
                <a href="https://www.linkedin.com/in/oriana-luces-022b07262/" target="_blank"><FontAwesomeIcon  icon={faLinkedin}/></a>
            </div>
            <p>&copy; 2024 O.L</p>
            
        </S.Footer>
    )

}

