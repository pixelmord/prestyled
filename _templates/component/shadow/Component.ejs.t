---
to: "<%= h.src() %>/components/<%= name %>/<%= name %>.tsx"
---
/** @jsx jsx */
import { jsx, <%= name %> as ThemeUi<%= name %>, <%= name %>Props } from 'theme-ui';
import { PropsWithoutRef, PropsWithChildren } from 'react';

export const <%= name %>: React.FC<<%= name %>Props> = ({variant, ...rest}: PropsWithoutRef<PropsWithChildren<<%= name %>Props>>) => <ThemeUi<%= name %> {...rest} variant={variant || 'default'} />;
export default <%= name %>;
