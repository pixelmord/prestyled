---
to: "<%= h.src() %>/components/<%= name %>/<%= name %>.tsx"
---
/** @jsx jsx */
import { jsx, Box } from 'theme-ui';
import { PropsWithoutRef, PropsWithChildren } from 'react';

export const <%= name %>: React.FC = (props: PropsWithoutRef<PropsWithChildren<{}>>) => <Box {...props} />;
export default <%= name %>;
