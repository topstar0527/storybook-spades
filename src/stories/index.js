import React from 'react';

import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { linkTo } from '@storybook/addon-links';

import { Button, Welcome } from '@storybook/react/demo';
import { SingleContainer, CrossContainer, StyledContainer } from './DnD';
import { GuestDefault, GuestMock } from './Guest';

storiesOf('Guest', module)
  .add('default', () => <GuestDefault/>)
  .add('with Mock Data', () => <GuestMock/>);

storiesOf('Welcome', module).add('to Storybook', () => <Welcome showApp={linkTo('Button')} />);

storiesOf('Button', module)
  .add('with text', () => <Button onClick={action('clicked')}>Hello Button</Button>)
  .add('with some emoji', () => (
    <Button onClick={action('clicked')}>
      <span role="img" aria-label="so cool">
        😀 😎 👍 💯
      </span>
    </Button>
  ));

storiesOf('Drag and Drop', module)
  .add('Single Container', () => <SingleContainer/>)
  .add('Cross Container', () => <CrossContainer/>)
  .add('Styled Background', () => <StyledContainer/>);
