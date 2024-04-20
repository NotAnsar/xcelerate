'use client';

import { useEffect, useState } from 'react';

export default function useIsMobile(mobileWidth: number = 640) {
	const [isMobile, setIsMobile] = useState(false);

	useEffect(() => {
		setIsMobile(window.innerWidth <= mobileWidth);
	}, [mobileWidth]);

	return isMobile;
}
