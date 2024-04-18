'use client';
import { useEffect, useState } from 'react';
import IconsArray from './icons/marquee';
import Marquee from 'react-fast-marquee';

export default function MarqueeSection() {
	const [isMobile, setIsMobile] = useState(false);

	useEffect(() => {
		setIsMobile(window.innerWidth <= 640);
	}, []);

	return (
		<section className='max-w-screen-main mx-auto mt-20 '>
			<Marquee
				speed={70}
				gradient
				gradientColor='#050505'
				gradientWidth={isMobile ? 50 : 275}
			>
				<div className='flex'>
					{IconsArray.map((Icon, i) => (
						<Icon key={i} className='mx-8' />
					))}
				</div>
			</Marquee>
		</section>
	);
}
