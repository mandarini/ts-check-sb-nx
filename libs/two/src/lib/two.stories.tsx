import { Story, Meta } from '@storybook/react';
import { Two, TwoProps } from './two';

export default {
  component: Two,
  title: 'Two',
} as Meta;

const Template: Story<TwoProps> = (args) => <Two {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  name: '',
  age: 0,
  test: false,
};
