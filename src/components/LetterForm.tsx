import React from 'react';
import { Send } from 'lucide-react';

interface LetterFormProps {
  recipient: string;
  subject: string;
  content: string;
  onRecipientChange: (value: string) => void;
  onSubjectChange: (value: string) => void;
  onContentChange: (value: string) => void;
  onSubmit: (e: React.FormEvent) => void;
  isLoading: boolean;
}

const LetterForm: React.FC<LetterFormProps> = ({
  recipient,
  subject,
  content,
  onRecipientChange,
  onSubjectChange,
  onContentChange,
  onSubmit,
  isLoading,
}) => {
  return (
    <form onSubmit={onSubmit} className="space-y-4">
      <div>
        <label htmlFor="recipient" className="block text-sm font-medium text-gray-300">
          Recipient
        </label>
        <input
          type="text"
          id="recipient"
          value={recipient}
          onChange={(e) => onRecipientChange(e.target.value)}
          className="mt-1 block w-full bg-gray-700 border border-gray-600 rounded-md shadow-sm py-2 px-3 text-gray-100 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-purple-500 sm:text-sm"
          placeholder="John Doe"
          required
        />
      </div>
      <div>
        <label htmlFor="subject" className="block text-sm font-medium text-gray-300">
          Subject
        </label>
        <input
          type="text"
          id="subject"
          value={subject}
          onChange={(e) => onSubjectChange(e.target.value)}
          className="mt-1 block w-full bg-gray-700 border border-gray-600 rounded-md shadow-sm py-2 px-3 text-gray-100 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-purple-500 sm:text-sm"
          placeholder="Meeting Request"
          required
        />
      </div>
      <div>
        <label htmlFor="content" className="block text-sm font-medium text-gray-300">
          Letter Content
        </label>
        <textarea
          id="content"
          value={content}
          onChange={(e) => onContentChange(e.target.value)}
          rows={4}
          className="mt-1 block w-full bg-gray-700 border border-gray-600 rounded-md shadow-sm py-2 px-3 text-gray-100 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-purple-500 sm:text-sm"
          placeholder="Enter the main points of your letter..."
          required
        ></textarea>
      </div>
      <div>
        <button
          type="submit"
          disabled={isLoading}
          className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-purple-600 hover:bg-purple-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-purple-500 transition-colors duration-200"
        >
          {isLoading ? (
            'Generating...'
          ) : (
            <>
              Generate Letter <Send className="ml-2 h-4 w-4" />
            </>
          )}
        </button>
      </div>
    </form>
  );
};

export default LetterForm;