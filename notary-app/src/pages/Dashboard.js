import React, { useState } from 'react';
import templates from '../data/templates';
import TemplateForm from '../components/TemplateForm';
import generateDocx from '../utils/docxGenerator';

export default function Dashboard() {
  const [selectedTemplates, setSelectedTemplates] = useState([]);
  const [formData, setFormData] = useState({});

  const toggleTemplate = (templateName) => {
    setSelectedTemplates((prev) =>
      prev.includes(templateName)
        ? prev.filter((name) => name !== templateName)
        : [...prev, templateName]
    );
  };

  const handleInputChange = (templateName, field, value) => {
    setFormData((prev) => ({
      ...prev,
      [templateName]: {
        ...prev[templateName],
        [field]: value,
      },
    }));
  };

  const handleGenerate = async () => {
    const toGenerate = selectedTemplates.map((name) => ({
      templateName: name,
      fields: formData[name] || {},
    }));
    await generateDocx(toGenerate);
  };

  return (
    <div className="p-8">
      <h1 className="text-3xl font-bold mb-6">Admin Dashboard</h1>

      <h2 className="text-xl mb-2">Select Templates:</h2>
      <div className="grid grid-cols-2 gap-4 mb-6">
        {templates.map((tpl) => (
          <label key={tpl.name} className="flex items-center cursor-pointer">
            <input
              type="checkbox"
              id={`tpl-${tpl.name}`}
              checked={selectedTemplates.includes(tpl.name)}
              onChange={() => toggleTemplate(tpl.name)}
              className="mr-2"
            />
            {tpl.name}
          </label>
        ))}
      </div>

      {selectedTemplates.map((name) => {
        const template = templates.find((t) => t.name === name);
        if (!template) return null;

        return (
          <TemplateForm
            key={name}
            template={template}
            values={formData[name] || {}}
            onChange={(field, value) => handleInputChange(name, field, value)}
          />
        );
      })}

      {selectedTemplates.length > 0 && (
        <button
          onClick={handleGenerate}
          className="mt-6 bg-green-600 text-white px-6 py-2 rounded hover:bg-green-700"
        >
          Generate Document
        </button>
      )}
    </div>
  );
}
