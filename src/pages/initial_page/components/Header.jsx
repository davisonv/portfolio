import React from 'react'
import styled from 'styled-components'

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

function Header () {
  return (
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
  )
}

export {Header}
export default Header