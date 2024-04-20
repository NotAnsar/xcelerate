'use client';

import Image from 'next/image';
import Marquee from 'react-fast-marquee';
import Reveal from './Reveal';
import useIsMobile from '@/hooks/useIsMobile';

export default function Testimonials() {
	const isMobile = useIsMobile();

	return (
		<section
			id='testimonials'
			className='max-w-screen-2xl mx-auto text-center my-36 px-2 py-14 md:px-16'
		>
			<Reveal>
				<h2 className='mt-3 mb-20 text-4xl font-medium text-center'>
					Creators love us! Hear what they have to say.
				</h2>
			</Reveal>

			<Reveal>
				<Marquee
					pauseOnHover
					gradient
					gradientWidth={isMobile ? 50 : 300}
					gradientColor='#050505'
				>
					{testimonials.map((t, i) => (
						<aside
							key={t.name}
							className='p-6 flex flex-col gap-7 bg-black/40 backdrop-blur-sm border border-gray rounded-2xl basis-auto ml-8 h-full w-[400px] md:w-[450px] '
							style={{
								background:
									'linear-gradient(180deg, rgba(78,23,130, 0.15) 0%, rgba(5, 5, 5, 0) 70%',
							}}
						>
							<svg
								width='37'
								height='34'
								viewBox='0 0 37 34'
								fill='none'
								xmlns='http://www.w3.org/2000/svg'
								data-v-dcc33c39=''
							>
								<path
									d='M13.7592 19.1958V34H0V22.3125C0 15.9847 0.760437 11.4042 2.28131 8.57083C4.27746 4.79306 7.43802 1.93611 11.763 0L14.8998 4.95833C12.2858 6.04444 10.361 7.67361 9.12524 9.84583C7.88953 11.9708 7.20039 15.0875 7.0578 19.1958H13.7592ZM35.8593 19.1958V34H22.1002V22.3125C22.1002 15.9847 22.8606 11.4042 24.3815 8.57083C26.3776 4.79306 29.5382 1.93611 33.8632 0L37 4.95833C34.386 6.04444 32.4611 7.67361 31.2254 9.84583C29.9897 11.9708 29.3006 15.0875 29.158 19.1958H35.8593Z'
									fill='currentColor'
									data-v-dcc33c39=''
								></path>
							</svg>
							<p className='text-gray-5 text-left'>{t.message}</p>
							<div className='flex gap-3 items-center '>
								<Image
									alt={t.name}
									src={t.picture}
									width={48}
									height={48}
									className='rounded-full aspect-square object-cover border border-gray'
								/>
								<div className='text-left'>
									<h3 className='font-medium'>{t.name}</h3>
									<p className='text-sm text-gray-5'>
										{t.job}, {t.company}
									</p>
								</div>
							</div>
						</aside>
					))}
				</Marquee>
			</Reveal>
		</section>
	);
}

const testimonials = [
	{
		name: 'Sarah Johnson',
		job: 'Marketing Manager',
		company: 'XYZ Company',
		message:
			'Working with Xcelerate has been a game-changer for our business. Their innovative solutions and dedicated support have helped us achieve new heights.',
		picture:
			'https://images.unsplash.com/11/berries.jpg?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
	},
	{
		name: 'John Smith',
		job: 'CEO',
		company: 'ABC Corporation',
		message:
			"Xcelerate's expertise in technology and digital strategies has significantly boosted our online presence. Highly recommend their services!",
		picture:
			'https://images.unsplash.com/11/berries.jpg?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
	},
	{
		name: 'Emily Brown',
		job: 'UX Designer',
		company: 'DEF Design Studio',
		message:
			"I've collaborated with Xcelerate on multiple projects, and each time, they've delivered exceptional results. Their attention to detail and creativity are unmatched.",
		picture:
			'https://images.unsplash.com/11/berries.jpg?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
	},
	{
		name: 'Michael Davis',
		job: 'Software Engineer',
		company: 'Tech Innovations LLC',
		message:
			"Xcelerate's approach to software development is top-notch. Their team is highly skilled, and they deliver quality solutions on time.",
		picture:
			'https://images.unsplash.com/11/berries.jpg?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
	},
	{
		name: 'Anna Martinez',
		job: 'Business Analyst',
		company: 'Global Enterprises Inc.',
		message:
			'Working with Xcelerate has been a pleasure. They understand our business needs and provide tailored solutions that drive results.',
		picture:
			'https://images.unsplash.com/11/berries.jpg?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
	},
];
