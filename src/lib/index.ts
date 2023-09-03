// place files you want to import through the `$lib` alias in this folder.
export interface ExperiencesData {
	id: string | number;
	company: string;
	job_name: string;
	description: string;
}
export type FormValues = {
	experiences?: Array<ExperiencesData>;
	information?: {
		name: string;
		last_name: string;
		phone: string;
		location: string;
	};
};

export type Profile = 'experiences' | 'information';
