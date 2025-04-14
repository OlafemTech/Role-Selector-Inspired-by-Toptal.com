import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Role, FormField as Field, ProfileData } from '../types';
import {
  FormContainer,
  FormField,
  MultiSelect,
  Chip,
  NavigationButtons,
  Button
} from '../styles';

interface ProfileFormProps {
  role: Role;
  onBack: () => void;
  onSubmit: (data: ProfileData) => void;
}

export const ProfileForm: React.FC<ProfileFormProps> = ({ role, onBack, onSubmit }) => {
  const [formData, setFormData] = useState<ProfileData>({});
  const [errors, setErrors] = useState<Record<string, string>>({});

  const handleInputChange = (field: Field, value: string | string[]) => {
    setFormData(prev => ({ ...prev, [field.id]: value }));
    if (errors[field.id]) {
      setErrors(prev => {
        const newErrors = { ...prev };
        delete newErrors[field.id];
        return newErrors;
      });
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const newErrors: Record<string, string> = {};

    role.fields.forEach(field => {
      if (field.required) {
        const value = formData[field.id];
        if (!value || (Array.isArray(value) && value.length === 0)) {
          newErrors[field.id] = `${field.label} is required`;
        }
      }
    });

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }

    onSubmit(formData);
  };

  const renderField = (field: Field) => {
    const value = formData[field.id] || (field.type === 'multiselect' ? [] : '');
    
    switch (field.type) {
      case 'multiselect':
        return (
          <MultiSelect>
            {field.options?.map(option => (
              <Chip
                key={option}
                $selected={Array.isArray(value) && value.includes(option)}
                $color={role.color}
                onClick={() => {
                  const currentValue = (formData[field.id] || []) as string[];
                  const newValue = currentValue.includes(option)
                    ? currentValue.filter(v => v !== option)
                    : [...currentValue, option];
                  handleInputChange(field, newValue);
                }}
              >
                {option}
              </Chip>
            ))}
          </MultiSelect>
        );
      
      case 'select':
        return (
          <select
            value={value as string}
            onChange={e => handleInputChange(field, e.target.value)}
          >
            <option value="">Select {field.label}</option>
            {field.options?.map(option => (
              <option key={option} value={option}>
                {option}
              </option>
            ))}
          </select>
        );

      case 'number':
        return (
          <input
            type="number"
            value={value as string}
            onChange={e => handleInputChange(field, e.target.value)}
            min="0"
          />
        );

      default:
        return (
          <input
            type={field.type}
            value={value as string}
            onChange={e => handleInputChange(field, e.target.value)}
            placeholder={`Enter ${field.label.toLowerCase()}`}
          />
        );
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
    >
      <FormContainer onSubmit={handleSubmit}>
        <AnimatePresence mode="wait">
          {role.fields.map(field => (
            <motion.div
              key={field.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.3 }}
            >
              <FormField>
                <label>
                  {field.label}
                  {field.required && <span style={{ color: '#dc3545' }}> *</span>}
                </label>
                {renderField(field)}
                {errors[field.id] && (
                  <div className="error">{errors[field.id]}</div>
                )}
              </FormField>
            </motion.div>
          ))}
        </AnimatePresence>

        <NavigationButtons>
          <Button type="button" onClick={onBack}>
            Back
          </Button>
          <Button type="submit" $variant="primary">
            Next
          </Button>
        </NavigationButtons>
      </FormContainer>
    </motion.div>
  );
};
