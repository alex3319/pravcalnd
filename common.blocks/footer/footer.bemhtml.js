block('footer').content()(function() {
	return {
		elem: 'inner',
		mix: 'container',
		content: this.ctx.content
	};
});

block('footer').tag()('footer');