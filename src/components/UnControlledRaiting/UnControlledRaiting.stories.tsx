import React, {useState} from 'react';
// also exported from '@storybook/react' if you can deal with breaking changes in 6.1
import {Story, Meta} from '@storybook/react/types-6-0';

import {UnControlledRaiting} from './UncontrolledRaiting';
import {action} from "@storybook/addon-actions";
import {UnControlledOnOff} from "../UnControlledOnOff/UnControlledOnOff";
import {Raiting, RaitingValueType} from "../Raiting/Raiting";

export default {
    title: 'UnControlledRaiting stories',
    component: UnControlledOnOff,
};

const callback = action("raiting changed inside component")

export const EmptyRaiting = () => <UnControlledRaiting Defaultvalue={0}  onChange={callback}/>;
export const Raiting1 = () => <UnControlledRaiting Defaultvalue={1} onChange={callback} />;
export const Raiting2 = () => <UnControlledRaiting Defaultvalue={2}  onChange={callback}/>;
export const Raiting3 = () => <UnControlledRaiting Defaultvalue={3}  onChange={callback}/>;
export const Raiting4 = () => <UnControlledRaiting Defaultvalue={4}  onChange={callback}/>;
export const Raiting5 = () => <UnControlledRaiting Defaultvalue={5} onChange={callback}/>;



