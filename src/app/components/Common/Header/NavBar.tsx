'use client'

import React, { useEffect, useRef, useState } from 'react';
import Logo from '@/app/assets/home-page/logo.png';
import Image from 'next/image';
import Link from 'next/link';

const NavBar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const subMenuRefMobile = useRef<HTMLDivElement>(null);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    useEffect(() => {
        const handleClickOutside = (event: MouseEvent) => {
            if (subMenuRefMobile.current && !subMenuRefMobile.current.contains(event.target as Node)) {
                toggleMenu();
            }
        };

        document.addEventListener('mousedown', handleClickOutside);

        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, []);

    return (
        <div className="relative z-20 shadow-[0px_8px_25px_rgba(71,_71,_71,_0.1)] bg-white dark:bg-black dark:border-b-2 dark:border-gray-700 w-full max-w-full mx-auto h-[5.688rem] flex flex-col items-center justify-center py-[0.625rem] px-[2rem] box-border text-left text-[0.875rem] text-darkslate-500">
            <div className="md:gap-0 gap-2 w-full max-w-[1280px] mx-auto flex flex-row items-center justify-between">
                <div className="flex items-center gap-2">
                    <button className="lg:hidden focus:outline-none" onClick={toggleMenu}>
                        <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            {isOpen ? (
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                            ) : (
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                            )}
                        </svg>
                    </button>
                    <Link className='flex flex-col gap-2 py-2 justify-center items-center' href="/">
                        <Image
                            className="md:w-[4.125rem] w-[2.5rem] relative h-auto object-cover"
                            alt=""
                            src={Logo}
                        />
                        <p className='relative text-sm font-medium hidden md:block'>Parsons Nutritionals</p>
                    </Link>
                </div>
                <div className="md:hidden flex flex-row items-start justify-start text-[1rem] text-base-white font-text-sm-regular">
                    <div className="shadow-[0px_1px_2px_rgba(16,_24,_40,_0.05)] rounded-lg bg-light-blue overflow-hidden flex flex-row items-center justify-center gap-[0.5rem]">
                        <Link href="/contact-us" className="md:w-auto w-full text-center relative leading-[1.5rem] font-medium text-lg px-4 py-4 bg-[#0059DF] rounded-xl text-white">
                            Contact us
                        </Link>
                    </div>
                </div>
                <div className="hidden lg:flex flex-row items-center justify-center gap-[2rem]">
                    <NavItem href="/">
                        Home
                    </NavItem>
                    <NavItem href="/about-us" subMenuItems={['Vision and Values', 'Our Team', 'Timeline', 'Locations', 'Awards', 'Our Strength']}>
                        About us
                    </NavItem>
                    <NavItem href="/clients">
                        Clients
                    </NavItem>
                    <NavItem href="/what-we-do" subMenuItems={[
                        'Manufacturing Process',
                        'Geographical Footprint',
                        // 'Joint Facility',
                        // 'Jar Line Automation',
                        // 'Our Facilities',
                        // 'Backward Integration',
                        // 'Own Bakery'
                        ]}>
                        What We Do
                    </NavItem>
                    <NavItem href="/product-range">
                        Product Range
                    </NavItem>
                    <NavItem href="/esg" subMenuItems={['ESG Reporting and Standards', 'ESG Implementation']}>
                        ESG
                    </NavItem>
                </div>
                {isOpen && (
                    <div className="lg:hidden absolute top-[5.688rem] left-0 w-full bg-white dark:bg-black z-10 shadow-[0px_8px_25px_rgba(71,_71,_71,_0.1)]">
                        <div className="flex flex-col md:items-center md:justify-start gap-4 md:py-4 p-4">
                            <NavItem href="/about-us" subMenuItems={['Vision and Values', ' Our Team ', 'Timeline', 'Locations', 'Awards', 'Our Strength']}>
                                About us
                            </NavItem>
                            <NavItem href="/clients">
                                Clients
                            </NavItem>
                            <NavItem href="/what-we-do" subMenuItems={[
                                'Manufacturing Process',
                                'Geographical Footprint',
                                // 'Joint Facility',
                                // 'Jar Line Automation',
                                // 'Our Facilities',
                                // 'Backward Integration',
                                // 'Own Bakery'
                                ]}>
                                What We Do
                            </NavItem>
                            <NavItem href="/product-range">
                                Product Range
                            </NavItem>
                            <NavItem href="/esg" subMenuItems={['ESG Reporting and Standards', 'ESG Implementation']}>
                                ESG
                            </NavItem>
                        </div>
                    </div>
                )}
                <div className="hidden md:flex flex-row items-start justify-start text-[1rem] text-base-white font-text-sm-regular">
                    <div className="shadow-[0px_1px_2px_rgba(16,_24,_40,_0.05)] rounded-lg bg-light-blue overflow-hidden flex flex-row items-center justify-center py-[0.625rem] px-[1.125rem] gap-[0.5rem]">
                        <Link href="/contact-us" className="relative font-medium text-md px-4 py-4 bg-[#0059DF] rounded-xl text-white">
                            Contact us
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

const NavItem = ({ href, children, subMenuItems }: { href: string; children: React.ReactNode; subMenuItems?: string[] }) => {
    const [isSubMenuOpen, setIsSubMenuOpen] = useState(false);
    const subMenuRef = useRef<HTMLDivElement>(null);
    const [isActive, setIsActive] = useState(false);

    const toggleSubMenu = (event: React.MouseEvent<HTMLDivElement>) => {
        const target = event.target as HTMLDivElement;
        if (target.classList.contains('arrow-icon')) {
            setIsSubMenuOpen(!isSubMenuOpen);
        } else {
            closeSubMenu();
        }
    };

    const closeSubMenu = () => {
        setIsSubMenuOpen(false);
    };

    useEffect(() => {
        const handleClickOutside = (event: MouseEvent) => {
            if (subMenuRef.current && !subMenuRef.current.contains(event.target as Node)) {
                closeSubMenu();
            }
        };

        document.addEventListener('mousedown', handleClickOutside);

        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, []);

    return (
        <div className="relative" ref={subMenuRef}>
            <div
                className={`flex justify-between items-center gap-2 leading-[1.5rem] font-medium text-lg cursor-pointer ${isActive ? 'text-blue-500' : 'text-darkslate-500'}`}
                onClick={toggleSubMenu}
                onMouseEnter={() => setIsActive(true)}
                onMouseLeave={() => setIsActive(false)}
            >
                <Link href={href}>{children}</Link>
                {subMenuItems && subMenuItems.length > 0 && (
                    <div style={{
                        width: 24,
                        height: 45,
                        display: 'flex',
                        justifyContent: 'center',
                        alignItems: 'center',
                        cursor: 'pointer'
                    }}>
                        <svg xmlns="http://www.w3.org/2000/svg" className={`h-6 w-6 text-darkslate-500 arrow-icon ${isSubMenuOpen ? 'transform rotate-180' : ''}`} fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                        </svg>
                    </div>
                )}
            </div>
            {subMenuItems && isSubMenuOpen && (
                <div className="md:absolute md:w-[12rem] z-10 top-[50px] left-0 bg-white dark:bg-black md:shadow-[0px_8px_25px_rgba(71,_71,_71,_0.1)] rounded-tl-0 rounded-tr-0 md:rounded-bl-3xl md:rounded-br-3xl">
                    {subMenuItems.map((item, index) => (
                        <Link key={index} href={`${href}#${item.toLowerCase().replace(/\s+/g, '-')}`}>
                            <div className="text-darkslate-500 px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-700 cursor-pointer" onClick={closeSubMenu}>{item}</div>
                        </Link>
                    ))}
                </div>
            )}
        </div>
    );
};

export default NavBar;

