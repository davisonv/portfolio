import React from 'react'

//images
import linkedinImg from '../assets/images/linkedin.svg'
import githubImg from '../assets/images/github.svg'


import '../styles/inicio.css'

export const Inicio = () => {
    return (
        <>

            <div className="fundo-tom-escuro">
                <span>
                    <h1>Davison Vinicius</h1>
                    <h3>Desenvolvedor de Software</h3>
                </span>

                <span>
                <a href="https://www.linkedin.com/in/davisonv/" style={{paddingRight: '20px'}}>
                    <img src={linkedinImg} alt="logo do linkedin"></img>
                </a>
                <a href="https://github.com/davisonv/">
                    <img src={githubImg} alt="logo do github"></img>
                </a>
                </span>
            </div>

            
        </>
    )
}