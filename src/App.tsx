import React, { useState } from 'react';
import { Send, Sparkles } from 'lucide-react';
import LetterStyleSelector from './components/LetterStyleSelector';
import LetterForm from './components/LetterForm';
import GeneratedLetter from './components/GeneratedLetter';
import { generateLetter } from './utils/geminiApi';

const letterStyles = ['Formal', 'Informal', 'Academic', 'Request'];

function App() {
  const [selectedStyle, setSelectedStyle] = useState('');
  const [recipient, setRecipient] = useState('');
  const [subject, setSubject] = useState('');
  const [content, setContent] = useState('');
  const [generatedLetter, setGeneratedLetter] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    try {
      const letter = await generateLetter(selectedStyle, recipient, subject, content);
      setGeneratedLetter(letter);
    } catch (error) {
      console.error('Error generating letter:', error);
      setGeneratedLetter('An error occurred while generating the letter. Please try again.');
    }
    setIsLoading(false);
  };

  return (
    <div className="min-h-screen bg-gray-900 text-gray-100 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-3xl mx-auto">
        <div className="text-center">
          <Sparkles className="mx-auto h-12 w-12 text-purple-500" />
          <h1 className="mt-3 text-4xl font-extrabold text-white sm:text-5xl">
            Letter Ease
          </h1>
          <p className="mt-3 text-xl text-gray-400">
            Your AI-powered assistant for crafting perfect letters
          </p>
        </div>

        <div className="mt-12 bg-gray-800 shadow-lg rounded-lg overflow-hidden">
          <div className="px-4 py-5 sm:p-6">
            <LetterStyleSelector
              styles={letterStyles}
              selectedStyle={selectedStyle}
              onSelectStyle={setSelectedStyle}
            />
            <LetterForm
              recipient={recipient}
              subject={subject}
              content={content}
              onRecipientChange={setRecipient}
              onSubjectChange={setSubject}
              onContentChange={setContent}
              onSubmit={handleSubmit}
              isLoading={isLoading}
            />
          </div>
        </div>

        {generatedLetter && (
          <GeneratedLetter letter={generatedLetter} />
        )}

        <footer className="mt-12 text-center text-sm text-gray-500">
          &copy; {new Date().getFullYear()} Letter Ease. All rights reserved.<br />
          Created with ❤️ GEMINI
        </footer>
      </div>
    </div>
  );
}

export default App;