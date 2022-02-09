import { ComponentMeta, ComponentStory } from '@storybook/react';

import Addons from './index';
import Button from '../Button';

export default {
    title: 'Addons Styles',
    component: Addons,
} as ComponentMeta<typeof Addons>;

export const Examples: ComponentStory<typeof Addons> = (args) => (
    <>
        <Addons {...args} items={[
            (<Button size="small">Left</Button>),
            (<Button size="small">Center</Button>),
            (<Button size="small">Right</Button>),
        ]} />
    </>
);
