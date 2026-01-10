import { render } from '@testing-library/react';
import NewBoxForm from './NewBoxForm';
import { describe, it, expect } from 'vitest';

describe('NewBoxForm', () => {
  it('renders without crashing', () => {
    render(<NewBoxForm />);
  });

  it("matches snapshot", function() {
    const { asFragment } = render(<NewBoxForm />);
    expect(asFragment()).toMatchSnapshot();
  });
});