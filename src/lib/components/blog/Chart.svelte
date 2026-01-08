<script lang="ts">
	import { onMount, onDestroy } from 'svelte';

	export let data: { label: string; value: number; color?: string }[];
	export let type: 'bar' | 'pie' | 'line' = 'bar';
	export let title: string = '';
	export let height: number = 300;

	let hoveredIndex: number | null = null;
	let tooltipX = 0;
	let tooltipY = 0;
	let chartContainer: HTMLElement;

	const defaultColors = [
		'#7287fd', // lavender
		'#cba6f7', // mauve
		'#89b4fa', // blue
		'#a6e3a1', // green
		'#f9e2af', // yellow
		'#fab387', // peach
		'#f38ba8', // red
		'#94e2d5' // teal
	];

	$: maxValue = Math.max(...data.map((d) => d.value));
	$: total = data.reduce((sum, d) => sum + d.value, 0);

	function getColor(index: number, customColor?: string): string {
		return customColor || defaultColors[index % defaultColors.length];
	}

	// For pie chart
	function getPieSlices(data: { label: string; value: number; color?: string }[]) {
		let currentAngle = 0;
		return data.map((d, i) => {
			const angle = (d.value / total) * 360;
			const startAngle = currentAngle;
			currentAngle += angle;
			return {
				...d,
				startAngle,
				endAngle: currentAngle,
				color: getColor(i, d.color)
			};
		});
	}

	function polarToCartesian(cx: number, cy: number, r: number, angle: number) {
		const rad = ((angle - 90) * Math.PI) / 180;
		return {
			x: cx + r * Math.cos(rad),
			y: cy + r * Math.sin(rad)
		};
	}

	function describeArc(cx: number, cy: number, r: number, startAngle: number, endAngle: number) {
		const start = polarToCartesian(cx, cy, r, endAngle);
		const end = polarToCartesian(cx, cy, r, startAngle);
		const largeArc = endAngle - startAngle <= 180 ? 0 : 1;
		return `M ${cx} ${cy} L ${start.x} ${start.y} A ${r} ${r} 0 ${largeArc} 0 ${end.x} ${end.y} Z`;
	}

	function handleInteraction(event: MouseEvent | TouchEvent, index: number) {
		hoveredIndex = index;
		if (event instanceof MouseEvent) {
			tooltipX = event.clientX;
			tooltipY = event.clientY;
		} else if (event.touches && event.touches[0]) {
			tooltipX = event.touches[0].clientX;
			tooltipY = event.touches[0].clientY;
		}
	}

	function handleMouseLeave() {
		hoveredIndex = null;
	}

	function handleClickOutside(event: MouseEvent | TouchEvent) {
		if (chartContainer && !chartContainer.contains(event.target as Node)) {
			hoveredIndex = null;
		}
	}

	onMount(() => {
		document.addEventListener('click', handleClickOutside);
		document.addEventListener('touchstart', handleClickOutside);
	});

	onDestroy(() => {
		document.removeEventListener('click', handleClickOutside);
		document.removeEventListener('touchstart', handleClickOutside);
	});

	$: pieSlices = type === 'pie' ? getPieSlices(data) : [];
	$: hoveredItem = hoveredIndex !== null ? data[hoveredIndex] : null;
</script>

