import { screen, render } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { describe, it, expect } from 'vitest';

import MainContent from './MainContent';

describe('MainContent', () => {
	it('should render a button', () => {
		render(<MainContent />);

		expect(screen.getByRole('button')).toBeInTheDocument();
	});

	it('should show the help area after clicking the button', async () => {
		render(<MainContent />);

		const button = screen.getByRole('button');
		await userEvent.click(button);
		expect(screen.getByTestId('help-area')).toBeInTheDocument();
	});
});
