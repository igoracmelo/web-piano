import React from 'react'
import styled, { createGlobalStyle } from 'styled-components'
import Piano from './components/Piano'

const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
  }
`

const Container = styled.div`
  width: 100vw;
  height: 100vh;
  background-color: cyan;
  background: linear-gradient(45deg, #25634155, 60%, #75e2e255);

  display: grid;
  place-items: center;
`

function App() {
  return (
    <>
      <GlobalStyle />
      <Container>
        <Piano />
      </Container>
    </>
  )
}

export default App
