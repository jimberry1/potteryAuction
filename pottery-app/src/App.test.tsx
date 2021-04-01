import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';

test('renders learn react link', () => {
  render(<App />);
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});

/**
 * Next steps
 *
 * 1)
 * - Add to the account/profile page which will contain
 *
 * Profile picture
 * Account details
 * - Name
 * - Address
 * - change of password
 *
 * Artist profile
 * - Artist bio
 * - artworks
 *
 * 2) Improve the art display page to have navigatable sections for artist information and charity partner
 * this requires an enhancement to the artwork datatype
 *
 *
 * 3) Add functionality for searching and filtering aritsts
 *
 * 4) Add an artist's display page - this could reuse components from the artist profile display
 *
 *
 * 5) Create a component to add your own artwork for sale
 * There are several ways of doing this - one would be to separate the parts of adding art and creating an auction
 * That means you'd be able to add art and then start an auction afterwards
 *
 *
 * 6) Add the auction component for selling items
 * This will have two modes, fixed price or bidding
 * Each type will have start and end date
 * Once the item is sold it will be up for the buyer and seller to arrange payment
 * Payment can be completed over the site or via other payment systems
 *
 *
 * Other things to do
 *
 * Get set up with firebase storage to store images of pots
 *
 * Add sign up / sign in component to allow users to create an account
 *
 *
 *
 *
 *
 * Further down the line big pieces of work
 *
 * - Search functionality requires indexing
 * - Payments require Stripe
 *
 */
