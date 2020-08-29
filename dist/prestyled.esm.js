import theme from '@theme-ui/preset-tailwind';
import { transparentize } from '@theme-ui/color';
import { jsx, Alert as Alert$1, Badge as Badge$1, Avatar as Avatar$1, Button as Button$1, Card as Card$1, Checkbox as Checkbox$1, Close as Close$1, Divider as Divider$1, Donut as Donut$1, Embed as Embed$1, Input as Input$1, Label as Label$1, Box, Heading as Heading$1, IconButton as IconButton$1, Image as Image$1, Link as Link$1, MenuButton as MenuButton$1, Message as Message$1, NavLink as NavLink$1, Progress as Progress$1, Radio as Radio$1, Select as Select$1, Slider as Slider$1, Spinner as Spinner$1, Text as Text$1, Textarea as Textarea$1 } from 'theme-ui';
import { forwardRef } from 'react';

function _extends() {
  _extends = Object.assign || function (target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];

      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }

    return target;
  };

  return _extends.apply(this, arguments);
}

function _objectWithoutPropertiesLoose(source, excluded) {
  if (source == null) return {};
  var target = {};
  var sourceKeys = Object.keys(source);
  var key, i;

  for (i = 0; i < sourceKeys.length; i++) {
    key = sourceKeys[i];
    if (excluded.indexOf(key) >= 0) continue;
    target[key] = source[key];
  }

  return target;
}

var alerts = /*#__PURE__*/_extends( /*#__PURE__*/_extends({}, theme.alerts && theme.alerts), {}, {
  primary: {
    color: 'background'
  },
  secondary: {
    color: 'background',
    bg: 'secondary'
  },
  accent: {
    color: 'background',
    bg: 'accent'
  },
  highlight: {
    color: 'text',
    bg: 'highlight'
  }
});

var badges = /*#__PURE__*/_extends( /*#__PURE__*/_extends({}, theme.badges), {}, {
  primary: {
    color: 'background'
  },
  highlight: {
    color: 'text',
    bg: 'highlight'
  },
  accent: {
    color: 'background',
    bg: 'accent'
  },
  outline: {
    color: 'primary',
    bg: 'transparent',
    boxShadow: 'inset 0 0 0 1px'
  },
  circle: {
    height: 16,
    minWidth: 16,
    lineHeight: '16px',
    textAlign: 'center',
    borderRadius: 9999
  }
});

var borders = /*#__PURE__*/_extends({}, theme.borders && theme.borders);
var borderWidths = /*#__PURE__*/_extends({}, theme.borderWidths && theme.borderWidths);
var borderStyles = /*#__PURE__*/_extends({}, theme.borderStyles && theme.borderStyles);

var buttonCommon = {
  cursor: 'pointer',
  ml: 1,
  '&:first-of-type': {
    ml: 0
  }
};
var buttons = /*#__PURE__*/_extends( /*#__PURE__*/_extends({}, theme.buttons), {}, {
  "default": /*#__PURE__*/_extends( /*#__PURE__*/_extends({}, buttonCommon), {}, {
    color: 'text',
    backgroundColor: 'grayLight',
    '&:hover': {
      backgroundColor: 'gray'
    }
  }),
  primary: {
    variant: 'buttons.default',
    color: 'white',
    backgroundColor: 'primary',
    '&:hover': {
      backgroundColor: 'primaryHighlight'
    }
  },
  secondary: {
    variant: 'buttons.primary',
    color: 'background',
    bg: 'secondary'
  }
});

var cards = /*#__PURE__*/_extends( /*#__PURE__*/_extends({}, theme.cards && theme.cards), {}, {
  "default": {
    padding: 2,
    borderRadius: 4,
    boxShadow: '0 0 8px rgba(0, 0, 0, 0.125)'
  }
});

var baseColors = /*#__PURE__*/_extends( /*#__PURE__*/_extends({}, theme.colors), {}, {
  transparent: 'transparent',
  text: 'grayBlack',
  background: '#ffffff',
  primary: '#3333ee',
  secondary: '#111199',
  muted: '#f6f6f6',
  highlight: '#efeffe',
  accent: '#660099',
  darken: 'rgba(0, 0, 0, .25)',

  /* Colors (most courtesy of http://clrs.cc/) */
  aqua: '#7fdbff',
  black: '#111',
  blue: '#0074d9',
  fuchsia: '#f012be',
  green: '#2ecc40',
  lime: '#01ff70',
  maroon: '#85144b',
  navy: '#001f3f',
  olive: '#3d9970',
  orange: '#ff851b',
  purple: '#b10dc9',
  red: '#ff4136',
  silver: '#ddd',
  teal: '#39cccc',
  white: 'white',
  yellow: '#ffdc00'
});
var grayScale = {
  grayBlack: '#22292f',
  grayDarkest: '#3d4852',
  grayDarker: '#606f7b',
  grayDark: '#8795a1',
  gray: '#b8c2cc',
  grayLight: '#dae1e7',
  grayLighter: '#f1f5f8',
  grayLightest: '#f8fafc'
};
var colors = /*#__PURE__*/_extends( /*#__PURE__*/_extends( /*#__PURE__*/_extends({}, baseColors), grayScale), {}, {
  primary: baseColors.blue,
  background: baseColors.white,
  text: grayScale.grayDarkest,
  msAppTileColor: grayScale.grayDarkest,
  modes: {
    dark: {
      text: baseColors.gray[4],
      textInverted: baseColors.gray[5],
      background: baseColors.gray[9],
      backgroundTransparent: /*#__PURE__*/transparentize(baseColors.gray[9], 0.8),
      backgroundInverted: baseColors.black,
      primary: '#0cf',
      secondary: '#90c'
    }
  }
});

