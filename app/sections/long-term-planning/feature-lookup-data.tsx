import { type FeatureLookupProps } from '@/components/bento-grid/components/bento-grid-feature-lookup-card'
import CrossTerm from '@/assets/cross-team.svg'
import Insight from '@/assets/insight.svg'
import Milestone from '@/assets/milestone.svg'
import Initiative from '@/assets/initiative.svg'
import { TabHeaders } from './components/wide-card/tab-header'

export const longTermFeatureLookup: FeatureLookupProps[] = [
	{
		id: 'long-term-feature-1',
		title: 'Extract → Understand → Structure',
		description: 'One pipeline from raw inputs to validated structured data.',
		icon: <Initiative />,
	},
	{
		id: 'long-term-feature-2',
		title: 'Real-time AI processing',
		description: 'Low-latency pipelines for interactive and batch workloads.',
		icon: <CrossTerm />,
	},
	{
		id: 'long-term-feature-3',
		title: 'API-ready outputs',
		description: 'JSON and schemas your systems can consume immediately.',
		icon: <Milestone />,
	},
	{
		id: 'long-term-feature-4',
		title: 'Layout, context, relationships',
		description: 'Interprets pages and visuals — not isolated strings.',
		icon: <Insight />,
	},
]

export const tabHeaders: TabHeaders[] = [
	{
		id: 'tab-header-1',
		title: 'Ingest',
	},
	{
		id: 'tab-header-2',
		title: 'Understand',
	},
	{
		id: 'tab-header-3',
		title: 'Output',
	},
]
