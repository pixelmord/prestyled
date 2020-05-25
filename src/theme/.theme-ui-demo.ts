export default {
  colors: {
    text: '#000000',
    background: '#ffffff',
    primary: '#3333ee',
    secondary: '#111199',
    muted: '#f6f6f6',
    highlight: '#efeffe', // '#ffffcc',
    gray: '#777777',
    accent: '#660099',
    darken: 'rgba(0, 0, 0, .25)',
    modes: {
      dark: {
        text: '#ffffff',
        background: '#060606',
        primary: '#33ccff',
        secondary: '#ee00ff',
        muted: '#191919',
        highlight: '#29112c',
        gray: '#999999',
        accent: '#cc00ff',
      },
      deep: {
        text: 'hsl(210, 50%, 96%)',
        background: 'hsl(230, 25%, 18%)',
        primary: 'hsl(260, 100%, 80%)',
        secondary: 'hsl(290, 100%, 80%)',
        highlight: 'hsl(260, 20%, 40%)',
        accent: 'hsl(290, 100%, 80%)',
        muted: 'hsla(230, 20%, 0%, 20%)',
        gray: 'hsl(210, 50%, 60%)',
      },
      swiss: {
        text: 'hsl(10, 20%, 20%)',
        background: 'hsl(10, 10%, 98%)',
        primary: 'hsl(10, 80%, 50%)',
        secondary: 'hsl(10, 60%, 50%)',
        highlight: 'hsl(10, 40%, 90%)',
        accent: 'hsl(250, 60%, 30%)',
        muted: 'hsl(10, 20%, 94%)',
        gray: 'hsl(10, 20%, 50%)',
      },
    },
  },
  fonts: {
    body: 'system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", sans-serif',
    heading: 'inherit',
    monospace: 'Menlo, monospace',
  },
  fontSizes: [12, 14, 16, 20, 24, 32, 48, 64, 72],
  fontWeights: {
    body: 400,
    heading: 800,
    bold: 700,
    display: 800,
  },
  lineHeights: {
    body: 1.5,
    heading: 1.25,
  },
  sizes: {
    sidebar: 256,
    container: 1024,
  },
  links: {
    button: {
      display: 'inline-block',
      textDecoration: 'none',
      fontWeight: 'bold',
      fontSize: 2,
      p: 3,
      color: 'background',
      bg: 'text',
      borderRadius: 6,
      '&:hover, &:focus': {
        color: 'background',
        bg: 'primary',
      },
    },
    nav: {
      display: 'block',
      width: '100%',
      px: 2,
      py: 2,
      color: 'inherit',
      textDecoration: 'none',
      fontSize: 1,
      fontWeight: 'bold',
      bg: 'transparent',
      transitionProperty: 'background-color',
      transitionTimingFunction: 'ease-out',
      transitionDuration: '.2s',
      borderRadius: 2,
      '&:hover': {
        bg: 'highlight',
      },
      '&.active': {
        color: 'primary',
        bg: 'highlight',
      },
    },
  },
  badges: {
    primary: {
      color: 'background',
    },
    highlight: {
      color: 'text',
      bg: 'highlight',
    },
    accent: {
      color: 'background',
      bg: 'accent',
    },
    outline: {
      color: 'primary',
      bg: 'transparent',
      boxShadow: 'inset 0 0 0 1px',
    },
    circle: {
      height: 16,
      minWidth: 16,
      lineHeight: '16px',
      textAlign: 'center',
      borderRadius: 9999,
    },
  },
  images: {
    avatar: {
      width: 48,
      height: 48,
      borderRadius: 9999,
    },
  },
  cards: {

    compact: {
      padding: 1,
      borderRadius: 2,
      border: '1px solid',
      borderColor: 'muted',
    },
  },
  forms: {

  },
  alerts: {

  },
  layout: {
    container: {
      p: 3,
      // maxWidth: 1024,
    },
  },
  styles: {
    root: {
      margin: 0,
      fontFamily: 'body',
      lineHeight: 'body',
      fontWeight: 'body',
    },

    h1: {
      variant: 'text.display',
    },
    h2: {
      variant: 'text.heading',
      fontSize: 5,
    },
    h3: {
      variant: 'text.heading',
      fontSize: 4,
    },
    h4: {
      variant: 'text.heading',
      fontSize: 3,
    },
    h5: {
      variant: 'text.heading',
      fontSize: 2,
    },
    h6: {
      variant: 'text.heading',
      fontSize: 1,
    },

  },
};
