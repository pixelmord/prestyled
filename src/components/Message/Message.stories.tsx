import * as React from 'react';

import { storiesOf } from '@storybook/react';

import { Message } from './Message';
import * as MessageReadme from './Message.readme.md';

storiesOf('Message', module).add('default', () => <Message>@TODO</Message>, {
  notes: MessageReadme,
});
