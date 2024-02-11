export const METADATA = {
  creator: 'HADI',
  description:
    'Personal website, portfolio, fullstack website developer',
  keyword:
    'hadi, HADI, DevOps Developer, programming tips, belajar javascript, belajar typescript',
  authors: {
    name: 'DevOps Developer',
    url: process.env.DOMAIN,
  },
  openGraph: {
    url: process.env.DOMAIN,
    siteName: 'HADI',
    locale: 'id-ID',
  },
  icons: {
    icon: '/favicon.ico',
    shortcut: '/favicon.ico',
    apple: '/favicon.ico',
    other: {
      rel: 'favicon',
      url: '/favicon.ico',
    },
  },
  exTitle: '| HADI',
  profile: 'https://avatars.githubusercontent.com/u/117913964?v=4',
  githubUsername: process.env.GITHUB_USERNAME,
  githubToken: process.env.GITHUB_TOKEN,
};