var forms = /*#__PURE__*/_extends( /*#__PURE__*/_extends({}, theme.forms && theme.forms), {}, {
  label: {
    fontSize: 1,
    fontWeight: 'bold'
  },
  input: {
    borderColor: 'gray',
    '&:focus': {
      borderColor: 'primary',
      boxShadow: function boxShadow(t) {
        var _t$colors;

        return "0 0 0 2px " + ((_t$colors = t.colors) === null || _t$colors === void 0 ? void 0 : _t$colors.primary);
      },
      outline: 'none'
    }
  },
  select: {
    borderColor: 'gray',
    '&:focus': {
      borderColor: 'primary',
      boxShadow: function boxShadow(t) {
        var _t$colors2;

        return "0 0 0 2px " + ((_t$colors2 = t.colors) === null || _t$colors2 === void 0 ? void 0 : _t$colors2.primary);
      },
      outline: 'none'
    }
  },
  textarea: {
    borderColor: 'gray',
    '&:focus': {
      borderColor: 'primary',
      boxShadow: function boxShadow(t) {
        var _t$colors3;

        return "0 0 0 2px " + ((_t$colors3 = t.colors) === null || _t$colors3 === void 0 ? void 0 : _t$colors3.primary);
      },
      outline: 'none'
    }
  },
  slider: {
    bg: 'muted'
  }
});

var grids = /*#__PURE__*/_extends({}, theme.grids && theme.grids);

var images = /*#__PURE__*/_extends({}, theme.images && theme.images);

var links = /*#__PURE__*/_extends( /*#__PURE__*/_extends({}, theme.links && theme.links), {}, {
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
      bg: 'highlight'
    },
    '&.active': {
      color: 'primary',
      bg: 'highlight'
    }
  }
});

var landingPage = {
  section: {
    "default": {
      backgroundColor: 'background',
      minHeight: '60px'
    },
    primary: {
      variant: 'landingPage.section.default',
      backgroundColor: 'primary'
    }
  },
  sectionContent: {
    "default": {
      margin: '0 auto',
      maxWidth: 'sectionContentMax',
      width: ['90%', '90%', '90%', '70%'],
      py: [3, 4]
    }
  }
};

var createMediaQuery = function createMediaQuery(n) {
  return "@media screen and (min-width:" + n + ")";
};

var aliases = ['sm', 'md', 'lg', 'xl', 'xxl'];
var breakpointStrings = /*#__PURE__*/[32, 40, 48, 64, 75].map(function (n) {
  return n + 'em';
});
var mediaQueries = /*#__PURE__*/breakpointStrings.map(createMediaQuery).reduce(function (acc, curr, index) {
  var _extends3;

  return _extends(_extends({}, acc), {}, (_extends3 = {}, _extends3["" + aliases[index]] = curr, _extends3));
}, /*#__PURE__*/_extends({}, theme.mediaQueries && theme.mediaQueries));

var messages = /*#__PURE__*/_extends({}, theme.messages && theme.messages);

var opacities = /*#__PURE__*/_extends({}, theme.opacities && theme.opacities);

var radii = /*#__PURE__*/_extends({}, theme.radii && theme.radii);

var shadows = /*#__PURE__*/_extends({}, theme.shadows && theme.shadows);

var sizes = /*#__PURE__*/_extends( /*#__PURE__*/_extends({}, theme.sizes && theme.sizes), {}, {
  sectionContentMax: 1200,
  sectionContent: ['90%', '90%', '70%']
}); // margin and padding

var space = /*#__PURE__*/[].concat(theme.space && theme.space, ['0em', '0.5em', '1em', '2em', '3em', '4em', '5em', '6em']);

