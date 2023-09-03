// mystore.ts
import type { FormValues } from '$lib';
import { writable } from 'svelte/store';
import { generateUniqueId } from './generateUniqueId';

const initialValues: FormValues = {
    information:{
        name:'',
        last_name: '',
        phone: '',
        location: '',
    },
	experiences: [
		{
			id: generateUniqueId(),
			company: '',
			job_name: '',
			description: ''
		}
	]
};
// 0 is the initial value
const formValues = writable(initialValues);
const selectedNavValue = writable('A');

export { formValues, selectedNavValue };
