import { Theme } from 'theme-ui';

import { alerts } from './default/alerts';
import { badges } from './default/badges';
import { borders, borderStyles, borderWidths } from './default/border';
import { buttons } from './default/buttons';
import { cards } from './default/cards';
import { colors } from './default/colors';
import { forms } from './default/forms';
import { grids } from './default/grids';
import { images } from './default/images';
import { links } from './default/links';
import { mediaQueries } from './default/mediaQueries';
import { messages } from './default/messages';
import { opacities } from './default/opacities';
import { radii } from './default/radii';
import { shadows } from './default/shadows';
import { space, sizes } from './default/sizing';
import { styles, fonts, fontSizes, fontWeights, lineHeights, letterSpacings, text } from './default/typography';
import { zIndices } from './default/zIndices';

export interface PrestyledTheme extends Theme {
  name: string;
  [key: string]: any;
}

export const defaultTheme: PrestyledTheme = {
  name: 'Default',
  alerts,
  badges,
  borders,
  borderStyles,
  borderWidths,
  buttons,
  cards,
  colors,
  fonts,
  fontSizes,
  fontWeights,
  forms,
  grids,
  images,
  letterSpacings,
  lineHeights,
  links,
  mediaQueries,
  messages,
  opacities,
  radii,
  shadows,
  sizes,
  space,
  styles,
  text,
  zIndices,
};

export default defaultTheme;
