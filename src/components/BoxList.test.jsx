import { render , fireEvent } from '@testing-library/react';
import BoxList from './BoxList';
import { describe, it, expect } from 'vitest';

describe('BoxList', () => {
  it('renders without crashing', () => {
    render(<BoxList />);
  });

  it('matches snapshot', function() {
    const { asFragment } = render(<BoxList />);
    expect(asFragment()).toMatchSnapshot();
  });

  it('should add new box', () => {
    const {queryByTestId, queryByText, getByLabelText  } = render(<BoxList />);
    const colorInput = getByLabelText('Color');
    const widthInput = getByLabelText('Width');
    const heightInput = getByLabelText('Height');
    const button = queryByText('Make New Box');

    // There should be no box when document is first rendered
    expect(queryByTestId('box')).not.toBeInTheDocument();

    // Update form data 
    fireEvent.change(colorInput, {target: {value: 'black'}});
    fireEvent.change(widthInput, {target: {value: '100px'}});
    fireEvent.change(heightInput, {target: {value: '100px'}});

    // Submit form
    fireEvent.click(button);

    // A box should now be there
    expect(queryByTestId('box')).toBeInTheDocument();
  });
});