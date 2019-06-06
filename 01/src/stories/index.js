import React from 'react';

import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { Counter } from '../components/counter/index'

const stories = storiesOf('Counter', module)

stories.add('Counter', () => (
  <Counter counter={1} increment={action('INCREMENT' )} decrement={action('DECREMENT')} />
))
