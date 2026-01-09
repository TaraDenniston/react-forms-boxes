import { render } from '@testing-library/react';
import BoxList from './BoxList';
import { describe, it, expect } from 'vitest';

describe('BoxList', () => {
  it('renders without crashing', () => {
    render(<BoxList />);
  });

  it("matches snapshot", function() {
    const { asFragment } = render(<BoxList />);
    expect(asFragment()).toMatchSnapshot();
  });
});