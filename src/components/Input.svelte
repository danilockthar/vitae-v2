<script lang="ts">
	import type { FormValues, Profile } from '$lib';
	import { formValues } from '$lib/store';

	export let name: string;
	export let profile: Profile;
	export let placeholder = '';
	export let label = '';
	export let id: string | number | null = null;
	export let value = '';

	let inputElement: HTMLInputElement;

	const handleChange = () => {
		formValues.update((oldValues: FormValues | any) => {
			if (profile === 'experiences') {

				const exp: any[] = oldValues['experiences'] ?? [];
				const index = exp.findIndex((item) => item.id === id);

				if (index !== -1) {
					// Create a new object with the updated data
					const updatedObject = { ...exp[index], [name.toLocaleLowerCase()]: value };

					// Create a new array with the updated object
					const updatedArray = [...exp];
					updatedArray[index] = updatedObject;

					return {
						...oldValues,
						experiences: updatedArray
					};
				} else {
					return {
						...oldValues,
						experiences: [{ id, [name.toLocaleLowerCase()]: value }]
					};
				}
				/* const finded = exp.filter((elem) => elem.id === id)[0] ?? {};
				const rest = exp.filter((elem) => elem.id !== id);

				return {
					...oldValues,
					experiences: [...rest, { ...finded, id, [name.toLocaleLowerCase()]: value }]
				}; */
			}

			return {
				...oldValues,
				[profile]: { ...oldValues[profile], [name.toLowerCase()]: value }
			};
		});
	};

	const handleFocus = (event: Event) => {
		if (event.target === inputElement) return;
		inputElement.focus();
	};
</script>

<!-- svelte-ignore a11y-click-events-have-key-events -->
<!-- svelte-ignore a11y-no-static-element-interactions -->
<div class="wrapper" on:click={handleFocus}>
	<!-- svelte-ignore a11y-label-has-associated-control -->
	<label>{label}</label>
	<input type="text" bind:value on:input={handleChange} {placeholder} bind:this={inputElement} />
</div>

<style lang="scss">
	.wrapper {
		border-radius: 3px;
		display: grid;
		grid-row-gap: 10px;
		position: relative;
		border-bottom: 2px solid #1e90ff00;
		background: #f2f5fa;
		transition: 0.3s;
		padding: 6px 10px 10px 10px;
		&:focus-within {
			border-bottom: 2px solid #7057d9;
		}
		label {
			font-size: 12px;
			color: #201b35ba;
			font-weight: 600;
			/* padding: 0 2px; */
		}
		/* #option-placeholder {
			color: #00000052 !important;
		}
		#disabled-select {
			color: #00000052;
			option:checked {
				color: #00000052;
			}
			option:not(:checked) {
				color: black;
			}
		} */
	}
	input {
		color: black;
		outline: none;
		height: fit-content;
		border: none;
		background: none;
		font-size: 16px;
		font-weight: 400;
		padding: 0;
		&::placeholder,
		&::-webkit-input-placeholder {
			color: #00000052;
		}
		&:-ms-input-placeholder {
			color: #00000052;
		}
	}
</style>
