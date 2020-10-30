import React, {useState} from 'react';
// also exported from '@storybook/react' if you can deal with breaking changes in 6.1
import {Story, Meta} from '@storybook/react/types-6-0';

import {UnControlledAccordion, AccordionPropsType} from './UnControlledAccordion';
import {action} from "@storybook/addon-actions";

export default {
    title: 'UnControlledAccordion stories',
    component: UnControlledAccordion,
};

export const ModeChanging = () => {
    return <UnControlledAccordion titleValue={"Test20"} />
}


