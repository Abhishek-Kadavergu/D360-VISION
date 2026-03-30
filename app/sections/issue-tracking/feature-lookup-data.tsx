import { type FeatureLookupProps } from '@/components/bento-grid/components/bento-grid-feature-lookup-card'
import Insight from '@/assets/insight.svg'
import Initiative from '@/assets/initiative.svg'
import WorkFlow from '@/assets/workflow.svg'
import Views from '@/assets/views.svg'
import CrossTerm from '@/assets/cross-team.svg'
import Secure from '@/assets/secure.svg'

export const issueTrackingFeatureLookup: FeatureLookupProps[] = [
	{
		id: 'issue-tracking-feature-1',
		title: 'Intelligent Extraction',
		description:
			'Extract text, tables, forms, and visual elements with deep context.',
		icon: <Insight />,
	},
	{
		id: 'issue-tracking-feature-2',
		title: 'Vision Language Models',
		description: 'Understands structure and relationships natively.',
		icon: <Initiative />,
	},
	{
		id: 'issue-tracking-feature-3',
		title: 'Real-Time Processing',
		description: 'High-speed AI pipelines for instant results.',
		icon: <WorkFlow />,
	},
	{
		id: 'issue-tracking-feature-4',
		title: 'Structured Outputs',
		description: 'Clean JSON and structured datasets ready for use.',
		icon: <Views />,
	},
	{
		id: 'issue-tracking-feature-5',
		title: 'Seamless Integration',
		description: 'Plug into existing systems via APIs.',
		icon: <CrossTerm />,
	},
	{
		id: 'issue-tracking-feature-6',
		title: 'Enterprise Security',
		description: 'Built with encryption, compliance, and secure pipelines.',
		icon: <Secure />,
	},
]
