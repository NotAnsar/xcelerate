import type { Metadata } from 'next';
import { Artifika, Poppins } from 'next/font/google';
import './globals.css';
import { cn } from '@/lib/utils';

const myfont = Poppins({
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
			<body className={cn(artifika.variable, myfont.className, )}>
				{children}
			</body>
		</html>
	);
}
