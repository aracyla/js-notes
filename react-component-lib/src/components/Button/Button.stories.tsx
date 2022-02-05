import { ComponentMeta, ComponentStory } from '@storybook/react';

import Button from './index';

export default {
    title: 'Button Styles',
    component: Button,
    argTypes: {
        color: {
            options: ['', 'primary', 'link', 'info', 'success', 'warning', 'danger', 'white', 'light', 'dark', 'black', 'text', 'ghost']
        },
        size: {
            options: ['small', 'normal', 'medium', 'large'],
            control: { type: 'select'},
        },
        isLight: {
            options: [true, false],
            control: {type: 'boolean'}
        },
        isFullWidth: {
            options: [true, false],
            control: {type: 'boolean'}
        },
        isOutlined: {
            options: [true, false],
            control: {type: 'boolean'}
        },
        disabled: {
            options: [true, false],
            control: {type: 'boolean'}
        },
        onClick: {
            action: 'clicked',
        }
    }
} as ComponentMeta<typeof Button>;

export const Examples: ComponentStory<typeof Button> = (args) => (
    <Button {...args}>Button</Button>
);
