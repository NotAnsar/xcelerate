'use client';

import { useScroll, motion, MotionValue, useTransform } from 'framer-motion';
import { useRef } from 'react';

export default function Paragraph({ value }: { value: string }) {
	const el = useRef<HTMLParagraphElement>(null);
	const { scrollYProgress } = useScroll({
		target: el,
		offset: ['start end', 'start 0.1'],
	});
	const words = value.split(' ');

	return (
		<p
			className='text-2xl p-4 sm:text-3xl md:text-4xl md:leading-relaxed text-foreground font-medium  md:p-10 font-logo flex flex-wrap '
			ref={el}
		>
			{words.map((w, i) => {
				const start = i / words.length;
				const end = start + 1 / words.length;

				return (
					<Word key={i} range={[start, end]} progress={scrollYProgress}>
						{w}
					</Word>
				);
			})}
		</p>
	);
}

export function Word({
	children,
	range,
	progress,
}: {
	children: React.ReactNode;
	range: number[];
	progress: MotionValue<number>;
}) {
	const opacity = useTransform(progress, range, [0, 1]);
	return (
		<span className='mr-3 mt-3 relative'>
			<span className='absolute opacity-30'>{children}</span>
			<motion.span style={{ opacity }} className='text-foreground'>
				{children}
			</motion.span>
		</span>
	);
}
