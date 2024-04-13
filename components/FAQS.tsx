import FAQ from './FAQ';

export default function FAQS() {
	return (
		<section
			id='faq'
			className='max-w-screen-main mx-auto mb-36 px-4 main:px-0'
		>
			<h1 className='text-4xl sm:text-5xl md:text-7xl font-medium mb-20'>
				Frequently asked <br /> questions
			</h1>

			<div className='flex flex-col gap-4'>
				{faqs.map((f, i) => (
					<FAQ {...f} key={i} />
				))}
			</div>
		</section>
	);
}

const faqs = [
	{
		question: 'What services does Xcelerate offer?',
		answer:
			'Xcelerate offers a range of services including web development, mobile app development, UI/UX design, digital marketing, and more. We specialize in leveraging cutting-edge technologies to deliver innovative solutions tailored to your business needs.',
	},
	{
		question: 'How can I request a quote or discuss a project with Xcelerate?',
		answer:
			"You can easily request a quote or discuss your project with us by filling out the contact form on our website, emailing us at contact@xcelerate.com, or calling our sales team at +123-456-7890. We'll get back to you promptly to discuss your requirements.",
	},
	{
		question:
			'What is the typical turnaround time for projects with Xcelerate?',
		answer:
			'The turnaround time for projects with Xcelerate depends on the scope and complexity of the project. We work closely with our clients to establish timelines and milestones, ensuring timely delivery without compromising quality. Get in touch with us to discuss your project timeline.',
	},
	{
		question:
			'Does Xcelerate offer ongoing support and maintenance for projects?',
		answer:
			'Yes, we offer ongoing support and maintenance services to ensure your digital solutions continue to perform optimally. Our support team is available to address any issues, implement updates, and provide technical assistance as needed.',
	},
];
