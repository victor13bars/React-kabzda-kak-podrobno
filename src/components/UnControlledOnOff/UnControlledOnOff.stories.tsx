import React, {useState} from 'react';
// also exported from '@storybook/react' if you can deal with breaking changes in 6.1
import {Story, Meta} from '@storybook/react/types-6-0';

import {UnControlledOnOff} from './UnControlledOnOff';
import {action} from "@storybook/addon-actions";

export default {
    title: 'UnControlledOnOff stories',
    component: UnControlledOnOff,
};

const callback =action("13 12 13")

export const OnMode = () => <UnControlledOnOff />;

export const defaultInputValue=()=><input defaultValue={"you noov"}/>;


