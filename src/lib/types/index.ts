// place files you want to import through the `$lib` alias in this folder.
export interface ExperienceDto {
	id: string | number;
	company: string;
	city: string;
	job_name: string;
	start_month: number;
	start_year: number;
	still_here: boolean;
	end_month: number;
	end_year: number;
	job_description: string;
	website: string;
	country: string;
	company_description: string;
	accomplishes: string;
}
export type FormValues = {
	experiences?: Array<ExperienceDto>;
	information?: {
		name: string;
		email?: string;
		phone?: string;
		website?: string;
		address?: string;
		title?: string;
		birthday?: string;
		presentation?: string;
	};
	education?: Array<EducationDto>,
	skills?: Array<SkillDto>
};

export interface InformationDto {
	name: string;
	phone: string;
	address: string;
	email: string;
	title: string;
	website: string;
	birthday: string;
	presentation: string;
}

export enum Template {
	BASIC = 'BASIC',
	ANOTHER = 'ANOTHER'
}

export interface EducationDto {
	id: string;
	institution: string;
	start_year: number;
	start_month: number;
	still_here: boolean;
	end_year: number;
	end_month: number;
	city: string;
	country: string;
	grade: string;
	study_area: string;
	website: string;
	description: string;
}

export enum SCREEN_PAGES {
	INFORMATION_SCREEN,
	EXPERIENCES_SCREEN,
	EDUCATION_SCREEN,
	LANGUAGES_SCREEN
}

export interface SkillDto {
	id: string;
	name: string;
	expertise: Expertise;
}

export enum Expertise {
	EXPERT = 'experto',
	EXPERIENCED = 'experimentado',
	SKILLFUL = 'habil',
	BEGINNER = 'principiante',
	NOVICE = 'novato'
}

export interface Skills {
	skills: Array<SkillDto>;
}

export type Profile = 'experiences' | 'information';
