import { ComponentMeta, ComponentStory } from '@storybook/react';

import Button from './index';

export default {
    title: 'Button Styles',
    component: Button,
    argTypes: {
        color: {
            options: ['', 'primary', 'link', 'info', 'success', 'warning', 'danger', 'white', 'light', 'dark', 'black', 'text', 'ghost']
        }
    }
} as ComponentMeta<typeof Button>;

export const Examples: ComponentStory<typeof Button> = (args) => (
    <Button {...args}>Button</Button>
);
