import React from 'react';
import IconsArray, { Icons } from './icons/marquee';
import Marquee from 'react-fast-marquee';

export default function MarqueeSection() {
	return (
		<section className='max-w-screen-main mx-auto mt-20 mb-36'>
			<Marquee speed={70} gradient gradientColor='#050505' gradientWidth={300}>
				<div className='flex '>
					{IconsArray.map((Icon, i) => (
						<Icon key={i} className='mx-8' />
					))}
				</div>
			</Marquee>
		</section>
	);
}
