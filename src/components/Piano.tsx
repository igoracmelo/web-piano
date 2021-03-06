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

interface NotePlaying {
  freq: number
  source: AudioScheduledSourceNode
}

export default function Piano() {
  const ctx = new AudioContext()
  let notesPlaying: NotePlaying[] = []

  const customSource = () => {
    const source = ctx.createOscillator()
    source.type = 'sine'
    source.connect(ctx.destination)
    return source
  }

  const playNote = (freq: number) => {
    if (notesPlaying.some(notePlaying => notePlaying.freq === freq))
      return
    const source = customSource()
    source.frequency.value = freq
    source.start(0)
    notesPlaying.push({ freq, source })
  }

  const stopNote = (freq: number) => {
    const note = 
      notesPlaying.filter(notePlaying => notePlaying.freq === freq)[0]
    if (!note) return
    note.source.stop()
    notesPlaying = 
      notesPlaying.filter(notesPlaying => notesPlaying.freq !== freq)
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