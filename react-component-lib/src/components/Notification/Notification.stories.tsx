import { ComponentMeta, ComponentStory } from '@storybook/react';

import Notification from './index';

export default {
    title: 'Notification',
    component: Notification,
    argTypes: {
        color: {
            options: ['', 'primary', 'link', 'info', 'success', 'warning', 'danger', 'white', 'light', 'dark', 'black', 'text', 'ghost'],
            defaultValue: 'success'
        },
        isLight: {
            options: [ true, false ],
            control: { type: 'boolean' },
        },
    }
} as ComponentMeta<typeof Notification>;

export const Examples: ComponentStory<typeof Notification> = (args) => (
    <Notification {...args}>
        This is a text inside notification
    </Notification>
);
