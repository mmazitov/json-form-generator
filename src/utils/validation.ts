import { FormFieldConfig } from '../types/form';

// Validation utility
export const validateField = (field: FormFieldConfig, value: any): string => {
	// Check if the field is required and the value is empty
	if (field.required && (!value || value === '')) {
		return `Field "${field.label}" is required`;
	}

	// If the value is empty, no need for further validation
	if (!value || value === '') return '';

	const { validation } = field;
	// If no validation rules are defined, return an empty string
	if (!validation) return '';

	// String length validation
	if (validation.minLength && value.length < validation.minLength) {
		return (
			validation.message || `Minimum length: ${validation.minLength} characters`
		);
	}

	if (validation.maxLength && value.length > validation.maxLength) {
		return (
			validation.message || `Maximum length: ${validation.maxLength} characters`
		);
	}

	// Numeric values validation
	if (field.type === 'number') {
		const numValue = Number(value);
		if (validation.min !== undefined && numValue < validation.min) {
			return validation.message || `Minimum value: ${validation.min}`;
		}
		if (validation.max !== undefined && numValue > validation.max) {
			return validation.message || `Maximum value: ${validation.max}`;
		}
	}

	// Regular expression validation
	if (validation.pattern) {
		const regex = new RegExp(validation.pattern);
		if (!regex.test(value)) {
			return validation.message || 'Invalid format';
		}
	}

	// Email validation
	if (field.type === 'email') {
		const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
		if (!emailRegex.test(value)) {
			return 'Invalid email format';
		}
	}

	// If all validations pass, return an empty string
	return '';
};