var _h, _h2, _h3, _h4, _h5;
var fonts = {
  heading: "system-ui, BlinkMacSystemFont, -apple-system, Segoe UI, Roboto, Oxygen, Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue, sans-serif",
  body: "system-ui, BlinkMacSystemFont, -apple-system, Segoe UI, Roboto, Oxygen, Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue, sans-serif",
  mono: "Menlo, Monaco, Consolas, Liberation Mono, Courier New, monospace"
};
var fontSizes = ['0.625rem', '0.75rem', '0.875rem', '1rem', '1.0625rem', '1.125rem', '1.1875rem', '1.25rem', '1.5rem', '1.5625rem', '1.9375rem', '2rem', '2.5rem', '3rem', '4rem'];
var medium = 500;
var bold = 700; // alias

var regular = 400; // styled-system's `fontWeight` function can hook into the `fontWeights` object

var fontWeights = {
  medium: medium,
  bold: bold,
  regular: regular,
  heading: medium
};
var lineHeights = {
  standard: 1.6,
  display: 1.25,
  heading: 1.25
};
var letterSpacings = {
  normal: 'normal',
  caps: '0.015em'
};
var styles = /*#__PURE__*/_extends( /*#__PURE__*/_extends({}, theme.styles), {}, {
  root: {
    fontFamily: 'body',
    color: 'text',
    bg: 'background',
    lineHeight: 1.6
  },
  img: {
    maxWidth: '100%',
    height: 'auto'
  },
  p: {
    color: 'text'
  },
  h6: {
    variant: 'text.heading',
    fontSize: fontSizes[3],
    fontWeight: 'bold',
    marginTop: '0.2em',
    marginBottom: '0.7em',
    '& + h1, & + h2, & + h3, & + h4, & + h5, & + h6': {
      marginTop: "calc(" + fontSizes[3] + " * -0.7)"
    }
  },
  h5: (_h = {
    variant: 'text.heading',
    fontSize: fontSizes[4],
    marginBottom: '0.7em',
    marginTop: '0.2em',
    '& + h1, & + h2, & + h3, & + h4, & + h5, & + h6': {
      marginTop: "calc(" + fontSizes[4] + " * -0.7)"
    }
  }, _h["" + mediaQueries.lg] = {
    fontSize: fontSizes[7],
    '& + h1, & + h2, & + h3, & + h4, & + h5, & + h6': {
      marginTop: "calc(" + fontSizes[7] + " * -0.7)"
    }
  }, _h),
  h4: (_h2 = {
    variant: 'text.heading',
    fontSize: fontSizes[5],
    marginBottom: '0.7em',
    marginTop: '0.2em',
    '& + h1, & + h2, & + h3, & + h4, & + h5, & + h6': {
      marginTop: "calc(" + fontSizes[5] + " * -0.7)"
    }
  }, _h2["" + mediaQueries.lg] = {
    fontSize: fontSizes[9],
    '& + h1, & + h2, & + h3, & + h4, & + h5, & + h6': {
      marginTop: "calc(" + fontSizes[9] + " * -0.7)"
    }
  }, _h2),
  h3: (_h3 = {
    variant: 'text.heading',
    fontSize: fontSizes[6],
    marginBottom: '0.7em',
    marginTop: '0.2em',
    '& + h1, & + h2, & + h3, & + h4, & + h5, & + h6': {
      marginTop: "calc(" + fontSizes[6] + " * -0.7)"
    }
  }, _h3["" + mediaQueries.lg] = {
    fontSize: fontSizes[10],
    '& + h1, & + h2, & + h3, & + h4, & + h5, & + h6': {
      marginTop: "calc(" + fontSizes[10] + " * -0.7)"
    }
  }, _h3),
  h2: (_h4 = {
    variant: 'text.heading',
    fontSize: fontSizes[7],
    marginBottom: '0.7em',
    marginTop: '0.2em',
    '& + h1, & + h2, & + h3, & + h4, & + h5, & + h6': {
      marginTop: "calc(" + fontSizes[7] + " * -0.7)"
    }
  }, _h4["" + mediaQueries.lg] = {
    fontSize: fontSizes[12],
    '& + h1, & + h2, & + h3, & + h4, & + h5, & + h6': {
      marginTop: "calc(" + fontSizes[12] + " * -0.7)"
    }
  }, _h4),
  h1: (_h5 = {
    variant: 'text.heading',
    fontSize: fontSizes[8],
    marginBottom: '0.7em',
    marginTop: '0.2em',
    '& + h1, & + h2, & + h3, & + h4, & + h5, & + h6': {
      marginTop: "calc(" + fontSizes[8] + " * -0.7)"
    }
  }, _h5["" + mediaQueries.lg] = {
    fontSize: fontSizes[13],
    '& + h1, & + h2, & + h3, & + h4, & + h5, & + h6': {
      marginTop: "calc(" + fontSizes[13] + " * -0.7)"
    }
  }, _h5),
  a: {
    color: 'primary',
    '&:hover': {
      color: 'secondary'
    }
  },
  pre: {
    fontFamily: 'monospace',
    fontSize: 1,
    p: 3,
    color: 'text',
    bg: 'muted',
    overflow: 'auto',
    code: {
      color: 'inherit'
    }
  },
  code: {
    fontFamily: 'monospace',
    fontSize: 1
  },
  inlineCode: {
    fontFamily: 'monospace',
    color: 'secondary',
    bg: 'muted'
  },
  table: {
    width: '100%',
    my: 4,
    borderCollapse: 'separate',
    borderSpacing: 0,
    'th, td': {
      textAlign: 'left',
      py: '4px',
      pr: '4px',
      pl: 0,
      borderColor: 'muted',
      borderBottomStyle: 'solid'
    }
  },
  th: {
    verticalAlign: 'bottom',
    borderBottomWidth: '2px'
  },
  td: {
    verticalAlign: 'top',
    borderBottomWidth: '1px'
  },
  hr: {
    border: 0,
    borderBottom: '1px solid',
    borderColor: 'muted'
  },
  xray: {
    '*': {
      outline: '1px solid rgba(0, 192, 255, .25)'
    }
  },
  navlink: {
    display: 'inline-block',
    fontWeight: 'bold',
    color: 'inherit',
    textDecoration: 'none',
    ':hover,:focus': {
      color: 'primary'
    }
  }
});
var text = /*#__PURE__*/_extends( /*#__PURE__*/_extends({}, theme.text && theme.text), {}, {
  "default": {
    color: 'text',
    fontSize: 3
  },
  xxsmall: {
    color: 'text',
    fontSize: 0
  },
  xsmall: {
    color: 'text',
    fontSize: 1
  },
  small: {
    color: 'text',
    fontSize: 2
  },
  heading: {
    fontFamily: 'heading',
    fontWeight: 'normal',
    lineHeight: 'heading',
    color: 'text'
  },
  primary: {
    variant: 'text.default',
    color: 'primary'
  },
  secondary: {
    variant: 'text.default',
    color: 'secondary'
  },
  accent: {
    variant: 'text.default',
    color: 'accent'
  },
  muted: {
    variant: 'text.default',
    color: 'muted'
  },
  display: {
    variant: 'text.heading',
    fontSize: [5, 6],
    fontWeight: 'display',
    lineHeight: 'display',
    letterSpacing: '-0.03em',
    mt: 3
  },
  caps: {
    variant: 'text.default',
    textTransform: 'uppercase',
    letterSpacing: 'caps'
  },
  h1: styles.h1,
  h2: styles.h2,
  h3: styles.h3,
  h4: styles.h4,
  h5: styles.h5,
  h6: styles.h6
});

