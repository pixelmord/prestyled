---
to: "<%= h.src() %>/components/<%= name %>/<%= name %>.tsx"
---
/** @jsx jsx */
import { jsx, Box, BoxProps} from 'theme-ui';
import { PropsWithoutRef, PropsWithChildren } from 'react';

export const <%= name %>: React.FC<BoxProps> = (props: PropsWithoutRef<PropsWithChildren<BoxProps>>) => <Box {...props} />;
export default <%= name %>;
