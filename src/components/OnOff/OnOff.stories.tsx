import React, {useState} from 'react';
// also exported from '@storybook/react' if you can deal with breaking changes in 6.1
import {Story, Meta} from '@storybook/react/types-6-0';

import {OnOff} from './OnOff';

export default {
    title: 'OnOff stories',
    component: OnOff,
};

export const OnMode = () => <OnOff/>;


