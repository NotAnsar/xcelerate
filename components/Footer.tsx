import React from 'react';
import { Icons } from './icons/socials';
import Link from 'next/link';

export default function Footer() {
	return (
		<footer className='max-w-screen-main mx-auto pb-20 px-8 flex-col gap-12 md:flex-row flex justify-between '>
			<div className='flex flex-col gap-3'>
				<div className='flex gap-2 cursor-pointer group items-center'>
					<Icons.logo className='text-foreground w-[22px] h-auto group-hover:rotate-180 transition-all ease-in duration-300 ' />
					<h3 className='font-logo text-3xl'>Xcelerate</h3>
				</div>
				<p className='text-[15px] text-gray-4  w-full sm:w-[400px] mb-4'>
					{
						"Empowering businesses through innovation and exceptional digital solutions. Let's accelerate success together."
					}
				</p>
				<div className='mb-6 flex gap-4'>
					<Icons.fb className='hover:text-gray-6 text-3xl text-gray-3 cursor-pointer' />
					<Icons.ig className='hover:text-gray-6 text-3xl text-gray-3 cursor-pointer' />
					<Icons.in className='hover:text-gray-6 text-3xl text-gray-3 cursor-pointer' />
					<Icons.mail className='hover:text-gray-6 text-3xl text-gray-3 cursor-pointer' />
					<Icons.yt className='hover:text-gray-6 text-3xl text-gray-3 cursor-pointer' />
				</div>
				<span className='text-gray-3 text-sm font-medium'>
					© 2024 Xcelerate
				</span>
			</div>
			<div className='flex gap-12'>
				<ul className='text-sm text-gray-5 flex flex-col gap-4 font-medium'>
					<li className='text-xs text-foreground mb-4 font-medium uppercase'>
						Pages
					</li>
					<li className='hover:text-foreground transition-all ease-in duration-300 cursor-pointer'>
						<Link href='#testimonials'>Testimonials</Link>
					</li>
					<li className='hover:text-foreground transition-all ease-in duration-300 cursor-pointer'>
						<Link href='#pricing'>Pricing</Link>
					</li>
					<li className='hover:text-foreground transition-all ease-in duration-300 cursor-pointer'>
						<Link href='#mission'>Our Mission</Link>
					</li>
					<li className='hover:text-foreground transition-all ease-in duration-300 cursor-pointer'>
						<Link href='#features'>Features</Link>
					</li>
					<li className='hover:text-foreground transition-all ease-in duration-300 cursor-pointer'>
						<Link href='#contact'>Contact</Link>
					</li>
				</ul>
				<ul className='text-sm text-gray-5 flex flex-col gap-4 font-medium'>
					<li className='text-xs text-foreground mb-4 font-medium  uppercase'>
						Legal
					</li>
					<li className='hover:text-foreground transition-all ease-in duration-300 cursor-pointer'>
						Privacy policy
					</li>
					<li className='hover:text-foreground transition-all ease-in duration-300 cursor-pointer'>
						Terms of service
					</li>
				</ul>
			</div>
		</footer>
	);
}
