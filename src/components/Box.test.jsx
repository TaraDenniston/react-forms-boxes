import { render } from '@testing-library/react';
import { userEvent } from '@testing-library/user-event';
import Box from './Box';
import { describe, it, expect, vi } from 'vitest';

describe('Box', () => {
  it('renders without crashing', () => {
    render(<Box />);
  });

  it("matches snapshot", function() {
    const { asFragment } = render(<Box />);
    expect(asFragment()).toMatchSnapshot();
  });

  it('applies styles correctly', () => {
    const { getByTestId } = render(<Box color="red" width="150" height="275" />);
    const box = getByTestId('box');

    expect(box).toHaveStyle('background-color: rgb(255, 0, 0)');
    expect(box).toHaveStyle('width: 150px');
    expect(box).toHaveStyle('height: 275px');
  });

  it('calls handleRemove when delete button is clicked', async () => {
    const mockDelete = vi.fn();
    const { getByRole } = render(<Box color="red" width="150" height="275" handleRemove={mockDelete} />);
    
    await userEvent.click(getByRole('button', { name: 'X' }));
    
    expect(mockDelete).toHaveBeenCalled();
  });
});