<div class="chart-container my-8 relative" bind:this={chartContainer}>
	{#if title}
		<h4 class="text-center font-semibold text-gray-800 dark:text-gray-200 mb-4">{title}</h4>
	{/if}

	<!-- Tooltip -->
	{#if hoveredItem}
		<div
			class="fixed z-50 px-3 py-2 text-sm font-medium text-white bg-gray-900 dark:bg-gray-700 rounded-lg shadow-lg pointer-events-none"
			style="left: {tooltipX + 10}px; top: {tooltipY - 10}px; transform: translateY(-100%);"
		>
			<div class="font-semibold">{hoveredItem.label}</div>
			<div>
				{hoveredItem.value}{type === 'pie'
					? ` (${((hoveredItem.value / total) * 100).toFixed(1)}%)`
					: ''}
			</div>
		</div>
	{/if}

	{#if type === 'bar'}
		<div class="flex items-end justify-center gap-4" style="height: {height}px;">
			{#each data as item, i}
				<div
					class="flex flex-col items-center gap-2 cursor-pointer"
					on:mouseenter={(e) => handleInteraction(e, i)}
					on:mousemove={(e) => handleInteraction(e, i)}
					on:mouseleave={handleMouseLeave}
					on:touchstart={(e) => handleInteraction(e, i)}
					role="img"
					aria-label="{item.label}: {item.value}"
				>
					<span class="text-xs text-gray-600 dark:text-gray-400 opacity-0 group-hover:opacity-100"
						>{item.value}</span
					>
					<div
						class="w-12 md:w-16 rounded-t-md transition-all duration-300"
						class:scale-105={hoveredIndex === i}
						class:opacity-50={hoveredIndex !== null && hoveredIndex !== i}
						style="height: {(item.value / maxValue) * (height - 60)}px; background-color: {getColor(
							i,
							item.color
						)};"
					/>
					<span class="text-xs text-gray-700 dark:text-gray-300 text-center max-w-16 truncate"
						>{item.label}</span
					>
				</div>
			{/each}
		</div>
	{:else if type === 'pie'}
		<div class="flex flex-col md:flex-row items-center justify-center gap-8">
			<svg viewBox="0 0 200 200" class="w-48 h-48 md:w-64 md:h-64">
				{#each pieSlices as slice, i}
					<path
						d={describeArc(100, 100, 80, slice.startAngle, slice.endAngle)}
						fill={slice.color}
						class="transition-all duration-300 cursor-pointer"
						class:opacity-50={hoveredIndex !== null && hoveredIndex !== i}
						style={hoveredIndex === i ? 'transform: scale(1.05); transform-origin: center;' : ''}
						on:mouseenter={(e) => handleInteraction(e, i)}
						on:mousemove={(e) => handleInteraction(e, i)}
						on:mouseleave={handleMouseLeave}
						on:touchstart={(e) => handleInteraction(e, i)}
						role="img"
						aria-label="{slice.label}: {slice.value}"
					/>
				{/each}
			</svg>
			<div class="flex flex-col gap-2">
				{#each pieSlices as slice, i}
					<div
						class="flex items-center gap-2 cursor-pointer transition-opacity"
						class:opacity-50={hoveredIndex !== null && hoveredIndex !== i}
						on:mouseenter={(e) => handleInteraction(e, i)}
						on:mouseleave={handleMouseLeave}
						on:touchstart={(e) => handleInteraction(e, i)}
						role="listitem"
					>
						<div class="w-4 h-4 rounded" style="background-color: {slice.color};" />
						<span class="text-sm text-gray-700 dark:text-gray-300"
							>{slice.label}: {slice.value} ({((slice.value / total) * 100).toFixed(1)}%)</span
						>
					</div>
				{/each}
			</div>
		</div>
	{:else if type === 'line'}
		<svg viewBox="0 0 400 {height}" class="w-full" style="height: {height}px;">
			<!-- Grid lines -->
			{#each [0, 0.25, 0.5, 0.75, 1] as ratio}
				<line
					x1="40"
					y1={height - 40 - ratio * (height - 80)}
					x2="380"
					y2={height - 40 - ratio * (height - 80)}
					stroke="currentColor"
					class="text-gray-200 dark:text-gray-700"
					stroke-width="1"
				/>
				<text
					x="35"
					y={height - 35 - ratio * (height - 80)}
					class="text-xs fill-gray-500"
					text-anchor="end"
				>
					{Math.round(maxValue * ratio)}
				</text>
			{/each}

			<!-- Line -->
			<polyline
				fill="none"
				stroke="#7287fd"
				stroke-width="3"
				stroke-linecap="round"
				stroke-linejoin="round"
				points={data
					.map(
						(d, i) =>
							`${40 + (i * 340) / (data.length - 1)},${
								height - 40 - (d.value / maxValue) * (height - 80)
							}`
					)
					.join(' ')}
			/>

			<!-- Points with hover areas -->
			{#each data as item, i}
				<!-- Larger invisible hover area -->
				<circle
					cx={40 + (i * 340) / (data.length - 1)}
					cy={height - 40 - (item.value / maxValue) * (height - 80)}
					r="15"
					fill="transparent"
					class="cursor-pointer"
					on:mouseenter={(e) => handleInteraction(e, i)}
					on:mousemove={(e) => handleInteraction(e, i)}
					on:mouseleave={handleMouseLeave}
					on:touchstart={(e) => handleInteraction(e, i)}
					role="img"
					aria-label="{item.label}: {item.value}"
				/>
				<!-- Visible point -->
				<circle
					cx={40 + (i * 340) / (data.length - 1)}
					cy={height - 40 - (item.value / maxValue) * (height - 80)}
					r={hoveredIndex === i ? 8 : 5}
					fill="#7287fd"
					class="transition-all duration-200 pointer-events-none"
				/>
				<!-- Value label on hover -->
				{#if hoveredIndex === i}
					<text
						x={40 + (i * 340) / (data.length - 1)}
						y={height - 40 - (item.value / maxValue) * (height - 80) - 15}
						class="text-xs fill-gray-800 dark:fill-gray-200 font-semibold"
						text-anchor="middle"
					>
						{item.value}
					</text>
				{/if}
				<text
					x={40 + (i * 340) / (data.length - 1)}
					y={height - 20}
					class="text-xs fill-gray-600 dark:fill-gray-400"
					text-anchor="middle"
				>
					{item.label}
				</text>
			{/each}
		</svg>
	{/if}
</div>
