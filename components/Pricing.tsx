import PriceModal from './PriceModal';
import Reveal from './Reveal';

export default function Pricing() {
	return (
		<section
			id='pricing'
			className='max-w-screen-main mx-auto text-center mb-36 p-4'
		>
			<Reveal>
				<h5 className='uppercase text-sm font-bold text-primary'>Pricing</h5>
				<h2 className='mt-3 mb-6 text-5xl font-medium'>Pricing</h2>
				<p className='text-gray-5 w-4/5 mx-auto mb-20'>
					Choose from flexible pricing options designed to match your needs,
					ensuring affordability and value for your investment in cutting-edge
					solutions.
				</p>
			</Reveal>
			<div className='grid grid-cols-1 gap-12 sm:grid-cols-2 md:grid-cols-3 text-left '>
				{pricing.map((p) => (
					<Reveal key={p.title}>
						<PriceModal p={p} />
					</Reveal>
				))}
			</div>
		</section>
	);
}

const pricing = [
	{
		title: 'Free Plan',
		description:
			'Perfect for startups and small businesses looking to establish an online presence.',
		price: '0',
		features: ['Basic SEO Optimization', 'Standard Support', 'Web Development'],
		button: 'Get Started',
	},
	{
		title: 'Pro Plan',
		description:
			'Ideal for growing businesses that require advanced features and scalability.',
		price: '150',
		features: [
			'Advanced Web Development',
			'SEO Optimization',
			'Priority Support',
		],
		button: 'Get Started',
	},
	{
		title: 'Enterprise Plan',
		description:
			'Tailored solutions for large enterprises with complex requirements and high traffic.',
		price: 'Custom',
		features: [
			'Custom Web Development',
			'Advanced SEO Strategy',
			'Dedicated Support Manager',
		],
		button: 'Contact Us',
	},
];
