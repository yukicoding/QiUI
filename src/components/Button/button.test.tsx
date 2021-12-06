import React from 'react';

import { render } from '@testing-library/react';

import Button from './button';

describe('test Button components', () => {
  it('should render the correct default Button', () => {
    const wrapper = render(<Button>Nick</Button>);
    const element = wrapper.getByText('Nick');
    expect(element).toBeTruthy();
    expect(element).toBeInTheDocument();
    expect(element.tagName).toEqual('BUTTON');
    expect(element).toHaveClass('btn btn-default');
  });
  it('should render the correct component based on props', () => {});
  it('should render a link when btnType equals link the href is provided', () => {});
  it('should render disabled button when disabled set to true', () => {});
});
