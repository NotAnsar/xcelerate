import Paragraph from './Paragraph';

export default function Mission() {
	const paragraphValue =
		'Our mission is to drive innovation, empower businesses, and deliver transformative digital solutions. We set new standards of excellence to help our clients thrive in a dynamic digital world.';
	return (
		<section id='mission' className='max-w-screen-main mx-auto my-36'>
			<Paragraph value={paragraphValue} />
		</section>
	);
}
