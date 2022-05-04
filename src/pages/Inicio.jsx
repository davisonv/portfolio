import React from 'react'

//components
import { BreakFlexLine } from '../components/BreakFlexLine'

//images
import linkedinImg from '../assets/images/linkedin.svg'
import githubImg from '../assets/images/github.svg'

//styles
import '../styles/inicio.css'

export const Inicio = () => {
    return (
        <>

            <div className="secao-1">
                <span>
                    <h1>Davison Vinicius</h1>
                    <h3>Desenvolvedor de Software</h3>
                </span>

                <span>
                <a href="https://www.linkedin.com/in/davisonv/"  target="_blank" style={{paddingRight: '20px'}}>
                    <img src={linkedinImg} alt="logo do linkedin"></img>
                </a>
                <a href="https://github.com/davisonv/" target="_blank">
                    <img src={githubImg} alt="logo do github"></img>
                </a>
                </span>
                
                <BreakFlexLine />
                
                <button className="botao-orcamento"> Solicite um orçamento</button>

            </div>

            <div className="secao-2">
            </div>

        </>
    )
}