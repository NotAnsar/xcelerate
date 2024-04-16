'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import { Icons } from './icons/socials';

export default function Header() {
	const defaultAnimations = {
		hidden: {
			opacity: 0,
			translateY: '-2rem',
		},
		visible: {
			opacity: 1,
			translateY: '0rem',
		},
	};
	return (
		<header>
			<motion.div
				className='max-w-screen-main mx-auto px-7 py-5 flex items-center justify-between'
				initial={'hidden'}
				animate={'visible'}
				transition={{ duration: 0.8 }}
				variants={defaultAnimations}
			>
				<div className='flex gap-2 cursor-pointer group justify-center items-center'>
					<Icons.logo className='text-foreground w-[22px] h-auto group-hover:rotate-180 transition-all ease-in duration-300 ' />
					<h3 className='font-logo text-2xl '>Xcelerate</h3>
				</div>
				<nav className='hidden md:flex gap-5 items-center text-sm'>
					{NAV.map((n) => (
						<Link
							className='text-gray-5 hover:text-foreground font-medium transition-all ease-in duration-300 '
							key={n.title}
							href={n.link}
						>
							{n.title}
						</Link>
					))}
					<button className='px-5 py-2 bg-gray border border-primary rounded-full hover:border-primary-foreground'>
						Get Started
					</button>
				</nav>
				<nav className='flex md:hidden items-center text-sm'>Burger</nav>
			</motion.div>
		</header>
	);
}

const NAV = [
	{ title: 'Our Mission', link: '/#mission' },
	{ title: 'Features', link: '/#features' },
	{ title: 'Testimonials', link: '/#testimonials' },
	{ title: 'Pricing', link: '/#pricing' },
	{ title: 'Contact', link: '/#contact' },
];
