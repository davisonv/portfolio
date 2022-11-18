import React from 'react'
import styled from 'styled-components'
import { slide as Menu } from 'react-burger-menu'

import HeaderImage from '../../../assets/images/HeaderImage1.png'

const HeaderContainer = styled.div`
  background-image: url(${HeaderImage});
  background-position: center;
  background-size: cover;
  display: flex;
  justify-content: center;
  align-items: flex-end;
  height: 100vh;
  width: 100vw;
`

const ItemMenu = styled.a`
  display: flex;
  align-items: center;
`

function Header () {

  const styles = {
    bmBurgerButton: {
      position: 'fixed',
      width: '30px',
      height: '25px',
      left: '28px',
      top: '28px'
    },
    bmBurgerBars: {
      background: '#f0f5f8'
    },
    bmBurgerBarsHover: {
      background: '#1965ff'
    },
    bmCrossButton: {
      height: '24px',
      width: '24px'
    },
    bmCross: {
      background: '#bdc3c7'
    },
    bmMenuWrap: {
      position: 'fixed',
      height: '100%'
    },
    bmMenu: {
      background: '#0a263d',
      padding: '2.5em 1.5em 0',
      fontSize: '1.15em'
    },
    bmMorphShape: {
      fill: '#373a47'
    },
    bmItemList: {
      color: '#b8b7ad',
      padding: '0.8em',
      display: 'flex',
      flexDirection: 'column'
    },
    bmItem: {
      display: 'inline-block',
      textDecoration: 'none',
      color: '#f0f5f8'
    },
    bmOverlay: {
      background: 'rgba(14, 0, 207, 0.3)'
    }
  }

  return (
    <>
      <Menu styles={styles}>
        <a id="home" href="/">
            Home
        </a>
        <a id="about" href="/about">About</a>
        <a id="contact" href="/contact">Contact</a>
      </Menu>

      <HeaderContainer>
      <h1 
        style={{
          color: '#fff',
          fontWeight: 'normal',
          marginBottom: '10%'
        }}
        className='animate__animated animate__backInDown'
      >
        Elevando negócios no universo digital.
      </h1>
    </HeaderContainer>
    </>
    
  )
}

export {Header}
export default Header