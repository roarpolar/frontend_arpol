// Cardpanel.tsx
import React from 'react';

interface CardpanelProps {
  name: string
  street: string
  number: string 
  city: string
  state: string
  postCode: string 
  thumbnail?: string
  title: string;  // Definindo a propriedade title como string
  content: string; // Definindo a propriedade content como string
  onClick: () => void;
}

const Cardpanel: React.FC<CardpanelProps> = ({ title, content }) => {
  return (
    <div className="card-panel p-8 border rounded-lg shadow-md bg-white">
      <h2 className="text-xl font-bold">{title}</h2>
      <p>{content}</p>
    </div>
  );
};

export default Cardpanel;




