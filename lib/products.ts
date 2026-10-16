export type Product = {
  name: string
  tagline: string
  audience: string
  problem: string
  solution: string
  features: { title: string; description: string }[]
  availability: string
  url: string
  privacyUrl: string
  screenshots: { src: string; alt: string }[]
}

// Facts come from the WaveCode Studio app and its store listing. Keep platform
// availability honest: only the web app is live.
export const products: Product[] = [
  {
    name: 'WaveCode Studio',
    tagline: 'From first voice note to final master.',
    audience: 'For independent artists, producers, and songwriters.',
    problem:
      'Ideas live in voice memos, mixes in a downloads folder, lyrics in Notes, and feedback in a group chat.',
    solution:
      'WaveCode Studio puts all of it on the song itself, so you always know where a track stands and what it needs next.',
    features: [
      {
        title: 'Every song is a project',
        description: 'Move each song through your own stages, from idea to released.',
      },
      {
        title: 'Every version, kept',
        description: 'Upload demos, mixes, and masters, or record a take from your phone. Nothing is overwritten.',
      },
      {
        title: 'Feedback at the exact second',
        description: 'Leave a note right where you hear the problem, reply in threads, or record a voice note.',
      },
      {
        title: 'Lyrics with a memory',
        description: 'Every save is a revision, so an earlier draft is always one tap away.',
      },
    ],
    availability: 'Available now on the web, in English and Spanish. iOS and Android apps are in development.',
    url: 'https://studio.wavecode.dev',
    privacyUrl: 'https://studio.wavecode.dev/privacy',
    screenshots: [
      {
        src: '/products/wavecode-studio/01-songs.png',
        alt: 'WaveCode Studio song list, each song showing its stage as a row of console lights',
      },
      {
        src: '/products/wavecode-studio/03-feedback.png',
        alt: 'WaveCode Studio player with timestamped comments on a mix',
      },
    ],
  },
]
