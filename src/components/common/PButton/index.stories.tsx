import type { Meta, StoryObj } from '@storybook/react';

import PButton from '.';

const meta = {
  title: 'Example/PButton',
  component: PButton,
  parameters: {
    // layout: 'centered',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof PButton>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    children: 'asdf'
  },
};