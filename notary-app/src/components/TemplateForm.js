// TemplateForm.js
import React from 'react';

export default function TemplateForm({ template, values, onChange }) {
  return (
    <div className="mb-8 p-4 border border-gray-300 rounded bg-white shadow">
      <h3 className="text-lg font-semibold mb-4">{template.name}</h3>
      {template.fields.map((field) => (
        <div key={field} className="mb-3">
          <label className="block text-sm font-medium mb-1">{field}</label>
          <input
            type="text"
            className="w-full p-2 border border-gray-300 rounded"
            value={values[field] || ''}
            onChange={(e) => onChange(field, e.target.value)}
            placeholder={`Enter ${field}`}
          />
        </div>
      ))}
    </div>
  );
}

