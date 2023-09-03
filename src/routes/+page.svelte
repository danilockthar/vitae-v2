<script lang="ts">
	import ExperienceScreen from '$components/screens/ExperienceScreen.svelte';
	import InformationScreen from '$components/screens/InformationScreen.svelte';

	import { selectedNavValue } from '$lib/store';

	let selectedScreen: string;
	selectedNavValue.subscribe((value) => {
		selectedScreen = value;
	});

	const screenMap: Record<string, ConstructorOfATypedSvelteComponent> = {
		A: ExperienceScreen,
		B: InformationScreen
	};
</script>

<div class="wrapper">
	<!-- <div class="box1">
		<Input name="Nombre" placeholder="Nombre" profile="information" />
		<Input name="Apellido" profile="information" />
	</div>
	<div class="box2">
		<Input name="Telefono" profile="information" />
		<Input name="Email" profile="information" />
		<Input name="Direccion" profile="information" />
	</div>
	<div class="box1">
		<Input name="Empresa" placeholder="Nombre de mi negocio" profile="experiences" uuid="100" />
		<Input name="descripcion" profile="experiences" uuid="100" />
		<Input name="puesto" profile="experiences" uuid="100" />
	</div>
	<div class="box1">
		<Input name="Empresa" placeholder="Nombre de mi negocio" profile="experiences" uuid="200" />
		<Input name="descripcion" profile="experiences" uuid="200" />
		<Input name="puesto" profile="experiences" uuid="200" />
	</div> -->
	<div class="data-view">
		<svelte:component this={screenMap[selectedScreen]} />
	</div>
	<div class="model-view">
		<h1>dani</h1>
	</div>
</div>

<style>
	.wrapper {
		background-color: white;
		display: grid;
		grid-template-columns: 54% 1fr;
		grid-column-gap: 10px;
		grid-row-gap: 10px;
		grid-area: slot;
		max-height: 90vh;
	}
	.data-view {
		overflow-y: scroll;
	}
	.model-view {
		height: 100%;
		width: 100%;
		background-color: rgb(122, 133, 153);
	}
	.box1 {
		display: grid;
		grid-row-gap: 6px;
	}
	.box2 {
		display: grid;
		grid-row-gap: 6px;
	}
</style>
