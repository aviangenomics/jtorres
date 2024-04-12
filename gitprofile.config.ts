// gitprofile.config.ts

const CONFIG = {
  github: {
    username: 'aviangenomics', // Your GitHub org/user name. (This is the only required config)
  },
  /**
   * If you are deploying to https://<USERNAME>.github.io/, for example your repository is at https://github.com/arifszn/arifszn.github.io, set base to '/'.
   * If you are deploying to https://<USERNAME>.github.io/<REPO_NAME>/,
   * for example your repository is at https://github.com/arifszn/portfolio, then set base to '/portfolio/'.
   */
  base: '/jtorres/',
  projects: {
    github: {
      display: true, // Display GitHub projects?
      header: 'Github Projects',
      mode: 'manual', // Mode can be: 'automatic' or 'manual'
      automatic: {
        sortBy: 'stars', // Sort projects by 'stars' or 'updated'
        limit: 2, // How many projects to display.
        exclude: {
          forks: false, // Forked projects will not be displayed if set to true.
          projects: [], // These projects will not be displayed. example: ['arifszn/my-project1', 'arifszn/my-project2']
        },
      },
      manual: {
        // Properties for manually specifying projects
        projects: ['aviangenomics/bioinformatics'], ['aviangenomics/aviangenomics.github.io'// List of repository names to display. example: ['arifszn/my-project1', 'arifszn/my-project2']
      },
    },
    external: {
      header: 'My Projects',
      // To hide the `External Projects` section, keep it empty.
      projects: [
        {
          title: 'Network Analysis of Disease-Gene Associations',
          description:
            'I worked on this computational biology project as part of the Google Computer Science Research program. I was able to identify candidate genes that may explain various disease comorbidities.',
          imageUrl:
            'https://cdn2.picryl.com/photo/2020/01/23/gray-networks-nps-uses-social-network-analysis-to-cast-a-bright-light-on-maritime-7ed448-640.jpg',
          link: 'https://github.com/aviangenomics/jtorres/blob/2690fad66f013d4460c27a71eb33b5ba1c7668f7/Networks_Jair.pdf',
        },
        {
          title: 'Comparative Analysis of TLR4 in Songbirds',
          description:
            'In this project, I assembled the genome of the American Goldfinch (<i>Spinus tristis</i>) and annotated its genes. Here is a graphic showing how the TLR4 in the American Goldfinch experienced an inversion after splitting from the House Finch (<i>Haemorhous mexicanus</i>).',
          imageUrl:
            'https://img.freepik.com/free-vector/illustration-gallery-icon_53876-27002.jpg',
          link: 'https://example.com',
        },
      ],
    },
  },
  seo: {
    title: 'Portfolio of Jair Torres',
    description: '',
    imageURL: '',
  },
  social: {
    linkedin: 'jair-torres-454a91229',
    twitter: '',
    mastodon: '',
    researchGate: '',
    facebook: '',
    instagram: '',
    youtube: '', // example: 'pewdiepie'
    dribbble: '',
    behance: '',
    medium: '',
    dev: '',
    stackoverflow: '', // example: '1/jeff-atwood'
    skype: '',
    telegram: '',
    website: 'https://aviangenomics.github.io',
    phone: '',
    email: 'jtorres58@csustan.edu',
  },
  resume: {
    fileUrl:
      'https://github.com/aviangenomics/jtorres/blob/22cc020c8cd411c9180e9b8a2ae6f7c9b91b0e0a/CV_Torres.pdf', // Empty fileUrl will hide the `Download Resume` button.
  },
  skills: [
    'Bioinformatics', 'Genome Assembly', 'Gene Annotation', 'Python', 'R'
  ],
  experiences: [
    {
      company: 'CSU Stanislaus',
      position: 'Graduate Student Instructor',
      from: 'August 2023',
      to: 'Present',
      companyLink: 'https://www.csustan.edu',
    },
    {
      company: 'CSU Stanislaus',
      position: 'Peer Mentor Intern',
      from: 'August 2023',
      to: 'Present',
      companyLink: 'https://www.csustan.edu/learning-commons',
    },
  ],
  certifications: [
    {
      name: '',
      body: '',
      year: '',
      link: '',
    },
  ],
  educations: [
    {
      institution: 'CSU Stanislaus',
      degree: 'BSc Biological Sciences',
      from: '2019',
      to: '2023',
    },
    {
      institution: 'CSU Stanislaus',
      degree: 'BSc Biology',
      from: '2023',
      to: '2025',
    },
  ],
  publications: [
    {
      title: '',
      conferenceName: '',
      journalName: '',
      authors: '',
      link: '',
      description:
        '',
    },
    {
      title: '',
      conferenceName: '',
      journalName: '',
      authors: '',
      link: '',
      description:
        ''
    },
  ],
  // Display articles from your medium or dev account. (Optional)
  blog: {
    source: '', // medium | dev
    username: '', // to hide blog section, keep it empty
    limit: 2, // How many articles to display. Max is 10.
  },
  googleAnalytics: {
    id: '', // GA3 tracking id/GA4 tag id UA-XXXXXXXXX-X | G-XXXXXXXXXX
  },
  // Track visitor interaction and behavior. https://www.hotjar.com
  hotjar: {
    id: '',
    snippetVersion: 6,
  },
  themeConfig: {
    defaultTheme: 'lofi',

    // Hides the switch in the navbar
    // Useful if you want to support a single color mode
    disableSwitch: true,

    // Should use the prefers-color-scheme media-query,
    // using user system preferences, instead of the hardcoded defaultTheme
    respectPrefersColorScheme: false,

    // Display the ring in Profile picture
    displayAvatarRing: true,

    // Available themes. To remove any theme, exclude from here.
    themes: [
      'light',
      'dark',
      'cupcake',
      'bumblebee',
      'emerald',
      'corporate',
      'synthwave',
      'retro',
      'cyberpunk',
      'valentine',
      'halloween',
      'garden',
      'forest',
      'aqua',
      'lofi',
      'pastel',
      'fantasy',
      'wireframe',
      'black',
      'luxury',
      'dracula',
      'cmyk',
      'autumn',
      'business',
      'acid',
      'lemonade',
      'night',
      'coffee',
      'winter',
      'dim',
      'nord',
      'sunset',
      'procyon',
    ],

    // Custom theme, applied to `procyon` theme
    customTheme: {
      primary: '#fc055b',
      secondary: '#219aaf',
      accent: '#e8d03a',
      neutral: '#2A2730',
      'base-100': '#E3E3ED',
      '--rounded-box': '3rem',
      '--rounded-btn': '3rem',
    },
  },

  // Optional Footer. Supports plain text or HTML.
  footer: `Made with <a 
      class="text-primary" href="https://github.com/arifszn/gitprofile"
      target="_blank"
      rel="noreferrer"
    >GitProfile</a> and ❤️`,

  enablePWA: true,
};

export default CONFIG;
