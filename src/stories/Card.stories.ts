import type { Meta, StoryObj } from '@storybook/react';
import { CardComponent, CardComponentProps } from "../components/Card"

const meta: Meta<typeof CardComponent> = {
  title: 'ReactTailwind/Card',
  component: CardComponent,
};

export default meta;
type Story = StoryObj<typeof CardComponent>;

export const Primary: Story = {
  args: {
    eventName: "Event Name",
    description: "Event Description",
    startedOn: "2023-5-31",
    url: "https://example.com",
    category: "Category",
    onClick: () => { },
  }
};