// components/RouteProgress.tsx
'use client';

import { useEffect } from 'react';
import { usePathname } from 'next/navigation';
import NProgress from 'nprogress';
import 'nprogress/nprogress.css';

export default function RouteProgress() {
	const pathname = usePathname();

	useEffect(() => {
		NProgress.start();
		const timeout = setTimeout(() => {
			NProgress.done();
		}, 500);

		return () => {
			clearTimeout(timeout);
		};
	}, [pathname]);

	return null;
}
