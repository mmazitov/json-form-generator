import { CheckCircle } from 'lucide-react';
import React, { useState } from 'react';
import { FormData, FormErrors, FormFieldConfig } from '../types/form';
import { validateField } from '../utils/validation';
import { FormField } from './FormField';

interface FormRendererProps {
	config: FormFieldConfig[];
	onSubmit?: (data: FormData) => void;
	submitLabel?: string;
}

export const FormRenderer: React.FC<FormRendererProps> = ({
	config,
	onSubmit,
	submitLabel = 'Submit',
}) => {
	const [formData, setFormData] = useState<FormData>({});
	const [errors, setErrors] = useState<FormErrors>({});
	const [isSubmitting, setIsSubmitting] = useState(false);
	const [submitSuccess, setSubmitSuccess] = useState(false);

	const handleFieldChange = (name: string, value: any) => {
		setFormData((prev) => ({ ...prev, [name]: value }));

		if (errors[name]) {
			setErrors((prev) => ({ ...prev, [name]: '' }));
		}
	};

	const validateForm = (): boolean => {
		const newErrors: FormErrors = {};

		config.forEach((field) => {
			const error = validateField(field, formData[field.name]);
			if (error) {
				newErrors[field.name] = error;
			}
		});

		setErrors(newErrors);
		return Object.keys(newErrors).length === 0;
	};

	const handleSubmit = async () => {
		if (!validateForm()) {
			return;
		}

		setIsSubmitting(true);
		setSubmitSuccess(false);

		try {
			await new Promise((resolve) => setTimeout(resolve, 1000));

			if (onSubmit) {
				onSubmit(formData);
			}

			setSubmitSuccess(true);
			setTimeout(() => setSubmitSuccess(false), 3000);
		} catch (error) {
			console.error('Ошибка отправки формы:', error);
		} finally {
			setIsSubmitting(false);
		}
	};

	return (
		<div className="bg-white shadow-md mx-auto p-6 rounded-lg max-w-md">
			<h2 className="mb-6 font-bold text-gray-800 text-2xl text-center">
				Dynamic Form
			</h2>

			{config.map((field) => (
				<FormField
					key={field.name}
					field={field}
					value={formData[field.name]}
					error={errors[field.name]}
					onChange={handleFieldChange}
				/>
			))}

			<button
				onClick={handleSubmit}
				disabled={isSubmitting}
				className={`w-full py-2 px-4 rounded-md font-medium transition-colors ${
					isSubmitting
						? 'bg-gray-400 cursor-not-allowed'
						: 'bg-blue-600 hover:bg-blue-700 text-white'
				}`}
			>
				{isSubmitting ? 'Submitting...' : submitLabel}
			</button>

			{submitSuccess && (
				<div className="flex items-center bg-green-100 mt-4 p-3 border border-green-400 rounded-md text-green-700">
					<CheckCircle size={16} className="mr-2" />
					Form submitted successfully!
				</div>
			)}
		</div>
	);
};