var zIndices = /*#__PURE__*/_extends({}, theme.zIndices && theme.zIndices);

var defaultTheme = {
  name: 'Default',
  alerts: alerts,
  badges: badges,
  borders: borders,
  borderStyles: borderStyles,
  borderWidths: borderWidths,
  buttons: buttons,
  cards: cards,
  colors: colors,
  fonts: fonts,
  fontSizes: fontSizes,
  fontWeights: fontWeights,
  forms: forms,
  grids: grids,
  images: images,
  landingPage: landingPage,
  letterSpacings: letterSpacings,
  lineHeights: lineHeights,
  links: links,
  mediaQueries: mediaQueries,
  messages: messages,
  opacities: opacities,
  radii: radii,
  shadows: shadows,
  sizes: sizes,
  space: space,
  styles: styles,
  text: text,
  zIndices: zIndices
};

var _h$1, _h2$1, _h3$1, _h4$1, _h5$1;
var fonts$1 = {
  heading: "'Lato', sans-serif",
  body: "'Lato', sans-serif",
  mono: "Menlo, Monaco, Consolas, Liberation Mono, Courier New, monospace"
};
var fontSizes$1 = ['0.625rem', '0.75rem', '0.875rem', '1rem', '1.0625rem', '1.125rem', '1.1875rem', '1.25rem', '1.5rem', '1.5625rem', '1.9375rem', '2rem', '2.5rem', '3rem', '4rem'];
var medium$1 = 500;
var bold$1 = 700; // alias

var regular$1 = 400; // styled-system's `fontWeight` function can hook into the `fontWeights` object

