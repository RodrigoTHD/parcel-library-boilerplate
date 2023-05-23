// Copyright 2023. All rights reserved.

import { render, screen } from '@testing-library/react';
import { Button } from './Button';

describe('Button', () => {
  it('should render button', () => {
    render(<Button text='Button1' />);
    expect(screen.getByRole('button')).toBeDefined();
  });
});
