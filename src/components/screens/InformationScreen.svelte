<script lang="ts">
	import Input from '$components/Input.svelte';
	import { formValues } from '$lib/store';

	let information: any;

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
	<Input name="email" label="Correo electrónico" profile="information" value={information.email} />
	<Input name="birthday" label="Fecha de cumpleaños" profile="information" value={information.birthday} />
	<Input name="phone" label="Teléfono" profile="information" value={information.phone} />
	<Input name="website" label="Sitio web" profile="information" value={information.website} />
	<Input name="title" label="Titular" profile="information" value={information.title} />
	<Input name="presentation" label="Presentación" profile="information" value={information.presentation} />
	<Input name="address" profile="information" value={information.address} label="Dirección"/>
</div>
