import React from 'react';
import { FormRenderer } from './components/FormRenderer';
import { formSchema } from './config/formConfig';
import { FormData } from './types/form';

const App: React.FC = () => {
	const handleFormSubmit = (data: FormData) => {
		console.log('Form data:', data);
		alert('Form submitted! Check console to see the data.');
	};

	return (
		<div className="bg-gray-100 py-8 min-h-screen">
			<div className="mx-auto px-4 container">
				<div className="mb-8 text-center">
					<h1 className="mb-2 font-bold text-gray-800 text-3xl">
						JSON Schema Form Generator
					</h1>
					<p className="text-gray-600">
						Dynamic form creation with validation based on configuration
					</p>
				</div>

				<FormRenderer
					config={formSchema}
					onSubmit={handleFormSubmit}
					submitLabel="Register"
				/>

				<div className="mx-auto mt-8 max-w-md">
					<h3 className="mb-3 font-semibold text-lg">Features:</h3>
					<ul className="space-y-1 text-gray-600 text-sm">
						<li>• Support for various field types</li>
						<li>• Real-time validation</li>
						<li>• Customizable validation rules</li>
						<li>• Dynamic field addition</li>
						<li>• TypeScript support</li>
						<li>• Responsive design</li>
					</ul>
				</div>
			</div>
		</div>
	);
};

export default App;
