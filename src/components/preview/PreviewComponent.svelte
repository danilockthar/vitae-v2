<script lang="ts">
	import { htmlSetter } from '$lib/html-setter';
	import { formValues } from '$lib/store';
	import type { FormValues } from '$lib/types';

	let template, information, experiences, education, skills;
	formValues.subscribe((values: FormValues) => {
		information = values.information;
		experiences = values.experiences;
		template = 'BASIC';
		education = values.education;
		skills = values.skills;
	});
</script>

{@html htmlSetter(template, information, experiences, education, skills)}
<!-- <div id="preview-wrapper">
</div> -->

<style lang="scss">
	/* #preview-wrapper {
		cursor: pointer;
		transform-origin: center top;
		-ms-zoom: 0.45;
		-moz-transform: scale(0.45);
		-moz-transform-origin: center top;
		-o-transform: scale(0.45);
		-o-transform-origin: center top;
		-webkit-transform: scale(0.45);
		-webkit-transform-origin: center top;
	} */
</style>
