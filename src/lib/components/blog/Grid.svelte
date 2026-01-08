<script lang="ts">
	export let cols: number = 2;
</script>

<div class="grid gap-4 my-6" style="grid-template-columns: repeat({cols}, minmax(0, 1fr));">
	<slot />
</div>
