import styled, { css } from 'styled-components'
import * as Notes from '../Notes'


const Container = styled.div`
  display: flex;
`

export const KeyContainer = styled.div`
  position: relative;
`

interface KeyProps {
  note: Notes.Note
}

export const Key = styled.button<KeyProps>`
  width: 80px;
  height: 300px;
  border-radius: 5px;
  margin: 0 2px;
  background: white;
  border: none;
  cursor: pointer;
  box-shadow: 1px 2px 3px #0003;

  &:hover {
    background: #fffec0;
  }
  
  ${({ note }) => note.name.includes('#') && css`
    width: 60%;
    height: 60%;
    background: #151515;
    position: absolute;
    top: 0;
    left: calc(70% - 2px);
    z-index: 10;

    &:hover {
      background: #320;
    }
  `}
`

export default function Piano() {
  const playNote = (freq: number) => {
  }

  const stopNote = (freq: number) => {
  }

  return (
    <Container tabIndex={1}>
      {
        Notes.ChromaticScale.map(noteGroup => 
        <KeyContainer>
            { noteGroup.map(note => 
            <Key
              key={note.name}
              note={note}
              onMouseDown={() => playNote(note.freq)} 
              onMouseUp={() => stopNote(note.freq)} 
            />)}
        </KeyContainer>)
      }
    </Container>
  )
}