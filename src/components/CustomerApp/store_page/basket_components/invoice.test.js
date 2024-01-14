import '@testing-library/jest-dom';
import '@testing-library/jest-dom/extend-expect';

import { render, screen } from '@testing-library/react'
import Invoice from './invoice';

test("Example 1 renders successfully", () => {
    render(<Invoice/>);

    const element = screen.getByText(/Phindr Ltd./i);

    expect(element).toBeInTheDocument();
})