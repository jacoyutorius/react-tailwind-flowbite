import type { Meta, StoryObj } from '@storybook/react';
import { NavbarComponent } from "../components/Navbar";

const meta: Meta<typeof NavbarComponent> = {
  title: 'ReactTailwind/Nabvar',
  component: NavbarComponent,
};

export default meta;
type Story = StoryObj<typeof NavbarComponent>;

export const primary: Story = {
  args: {
  }
};