import type { ExperiencesData } from '$lib';
import { generateUniqueId } from './generateUniqueId';

export const createEmptyExperience = (): ExperiencesData => {
	return {
		id: generateUniqueId(),
		company: '',
		job_name: '',
		description: ''
	};
};
