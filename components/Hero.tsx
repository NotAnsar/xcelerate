export default function Hero() {
	return ( 
		<main className='max-w-screen-main mx-auto text-center lg:w-4/5 space-y-6 py-24 relative'>
			<div className='w-full h-auto md:h-full md:w-auto  aspect-square bg-radial absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 -z-10' />

			<div className='text-wrap sm:text-nowrap text-xs px-3 py-2 border border-primary rounded-full inline-flex items-center gap-2'>
				<span className='w-2 h-2 relative flex'>
					<span className='animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75 ' />
					<span className='relative inline-flex rounded-full w-2 h-2 bg-primary ' />
				</span>
				This website is a showcase of my skills
			</div>
			<h1 className='text-[40px] leading-snug sm:text-6xl sm:leading-snug lg:text-7xl lg:leading-tight font-bold w-11/12 sm:w-4/5 mx-auto text-transparent bg-text bg-clip-text'>
				Elevate Your Digital Presence with Xcelerate
			</h1>
			<p className='w-11/12 sm:w-4/5 mx-auto sm:text-lg lg:text-xl text-gray-6 '>
				Engineered for peak performance and crafted with expertise, Xcelerate
				ensures exceptional results, setting a new benchmark for digital
				excellence
			</p>
			<button className='px-8 py-3 bg-primary rounded-full border border-gray hover:bg-primary/75 transition-all ease-in duration-300'>
				Get Started
			</button>

			<div className='flex items-center justify-center gap-3'>
				<div className='inline-flex '>
					<span className='w-6 h-6 rounded-full bg-gray inline-block translate-x-4 bg-blue-500'></span>
					<span className='w-6 h-6 rounded-full bg-gray inline-block translate-x-2 bg-red-500'></span>
					<span className='w-6 h-6 rounded-full bg-gray inline-block bg-green-500'></span>
				</div>

				<p className='text-gray-5 text-sm inline'>Trusted by 500+ clients</p>
			</div>
		</main>
	);
}
