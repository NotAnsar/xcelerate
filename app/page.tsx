import Contact from '@/components/Contact';
import FAQS from '@/components/FAQS';
import FAQ from '@/components/FAQS';
import Features from '@/components/Features';
import Footer from '@/components/Footer';
import FooterMarquee from '@/components/FooterMarquee';
import Header from '@/components/Header';
import Hero from '@/components/Hero';
import MarqueeSection from '@/components/MarqueeSection';
import Mission from '@/components/Mission';
import Pricing from '@/components/Pricing';
import Quote from '@/components/Quote';

export default function Home() {
	return (
		<>
			<Header />
			<Hero />
			<MarqueeSection />
			<Mission />
			<Features />
			<Pricing />
			{/* <Quote /> */}
			<FAQS />
			<Contact />
			<FooterMarquee />
			<Footer />
		</>
	);
}
