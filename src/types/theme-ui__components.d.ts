import { IconButtonProps, ForwardRef } from 'theme-ui';

declare module 'theme-ui' {
  export const IconButton: ForwardRef<HTMLButtonElement, IconButtonProps>;
}
