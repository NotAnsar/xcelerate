'use client';

import Marquee from 'react-fast-marquee';
import useIsMobile from '@/hooks/useIsMobile';
import Reveal from './Reveal';

export default function FooterMarquee() {
	const isMobile = useIsMobile();

	return (
		<section className='max-w-screen-main mx-auto text-center mb-36 '>
			<Reveal>
				<Marquee
					speed={60}
					gradient
					gradientColor='#050505'
					gradientWidth={isMobile ? 100 : 300}
					className='h-16 text-gray-4  font-medium'
				>
					<div className='flex'>
						{relatedWords.slice(0, 8).map((w, i) => (
							<p key={i} className='text-3xl mx-2'>
								<span>{w} • </span>
							</p>
						))}
					</div>
				</Marquee>
				<Marquee
					direction='right'
					speed={60}
					gradient
					gradientColor='#050505'
					gradientWidth={isMobile ? 100 : 400}
					className=' h-16 text-gray-3 font-medium'
				>
					<div className='flex'>
						{relatedWords.slice(8, 16).map((w, i) => (
							<p key={i} className='text-3xl mx-2'>
								<span>{w} • </span>
							</p>
						))}
					</div>
				</Marquee>
				<Marquee
					speed={60}
					gradient
					gradientColor='#050505'
					gradientWidth={isMobile ? 140 : 500}
					className=' h-16 text-gray-2 font-medium'
				>
					<div className='flex'>
						{relatedWords.slice(16, relatedWords.length).map((w, i) => (
							<p key={i} className='text-3xl mx-2'>
								<span>{w} • </span>
							</p>
						))}
					</div>
				</Marquee>
			</Reveal>
		</section>
	);
}

const relatedWords = [
	'Innovation',
	'Digital Solutions',
	'Technology',
	'Empowerment',
	'Efficiency',
	'Optimization',
	'Integration',
	'Scalability',
	'Security',
	'Customization',
	'Performance',
	'Support',
	'Data Analytics',
	'AI Insights',
	'Cloud Integration',
	'E-commerce',
	'Mobile Apps',
	'UI/UX Design',
	'SEO',
	'Content Strategy',
	'Marketing',
	'Lead Generation',
	'CRM',
	'Automation',
	'Blockchain',
	'IoT',
	'Machine Learning',
	'Data Science',
	'Cybersecurity',
	'Compliance',
];
