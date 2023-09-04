<script lang="ts">
	import { SCREEN_PAGES } from '$lib/types';
	import { selectedNavValue } from '$lib/store';
	import PersonIcon from '$lib/assets/user-square-svgrepo-com.svg'
	import ExperienceIcon from '$lib/assets/contacts-svgrepo-com.svg'

	const handleSelected = (selection: number) => {
		selectedNavValue.update(() => selection);
	};
</script>

<header />
<nav>
	<section class="logo-wrapper">
		<h1>🚀</h1>
	</section>
	<section class="screens-wrapper">
		<section class="screens-icons">
			<button on:click={() => handleSelected(SCREEN_PAGES.INFORMATION_SCREEN)}>
				<img src={PersonIcon} alt="Información personal icono"/>
			</button>
			<button on:click={() => handleSelected(SCREEN_PAGES.EXPERIENCES_SCREEN)}>
				<img src={ExperienceIcon} alt="Icono de experiencia"/>
			</button>
			<button on:click={() => handleSelected(SCREEN_PAGES.EDUCATION_SCREEN)}>🎓📚</button>
			<button on:click={() => handleSelected(SCREEN_PAGES.LANGUAGES_SCREEN)}>🌎🗣️</button>
		</section>
	</section>
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
		display: grid;
		grid-template-rows: 10vh 1fr;
		justify-items: center;
		width: 6vw;
		height: 100vh;
		background-color: #241236d6;
		grid-area: nav;
		grid-row-gap: 1px;
	}
	.logo-wrapper {
		background-color: rgb(32, 27, 53);
		width: 100%;
		height: 100%;
		display: grid;
		h1 {
			font-size: 40px;
			display: grid;
			justify-self: center;
			margin: 0;
			align-self: center;
		}
	}
	.screens-wrapper {
		background-color: rgb(32, 27, 53);
		height: 100%;
		width: 100%;
		display: grid;
		.screens-icons {
			display: grid;
			align-self: center;
			justify-self: center;
			width: 80%;
			grid-row-gap: 14px;
			grid-template-columns: 1fr;
			button {
				height: min-content;
				cursor: pointer;
				font-size: 15px;
				border-radius: 8px;
				border: none;
				padding: 20px;
				background: none;
			}
			img{
				width: 90%;
			}
		}
	}
</style>