var fontWeights$1 = {
  medium: medium$1,
  bold: bold$1,
  regular: regular$1,
  heading: medium$1
};
var lineHeights$1 = {
  standard: 1.6,
  display: 1.25,
  heading: 1.25
};
var letterSpacings$1 = {
  normal: 'normal',
  caps: '0.015em'
};
var styles$1 = /*#__PURE__*/_extends( /*#__PURE__*/_extends({}, theme.styles), {}, {
  root: {
    fontFamily: 'body',
    color: 'text',
    bg: 'background'
  },
  img: {
    maxWidth: '100%',
    height: 'auto'
  },
  p: {
    color: 'text'
  },
  h6: {
    variant: 'text.heading',
    fontSize: fontSizes$1[3],
    fontWeight: 'bold',
    marginTop: '0.2em',
    marginBottom: '0.7em',
    '& + h1, & + h2, & + h3, & + h4, & + h5, & + h6': {
      marginTop: "calc(" + fontSizes$1[3] + " * -0.7)"
    }
  },
  h5: (_h$1 = {
    variant: 'text.heading',
    fontSize: fontSizes$1[4],
    marginBottom: '0.7em',
    marginTop: '0.2em',
    '& + h1, & + h2, & + h3, & + h4, & + h5, & + h6': {
      marginTop: "calc(" + fontSizes$1[4] + " * -0.7)"
    }
  }, _h$1["" + mediaQueries.lg] = {
    fontSize: fontSizes$1[7],
    '& + h1, & + h2, & + h3, & + h4, & + h5, & + h6': {
      marginTop: "calc(" + fontSizes$1[7] + " * -0.7)"
    }
  }, _h$1),
  h4: (_h2$1 = {
    variant: 'text.heading',
    fontSize: fontSizes$1[5],
    marginBottom: '0.7em',
    marginTop: '0.2em',
    '& + h1, & + h2, & + h3, & + h4, & + h5, & + h6': {
      marginTop: "calc(" + fontSizes$1[5] + " * -0.7)"
    }
  }, _h2$1["" + mediaQueries.lg] = {
    fontSize: fontSizes$1[9],
    '& + h1, & + h2, & + h3, & + h4, & + h5, & + h6': {
      marginTop: "calc(" + fontSizes$1[9] + " * -0.7)"
    }
  }, _h2$1),
  h3: (_h3$1 = {
    variant: 'text.heading',
    fontSize: fontSizes$1[6],
    marginBottom: '0.7em',
    marginTop: '0.2em',
    '& + h1, & + h2, & + h3, & + h4, & + h5, & + h6': {
      marginTop: "calc(" + fontSizes$1[6] + " * -0.7)"
    }
  }, _h3$1["" + mediaQueries.lg] = {
    fontSize: fontSizes$1[10],
    '& + h1, & + h2, & + h3, & + h4, & + h5, & + h6': {
      marginTop: "calc(" + fontSizes$1[10] + " * -0.7)"
    }
  }, _h3$1),
  h2: (_h4$1 = {
    variant: 'text.heading',
    fontSize: fontSizes$1[7],
    marginBottom: '0.7em',
    marginTop: '0.2em',
    '& + h1, & + h2, & + h3, & + h4, & + h5, & + h6': {
      marginTop: "calc(" + fontSizes$1[7] + " * -0.7)"
    }
  }, _h4$1["" + mediaQueries.lg] = {
    fontSize: fontSizes$1[12],
    '& + h1, & + h2, & + h3, & + h4, & + h5, & + h6': {
      marginTop: "calc(" + fontSizes$1[12] + " * -0.7)"
    }
  }, _h4$1),
  h1: (_h5$1 = {
    variant: 'text.heading',
    fontSize: fontSizes$1[8],
    marginBottom: '0.7em',
    marginTop: '0.2em',
    '& + h1, & + h2, & + h3, & + h4, & + h5, & + h6': {
      marginTop: "calc(" + fontSizes$1[8] + " * -0.7)"
    }
  }, _h5$1["" + mediaQueries.lg] = {
    fontSize: fontSizes$1[13],
    '& + h1, & + h2, & + h3, & + h4, & + h5, & + h6': {
      marginTop: "calc(" + fontSizes$1[13] + " * -0.7)"
    }
  }, _h5$1),
  a: {
    color: 'primary',
    '&:hover': {
      color: 'secondary'
    }
  },
  pre: {
    fontFamily: 'monospace',
    fontSize: 1,
    p: 3,
    color: 'text',
    bg: 'muted',
    overflow: 'auto',
    code: {
      color: 'inherit'
    }
  },
  code: {
    fontFamily: 'monospace',
    fontSize: 1
  },
  inlineCode: {
    fontFamily: 'monospace',
    color: 'secondary',
    bg: 'muted'
  },
  table: {
    width: '100%',
    my: 4,
    borderCollapse: 'separate',
    borderSpacing: 0,
    'th, td': {
      textAlign: 'left',
      py: '4px',
      pr: '4px',
      pl: 0,
      borderColor: 'muted',
      borderBottomStyle: 'solid'
    }
  },
  th: {
    verticalAlign: 'bottom',
    borderBottomWidth: '2px'
  },
  td: {
    verticalAlign: 'top',
    borderBottomWidth: '1px'
  },
  hr: {
    border: 0,
    borderBottom: '1px solid',
    borderColor: 'muted'
  },
  xray: {
    '*': {
      outline: '1px solid rgba(0, 192, 255, .25)'
    }
  },
  navlink: {
    display: 'inline-block',
    fontWeight: 'bold',
    color: 'inherit',
    textDecoration: 'none',
    ':hover,:focus': {
      color: 'primary'
    }
  }
});
var text$1 = /*#__PURE__*/_extends( /*#__PURE__*/_extends({}, theme.text && theme.text), {}, {
  "default": {
    color: 'text',
    fontSize: 3
  },
  xxsmall: {
    color: 'text',
    fontSize: 0
  },
  xsmall: {
    color: 'text',
    fontSize: 1
  },
  small: {
    color: 'text',
    fontSize: 2
  },
  heading: {
    fontFamily: 'heading',
    fontWeight: 'normal',
    lineHeight: 'heading',
    color: 'text'
  },
  primary: {
    variant: 'text.default',
    color: 'primary'
  },
  secondary: {
    variant: 'text.default',
    color: 'secondary'
  },
  accent: {
    variant: 'text.default',
    color: 'accent'
  },
  muted: {
    variant: 'text.default',
    color: 'muted'
  },
  display: {
    variant: 'text.heading',
    fontSize: [5, 6],
    fontWeight: 'display',
    lineHeight: 'display',
    letterSpacing: '-0.03em',
    mt: 3
  },
  caps: {
    variant: 'text.default',
    textTransform: 'uppercase',
    letterSpacing: 'caps'
  },
  h1: styles$1.h1,
  h2: styles$1.h2,
  h3: styles$1.h3,
  h4: styles$1.h4,
  h5: styles$1.h5,
  h6: styles$1.h6
});

