import styled from '@emotion/styled';
import { motion } from 'framer-motion';

export const Container = styled.div`
  max-width: 800px;
  margin: 2rem auto;
  padding: 2rem;
  font-family: 'Inter', sans-serif;
`;

export const Header = styled.header`
  text-align: center;
  margin-bottom: 3rem;

  h1 {
    font-size: 2rem;
    color: #1a1a1a;
    margin-bottom: 1rem;
  }

  p {
    color: #666;
    font-size: 1.1rem;
  }
`;

export const SearchInput = styled.input`
  width: 100%;
  padding: 1rem 1.5rem;
  border: 2px solid #eee;
  border-radius: 12px;
  font-size: 1rem;
  margin-bottom: 2rem;
  transition: all 0.3s ease;

  &:focus {
    outline: none;
    border-color: #1a73e8;
    box-shadow: 0 0 0 4px rgba(26, 115, 232, 0.1);
  }
`;

export const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
  gap: 1.5rem;
`;

export const RoleCard = styled(motion.button)<{ $bgColor: string }>`
  display: flex;
  align-items: center;
  gap: 1rem;
  padding: 1.5rem;
  background: white;
  border: 2px solid #eee;
  border-radius: 16px;
  cursor: pointer;
  transition: all 0.3s ease;
  width: 100%;
  text-align: left;

  &:hover {
    transform: translateY(-2px);
    border-color: ${props => props.$bgColor};
    box-shadow: 0 8px 20px rgba(0, 0, 0, 0.1);
  }

  .icon {
    font-size: 1.5rem;
    background: ${props => props.$bgColor}15;
    padding: 0.75rem;
    border-radius: 12px;
  }

  .title {
    font-size: 1rem;
    color: #1a1a1a;
    font-weight: 500;
  }
`;

export const FormContainer = styled.form`
  max-width: 600px;
  margin: 0 auto;
`;

export const FormField = styled.div`
  margin-bottom: 1.5rem;

  label {
    display: block;
    margin-bottom: 0.5rem;
    font-weight: 500;
    color: #333;
  }

  input,
  select,
  textarea {
    width: 100%;
    padding: 0.75rem 1rem;
    border: 2px solid #eee;
    border-radius: 8px;
    font-size: 1rem;
    transition: all 0.3s ease;

    &:focus {
      outline: none;
      border-color: #1a73e8;
      box-shadow: 0 0 0 4px rgba(26, 115, 232, 0.1);
    }
  }

  .error {
    color: #dc3545;
    font-size: 0.875rem;
    margin-top: 0.25rem;
  }
`;

export const MultiSelect = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
  margin-top: 0.5rem;
`;

export const Chip = styled.span<{ $selected: boolean; $color: string }>`
  padding: 0.5rem 1rem;
  border-radius: 20px;
  font-size: 0.875rem;
  cursor: pointer;
  transition: all 0.3s ease;
  background: ${props => props.$selected ? props.$color + '15' : '#f8f9fa'};
  border: 2px solid ${props => props.$selected ? props.$color : '#eee'};
  color: ${props => props.$selected ? props.$color : '#666'};

  &:hover {
    border-color: ${props => props.$color};
    background: ${props => props.$color + '10'};
  }
`;

export const NavigationButtons = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 2rem;
  gap: 1rem;
`;

export const Button = styled.button<{ $variant?: 'primary' | 'secondary' }>`
  padding: 0.75rem 1.5rem;
  border-radius: 8px;
  font-weight: 500;
  transition: all 0.3s ease;
  background: ${props => props.$variant === 'primary' ? '#1a73e8' : 'white'};
  color: ${props => props.$variant === 'primary' ? 'white' : '#666'};
  border: 2px solid ${props => props.$variant === 'primary' ? '#1a73e8' : '#eee'};

  &:hover {
    transform: translateY(-1px);
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
  }

  &:disabled {
    opacity: 0.6;
    cursor: not-allowed;
    transform: none;
    box-shadow: none;
  }
`;

export const ProgressBar = styled.div`
  width: 100%;
  height: 4px;
  background: #eee;
  border-radius: 2px;
  margin: 2rem 0;
  position: relative;

  &::after {
    content: '';
    position: absolute;
    left: 0;
    top: 0;
    height: 100%;
    width: 66.66%;
    background: #1a73e8;
    border-radius: 2px;
  }
`;
