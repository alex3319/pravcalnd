module.exports = {
    block: 'page',
    title: 'Православный календарь',
    head: [
        { elem: 'meta', attrs: { name: 'viewport', content: 'width=device-width, initial-scale=1' } },
        { elem: 'css', url: 'index.min.css' }
    ],
    scripts: [
		{ elem: 'js', url: 'index.min.js' }
	],
    content: [
		{
			block: 'header',
			content: [
				{
					elem: 'title',
					attrs: { href: '/index' },
					content: 'Православный календарь'
				},
				{
					block: 'navigation',
					content: [
						{
							elem: 'item',
							attrs: { href: '/holidays' },
							content: 'Все праздники'
						},
						{
							elem: 'item',
							attrs: { href: '/contacts' },
							content: 'Контакты'
						}
					]
				}
			]
		},
		{
			block: 'footer',
			content: 'Copyright © Календарь. 2022'
		}
    ]
};
