// Company details repeated across the site. `legalName` must match the
// D-U-N-S record exactly, so change it here if registration says otherwise.
export const site = {
  name: 'WaveCode',
  legalName: 'WaveCode LLC',
  url: 'https://www.wavecode.dev',
  email: 'izzy@wavecode.dev',
  location: {
    label: 'Aguadilla, Puerto Rico',
    city: 'Aguadilla',
    region: 'PR',
    country: 'US',
  },
  founder: {
    name: 'Israel Romero',
    shortName: 'Izzy',
    linkedIn: 'https://www.linkedin.com/in/israel-romero-917a54219/',
  },
  description:
    'WaveCode is an independent software development studio based in Puerto Rico. We design, build, and launch web and mobile applications for businesses while developing products of our own.',
} as const

export const projectInquiryHref = `mailto:${site.email}?subject=${encodeURIComponent('Project inquiry')}`
