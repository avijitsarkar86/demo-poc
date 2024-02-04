import {
  Button,
  Navbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
} from '@nextui-org/react';
import Link from 'next/link';

export default function Header() {
  return (
    <Navbar className='shadow mb-6'>
      <NavbarBrand>
        <Link href='/' className='font-bold'>
          Site Name
        </Link>
      </NavbarBrand>
      <NavbarContent justify='center'>
        <NavbarItem>
          <Link href='/people-pulse'>People Pulse</Link>
        </NavbarItem>
      </NavbarContent>
      <NavbarContent justify='end'>
        <NavbarItem>
          <Link href='/your-survey'>Your Survey</Link>
        </NavbarItem>
        <NavbarItem>
          <Link href='/create-survey'>Create a Survey</Link>
        </NavbarItem>
      </NavbarContent>
    </Navbar>
  );
}
