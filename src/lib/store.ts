// mystore.ts
import type { FormValues } from '$lib/types';
import { writable } from 'svelte/store';
import { createEmptyExperience, createEmptyEducation, createSkill } from './utils';

const initialValues: FormValues = {
	information: {
		name: '',
		phone: '',
		address: '',
		email: '',
		title: '',
		website: '',
		birthday: '',
		presentation: ''
	},
	experiences: [createEmptyExperience()],
	education: [createEmptyEducation()],
	skills: [createSkill()]
};
// 0 is the initial value
const formValues = writable(initialValues);
const selectedNavValue = writable(0);

export { formValues, selectedNavValue };
