'use client';

import Link from 'next/link';
import { motion, useMotionValueEvent, useScroll } from 'framer-motion';
import { Icons } from './icons/socials';
import { useState } from 'react';
import { cn } from '@/lib/utils';

export default function Header() {
	const [open, setopen] = useState(false);
	const [hidden, setHidden] = useState(false);
	const { scrollY } = useScroll();

	useMotionValueEvent(scrollY, 'change', (current) => {
		const prev = scrollY.getPrevious();

		if (prev && current > prev && current > 200 && !open) setHidden(true);
		else setHidden(false);
	});

	return (
		<>
			<motion.header
				className={cn(
					'sticky top-0 z-50 bg-transparent backdrop-blur-sm transition duration-200 ease-in-out animate-header-slide-down-fade border-transparent border-b hover:bg-black/5',
					open ? 'border-gray bg-black/5' : ''
				)}
				variants={{ visible: { y: 0 }, hidden: { y: '-100%' } }}
				animate={hidden ? 'hidden' : 'visible'}
				transition={{ duration: 0.5, ease: 'easeInOut' }}
			>
				<motion.div
					className='max-w-screen-main mx-auto px-7 py-4 flex items-center justify-between'
					initial={{ opacity: 0, y: '-100%' }}
					animate={{ opacity: 1, y: 0 }}
					transition={{ duration: 0.5 }}
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

					<div
						className='w-9 h-auto aspect-square flex items-center justify-center hover:bg-secondary/10 group rounded-sm md:hidden'
						onClick={() => setopen((a) => !a)}
					>
						<button className='w-7 h-auto aspect-square group relative '>
							<div
								className={cn(
									'h-[2.5px] rounded-full bg-foreground w-full transition-all ease-in duration-200 ',
									open ? 'rotate-45 absolute top-1/2 -translate-y-1/2' : ''
								)}
							/>
							<div
								className={cn(
									'h-[2.5px] rounded-full bg-foreground w-full my-[5px] transition-all ease-in duration-300',
									open ? 'w-0' : ''
								)}
							/>
							<div
								className={cn(
									'h-[2.5px] rounded-full bg-foreground w-4/6 ml-auto transition-all ease-in duration-200 ',
									open
										? 'w-full -rotate-45 absolute top-1/2 -translate-y-1/2'
										: ''
								)}
							/>
						</button>
					</div>
				</motion.div>
			</motion.header>
			<div
				className={cn(
					'bg-black/5 backdrop-blur-sm hidden md:hidden flex-col gap-3 p-7 pt-4 w-full fixed z-50 border-b border-gray',
					open ? 'flex md:hidden' : ''
				)}
			>
				{NAV.map((n) => (
					<Link
						className='text-gray-5 hover:text-foreground font-medium transition-all ease-in duration-300'
						key={n.title}
						href={n.link}
						onClick={() => setopen((a) => !a)}
					>
						{n.title}
					</Link>
				))}
			</div>
		</>
	);
}

const NAV = [
	{ title: 'Our Mission', link: '/#mission' },
	{ title: 'Features', link: '/#features' },
	{ title: 'Testimonials', link: '/#testimonials' },
	{ title: 'Pricing', link: '/#pricing' },
	{ title: 'Contact', link: '/#contact' },
];