var grayScale$1 = {
  grayBlack: '#22292f',
  grayDarkest: '#3d4852',
  grayDarker: '#606f7b',
  grayDark: '#8795a1',
  gray: '#b8c2cc',
  grayLight: '#dae1e7',
  grayLighter: '#f1f5f8',
  grayLightest: '#f8fafc'
};
var colors$1 = /*#__PURE__*/_extends( /*#__PURE__*/_extends({}, grayScale$1), {}, {
  primaryDarkest: '#012949',
  primaryDarker: '#024376',
  primaryDark: '#035CA3',
  primary: '#0476D0',
  primaryLight: '#088FFA',
  primaryLighter: '#35A4FB',
  primaryLightest: '#62B8FC',
  msAppTileColor: '#0476D0',
  background: '#FFF',
  text: grayScale$1.grayDarkest
});

var portfolioBlueTheme = /*#__PURE__*/_extends( /*#__PURE__*/_extends({}, defaultTheme), {}, {
  colors: colors$1,
  styles: styles$1,
  fonts: fonts$1,
  fontSizes: fontSizes$1,
  fontWeights: fontWeights$1,
  lineHeights: lineHeights$1,
  letterSpacings: letterSpacings$1,
  text: text$1
});

var Alert = function Alert(_ref) {
  var _ref$variant = _ref.variant,
      variant = _ref$variant === void 0 ? 'default' : _ref$variant,
      rest = _objectWithoutPropertiesLoose(_ref, ["variant"]);

  return jsx(Alert$1, Object.assign({}, rest, {
    variant: variant
  }));
};

var Badge = function Badge(_ref) {
  var _ref$variant = _ref.variant,
      variant = _ref$variant === void 0 ? 'default' : _ref$variant,
      rest = _objectWithoutPropertiesLoose(_ref, ["variant"]);

  return jsx(Badge$1, Object.assign({}, rest, {
    variant: variant
  }));
};

var Avatar = function Avatar(_ref) {
  var _ref$variant = _ref.variant,
      variant = _ref$variant === void 0 ? 'default' : _ref$variant,
      rest = _objectWithoutPropertiesLoose(_ref, ["variant"]);

  return jsx(Avatar$1, Object.assign({}, rest, {
    variant: variant
  }));
};

var Button = function Button(_ref) {
  var _ref$variant = _ref.variant,
      variant = _ref$variant === void 0 ? 'default' : _ref$variant,
      _ref$type = _ref.type,
      type = _ref$type === void 0 ? 'button' : _ref$type,
      rest = _objectWithoutPropertiesLoose(_ref, ["variant", "type"]);

  return jsx(Button$1, Object.assign({}, rest, {
    type: type,
    variant: variant
  }));
};

var Card = function Card(_ref) {
  var _ref$variant = _ref.variant,
      variant = _ref$variant === void 0 ? 'default' : _ref$variant,
      rest = _objectWithoutPropertiesLoose(_ref, ["variant"]);

  return jsx(Card$1, Object.assign({}, rest, {
    variant: variant
  }));
};

