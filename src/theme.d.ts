export declare const breakpoints: {
  [key: string]: string;
};
export declare const mediaQueries: {
  [key: string]: string;
};
export declare const colors: {
  aqua: string;
  black: string;
  blue: string;
  fuchsia: string;
  gray: string;
  green: string;
  lime: string;
  maroon: string;
  navy: string;
  olive: string;
  orange: string;
  purple: string;
  red: string;
  silver: string;
  teal: string;
  white: string;
  yellow: string;
};
export declare const space: string[];
export declare const fonts: {
  headline: string;
  text: string;
  mono: string;
};
export declare const fontSizes: string[];
export declare const medium = 500;
export declare const bold = 700;
export declare const regular = 400;
export declare const fontWeights: {
  medium: number;
  bold: number;
  regular: number;
};
export declare const lineHeights: {
  standard: number;
  display: number;
};
export declare const letterSpacings: {
  normal: string;
  caps: string;
};
export declare const textStyles: {
  h6: {
    fontFamily: string;
    fontSize: string;
    fontWeight: number;
    lineHeight: number;
    marginTop: string;
    marginBottom: string;
    '& + h1, & + h2, & + h3, & + h4, & + h5, & + h6': {
      marginTop: string;
    };
  };
  h5: {
    [x: string]:
      | string
      | number
      | {
          marginTop: string;
          fontSize?: undefined;
          '& + h1, & + h2, & + h3, & + h4, & + h5, & + h6'?: undefined;
        }
      | {
          fontSize: string;
          '& + h1, & + h2, & + h3, & + h4, & + h5, & + h6': {
            marginTop: string;
          };
          marginTop?: undefined;
        };
    fontFamily: string;
    fontSize: string;
    fontWeight: number;
    lineHeight: number;
    marginBottom: string;
    marginTop: string;
    '& + h1, & + h2, & + h3, & + h4, & + h5, & + h6': {
      marginTop: string;
    };
  };
  h4: {
    [x: string]:
      | string
      | number
      | {
          marginTop: string;
          fontSize?: undefined;
          '& + h1, & + h2, & + h3, & + h4, & + h5, & + h6'?: undefined;
        }
      | {
          fontSize: string;
          '& + h1, & + h2, & + h3, & + h4, & + h5, & + h6': {
            marginTop: string;
          };
          marginTop?: undefined;
        };
    fontFamily: string;
    fontSize: string;
    fontWeight: number;
    lineHeight: number;
    marginBottom: string;
    marginTop: string;
    '& + h1, & + h2, & + h3, & + h4, & + h5, & + h6': {
      marginTop: string;
    };
  };
  h3: {
    [x: string]:
      | string
      | number
      | {
          marginTop: string;
          fontSize?: undefined;
          '& + h1, & + h2, & + h3, & + h4, & + h5, & + h6'?: undefined;
        }
      | {
          fontSize: string;
          '& + h1, & + h2, & + h3, & + h4, & + h5, & + h6': {
            marginTop: string;
          };
          marginTop?: undefined;
        };
    fontFamily: string;
    fontSize: string;
    fontWeight: number;
    lineHeight: number;
    marginBottom: string;
    marginTop: string;
    '& + h1, & + h2, & + h3, & + h4, & + h5, & + h6': {
      marginTop: string;
    };
  };
  h2: {
    [x: string]:
      | string
      | number
      | {
          marginTop: string;
          fontSize?: undefined;
          '& + h1, & + h2, & + h3, & + h4, & + h5, & + h6'?: undefined;
        }
      | {
          fontSize: string;
          '& + h1, & + h2, & + h3, & + h4, & + h5, & + h6': {
            marginTop: string;
          };
          marginTop?: undefined;
        };
    fontFamily: string;
    fontSize: string;
    fontWeight: number;
    lineHeight: number;
    marginBottom: string;
    marginTop: string;
    '& + h1, & + h2, & + h3, & + h4, & + h5, & + h6': {
      marginTop: string;
    };
  };
  h1: {
    [x: string]:
      | string
      | number
      | {
          marginTop: string;
          fontSize?: undefined;
          '& + h1, & + h2, & + h3, & + h4, & + h5, & + h6'?: undefined;
        }
      | {
          fontSize: string;
          '& + h1, & + h2, & + h3, & + h4, & + h5, & + h6': {
            marginTop: string;
          };
          marginTop?: undefined;
        };
    fontFamily: string;
    fontSize: string;
    fontWeight: number;
    lineHeight: number;
    marginBottom: string;
    marginTop: string;
    '& + h1, & + h2, & + h3, & + h4, & + h5, & + h6': {
      marginTop: string;
    };
  };
};
export declare const defaultTheme: {
  buttons: {
    primary: {
      color: string;
      backgroundColor: string;
      '&:hover': {
        backgroundColor: string;
      };
    };
  };
  textStyles: {
    h6: {
      fontFamily: string;
      fontSize: string;
      fontWeight: number;
      lineHeight: number;
      marginTop: string;
      marginBottom: string;
      '& + h1, & + h2, & + h3, & + h4, & + h5, & + h6': {
        marginTop: string;
      };
    };
    h5: {
      [x: string]:
        | string
        | number
        | {
            marginTop: string;
            fontSize?: undefined;
            '& + h1, & + h2, & + h3, & + h4, & + h5, & + h6'?: undefined;
          }
        | {
            fontSize: string;
            '& + h1, & + h2, & + h3, & + h4, & + h5, & + h6': {
              marginTop: string;
            };
            marginTop?: undefined;
          };
      fontFamily: string;
      fontSize: string;
      fontWeight: number;
      lineHeight: number;
      marginBottom: string;
      marginTop: string;
      '& + h1, & + h2, & + h3, & + h4, & + h5, & + h6': {
        marginTop: string;
      };
    };
    h4: {
      [x: string]:
        | string
        | number
        | {
            marginTop: string;
            fontSize?: undefined;
            '& + h1, & + h2, & + h3, & + h4, & + h5, & + h6'?: undefined;
          }
        | {
            fontSize: string;
            '& + h1, & + h2, & + h3, & + h4, & + h5, & + h6': {
              marginTop: string;
            };
            marginTop?: undefined;
          };
      fontFamily: string;
      fontSize: string;
      fontWeight: number;
      lineHeight: number;
      marginBottom: string;
      marginTop: string;
      '& + h1, & + h2, & + h3, & + h4, & + h5, & + h6': {
        marginTop: string;
      };
    };
    h3: {
      [x: string]:
        | string
        | number
        | {
            marginTop: string;
            fontSize?: undefined;
            '& + h1, & + h2, & + h3, & + h4, & + h5, & + h6'?: undefined;
          }
        | {
            fontSize: string;
            '& + h1, & + h2, & + h3, & + h4, & + h5, & + h6': {
              marginTop: string;
            };
            marginTop?: undefined;
          };
      fontFamily: string;
      fontSize: string;
      fontWeight: number;
      lineHeight: number;
      marginBottom: string;
      marginTop: string;
      '& + h1, & + h2, & + h3, & + h4, & + h5, & + h6': {
        marginTop: string;
      };
    };
    h2: {
      [x: string]:
        | string
        | number
        | {
            marginTop: string;
            fontSize?: undefined;
            '& + h1, & + h2, & + h3, & + h4, & + h5, & + h6'?: undefined;
          }
        | {
            fontSize: string;
            '& + h1, & + h2, & + h3, & + h4, & + h5, & + h6': {
              marginTop: string;
            };
            marginTop?: undefined;
          };
      fontFamily: string;
      fontSize: string;
      fontWeight: number;
      lineHeight: number;
      marginBottom: string;
      marginTop: string;
      '& + h1, & + h2, & + h3, & + h4, & + h5, & + h6': {
        marginTop: string;
      };
    };
    h1: {
      [x: string]:
        | string
        | number
        | {
            marginTop: string;
            fontSize?: undefined;
            '& + h1, & + h2, & + h3, & + h4, & + h5, & + h6'?: undefined;
          }
        | {
            fontSize: string;
            '& + h1, & + h2, & + h3, & + h4, & + h5, & + h6': {
              marginTop: string;
            };
            marginTop?: undefined;
          };
      fontFamily: string;
      fontSize: string;
      fontWeight: number;
      lineHeight: number;
      marginBottom: string;
      marginTop: string;
      '& + h1, & + h2, & + h3, & + h4, & + h5, & + h6': {
        marginTop: string;
      };
    };
  };
  componentBgColor: string;
  componentBorderColor: string;
  componentBorderRadius: string;
  componentBorderWidth: string;
  componentBoxShadowInner: string;
  componentBoxShadowOuter: string;
  componentFocusWidth: string;
  componentPaddingX: string;
  componentPaddingY: string;
  componentSpeed: string;
  name: string;
  colors: {
    primary: string;
    aqua: string;
    black: string;
    blue: string;
    fuchsia: string;
    gray: string;
    green: string;
    lime: string;
    maroon: string;
    navy: string;
    olive: string;
    orange: string;
    purple: string;
    red: string;
    silver: string;
    teal: string;
    white: string;
    yellow: string;
  };
  fonts: {
    headline: string;
    text: string;
    mono: string;
  };
  fontSizes: string[];
  space: string[];
  letterSpacings: {
    normal: string;
    caps: string;
  };
};
export default defaultTheme;
