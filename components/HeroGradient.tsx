'use client';
import { motion } from 'framer-motion';

export default function HeroGradient() {
	return (
		<div className='absolute inset-0 w-full h-screen overflow-hidden bg-square'>
			<motion.div
				className='h-screen w-auto md:w-[1500px] md:h-auto aspect-square absolute -z-10 overflow-hidden'
				initial={{
					opacity: 1,
					scale: 0,
					top: '0%',
					left: '50%',
					translate: '-50% -50%',
				}}
				animate={{ opacity: 1, scale: 1 }}
				transition={{ duration: 0.3, delay: 0.6 }}
				style={{
					background:
						// 'radial-gradient(circle, rgba(78,23,130, 0.25) 0%, rgba(144, 172, 255, 0) 70%, rgba(144, 172, 255, 0) 100%)',
						'radial-gradient(circle, hsla(var(--primary) / 0.2) 0%, rgba(144, 172, 255, 0) 70%, rgba(144, 172, 255, 0) 100%)',
				}}
			/>
		</div>
	);
}
