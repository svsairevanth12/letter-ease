import React from 'react';

interface LetterStyleSelectorProps {
  styles: string[];
  selectedStyle: string;
  onSelectStyle: (style: string) => void;
}

const LetterStyleSelector: React.FC<LetterStyleSelectorProps> = ({
  styles,
  selectedStyle,
  onSelectStyle,
}) => {
  return (
    <div className="mb-6">
      <label className="block text-sm font-medium text-gray-300 mb-2">
        Select Letter Style
      </label>
      <div className="grid grid-cols-2 gap-3 sm:grid-cols-4">
        {styles.map((style) => (
          <button
            key={style}
            type="button"
            className={`${
              selectedStyle === style
                ? 'bg-purple-600 text-white'
                : 'bg-gray-700 text-gray-300 hover:bg-gray-600'
            } px-3 py-2 border border-gray-600 rounded-md shadow-sm text-sm font-medium focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-purple-500 transition-colors duration-200`}
            onClick={() => onSelectStyle(style)}
          >
            {style}
          </button>
        ))}
      </div>
    </div>
  );
};

export default LetterStyleSelector;