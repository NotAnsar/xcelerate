export default function Contact() {
	return (
		<>
			<section
				id='contact'
				className='max-w-screen-main mx-auto text-center mb-6 p-4 '
			>
				<h5 className='uppercase text-sm md:text-base font-bold text-primary'>
					{"Let's connect."}
				</h5>
				<h2 className='mt-3 mb-6 p-4 text-[28px] sm:text-[34px] md:text-[44px] leading-tight mx-auto font-medium md:w-4/5'>
					Your feedback matters.
					<br /> {"Get in touch and let's collaborate."}
				</h2>
				<button className='px-8 py-3 bg-primary rounded-full border border-gray hover:bg-primary/75 transition-all ease-in duration-300'>
					Get in touch
				</button>
			</section>
		</>
	);
}