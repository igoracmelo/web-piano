export type Note = {
  name: string
  freq: number
  shortcut: string
}

export const ChromaticScale: Note[][] = [
  [
    {
      name: 'C4',
      freq: 261.62,
      shortcut: 'a',
    },
    {
      name: 'C#4',
      freq: 277.18,
      shortcut: 'w',
    },
  ],

  [
    {
      name: 'D4',
      freq: 293.67,
      shortcut: 's',
    },
    {
      name: 'D#4',
      freq: 311.13,
      shortcut: 'e',
    },
  ],

  [
    {
      name: 'E4',
      freq: 329.63,
      shortcut: 'd',
    },
  ],
]
