/** @jsx jsx */
import { jsx, Message as ThemeUiMessage, MessageProps } from 'theme-ui';
import { PropsWithoutRef, PropsWithChildren } from 'react';

export const Message: React.FC<MessageProps> = ({
  variant = 'default',
  ...rest
}: PropsWithoutRef<PropsWithChildren<MessageProps>>) => <ThemeUiMessage {...rest} variant={variant} />;
export default Message;