var Checkbox = function Checkbox(_ref) {
  var _ref$variant = _ref.variant,
      variant = _ref$variant === void 0 ? 'default' : _ref$variant,
      rest = _objectWithoutPropertiesLoose(_ref, ["variant"]);

  return jsx(Checkbox$1, Object.assign({}, rest, {
    variant: variant
  }));
};

var Close = function Close(_ref) {
  var _ref$variant = _ref.variant,
      variant = _ref$variant === void 0 ? 'theme.buttons.close' : _ref$variant,
      rest = _objectWithoutPropertiesLoose(_ref, ["variant"]);

  return jsx(Close$1, Object.assign({}, rest, {
    variant: variant
  }));
};

var Divider = function Divider(_ref) {
  var _ref$variant = _ref.variant,
      variant = _ref$variant === void 0 ? 'default' : _ref$variant,
      rest = _objectWithoutPropertiesLoose(_ref, ["variant"]);

  return jsx(Divider$1, Object.assign({}, rest, {
    variant: variant
  }));
};

var Donut = function Donut(_ref) {
  var _ref$variant = _ref.variant,
      variant = _ref$variant === void 0 ? 'default' : _ref$variant,
      rest = _objectWithoutPropertiesLoose(_ref, ["variant"]);

  return jsx(Donut$1, Object.assign({}, rest, {
    variant: variant
  }));
};

var Embed = function Embed(_ref) {
  var _ref$variant = _ref.variant,
      variant = _ref$variant === void 0 ? 'default' : _ref$variant,
      rest = _objectWithoutPropertiesLoose(_ref, ["variant"]);

  return jsx(Embed$1, Object.assign({}, rest, {
    variant: variant
  }));
};

var Input = function Input(_ref) {
  var _ref$variant = _ref.variant,
      variant = _ref$variant === void 0 ? 'default' : _ref$variant,
      rest = _objectWithoutPropertiesLoose(_ref, ["variant"]);

  return jsx(Input$1, Object.assign({}, rest, {
    variant: variant
  }));
};

var Label = function Label(_ref) {
  var _ref$variant = _ref.variant,
      variant = _ref$variant === void 0 ? 'default' : _ref$variant,
      rest = _objectWithoutPropertiesLoose(_ref, ["variant"]);

  return jsx(Label$1, Object.assign({}, rest, {
    variant: variant
  }));
};

var Field = /*#__PURE__*/forwardRef(function (_ref, ref) {
  var _ref$as = _ref.as,
      Control = _ref$as === void 0 ? Input : _ref$as,
      _ref$variant = _ref.variant,
      variant = _ref$variant === void 0 ? 'forms.formField.default' : _ref$variant,
      label = _ref.label,
      name = _ref.name,
      rest = _objectWithoutPropertiesLoose(_ref, ["as", "variant", "label", "name"]);

  return jsx(Box, Object.assign({}, rest, {
    sx: {
      variant: variant
    }
  }), jsx(Label, {
    htmlFor: name
  }, label), jsx(Control, {
    ref: ref,
    id: name,
    name: name
  }));
});

var Heading = function Heading(_ref) {
  var _ref$variant = _ref.variant,
      variant = _ref$variant === void 0 ? 'default' : _ref$variant,
      _ref$as = _ref.as,
      as = _ref$as === void 0 ? 'h2' : _ref$as,
      rest = _objectWithoutPropertiesLoose(_ref, ["variant", "as"]);

  var computedVariant;

  switch (variant) {
    case 'h1':
    case 'h2':
    case 'h3':
    case 'h4':
    case 'h5':
    case 'h6':
      computedVariant = variant;
      break;

    default:
      switch (as) {
        case 'h1':
        case 'h2':
        case 'h3':
        case 'h4':
        case 'h5':
        case 'h6':
          computedVariant = as;
          break;

        default:
          computedVariant = variant;
      }

  }

  return jsx(Heading$1, Object.assign({}, rest, {
    variant: computedVariant,
    as: as
  }));
};

var IconButton = function IconButton(_ref) {
  var _ref$variant = _ref.variant,
      variant = _ref$variant === void 0 ? 'theme.buttons.icon' : _ref$variant,
      rest = _objectWithoutPropertiesLoose(_ref, ["variant"]);

  return jsx(IconButton$1, Object.assign({}, rest, {
    variant: variant
  }));
};

var Image = function Image(_ref) {
  var _ref$variant = _ref.variant,
      variant = _ref$variant === void 0 ? 'default' : _ref$variant,
      rest = _objectWithoutPropertiesLoose(_ref, ["variant"]);

  return jsx(Image$1, Object.assign({}, rest, {
    variant: variant
  }));
};

var LandingPageSection = function LandingPageSection(_ref) {
  var variant = _ref.variant,
      as = _ref.as,
      rest = _objectWithoutPropertiesLoose(_ref, ["variant", "as"]);

  var localVariant = variant ? "landingPage.section." + variant : 'landingPage.section.default';
  return jsx(Box, Object.assign({}, rest, {
    variant: localVariant,
    as: as ? as : 'section'
  }));
};

