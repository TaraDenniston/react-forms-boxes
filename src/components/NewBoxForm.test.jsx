import { render, screen, userEvent } from '@testing-library/react';
import NewBoxForm from './NewBoxForm';
import { describe, it, expect, vi } from 'vitest';

describe('NewBoxForm', () => {
  it('renders without crashing', () => {
    render(<NewBoxForm />);
  });

  it("matches snapshot", function() {
    const { asFragment } = render(<NewBoxForm />);
    expect(asFragment()).toMatchSnapshot();
  });

  it('calls addBox with form data on submit', async () => {
    const mockAddBox = vi.fn();
    const { getByLabelText, getByRole } = render(<NewBoxForm addBox={mockAddBox} />);
    
    await userEvent.type(getByLabelText('Color'), 'red');
    await userEvent.type(getByLabelText('Width'), '100');
    await userEvent.type(getByLabelText('Height'), '200');
    await userEvent.click(getByRole('button', { name: 'Make New Box' }));
    
    expect(mockAddBox).toHaveBeenCalledWith({ color: 'red', width: '100', height: '200' });
  });

  it('resets form after submit', async () => {
    const mockAddBox = vi.fn();
    const { getByLabelText, getByRole } = render(<NewBoxForm addBox={mockAddBox} />);
    
    const colorInput = getByLabelText('Color');
    await userEvent.type(colorInput, 'blue');
    await userEvent.click(getByRole('button', { name: 'Make New Box' }));
    
    expect(colorInput).toHaveValue('');
  });
});