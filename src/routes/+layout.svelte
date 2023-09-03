<script lang="ts">
	import { selectedNavValue } from '$lib/store';

	const handleSelected = (selection: string) => {
		selectedNavValue.update(() => selection);
	};
</script>

<header />
<nav>
	<button on:click={() => handleSelected('A')}>INFO</button>
	<button on:click={() => handleSelected('B')}>EXPERIENCIAS</button>
	<button on:click={() => handleSelected('C')}>EDUCAION</button>
	<button on:click={() => handleSelected('D')}>INFO</button>
</nav>
<slot />

<style lang="scss">
	header {
		height: 10vh;
		grid-area: header;
		width: 100%;
		background-color: white;
		border-bottom: 1px solid rgba(0, 0, 0, 0.077);
	}
	nav {
		width: 6vw;
		height: 100vh;
		background-color: rgb(32, 27, 53);
		grid-area: nav;
	}
</style>
