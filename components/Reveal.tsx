'use client';

import { cn } from '@/lib/utils';
import { useInView, motion, useAnimation, easeIn } from 'framer-motion';
import { useEffect, useRef } from 'react';

export default function Reveal({
	children,
	className,
}: {
	children: React.ReactNode;
	className?: string;
}) {
	const ref = useRef<HTMLDivElement>(null);
	const inView = useInView(ref, { once: true });
	const ctrl = useAnimation();
	const slideCtrl = useAnimation();

	useEffect(() => {
		if (inView) {
			ctrl.start('visible');
			slideCtrl.start('visible');
		}
	}, [inView, ctrl, slideCtrl]);

	return (
		<div className={cn('relative overflow-hidden w-full', className)} ref={ref}>
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

			{/* <motion.div
				variants={{
					hidden: { left: 0, top: 4, bottom: 4 },
					visible: { left: '100%' },
				}}
				initial='hidden'
				animate={slideCtrl}
				transition={{ duration: 0.5, ease: 'easeOut' }}
				className='absolute left-0 right-0 bg-primary z-20 '
			/> */}
		</div>
	);
}
