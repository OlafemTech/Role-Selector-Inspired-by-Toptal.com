export interface FormField {
  id: string;
  label: string;
  type: 'text' | 'email' | 'number' | 'textarea' | 'select' | 'multiselect';
  options?: string[];
  required?: boolean;
}

export interface Role {
  id: string;
  title: string;
  icon: string;
  color: string;
  fields: FormField[];
}

export interface ProfileData {
  [key: string]: string | string[];
}

export const roles: Role[] = [
  { 
    id: 'frontend', 
    title: 'Front End Developer', 
    icon: '💻', 
    color: '#1a73e8',
    fields: [
      { id: 'experience', label: 'Years of Experience', type: 'number', required: true },
      { id: 'technologies', label: 'Technologies', type: 'multiselect', options: ['React', 'Angular', 'Vue', 'JavaScript', 'TypeScript', 'HTML/CSS'], required: true },
      { id: 'portfolio', label: 'Portfolio URL', type: 'text' }
    ]
  },
  { 
    id: 'data-scientist', 
    title: 'Data Scientist', 
    icon: '📊', 
    color: '#f4b400',
    fields: [
      { id: 'education', label: 'Highest Education Level', type: 'select', options: ['Bachelors', 'Masters', 'PhD'], required: true },
      { id: 'specialization', label: 'Specialization', type: 'multiselect', options: ['Machine Learning', 'Deep Learning', 'NLP', 'Computer Vision', 'Statistics'], required: true },
      { id: 'tools', label: 'Tools & Languages', type: 'multiselect', options: ['Python', 'R', 'SQL', 'TensorFlow', 'PyTorch', 'Scikit-learn'] }
    ]
  },
  { 
    id: 'project-manager', 
    title: 'IT Project Manager', 
    icon: '📱', 
    color: '#1a73e8',
    fields: [
      { id: 'experience', label: 'Years of Experience', type: 'number', required: true },
      { id: 'certifications', label: 'Certifications', type: 'multiselect', options: ['PMP', 'PRINCE2', 'Scrum Master', 'ITIL'], required: true },
      { id: 'teamSize', label: 'Largest Team Size Managed', type: 'number' }
    ]
  },
  { 
    id: 'tech-consultant', 
    title: 'Technology Consultant', 
    icon: '💡', 
    color: '#9334ea',
    fields: [
      { id: 'expertise', label: 'Areas of Expertise', type: 'multiselect', options: ['Cloud', 'Security', 'Architecture', 'Digital Transformation'], required: true },
      { id: 'industries', label: 'Industry Experience', type: 'multiselect', options: ['Finance', 'Healthcare', 'Retail', 'Technology'] },
      { id: 'certifications', label: 'Certifications', type: 'multiselect', options: ['AWS', 'Azure', 'GCP', 'CISSP'] }
    ]
  },
  { 
    id: 'ml-engineer', 
    title: 'Machine Learning Engineer', 
    icon: '🤖', 
    color: '#f4b400',
    fields: [
      { id: 'frameworks', label: 'ML Frameworks', type: 'multiselect', options: ['TensorFlow', 'PyTorch', 'Scikit-learn', 'Keras'], required: true },
      { id: 'experience', label: 'Years of Experience', type: 'number', required: true },
      { id: 'deployment', label: 'Deployment Platforms', type: 'multiselect', options: ['AWS SageMaker', 'Azure ML', 'Google AI Platform', 'Kubeflow'] }
    ]
  },
  { 
    id: 'bi-analyst', 
    title: 'Business Intelligence Analyst', 
    icon: '📈', 
    color: '#f4b400',
    fields: [
      { id: 'tools', label: 'BI Tools', type: 'multiselect', options: ['Tableau', 'Power BI', 'Looker', 'Qlik'], required: true },
      { id: 'sql', label: 'SQL Experience Level', type: 'select', options: ['Basic', 'Intermediate', 'Advanced'], required: true },
      { id: 'industries', label: 'Industry Experience', type: 'multiselect', options: ['Finance', 'Retail', 'Healthcare', 'Technology'] }
    ]
  },
  { 
    id: 'product-manager', 
    title: 'Product Manager', 
    icon: '🎯', 
    color: '#1a73e8',
    fields: [
      { id: 'experience', label: 'Years of Experience', type: 'number', required: true },
      { id: 'methodologies', label: 'Product Methodologies', type: 'multiselect', options: ['Agile', 'Scrum', 'Lean', 'Design Thinking'], required: true },
      { id: 'tools', label: 'Product Tools', type: 'multiselect', options: ['Jira', 'Confluence', 'Figma', 'Amplitude'] }
    ]
  },
  { 
    id: 'business-analyst', 
    title: 'Business/Management Analyst', 
    icon: '📊', 
    color: '#9334ea',
    fields: [
      { id: 'skills', label: 'Analysis Skills', type: 'multiselect', options: ['Requirements Gathering', 'Process Modeling', 'Data Analysis', 'Risk Assessment'], required: true },
      { id: 'tools', label: 'Analysis Tools', type: 'multiselect', options: ['Excel', 'Visio', 'BPMN', 'SQL'] },
      { id: 'certifications', label: 'Certifications', type: 'multiselect', options: ['CBAP', 'PMI-PBA', 'Six Sigma'] }
    ]
  },
  { 
    id: 'data-analyst', 
    title: 'Data Analyst', 
    icon: '📊', 
    color: '#f4b400',
    fields: [
      { id: 'tools', label: 'Analysis Tools', type: 'multiselect', options: ['Excel', 'Python', 'R', 'SQL'], required: true },
      { id: 'visualization', label: 'Visualization Tools', type: 'multiselect', options: ['Tableau', 'Power BI', 'Python Libraries', 'R Libraries'], required: true },
      { id: 'statistics', label: 'Statistics Level', type: 'select', options: ['Basic', 'Intermediate', 'Advanced'] }
    ]
  },
  { 
    id: 'data-warehouse', 
    title: 'Data Warehouse Developer', 
    icon: '🗄️', 
    color: '#1a73e8',
    fields: [
      { id: 'databases', label: 'Database Systems', type: 'multiselect', options: ['Oracle', 'SQL Server', 'Snowflake', 'Redshift'], required: true },
      { id: 'etl', label: 'ETL Tools', type: 'multiselect', options: ['Informatica', 'SSIS', 'Talend', 'Apache NiFi'], required: true },
      { id: 'modeling', label: 'Data Modeling Experience', type: 'select', options: ['Basic', 'Intermediate', 'Advanced'] }
    ]
  },
];
