// @ts-check

module.exports = {
	title: 'Disnake Guide',
	url: 'https://ru.guide.disnake.dev/',
	favicon: 'public/favicon.ico',

	organizationName: 'disnake-ru',
	projectName: 'guide',
	baseUrl: '/',
	trailingSlash: false,

	onBrokenLinks: 'warn',
	onBrokenMarkdownLinks: 'warn',

	plugins: ['docusaurus-plugin-sass'],

	presets: [
		[
			'classic',
			/** @type {import('@docusaurus/preset-classic').Options} */
			({
				docs: {
					routeBasePath: '/',
					sidebarPath: require.resolve('./sidebars.js'),
					editUrl: 'https://github.com/disnake-ru/guide/edit/main/guide',
					showLastUpdateAuthor: true,
					showLastUpdateTime: true,
				},
				theme: {
					customCss: [require.resolve('./src/styles/index.scss')],
				},
			}),
		],
	],

	themeConfig: {
		colorMode: {
			respectPrefersColorScheme: true,
		},
		metadata: [
			{
				name: 'og:image',
				content: 'https://guide.disnake.dev/public/disnake-meta-image.png',
			},
			{
				name: 'theme-color',
				content: '#f0c43f',
			},
			{
				name: 'twitter:card',
				content: 'summary',
			},
		],
		navbar: {
			title: 'Disnake',
			logo: {
				alt: 'Disnake Logo',
				src: 'public/disnake-logo.png',
				href: 'https://disnake.dev/',
			},
			items: [
				{
					to: 'https://docs.disnake.dev/',
					label: 'Документация',
					position: 'left',
				},
				{
					to: '/',
					label: 'Руководство',
					position: 'left',
				},
				{
					to: 'https://docs.disnake.dev/en/latest/api.html',
					label: 'API Справка',
					position: 'left',
				},
				{
					href: 'https://github.com/DisnakeDev/disnake',
					className: 'navbar-item-github',
					position: 'right',
				},
			],
		},
		docs: {
			sidebar: {
				autoCollapseCategories: true,
			},
		},
		prism: {
			theme: require('./src/utils/prismLight'),
			darkTheme: require('./src/utils/prismDark'),
		},
		// algolia: {
		// 	appId: 'WPCP8YA273',
		// 	apiKey: '5a21886b115baa4f6819b23d0a1e87c0',
		// 	indexName: 'guide-disnake',
		// 	placeholder: 'Search',
		// },
	},
};
