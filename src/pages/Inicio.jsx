import React from 'react'

//components
import { BreakFlexLine } from '../components/BreakFlexLine'

//images
import linkedinImg from '../assets/images/linkedin.svg'
import githubImg from '../assets/images/github.svg'
import sigaImg from '../assets/images/siga.png'


//styles
import '../styles/inicio.css'

export const Inicio = () => {
    return (
        <>

            <div className="secao-1 ">
                <span>
                    <h1>Davison Vinicius</h1>
                    <h3>Desenvolvedor de Software</h3>
                </span>

                <span>
                <a href="https://www.linkedin.com/in/davisonv/"  target="_blank" style={{paddingRight: '20px'}}>
                    <img className="social-icons" src={linkedinImg} alt="logo do linkedin" />
                </a>
                <a href="https://github.com/davisonv/" target="_blank">
                    <img className="social-icons" src={githubImg} alt="logo do github" />
                </a>
                </span>
                
                <BreakFlexLine/>

                <a href="https://forms.gle/dGWjBGf8qYoozCLW6" target="_blank">
                    <button className="botao-orcamento">
                        Solicite um orçamento
                    </button>
                </a>

            </div>

            <div className="secao-2">
                <h2>Alguns dos meus projetos recentes...</h2>

                <BreakFlexLine />
                <div className="card">
                    <img className="card-img" src={sigaImg} alt="imagem da tela de login do sistema siga" />
                    <BreakFlexLine />
                    <span className="card-label">
                        Siga Web
                    </span>
                </div>

            </div>

        </>
    )
}