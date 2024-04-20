'use client';

import { motion } from 'framer-motion';
import { useState } from 'react';

export default function PriceModal({
	p,
}: {
	p: {
		title: string;
		description: string;
		price: string;
		features: string[];
		button: string;
	};
}) {
	const [modalPosition, setModalPosition] = useState({ x: 0, y: 0 });

	return (
		<motion.div
			key={p.title}
			className='p-8 bg-background/80 rounded-2xl backdrop-blur-md relative overflow-hidden border border-primary/75'
			onMouseMove={(event) => {
				const modalRect = event.currentTarget.getBoundingClientRect();

				const x = event.clientX - modalRect.left;
				const y = event.clientY - modalRect.top;

				const percX = (x * 100) / modalRect.width;
				const percY = (y * 100) / modalRect.height;

				setModalPosition({ x: percX, y: percY });
			}}
		>
			<div
				style={{
					background: `linear-gradient(180deg, rgba(5,5,5, 0.1) 0%, rgba(5, 5, 5, 0) 70%),radial-gradient(circle at ${modalPosition.x}% ${modalPosition.y}%,hsla(var(--primary) / 0.17) 50%,hsla(0 0% 5% / 0.05) 100%) `,
				}}
				className='blur-md absolute inset-0 pointer-events-none '
			/>

			<h3 className='text-[15px] font-semibold '>{p.title}</h3>
			<p className='text-[13px] text-gray-5 mt-3'>
				Perfect for startups and small businesses looking to establish an online
				presence.
			</p>
			<hr className='w-full h-[1px] bg-foreground my-5' />
			{p.price !== 'Custom' ? (
				<h4 className='mt-5 mb-6 font-medium'>
					<span className='text-4xl'>${p.price}</span>/mo
				</h4>
			) : (
				<h4 className='mt-5 mb-6 font-medium text-4xl'>{p.price}</h4>
			)}

			<ul>
				{p.features.map((f, i) => (
					<li className='flex gap-3 mb-[14px] items-center' key={i}>
						<svg
							width='17'
							height='20'
							viewBox='0 0 17 20'
							fill='none'
							xmlns='http://www.w3.org/2000/svg'
						>
							<path
								d='M1 5.59853C1 5.23 1.2027 4.89133 1.52751 4.7172L7.98865 1.25331C8.28377 1.09509 8.63851 1.09509 8.93363 1.25331L15.3948 4.7172C15.7196 4.89133 15.9223 5.23 15.9223 5.59853V9.01468C15.9223 12.7 13.8953 16.0867 10.6472 17.828L8.93363 18.7467C8.63851 18.9049 8.28377 18.9049 7.98865 18.7467L6.27507 17.828C3.02703 16.0867 1 12.7 1 9.01468V5.59853Z'
								stroke='#FAFAFA'
								strokeWidth='1.5'
							/>
							<path
								d='M6.12959 10L7.99487 11.8L11.7254 8.20005'
								stroke='#FAFAFA'
								strokeWidth='1.5'
								strokeLinecap='round'
								strokeLinejoin='round'
							/>
						</svg>
						<span className='text-[13px] text-gray-5'>{f}</span>
					</li>
				))}
			</ul>
			<button className='text-sm py-2 px-6 bg-gray border border-gray-2 rounded-full mt-5 hover:border-gray-5 transition-all ease-in duration-300 hover:bg-gray/90 '>
				{p.button}
			</button>
		</motion.div>
	);
}
