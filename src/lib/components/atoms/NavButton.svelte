<script>
	import RouterEvents from '../../../data/RouterEvents';
	export let href = '';
</script>

<a {href}>
	<!-- Check if href is equal to the first path -->
	<li class:selected={href === '/' + $RouterEvents.target_url.pathname.split('/')[1]}>
		<span><slot /></span>
	</li>
</a>

<style>
	li.selected {
		@apply text-latte-blue dark:text-ctp-mauve underline underline-offset-8 decoration-2 font-semibold;
	}
</style>
