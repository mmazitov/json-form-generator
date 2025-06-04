# JSON Form Generator

A dynamic form generator built with React that creates forms based on JSON schema configuration. Features real-time validation, multiple field types, and a responsive design. Built with React, TypeScript, and modern web technologies.

## Tech Stack

- **[React:](https://react.dev/)** A JavaScript library for building user interfaces
- **[TypeScript:](https://www.typescriptlang.org/)** Static typing for enhanced development experience
- **[Tailwind CSS:](https://tailwindcss.com/)** Utility-first CSS framework
- **[Lucide React:](https://lucide.dev/icons/)** Beautiful & consistent icons
- **[Vite:](https://vite.dev/)** Next generation frontend tooling

## Features

- **Dynamic Form Generation**: Creates forms from JSON schema configuration
- **Multiple Field Types**: Supports various input types:
  - Text input
  - Email input
  - Password input (with show/hide functionality)
  - Number input
  - Textarea
  - Select dropdown
  - Checkbox
  - Radio buttons
- **Real-time Validation**: Validates fields as users type
- **Custom Validation Rules**: Supports:
  - Required fields
  - Min/max values
  - Min/max length
  - Pattern matching
  - Custom error messages
- **Responsive Design**: Mobile-friendly layout
- **TypeScript Support**: Full type safety and autocompletion
- **Accessibility**: Proper labeling and ARIA attributes

## Project Structure

```
src/
├── components/    # Reusable UI components
│   ├── FormField.tsx
│   └── FormRenderer.tsx
├── config/       # Form configuration
│   └── formConfig.ts
├── types/        # TypeScript definitions
│   └── form.ts
├── utils/        # Helper functions
│   └── validation.ts
└── App.tsx       # Main application component
```

## Usage

Define your form schema in JSON format:

```typescript
const formSchema = [
  {
    name: 'email',
    type: 'email',
    label: 'Email',
    required: true,
    placeholder: 'example@email.com'
  },
  {
    name: 'password',
    type: 'password',
    label: 'Password',
    required: true,
    validation: {
      minLength: 8,
      message: 'Password must be at least 8 characters long'
    }
  }
  // ... more fields
];
```

Render the form using FormRenderer component:

```typescript
<FormRenderer
  config={formSchema}
  onSubmit={handleFormSubmit}
  submitLabel="Submit"
/>
```

## Getting Started

```bash
# Clone this project
$ git clone https://github.com/mmazitov/json-form-generator

# Access
$ cd json-form-generator

# Install dependencies
$ npm install

# Start development server
$ npm run dev

# Build for production
$ npm run build
```

## Future Enhancements

- Add more field types (file upload, date picker, etc.)
- Add form layout customization options
- Implement form state management integration
- Add form submission progress indicators
- Add form data persistence
- Add form templates and presets
- Implement form field dependencies

## Contributing

Contributions are welcome! Please feel free to submit a Pull Request.
