import { useState, useEffect } from 'react';
import { GiHamburgerMenu } from 'react-icons/gi';
import { RiCloseFill } from 'react-icons/ri';
import { NavLink } from 'react-router-dom';
import { FaSun, FaMoon } from 'react-icons/fa';

const Header: React.FC = () => {
  const [navbar, setNavbar] = useState(false);
  const [theme, setTheme] = useState('light');

  useEffect(() => {
    if (theme === 'dark') {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [theme]);

  const handleThemeSwitch = () => {
    setTheme(theme === 'dark' ? 'light' : 'dark');
  };

  return (
    <nav className="w-full bg-white shadow dark:bg-gray-800">
      <div className="mx-auto justify-between px-4 md:flex md:items-center md:px-8 lg:max-w-7xl">
        <div>
          <div className="flex items-center justify-between py-3 md:block md:py-5">
            <NavLink to="/">
              <h2 className="text-2xl font-bold dark:text-white">MovieDB</h2>
            </NavLink>
            <div className="md:hidden">
              <button
                className="rounded-md p-2 text-gray-700 outline-none focus:border focus:border-gray-400 dark:text-white"
                onClick={() => setNavbar(!navbar)}
              >
                {navbar ? <RiCloseFill fontSize={20} /> : <GiHamburgerMenu />}
              </button>
            </div>
          </div>
        </div>
        <div>
          <div
            className={`mt-8 flex-1 justify-self-center pb-3 md:mt-0 md:block md:pb-0 ${
              navbar ? 'block' : 'hidden'
            }`}
          >
            <ul className="items-center justify-center space-y-8 text-xl font-semibold dark:text-white md:flex md:space-x-6 md:space-y-0">
              <li className=" hover:text-blue-600 dark:hover:text-gray-300">
                <NavLink
                  style={
                    theme === 'dark'
                      ? ({ isActive }) => ({
                          color: isActive ? '#fff' : '#545e6f',
                        })
                      : ({ isActive }) => ({
                          color: isActive ? 'black' : '#545e6f',
                        })
                  }
                  to="/"
                >
                  top-100
                </NavLink>
              </li>

              <li className=" hover:text-blue-600 dark:hover:text-gray-300">
                <NavLink
                  style={
                    theme === 'dark'
                      ? ({ isActive }) => ({
                          color: isActive ? '#fff' : '#545e6f',
                        })
                      : ({ isActive }) => ({
                          color: isActive ? 'black' : '#545e6f',
                        })
                  }
                  to="/popular"
                >
                  popular
                </NavLink>
              </li>
              <li className=" hover:text-blue-600 dark:hover:text-gray-300">
                <NavLink
                  style={
                    theme === 'dark'
                      ? ({ isActive }) => ({
                          color: isActive ? '#fff' : '#545e6f',
                        })
                      : ({ isActive }) => ({
                          color: isActive ? 'black' : '#545e6f',
                        })
                  }
                  to="/search"
                >
                  search
                </NavLink>
              </li>
              <li>
                <button className="py-4 md:p-4" onClick={handleThemeSwitch}>
                  {theme === 'dark' ? <FaSun /> : <FaMoon />}
                </button>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Header;
