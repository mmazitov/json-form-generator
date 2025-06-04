import { AlertCircle, Eye, EyeOff } from 'lucide-react';
import React, { useState } from 'react';
import { FormFieldConfig } from '../types/form';

export const FormField: React.FC<{
	field: FormFieldConfig;
	value: any;
	error: string;
	onChange: (name: string, value: any) => void;
}> = ({ field, value, error, onChange }) => {
	const [showPassword, setShowPassword] = useState(false);

	const handleChange = (
		e: React.ChangeEvent<
			HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
		>,
	) => {
		const newValue =
			field.type === 'checkbox'
				? (e.target as HTMLInputElement).checked
				: e.target.value;
		onChange(field.name, newValue);
	};

	const inputClasses = `w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 ${
		error ? 'border-red-500' : 'border-gray-300'
	}`;

	const renderField = () => {
		switch (field.type) {
			case 'textarea':
				return (
					<textarea
						id={field.name}
						name={field.name}
						value={value || ''}
						onChange={handleChange}
						placeholder={field.placeholder}
						className={`${inputClasses} resize-vertical min-h-[80px]`}
						required={field.required}
					/>
				);

			case 'select':
				return (
					<select
						id={field.name}
						name={field.name}
						value={value || ''}
						onChange={handleChange}
						className={inputClasses}
						required={field.required}
					>
						<option value="">Select option</option>
						{field.options?.map((option) => (
							<option key={option.value} value={option.value}>
								{option.label}
							</option>
						))}
					</select>
				);

			case 'checkbox':
				return (
					<div className="flex items-center">
						<input
							type="checkbox"
							id={field.name}
							name={field.name}
							checked={value || false}
							onChange={handleChange}
							className="mr-2 border-gray-300 rounded focus:ring-blue-500 w-4 h-4 text-blue-600"
						/>
						<label htmlFor={field.name} className="text-gray-700 text-sm">
							{field.label}
						</label>
					</div>
				);

			case 'radio':
				return (
					<div className="space-y-2">
						{field.options?.map((option) => (
							<div key={option.value} className="flex items-center">
								<input
									type="radio"
									id={`${field.name}-${option.value}`}
									name={field.name}
									value={option.value}
									checked={value === option.value}
									onChange={handleChange}
									className="mr-2 border-gray-300 focus:ring-blue-500 w-4 h-4 text-blue-600"
								/>
								<label
									htmlFor={`${field.name}-${option.value}`}
									className="text-gray-700 text-sm"
								>
									{option.label}
								</label>
							</div>
						))}
					</div>
				);

			case 'password':
				return (
					<div className="relative">
						<input
							type={showPassword ? 'text' : 'password'}
							id={field.name}
							name={field.name}
							value={value || ''}
							onChange={handleChange}
							placeholder={field.placeholder}
							className={`${inputClasses} pr-10`}
							required={field.required}
						/>
						<button
							type="button"
							onClick={() => setShowPassword(!showPassword)}
							className="top-1/2 right-3 absolute text-gray-500 hover:text-gray-700 -translate-y-1/2 transform"
						>
							{showPassword ? <EyeOff size={16} /> : <Eye size={16} />}
						</button>
					</div>
				);

			default:
				return (
					<input
						type={field.type}
						id={field.name}
						name={field.name}
						value={value || ''}
						onChange={handleChange}
						placeholder={field.placeholder}
						className={inputClasses}
						required={field.required}
					/>
				);
		}
	};

	return (
		<div className="mb-4">
			{field.type !== 'checkbox' && (
				<label
					htmlFor={field.name}
					className="block mb-1 font-medium text-gray-700 text-sm"
				>
					{field.label}
					{field.required && <span className="ml-1 text-red-500">*</span>}
				</label>
			)}
			{renderField()}
			{error && (
				<div className="flex items-center mt-1 text-red-600 text-sm">
					<AlertCircle size={16} className="mr-1" />
					{error}
				</div>
			)}
		</div>
	);
};
