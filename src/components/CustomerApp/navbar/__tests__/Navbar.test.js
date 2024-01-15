import React from 'react';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { createMemoryHistory } from 'history';
import { Router } from 'react-router-dom';
import Navbar from './Navbar'; // Path to your Navbar component

test('renders Navbar component without crashing', () => {
  const history = createMemoryHistory();
  render(
    <Router history={history}>
      <Navbar />
    </Router>
  );
});

test('search input is present in the Navbar', () => {
  const history = createMemoryHistory();
  render(
    <Router history={history}>
      <Navbar />
    </Router>
  );

  const searchInput = screen.getByPlaceholderText(/Search Drug/i);
  expect(searchInput).toBeInTheDocument();
});

test('clicking on Home link navigates to the home page', () => {
  const history = createMemoryHistory();
  render(
    <Router history={history}>
      <Navbar />
    </Router>
  );

  const homeLink = screen.getByText(/Home/i);
  userEvent.click(homeLink);

  expect(history.location.pathname).toBe('/home');
});

// You can add more tests for other functionalities of the Navbar component as needed.
