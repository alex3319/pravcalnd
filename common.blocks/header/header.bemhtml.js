block('header').content()(function() {
	return {
		elem: 'inner',
		mix: 'container',
		content: this.ctx.content
	};
});

block('header')(
	tag()('header'),
	elem('title').tag()('a'),
	block('navigation').elem('item').tag()('a')
);