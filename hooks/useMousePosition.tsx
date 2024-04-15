'use client';

import { useEffect, useState } from 'react';

export default function useMousePosition() {
	const [mousePosition, setmousePosition] = useState({ x: 0, y: 0 });

	function updateMousePosition(e: MouseEvent) {
		setmousePosition({ x: e.pageX, y: e.pageY });
	}

	useEffect(() => {
		window.addEventListener('mousemove', updateMousePosition);
		return () => {
			window.removeEventListener('mousemove', updateMousePosition);
		};
	}, []);

	return mousePosition;
}
