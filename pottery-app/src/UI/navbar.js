import { TailwindNavbar } from 'tailwind-navbar-react';
import { useHistory } from 'react-router';
import { useDispatch } from 'react-redux';
import { toggleAuthenticationContainer } from '../store/actions/adminActions';

const Navbar = ({ isAdmin }) => {
  const history = useHistory();
  // const dispatch = useDispatch();
  return (
    <TailwindNavbar
      brand={
        <img
          src="https://media.discordapp.net/attachments/694834406493257762/729067815499202651/matthew_border.png"
          width="40"
          height="40"
          alt="Brand logo"
        />
      }
      className="py-1 z-50"
    >
      <nav>
        <ul className="items-center justify-between pt-4 text-base lg:flex lg:pt-0">
          <li>
            <a
              className="block px-0 py-3 border-b-2 border-transparent lg:p-4 hover:border-indigo-400"
              href="/"
            >
              Home
            </a>
          </li>
          {/* <li>
            <button
              onClick={() => {
                localStorage.removeItem('caf_uid');
              }}
            >
              ResetUid
            </button>
          </li> */}
          <li>
            <div
              className="block px-0 py-3 border-b-2 border-transparent lg:p-4 hover:border-indigo-400"
              //   href="/explore"
              onClick={() => history.push('/results')}
            >
              Explore
            </div>
          </li>
          <li>
            <div
              className="block px-0 py-3 border-b-2 border-transparent lg:p-4 hover:border-indigo-400"
              //   href="/account"
              onClick={() => history.push('/account')}
            >
              Account
            </div>
          </li>
          {isAdmin && (
            <li>
              <div
                className="block px-0 py-3 border-b-2 border-transparent lg:p-4 hover:border-indigo-400"
                //   href="/account"
                onClick={() => history.push('/manageArtistProfile')}
              >
                Artist Profile
              </div>
            </li>
          )}
          {/* <li>
            <div
              className="block px-0 py-3 border-b-2 border-transparent lg:p-4 hover:border-indigo-400"
              //   href="/account"
              onClick={() => dispatch(toggleAuthenticationContainer(true))}
            >
              Auth
            </div>
          </li> */}
        </ul>
      </nav>
    </TailwindNavbar>
  );
};

export default Navbar;
