'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';

export default function Hero() {
	return (
		<motion.main
			className='max-w-screen-main mx-auto text-center lg:w-4/5 space-y-6 py-24 relative'
			initial={{ opacity: 0, y: '3rem' }}
			animate={{ opacity: 1, y: 0, transition: { duration: 0.5 } }}
		>
			<motion.a
				className='text-wrap sm:text-nowrap text-xs px-3 py-2 rounded-full inline-flex items-center gap-2 text-gray-6 relative'
				initial={{ '--x': '100%', scale: 1 } as any}
				animate={{ '--x': '-100%' } as any}
				whileTap={{ scale: 0.97 }}
				transition={{
					repeat: Infinity,
					repeatType: 'loop',
					repeatDelay: 0.1,
					type: 'spring',
					stiffness: 20,
					damping: 15,
					mass: 2,
					scale: { type: 'spring', stiffness: 10, damping: 5, mass: 0.1 },
				}}
				href='https://www.karrouachansar.xyz/'
				target='_blank'
			>
				<span className='w-2 h-2 relative flex'>
					<span className='animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75 ' />
					<span className='relative inline-flex rounded-full w-2 h-2 bg-primary ' />
				</span>
				<span className='block absolute inset-0 rounded-full p-px linear-overlay bg-gray' />

				<p>This website is crafted by Ansar Karrouach</p>
			</motion.a>

			<h1 className='text-[40px] leading-snug sm:text-6xl sm:leading-snug lg:text-7xl lg:leading-tight font-bold w-11/12 sm:w-4/5 mx-auto text-transparent bg-text bg-clip-text'>
				Elevate Your Digital Presence with Xcelerate
			</h1>
			<p className='w-11/12 sm:w-4/5 mx-auto sm:text-lg lg:text-[19px] text-gray-5 font-medium'>
				Engineered for peak performance and crafted with expertise, Xcelerate
				ensures exceptional results, setting a new benchmark for digital
				excellence
			</p>
			<button className='px-8 py-3 rounded-full relative radial-gradient border border-gray bg-primary hover:bg-primary/75 transition-all ease-in duration-300 hover:scale-[97%]'>
				Get Started
			</button>
			<div className='flex items-center justify-center gap-3'>
				<div className='inline-flex '>
					<Image
						className='w-6 h-6 rounded-full bg-gray inline-block translate-x-4 object-cover shadow-md shadow-primary/20'
						alt=''
						src={
							'https://images.unsplash.com/photo-1488426862026-3ee34a7d66df?q=80&w=1727&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
						}
						width={240}
						height={240}
					/>
					<Image
						className='w-6 h-6 rounded-full bg-gray inline-block translate-x-2 object-cover shadow-md shadow-primary/20'
						width={240}
						height={240}
						alt=''
						src={
							'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
						}
					/>
					<Image
						className='w-6 h-6 rounded-full bg-gray inline-block object-cover shadow-md shadow-primary/20'
						width={240}
						height={240}
						alt=''
						src={
							'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
						}
					/>
				</div>
				<p className='text-gray-5 text-sm inline'>Trusted by 500+ clients</p>
			</div>
		</motion.main>
	);
}
