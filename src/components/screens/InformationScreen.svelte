<script lang="ts">
	import Input from '$components/Input.svelte';
	import { formValues } from '$lib/store';

	let information: any = [];

	formValues.subscribe((values) => {
		if (values?.information) {
			information = values?.information;
		}
	});
</script>

<div>
	{JSON.stringify(information)}
</div>
<p>dani</p>
<div class="box2">
	<Input name="name" label="Nombre" profile="information" value={information.name} />
	<Input name="last_name" label="Apellido" profile="information" value={information.last_name} />
	<Input name="location" profile="information" value={information.location} label="Dirección"/>
</div>
