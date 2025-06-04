import { FormFieldConfig } from '../types/form';

export const formSchema: FormFieldConfig[] = [
	{
		name: 'email',
		type: 'email',
		label: 'Email',
		required: true,
		placeholder: 'example@email.com',
	},
	{
		name: 'age',
		type: 'number',
		label: 'Age',
		required: true,
		validation: {
			min: 18,
			max: 100,
			message: 'Age must be between 18 and 100',
		},
	},
	{
		name: 'password',
		type: 'password',
		label: 'Password',
		required: true,
		validation: {
			minLength: 8,
			message: 'Password must be at least 8 characters long',
		},
	},
	{
		name: 'country',
		type: 'select',
		label: 'Country',
		required: true,
		options: [
			{ value: 'ua', label: 'Ukraine' },
			{ value: 'us', label: 'USA' },
			{ value: 'de', label: 'Germany' },
			{ value: 'fr', label: 'France' },
		],
	},
	{
		name: 'bio',
		type: 'textarea',
		label: 'About me',
		placeholder: 'Tell us about yourself...',
		validation: {
			maxLength: 500,
		},
	},
	{
		name: 'gender',
		type: 'radio',
		label: 'Gender',
		options: [
			{ value: 'male', label: 'Male' },
			{ value: 'female', label: 'Female' },
			{ value: 'other', label: 'Other' },
		],
	},
	{
		name: 'subscribe',
		type: 'checkbox',
		label: 'Subscribe to newsletter',
	},
];
