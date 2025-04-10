import type { Metadata } from 'next';
import type { PropsWithChildren } from 'react';

import './globals.css';

export const metadata: Metadata = {
	title: 'Chatting app',
	description: 'Generated by create next app',
};

export default function RootLayout({ children }: PropsWithChildren) {
	return (
		<html lang="en">
			<body className="antialiased">{children}</body>
		</html>
	);
}
