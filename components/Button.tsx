'use client';

import { motion } from 'framer-motion';
export default function Button({ children }: { children: React.ReactNode }) {
	return (
		<motion.button
			className='px-8 py-3 rounded-full relative radial-gradient'
			initial={{ '--x': '100%', scale: 1 }}
			animate={{ '--x': '-100%' }}
			whileTap={{ scale: 0.97 }}
			transition={{
				repeat: Infinity,
				repeatType: 'loop',
				repeatDelay: 1,
				type: 'spring',
				stiffness: 20,
				damping: 15,
				mass: 2,

				scale: { type: 'spring', stiffness: 10, damping: 5, mass: 0.1 },
			}}
		>
			<span className='text-neutral-100 tracking-wide h-full w-full block relative linear-mask'>
				{children}
			</span>
			<span className='block absolute inset-0 rounded-full p-px linear-overlay' />
		</motion.button>
	);
}
