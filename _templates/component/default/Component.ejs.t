---
to: "<%= h.src() %>/components/<%= name %>/<%= name %>.tsx"
---
/** @jsx jsx */
import { jsx, Box, BoxProps} from 'theme-ui';
import { PropsWithChildren } from 'react';

export const <%= name %>: React.FC<BoxProps> = (props: PropsWithChildren<BoxProps>) => <Box {...props} />;
export default <%= name %>;
