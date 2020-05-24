---
to: "<%= h.src() %>/theme/default/<%= name %>/index.ts"
---
import theme from '@theme-ui/preset-tailwind';

export const <%= name %> = {
  ...(theme.<%= name %> && theme.<%= name %>),
};
