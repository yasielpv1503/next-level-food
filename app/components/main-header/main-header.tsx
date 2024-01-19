


import classes from './main-header.module.css';
import Link from 'next/link';
import Image from 'next/image'
import logoImg from '@/assets/logo.png';
import MainHeaderBackground from './main-header-background';
import NavLink from './nav-link';
export default function MainHeader() {
    return (
        <>
            <MainHeaderBackground />
            <header className={classes.header}>
                <Link className={classes.logo} href="/">
                    <Image src={logoImg} alt="A plate with food on it" priority={true} />
                    Nextlevel Food
                </Link>

                <nav className={classes.nav}>
                    <ul>
                        <li><NavLink href="/meals">Explore Meals</NavLink></li>
                        <li><NavLink href="/community">Join the Community</NavLink></li>
                    </ul>
                </nav>
            </header>
        </>
    );

}