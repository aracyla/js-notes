import { ComponentMeta, ComponentStory } from '@storybook/react';

import Icon from './index';

export default {
    title: 'Icon Styles',
    component: Icon,
    argTypes: {
        size: {
            options: ['small', 'normal', 'medium', 'large'],
            control: { type: 'select'},
        },
        label: {
            constrol: { type: 'text'},
        },
        name: {
            defaultValue: 'delete'
        }
    },
} as ComponentMeta<typeof Icon>;

export const Examples: ComponentStory<typeof Icon> = (args) => (
    <Icon {...args}/>
);
