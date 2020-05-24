import { Theme } from 'theme-ui';

import { alerts } from './default/alerts/index';
import { badges } from './default/badges/index';
import { borders, borderStyles, borderWidths } from './default/border/index';
import { buttons } from './default/buttons/index';
import { cards } from './default/cards/index';
import { colors } from './default/colors/index';
import { forms } from './default/forms/index';
import { grids } from './default/grids/index';
import { images } from './default/images/index';
import { links } from './default/links/index';
import { mediaQueries } from './default/mediaQueries/index';
import { messages } from './default/messages/index';
import { opacities } from './default/opacities/index';
import { radii } from './default/radii/index';
import { shadows } from './default/shadows/index';
import { space, sizes } from './default/sizing/index';
import { styles, fonts, fontSizes, fontWeights, lineHeights, letterSpacings, text } from './default/typography/index';
import { zIndices } from './default/zIndices/index';

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
