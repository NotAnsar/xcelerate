import type { Metadata } from 'next';
import { Inter, Artifika, Poppins } from 'next/font/google';
import './globals.css';
import { cn } from '@/lib/utils';
import Reveal from '@/components/Reveal';

// const inter = Inter({ subsets: ['latin'] });
const inter = Poppins({
	subsets: ['latin'],
	weight: ['300', '400', '500', '600'],
});

const artifika = Artifika({
	subsets: ['latin'],
	weight: '400',
	variable: '--logo',
});

export const metadata: Metadata = {
	title: 'Xcelerate - Empowering Innovation',
	description:
		'Unlock the full potential of your digital journey with Xcelerate. Empowering businesses through innovation and exceptional digital solutions.',
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang='en' className='scroll-smooth'>
			<body
				className={cn(artifika.variable, inter.className, 'bg-background  ')}
				style={{
					backgroundImage:
						'url("https://assets-global.website-files.com/639997ad49dddb11d0c0efba/639a05a5c0944b02ab3529dd_grid.svg")',
					// backgroundPosition: '0 0',
					backgroundPosition: '',
					backgroundSize: '200px',
					backgroundRepeat: 'repeat',
				}}
			>
				{children}
			</body>
		</html>
	);
}