var LandingPageSectionContent = function LandingPageSectionContent(_ref) {
  var variant = _ref.variant,
      rest = _objectWithoutPropertiesLoose(_ref, ["variant"]);

  var localVariant = variant ? "landingPage.sectionContent." + variant : 'landingPage.sectionContent.default';
  return jsx(Box, Object.assign({}, rest, {
    variant: localVariant
  }));
};

var Link = /*#__PURE__*/forwardRef(function (_ref, ref) {
  var _ref$variant = _ref.variant,
      variant = _ref$variant === void 0 ? 'default' : _ref$variant,
      rest = _objectWithoutPropertiesLoose(_ref, ["variant"]);

  return jsx(Link$1, Object.assign({
    ref: ref
  }, rest, {
    variant: variant
  }));
});

var MenuButton = function MenuButton(_ref) {
  var _ref$variant = _ref.variant,
      variant = _ref$variant === void 0 ? 'theme.buttons.menu' : _ref$variant,
      rest = _objectWithoutPropertiesLoose(_ref, ["variant"]);

  return jsx(MenuButton$1, Object.assign({}, rest, {
    variant: variant
  }));
};

var Message = function Message(_ref) {
  var _ref$variant = _ref.variant,
      variant = _ref$variant === void 0 ? 'default' : _ref$variant,
      rest = _objectWithoutPropertiesLoose(_ref, ["variant"]);

  return jsx(Message$1, Object.assign({}, rest, {
    variant: variant
  }));
};

var NavLink = /*#__PURE__*/forwardRef(function (_ref, ref) {
  var _ref$variant = _ref.variant,
      variant = _ref$variant === void 0 ? 'default' : _ref$variant,
      rest = _objectWithoutPropertiesLoose(_ref, ["variant"]);

  return jsx(NavLink$1, Object.assign({
    ref: ref
  }, rest, {
    variant: variant
  }));
});

var Progress = function Progress(_ref) {
  var _ref$variant = _ref.variant,
      variant = _ref$variant === void 0 ? 'default' : _ref$variant,
      rest = _objectWithoutPropertiesLoose(_ref, ["variant"]);

  return jsx(Progress$1, Object.assign({}, rest, {
    variant: variant
  }));
};

var Radio = function Radio(_ref) {
  var _ref$variant = _ref.variant,
      variant = _ref$variant === void 0 ? 'default' : _ref$variant,
      rest = _objectWithoutPropertiesLoose(_ref, ["variant"]);

  return jsx(Radio$1, Object.assign({}, rest, {
    variant: variant
  }));
};

var Select = function Select(_ref) {
  var _ref$variant = _ref.variant,
      variant = _ref$variant === void 0 ? 'default' : _ref$variant,
      rest = _objectWithoutPropertiesLoose(_ref, ["variant"]);

  return jsx(Select$1, Object.assign({}, rest, {
    variant: variant
  }));
};

var Slider = function Slider(_ref) {
  var _ref$variant = _ref.variant,
      variant = _ref$variant === void 0 ? 'default' : _ref$variant,
      rest = _objectWithoutPropertiesLoose(_ref, ["variant"]);

  return jsx(Slider$1, Object.assign({}, rest, {
    variant: variant
  }));
};

var Spinner = function Spinner(_ref) {
  var _ref$variant = _ref.variant,
      variant = _ref$variant === void 0 ? 'default' : _ref$variant,
      rest = _objectWithoutPropertiesLoose(_ref, ["variant"]);

  return jsx(Spinner$1, Object.assign({}, rest, {
    variant: variant
  }));
};

var Text = function Text(_ref) {
  var _ref$variant = _ref.variant,
      variant = _ref$variant === void 0 ? 'default' : _ref$variant,
      rest = _objectWithoutPropertiesLoose(_ref, ["variant"]);

  return jsx(Text$1, Object.assign({}, rest, {
    variant: variant
  }));
};

var Textarea = function Textarea(_ref) {
  var _ref$variant = _ref.variant,
      variant = _ref$variant === void 0 ? 'default' : _ref$variant,
      rest = _objectWithoutPropertiesLoose(_ref, ["variant"]);

  return jsx(Textarea$1, Object.assign({}, rest, {
    variant: variant
  }));
};

export { Alert, Avatar, Badge, Button, Card, Checkbox, Close, Close as CloseButton, Divider, Donut, Embed, Field, Field as FormField, Heading, IconButton, Image, Input, Label, LandingPageSection, LandingPageSectionContent, Link, MenuButton, Message, NavLink, Progress, Radio, Select, Slider, Spinner, Text, Textarea, defaultTheme, portfolioBlueTheme };
//# sourceMappingURL=prestyled.esm.js.map
