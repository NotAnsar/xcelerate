'use client';

import { motion } from 'framer-motion';

export default function Hero() {
	return (
		<motion.main
			className='max-w-screen-main mx-auto text-center lg:w-4/5 space-y-6 py-24 relative'
			initial={{ opacity: 0, y: '3rem' }}
			animate={{ opacity: 1, y: 0, transition: { duration: 0.5 } }}
		>
			{/* <motion.div
				initial={{
					opacity: 1,
					scale: 0,
					translate: '-50% -50%',
					top: '50%',
					left: '50%',
				}}
				animate={{ opacity: 1, scale: 1, transformOrigin: 'center' }}
				transition={{ duration: 0.3, delay: 0.5 }}
				className='w-5/6 h-auto aspect-square bg-radial-primary absolute -z-10'
			/> */}
			<motion.div
				className='text-wrap sm:text-nowrap text-xs px-3 py-2 rounded-full inline-flex items-center gap-2 text-gray-6  relative'
				initial={{ '--x': '100%', scale: 1 }}
				animate={{ '--x': '-100%' }}
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
			>
				<span className='w-2 h-2 relative flex'>
					<span className='animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75 ' />
					<span className='relative inline-flex rounded-full w-2 h-2 bg-primary ' />
				</span>
				<span className='block absolute inset-0 rounded-full p-px linear-overlay bg-gray' />
				<p>This website is a showcase of my skills</p>
			</motion.div>
			<h1 className='text-[40px] leading-snug sm:text-6xl sm:leading-snug lg:text-7xl lg:leading-tight font-bold w-11/12 sm:w-4/5 mx-auto text-transparent bg-text bg-clip-text'>
				Elevate Your Digital Presence with Xcelerate
			</h1>
			<p className='w-11/12 sm:w-4/5 mx-auto sm:text-lg lg:text-[19px] text-gray-5 font-medium'>
				Engineered for peak performance and crafted with expertise, Xcelerate
				ensures exceptional results, setting a new benchmark for digital
				excellence
			</p>

			<button className='px-8 py-3 rounded-full relative radial-gradient border border-gray hover:bg-primary/75 transition-all ease-in duration-300 hover:scale-[97%]'>
				Get Started
			</button>

			<div className='flex items-center justify-center gap-3'>
				<div className='inline-flex '>
					<span className='w-6 h-6 rounded-full bg-gray inline-block translate-x-4 bg-blue-500'></span>
					<span className='w-6 h-6 rounded-full bg-gray inline-block translate-x-2 bg-red-500'></span>
					<span className='w-6 h-6 rounded-full bg-gray inline-block bg-green-500'></span>
				</div>
				<p className='text-gray-5 text-sm inline'>Trusted by 500+ clients</p>
			</div>
		</motion.main>
	);
}
