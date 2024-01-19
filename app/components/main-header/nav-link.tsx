

"use client";
import classes from './nav-link.module.css';
import Link from 'next/link';
import Image from 'next/image'
import logoImg from '@/assets/logo.png';
import { usePathname } from 'next/navigation';

interface NavLinkType {
    children: any;
    href: string
}
export default function NavLink({ href, children }: NavLinkType) {
    const partname = usePathname()
    return (
        <Link href={href} className={partname.startsWith(href) ? `${classes.link} ${classes.active}` : classes.link}>
            {children}
        </Link>
    );

}