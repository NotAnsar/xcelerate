'use client';

import useMousePosition from '@/hooks/useMousePosition';
import { cn } from '@/lib/utils';

export default function Cursor() {
	const { x, y } = useMousePosition();

	console.log(x);

	return (
		<div
			className={cn(
				// 'w-52 h-auto aspect-square blur-3xl absolute -z-[-5] -translate-x-1/2 -translate-y-1/2 transition-t ease-out delay-0 bg-primary/20 pointer-events-none'
				'w-80 h-auto absolute aspect-square rounded-full -z-[-5] -translate-x-1/2 -translate-y-1/2 transition-all ease-out delay-[40] bg-primary/50 pointer-events-none '
			)}
			style={{ left: x + 'px', top: y + 'px' }}
		/>
		// <div className='w-32 h-auto aspect-square bg-red-800 absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 -z-10' />
	);
}
