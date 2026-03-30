import { type ReactNode } from 'react'
import { type UserCardProps } from '@/app/sections/issue-tracking/components/user-card'
import { CarouselCardProps } from '@/app/sections/modern-product-teams/components/carousel-card'

type FooterListItem = {
	id: string | number
	link: string
	item: string
}
export type FooterSection = {
	title: string
	items: FooterListItem[]
}

export const footerSections: FooterSection[] = [
	{
		title: 'Platform',
		items: [
			{
				id: 'footer-section-11',
				link: '#',
				item: 'Capabilities',
			},
			{
				id: 'footer-section-12',
				link: '#',
				item: 'Pricing',
			},
			{
				id: 'footer-section-13',
				link: '#',
				item: 'Changelog',
			},
			{
				id: 'footer-section-14',
				link: '#',
				item: 'Documentation',
			},
			{
				id: 'footer-section-15',
				link: '#',
				item: 'API reference',
			},
			{
				id: 'footer-section-16',
				link: '#',
				item: 'Security',
			},
		],
	},
	{
		title: 'Company',
		items: [
			{
				id: 'footer-section-21',
				link: '#',
				item: 'About',
			},
			{
				id: 'footer-section-22',
				link: '#',
				item: 'Blog',
			},
			{
				id: 'footer-section-23',
				link: '#',
				item: 'Careers',
			},
			{
				id: 'footer-section-24',
				link: '#',
				item: 'Customers',
			},
			{
				id: 'footer-section-25',
				link: '#',
				item: 'Partners',
			},
		],
	},
	{
		title: 'Resources',
		items: [
			{
				id: 'footer-section-31',
				link: '#',
				item: 'Support',
			},
			{
				id: 'footer-section-32',
				link: '#',
				item: 'Community',
			},
			{
				id: 'footer-section-33',
				link: '#',
				item: 'Contact',
			},
			{
				id: 'footer-section-34',
				link: '#',
				item: 'DPA',
			},
			{
				id: 'footer-section-35',
				link: '#',
				item: 'Privacy',
			},
			{
				id: 'footer-section-36',
				link: '#',
				item: 'Terms',
			},
			{
				id: 'footer-section-37',
				link: '#',
				item: 'Report a vulnerability',
			},
		],
	},
	{
		title: 'Developers',
		items: [
			{
				id: 'footer-section-41',
				link: '#',
				item: 'API',
			},
			{
				id: 'footer-section-42',
				link: '#',
				item: 'Status',
			},
			{
				id: 'footer-section-43',
				link: '#',
				item: 'GitHub',
			},
			{
				id: 'footer-section-44',
				link: '#',
				item: 'SDKs',
			},
		],
	},
]

export type FoundationListItem = {
	id: string | number
	label: string
	value: string
}

export type FoundationList = FoundationListItem[]

export const foundationList: FoundationList = [
	{
		id: 'foundation-1',
		label: 'Starter',
		value: 'Explore core capabilities.',
	},
	{
		id: 'foundation-2',
		label: 'Professional',
		value: 'Advanced AI with higher limits.',
	},
	{
		id: 'foundation-3',
		label: 'Enterprise',
		value: 'Custom pipelines, SLA, dedicated infrastructure.',
	},
]

export const userCards: UserCardProps[] = [
	{
		id: 'user-card-1',
		title: 'Multi-page policy pack — clauses need structured extraction',
		img: '/user-1.png',
		name: 'Ops',
	},
	{
		id: 'user-card-2',
		title: 'Handwritten fields detected on scanned intake form',
		img: '/user-2.jpg',
		name: 'Claims',
	},
	{
		id: 'user-card-3',
		title: 'Table-heavy invoice — line items must map to ledger schema',
		img: '/user-3.jpg',
		name: 'Finance',
	},
]

export const modernProductCards: CarouselCardProps[] = [
	{
		id: 'modern-carousel-card-1',
		img: '/product-development.jpeg',
		title: 'Understands Data Like Humans',
		description: 'Captures structure, relationships, and meaning — not just text.',
	},
	{
		id: 'modern-carousel-card-2',
		img: '/fast-moving.avif',
		title: 'OCR-Free Architecture',
		description:
			'No fragile pipelines. No rule-based limitations. Pure AI understanding.',
	},
	{
		id: 'modern-carousel-card-3',
		img: '/perfection.avif',
		title: 'Built for Scale',
		description:
			'Process millions of documents with consistent accuracy.',
	},
]

export type UseCaseCardProps = {
	id: string
	img: string
	heading: string
	body: string
}

export const useCaseCards: UseCaseCardProps[] = [
	{
		id: 'use-case-1',
		img: '/collaborate-img1.avif',
		heading: 'Financial Services',
		body: 'Automate invoices, audits, and financial data extraction with precision.',
	},
	{
		id: 'use-case-2',
		img: '/collaborate-img1.avif',
		heading: 'Healthcare',
		body: 'Structure medical records and interpret complex reports.',
	},
	{
		id: 'use-case-3',
		img: '/collaborate-img1.avif',
		heading: 'Insurance',
		body: 'Process claims with contextual understanding — not rules.',
	},
	{
		id: 'use-case-4',
		img: '/collaborate-img1.avif',
		heading: 'Legal',
		body: 'Analyze contracts and extract clauses intelligently.',
	},
	{
		id: 'use-case-5',
		img: '/collaborate-img1.avif',
		heading: 'Enterprise AI',
		body: 'Power AI systems with clean, structured data pipelines.',
	},
]
