// Copyright 2023. All rights reserved.

import { FC } from 'react';
import { ButtonPrps } from './types';

export const Button: FC<ButtonPrps> = (props) => {
  return <button>{props?.text}</button>;
};
