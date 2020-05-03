---
to: "<%= h.src() %>/components/<%= name %>/<%= name %>.tsx"
---
/** @jsx jsx */
import { jsx, Box } from 'theme-ui';

export const <%= name %>: React.FC = (props: React.PropsWithChildren<{}>) => <Box {...props} />;
export default <%= name %>;
