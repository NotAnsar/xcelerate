'use client';

import { useInView, motion, useAnimation } from 'framer-motion';
import { useEffect, useRef } from 'react';

export default function Reveal({ children }: { children: React.ReactNode }) {
	const ref = useRef<HTMLDivElement>(null);
	const inView = useInView(ref, { once: true });
	const ctrl = useAnimation();

	useEffect(() => {
		if (inView) {
			ctrl.start('visible');
		}
	}, [inView, ctrl]);

	return (
		<div className='relative overflow-hidden w-full' ref={ref}>
			<motion.div
				variants={{
					hidden: { opacity: 0, y: 45 },
					visible: { opacity: 1, y: 0 },
				}}
				initial='hidden'
				animate={ctrl}
				transition={{ duration: 0.5, delay: 0.35 }}
			>
				{children}
			</motion.div>
		</div>
	);
}
