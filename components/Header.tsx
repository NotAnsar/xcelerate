import Link from 'next/link';

export default function Header() {
	return (
		<header>
			<div className='max-w-screen-main mx-auto px-7 py-5 flex items-center justify-between'>
				<h3 className='font-logo text-2xl'>Xcelerate</h3>
				<nav className='hidden md:flex gap-5 items-center text-sm'>
					{NAV.map((n) => (
						<Link
							key={n.title}
							href={n.link}
							className='text-gray-5 hover:text-foreground font-medium transition-all ease-in duration-300 '
						>
							{n.title}
						</Link>
					))}
					<button className='px-5 py-2 bg-gray border border-primary rounded-full hover:border-primary-foreground'>
						Get Started
					</button>
				</nav>
				<nav className='flex md:hidden items-center text-sm'>Burger</nav>
			</div>
		</header>
	);
}

const NAV = [
	{ title: 'Our Mission', link: '/#mission' },
	{ title: 'Features', link: '/#features' },
	{ title: 'Testimonials', link: '/#testimonials' },
	{ title: 'Pricing', link: '/#pricing' },
	{ title: 'Contact', link: '/#contact' },
];
