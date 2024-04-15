import React from 'react';
import { Icons } from './icons/features';

export default function Features() {
	return (
		<section
			id='features'
			className='max-w-screen-main mx-auto text-center mb-36 p-4'
		>
			<h5 className='uppercase text-sm font-bold text-primary'>Features</h5>
			<h2 className='mt-3 mb-6 text-5xl font-medium'>
				Feature that we provide
			</h2>
			<p className='text-gray-5 w-4/5 mx-auto mb-20'>
				Explore our innovative solutions crafted to meet your unique
				requirements, incorporating cutting-edge technology for outstanding
				performance and results.
			</p>
			<div className='grid grid-cols-1 gap-x-12 gap-y-14 sm:grid-cols-2 md:grid-cols-3 text-left '>
				{features.slice(0, 6).map((f) => (
					<div key={f.title} className='space-y-3'>
						<f.icon className='text-primary' />
						<h3 className='font-medium text-foreground text-xl'>{f.title}</h3>
						<p className='text-sm text-gray-6/95'>{f.description}</p>
					</div>
				))}
			</div>
		</section>
	);
}

const features = [
	{
		title: 'Seamless Integration',
		icon: Icons.Layers,
		description:
			'Seamlessly integrate with third-party tools, streamlining workflows for enhanced productivity.',
	},
	{
		title: 'Scalable Solutions',
		icon: Icons.Graph,
		description:
			'Scale your solutions effortlessly to meet growing business demands and future needs.',
	},
	{
		title: 'Robust Security',
		icon: Icons.LockCheck,
		description:
			'Ensure robust security measures protect your data and maintain client trust.',
	},
	{
		title: 'Customizable Features',
		icon: Icons.Category,
		description:
			'Customize features and functionalities to align with your unique requirements.',
	},
	{
		title: 'Cloud Integration',
		icon: Icons.Chart,
		description:
			'Seamlessly integrate with cloud platforms for scalable storage, enhanced collaboration, and accessibility from anywhere.',
	},
	{
		title: 'Performance Optimization',
		icon: Icons.Rocket,
		description:
			'Optimize performance for fast and efficient user experiences across platforms.',
	},
	{
		title: 'Dedicated Support',
		icon: Icons.Users,
		description:
			'Access dedicated support and maintenance services for ongoing assistance and updates.',
	},
	{
		title: 'Data Encryption',
		icon: Icons.Graph,
		description:
			'Protect sensitive data with advanced encryption methods, ensuring confidentiality and compliance with data privacy regulations.',
	},
	{
		title: 'AI-Powered Insights',
		icon: Icons.Case,
		description:
			'Leverage AI algorithms to analyze data and provide actionable insights, enhancing decision-making and strategic planning.',
	},
];
