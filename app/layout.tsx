import type { Metadata } from 'next'
import Header from '@/components/header'
import Footer from '@/components/footer'
import './globals.css'

export const metadata: Metadata = {
	title: 'D360 Vision — AI for Intelligent Data Understanding',
	description:
		'Vision Language AI that understands documents, images, and enterprise data — structured intelligence in real time.',
}

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode
}>) {
	return (
		<html lang='en'>
			<body>
				<Header />
				{children}
				<Footer />
			</body>
		</html>
	)
}
