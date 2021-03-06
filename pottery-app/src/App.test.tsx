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
 * -- Need to create components to display your own art and allow for details to be changed and edited
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
 * Add in follow records for artists which allows a user to follow an artist. Control this in a follower db table
 *
 * Add in an administration page for approving and removing new artists
 *
 *
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

/**
 *
 * Updated plan for today
 *
 * -- create new CreateArtistProfile page and create a form to allow the submission of artist information
 *
 * -- Add Admin page to manage pending artist profile requests // Later down the line this will contain functionality for removing active artists
 *
 * -- Add Artist Profile management page to manage artist profile, see current auctions and sales
 *
 * -- Add charities DB table and create a custom component for displaying charities // Later we will add ability to add and manage charities on the admin page
 */
