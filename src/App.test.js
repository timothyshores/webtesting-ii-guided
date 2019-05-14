import React from 'react';
import { cleanup, render, fireEvent } from 'react-testing-library';

import App from './App';

afterEach(cleanup);

describe('<App />', () => {
    it('renders without crashing', () => {
        render(<App />);
    });
    it('renders Hello World', () => {
        const { getByText } = render(<App />);
        getByText(/Hello World!/i); //case insensitive regex express 
    });
    it('greets the web 18 cohort', () => {
        const { getByText } = render(<App />);
        const button = getByText(/greet/i);
        fireEvent.click(button);
        getByText(/hello web 18/i);
    });
});

