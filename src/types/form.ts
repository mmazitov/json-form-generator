export interface FormFieldConfig {
	name: string;
	type:
		| 'text'
		| 'email'
		| 'password'
		| 'number'
		| 'textarea'
		| 'select'
		| 'checkbox'
		| 'radio';
	label: string;
	required?: boolean;
	placeholder?: string;
	options?: { value: string; label: string }[];
	validation?: {
		min?: number;
		max?: number;
		minLength?: number;
		maxLength?: number;
		pattern?: string;
		message?: string;
	};
}

export interface FormData {
	[key: string]: any;
}

export interface FormErrors {
	[key: string]: string;
}
