import React from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';

const Header = () => {
  const router = useRouter();

  return (
    <header>
      <nav>
        <ul>
          <li>
            <Link href="/">
              <a className={router.pathname === '/' ? 'active' : ''}>Home</a>
            </Link>
          </li>
          <li>
            <Link href="/shop">
              <a className={router.pathname === '/shop' ? 'active' : ''}>Shop</a>
            </Link>
          </li>
          <li>
            <Link href="/cart">
              <a className={router.pathname === '/cart' ? 'active' : ''}>Cart</a>
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;