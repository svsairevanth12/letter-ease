import React from 'react';

interface GeneratedLetterProps {
  letter: string;
}

const GeneratedLetter: React.FC<GeneratedLetterProps> = ({ letter }) => {
  return (
    <div className="mt-8 bg-gray-800 shadow-lg rounded-lg overflow-hidden">
      <div className="px-4 py-5 sm:p-6">
        <h3 className="text-lg leading-6 font-medium text-gray-100">Generated Letter</h3>
        <div className="mt-2 max-w-xl text-sm text-gray-300">
          <pre className="whitespace-pre-wrap font-sans">{letter}</pre>
        </div>
      </div>
    </div>
  );
};

export default GeneratedLetter;