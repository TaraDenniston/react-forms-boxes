import { render } from '@testing-library/react';
import Box from './Box';
import { describe, it, expect } from 'vitest';

describe('Box', () => {
  it('renders without crashing', () => {
    render(<Box />);
  });

  it("matches snapshot", function() {
    const { asFragment } = render(<Box />);
    expect(asFragment()).toMatchSnapshot();
  });
});