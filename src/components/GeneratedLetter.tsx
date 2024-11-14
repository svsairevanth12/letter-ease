import React, { useState } from 'react';
import { FileDown, FileText, Edit2, Save, X, Download } from 'lucide-react';
import { jsPDF } from 'jspdf';

interface GeneratedLetterProps {
  letter: string;
  onLetterChange?: (newLetter: string) => void;
}

const GeneratedLetter: React.FC<GeneratedLetterProps> = ({ letter, onLetterChange }) => {
  const [isEditing, setIsEditing] = useState(false);
  const [editedLetter, setEditedLetter] = useState(letter);

  const handleSave = () => {
    onLetterChange?.(editedLetter);
    setIsEditing(false);
  };

  const handleCancel = () => {
    setEditedLetter(letter);
    setIsEditing(false);
  };

  const downloadAsPDF = () => {
    const doc = new jsPDF();
    doc.setFont('helvetica');
    doc.setFontSize(12);
    
    const splitText = doc.splitTextToSize(letter, 180);
    doc.text(splitText, 15, 15);
    doc.save('generated-letter.pdf');
  };

  const downloadAsDoc = () => {
    const blob = new Blob([letter], { type: 'application/msword' });
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.download = 'generated-letter.doc';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    URL.revokeObjectURL(url);
  };

  return (
    <div className="mt-8 bg-gray-800/50 shadow-lg rounded-lg overflow-hidden border border-gray-700">
      <div className="px-6 py-5">
        <div className="flex justify-between items-center mb-4">
          <div className="flex items-center space-x-2">
            <FileText className="h-5 w-5 text-purple-400" />
            <h3 className="text-lg leading-6 font-medium text-gray-100">Generated Letter</h3>
          </div>
          <div className="flex space-x-3">
            {!isEditing ? (
              <>
                <button
                  onClick={() => setIsEditing(true)}
                  className="inline-flex items-center px-3 py-2 border border-transparent text-sm font-medium rounded-md text-white bg-purple-600 hover:bg-purple-700 transition-colors duration-200"
                >
                  <Edit2 className="h-4 w-4 mr-2" /> Edit
                </button>
                <button
                  onClick={downloadAsPDF}
                  className="inline-flex items-center px-3 py-2 border border-transparent text-sm font-medium rounded-md text-white bg-green-600 hover:bg-green-700 transition-colors duration-200"
                >
                  <FileDown className="h-4 w-4 mr-2" /> PDF
                </button>
                <button
                  onClick={downloadAsDoc}
                  className="inline-flex items-center px-3 py-2 border border-transparent text-sm font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 transition-colors duration-200"
                >
                  <Download className="h-4 w-4 mr-2" /> DOC
                </button>
              </>
            ) : (
              <>
                <button
                  onClick={handleSave}
                  className="inline-flex items-center px-3 py-2 border border-transparent text-sm font-medium rounded-md text-white bg-green-600 hover:bg-green-700 transition-colors duration-200"
                >
                  <Save className="h-4 w-4 mr-2" /> Save
                </button>
                <button
                  onClick={handleCancel}
                  className="inline-flex items-center px-3 py-2 border border-transparent text-sm font-medium rounded-md text-white bg-red-600 hover:bg-red-700 transition-colors duration-200"
                >
                  <X className="h-4 w-4 mr-2" /> Cancel
                </button>
              </>
            )}
          </div>
        </div>
        <div className="mt-4">
          {isEditing ? (
            <textarea
              value={editedLetter}
              onChange={(e) => setEditedLetter(e.target.value)}
              className="w-full h-96 bg-gray-700 border border-gray-600 rounded-md shadow-sm py-3 px-4 text-gray-100 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-purple-500 font-mono text-sm"
            />
          ) : (
            <pre className="whitespace-pre-wrap font-sans text-gray-300 bg-gray-700/50 rounded-md p-4">{letter}</pre>
          )}
        </div>
      </div>
    </div>
  );
};

export default GeneratedLetter;