<script lang="ts">
	import { formValues } from '$lib/store';
	import Input from '$components/Input.svelte';
	import type { ExperienceDto } from '$lib/types';
	import { createEmptyExperience } from '$lib/utils';
	let experiences: Array<ExperienceDto> = [];
	let printed: boolean = false;


	formValues.subscribe((values) => {
		if (values?.experiences && values?.experiences?.length > 0) {
			experiences = values.experiences;
		}
	});

	const handlePrint = () => {
		printed = true;
	};

	const handleClick = () => {
		const newExp = createEmptyExperience();
		formValues.update((oldValues: FormData | any) => {
			console.log(oldValues);
			return {
				...oldValues,
				experiences: [...oldValues?.experiences, newExp]
			};
		});
	};
</script>

<button on:click={handlePrint}> print </button>
<div>
	{#if printed}
		{JSON.stringify(experiences)}
	{/if}
</div>
<button on:click={handleClick}> add experience</button>
<div class="box2">
	{#each experiences as experience, index}
		<Input
			name="company"
			label="Empresa"
			profile="experiences"
			id={experience.id}
			value={experience.company}
		/>
		<Input
			name="job_description"
            label="Descripcion del puesto"
			profile="experiences"
			id={experience.id}
			value={experience.job_description}
		/>
		<Input name="job_name" profile="experiences" label="Puesto" id={experience.id} value={experience.job_name} />
	{/each}
</div>
