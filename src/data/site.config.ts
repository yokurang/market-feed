interface SiteConfig {
	site: string
	author: string
	title: string
	description: string
	lang: string
	ogLocale: string
	shareMessage: string
	paginationSize: number
}

export const siteConfig: SiteConfig = {
	site: 'https://blog-template-gray.vercel.app/', // Write here your website url
	author: 'Alan and Amanda', // Site author
	title: 'Market Feed Articles', // Site title.
	description: 'Student run blog writing weekly articles on market trends and specific companies.', // Description to display in the meta tags
	lang: 'en-GB',
	ogLocale: 'en_GB',
	shareMessage: 'Share this post', // Message to share a post on social media
	paginationSize: 5 // Number of posts per page
}
