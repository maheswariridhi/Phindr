import React from 'react';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { createMemoryHistory } from 'history';
import { Router } from 'react-router-dom';
import '@testing-library/jest-dom';
import Login from './login'; // Path to your Login component

// reference 1 from github co-pilot
test('renders Login component without crashing', () => {
  const history = createMemoryHistory();
  render(
    <Router history={history}>
      <Login />
    </Router>
  );
});


test('login button is present', () => {
  const history = createMemoryHistory();
  render(
    <Router history={history}>
      <Login />
    </Router>
  );
  const loginButton = screen.getByRole('button', { name: /log in/i });
  expect(loginButton).toBeInTheDocument();
});

test('login button click with correct customer credentials', () => {
  const history = createMemoryHistory();
  render(
    <Router history={history}>
      <Login />
    </Router>
  );
  userEvent.type(screen.getByPlaceholderText(/E-Mail Address/i), 'customer@email.com');
  userEvent.type(screen.getByPlaceholderText(/Password/i), 'customer1');
  userEvent.click(screen.getByRole('button', { name: /log in/i }));
  expect(history.location.pathname).toBe('/home');
});
// end of reference 1

test('login button click with correct admin credentials', () => {
    const history = createMemoryHistory();
    render(
      <Router history={history}>
        <Login />
      </Router>
    );
    userEvent.type(screen.getByPlaceholderText(/E-Mail Address/i), 'admin@email.com');
    userEvent.type(screen.getByPlaceholderText(/Password/i), 'admin1');
    userEvent.click(screen.getByRole('button', { name: /log in/i }));
    expect(history.location.pathname).toBe('/admin-home');
});

test('login button click with correct pharmacist credentials', () => {
    const history = createMemoryHistory();
    render(
      <Router history={history}>
        <Login />
      </Router>
    );
    userEvent.type(screen.getByPlaceholderText(/E-Mail Address/i), 'pharmacist@email.com');
    userEvent.type(screen.getByPlaceholderText(/Password/i), 'pharmacist1');
    userEvent.click(screen.getByRole('button', { name: /log in/i }));
    expect(history.location.pathname).toBe('/pharmacist-home');
});

test('login button click with incorrect credentials', () => {
  const history = createMemoryHistory();
  render(
    <Router history={history}>
      <Login />
    </Router>
  );
  userEvent.type(screen.getByPlaceholderText(/E-Mail Address/i), 'wrong@email.com');
  userEvent.type(screen.getByPlaceholderText(/Password/i), 'wrongpassword');
  userEvent.click(screen.getByRole('button', { name: /log in/i }));
  expect(screen.getByText(/Incorrect username\/password. Please try again./i)).toBeInTheDocument(); 
});


//declartion or state expected problem
//still needs fixing
