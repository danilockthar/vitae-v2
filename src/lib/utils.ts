import { Expertise, type ExperienceDto, type EducationDto, type SkillDto } from '$lib/types';

export const getMonth = (): number => {
	let date = new Date();
	let month = date.getMonth();

	return month;
};

export function generateUniqueId() {
	const timestamp = Date.now().toString(36); // Convert timestamp to base36
	const randomString = Math.random().toString(36).substring(2, 7); // Generate a random string
	return `${timestamp}-${randomString}`;
}

export const createEmptyExperience = (): ExperienceDto => {
	return {
		id: generateUniqueId(),
		company: '',
		city: '',
		job_name: '',
		start_month: getMonth(),
		start_year: 2023,
		still_here: false,
		end_month: getMonth(),
		end_year: 2023,
		job_description: '',
		website: '',
		country: '',
		company_description: '',
		accomplishes: ''
	};
};

export const createEmptyEducation = (): EducationDto => {
	return {
		id: generateUniqueId(),
		institution: '',
		start_year: 2021,
		start_month: getMonth(),
		still_here: true,
		end_year: 2021,
		end_month: getMonth(),
		city: '',
		country: '',
		grade: '',
		study_area: '',
		website: '',
		description: ''
	};
};

export const createSkill = (): SkillDto => ({
	id: generateUniqueId(),
	name: '',
	expertise: Expertise.EXPERT
});

//REFACTOR
export const monthToString = (month: number) => {
	let monthStr = '';
	switch (month) {
		case 0:
			monthStr = 'Ene';
			break;
		case 1:
			monthStr = 'Feb';
			break;
		case 2:
			monthStr = 'Mar';
			break;
		case 3:
			monthStr = 'Abr';
			break;
		case 4:
			monthStr = 'May';
			break;
		case 5:
			monthStr = 'Jun';
			break;
		case 6:
			monthStr = 'Jul';
			break;
		case 7:
			monthStr = 'Ago';
			break;
		case 8:
			monthStr = 'Sep';
			break;
		case 9:
			monthStr = 'Oct';
			break;
		case 10:
			monthStr = 'Nov';
			break;
		case 11:
			monthStr = 'Dic';
			break;
		default:
			break;
	}
	return monthStr;
};

// REFACTOR
export const getSkillSetter = (expertise: Expertise) => {
	let skills = ``;
	switch (expertise) {
		case Expertise.NOVICE:
			skills = `<div class="skill-circle marked-skill"> </div>
              <div class="skill-circle"></div>
              <div class="skill-circle"></div>
              <div class="skill-circle"></div>
              <div class="skill-circle"></div>
              `;
			break;
		case Expertise.BEGINNER:
			skills = `<div class="skill-circle marked-skill"></div>
              <div class="skill-circle marked-skill"></div>
              <div class="skill-circle"></div>
              <div class="skill-circle"></div>
              <div class="skill-circle"></div>
              `;
			break;
		case Expertise.SKILLFUL:
			skills = `<div class="skill-circle marked-skill"></div>
              <div class="skill-circle marked-skill"></div>
              <div class="skill-circle marked-skill"></div>
              <div class="skill-circle"></div>
              <div class="skill-circle"></div>
              `;
			break;
		case Expertise.EXPERIENCED:
			skills = `<div class="skill-circle marked-skill"></div>
              <div class="skill-circle marked-skill"></div>
              <div class="skill-circle marked-skill"></div>
              <div class="skill-circle marked-skill"></div>
              <div class="skill-circle"></div>
              `;
			break;
		default:
			skills = `<div class="skill-circle marked-skill"></div>
                  <div class="skill-circle marked-skill"></div>
                  <div class="skill-circle marked-skill"></div>
                  <div class="skill-circle marked-skill"></div>
                  <div class="skill-circle marked-skill"></div>
                  `;
			break;
	}

	return skills;
};
