import React from 'react';
import { 
  Send, 
  User, 
  Briefcase, 
  MapPin, 
  Mail, 
  Phone,
  Building,
  UserCircle,
  FileText,
  Loader2
} from 'lucide-react';

interface LetterFormProps {
  recipient: string;
  position: string;
  subject: string;
  content: string;
  onRecipientChange: (value: string) => void;
  onSubjectChange: (value: string) => void;
  onContentChange: (value: string) => void;
  onSubmit: (e: React.FormEvent) => void;
  isLoading: boolean;
  onPositionChange: (value: string) => void;
  senderName: string;
  senderPosition: string;
  senderAddress: string;
  senderEmail: string;
  senderPhone: string;
  recipientAddress: string;
  recipientEmail: string;
  onSenderNameChange: (value: string) => void;
  onSenderPositionChange: (value: string) => void;
  onSenderAddressChange: (value: string) => void;
  onSenderEmailChange: (value: string) => void;
  onSenderPhoneChange: (value: string) => void;
  onRecipientAddressChange: (value: string) => void;
  onRecipientEmailChange: (value: string) => void;
}

const LetterForm: React.FC<LetterFormProps> = ({
  recipient,
  position,
  subject,
  content,
  onRecipientChange,
  onSubjectChange,
  onContentChange,
  onSubmit,
  isLoading,
  onPositionChange,
  senderName,
  senderPosition,
  senderAddress,
  senderEmail,
  senderPhone,
  recipientAddress,
  recipientEmail,
  onSenderNameChange,
  onSenderPositionChange,
  onSenderAddressChange,
  onSenderEmailChange,
  onSenderPhoneChange,
  onRecipientAddressChange,
  onRecipientEmailChange,
}) => {
  return (
    <form onSubmit={onSubmit} className="space-y-6">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Sender Information Section */}
        <div className="space-y-4 bg-gray-800/50 p-4 rounded-lg border border-gray-700">
          <div className="flex items-center space-x-2">
            <UserCircle className="h-5 w-5 text-purple-400" />
            <h3 className="text-lg font-medium text-purple-400">Sender Information</h3>
          </div>
          
          <div>
            <label htmlFor="senderName" className="flex items-center space-x-2 text-sm font-medium text-gray-300">
              <User className="h-4 w-4 text-gray-400" />
              <span>Your Name</span>
            </label>
            <input
              type="text"
              id="senderName"
              value={senderName}
              onChange={(e) => onSenderNameChange(e.target.value)}
              className="mt-1 block w-full bg-gray-700 border border-gray-600 rounded-md shadow-sm py-2 px-3 text-gray-100 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-purple-500 sm:text-sm"
              placeholder="Your Full Name"
              required
            />
          </div>

          <div>
            <label htmlFor="senderPosition" className="flex items-center space-x-2 text-sm font-medium text-gray-300">
              <Briefcase className="h-4 w-4 text-gray-400" />
              <span>Your Position</span>
            </label>
            <input
              type="text"
              id="senderPosition"
              value={senderPosition}
              onChange={(e) => onSenderPositionChange(e.target.value)}
              className="mt-1 block w-full bg-gray-700 border border-gray-600 rounded-md shadow-sm py-2 px-3 text-gray-100 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-purple-500 sm:text-sm"
              placeholder="Your Job Title"
              required
            />
          </div>

          <div>
            <label htmlFor="senderAddress" className="flex items-center space-x-2 text-sm font-medium text-gray-300">
              <MapPin className="h-4 w-4 text-gray-400" />
              <span>Your Address</span>
            </label>
            <textarea
              id="senderAddress"
              value={senderAddress}
              onChange={(e) => onSenderAddressChange(e.target.value)}
              rows={2}
              className="mt-1 block w-full bg-gray-700 border border-gray-600 rounded-md shadow-sm py-2 px-3 text-gray-100 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-purple-500 sm:text-sm"
              placeholder="Your Complete Address"
              required
            />
          </div>

          <div>
            <label htmlFor="senderEmail" className="flex items-center space-x-2 text-sm font-medium text-gray-300">
              <Mail className="h-4 w-4 text-gray-400" />
              <span>Your Email</span>
            </label>
            <input
              type="email"
              id="senderEmail"
              value={senderEmail}
              onChange={(e) => onSenderEmailChange(e.target.value)}
              className="mt-1 block w-full bg-gray-700 border border-gray-600 rounded-md shadow-sm py-2 px-3 text-gray-100 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-purple-500 sm:text-sm"
              placeholder="your.email@example.com"
              required
            />
          </div>

          <div>
            <label htmlFor="senderPhone" className="flex items-center space-x-2 text-sm font-medium text-gray-300">
              <Phone className="h-4 w-4 text-gray-400" />
              <span>Your Phone</span>
            </label>
            <input
              type="tel"
              id="senderPhone"
              value={senderPhone}
              onChange={(e) => onSenderPhoneChange(e.target.value)}
              className="mt-1 block w-full bg-gray-700 border border-gray-600 rounded-md shadow-sm py-2 px-3 text-gray-100 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-purple-500 sm:text-sm"
              placeholder="+1 (234) 567-8900"
              required
            />
          </div>
        </div>

        {/* Recipient Information Section */}
        <div className="space-y-4 bg-gray-800/50 p-4 rounded-lg border border-gray-700">
          <div className="flex items-center space-x-2">
            <Building className="h-5 w-5 text-purple-400" />
            <h3 className="text-lg font-medium text-purple-400">Recipient Information</h3>
          </div>
          
          <div>
            <label htmlFor="recipient" className="flex items-center space-x-2 text-sm font-medium text-gray-300">
              <User className="h-4 w-4 text-gray-400" />
              <span>Recipient Name</span>
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
            <label htmlFor="position" className="flex items-center space-x-2 text-sm font-medium text-gray-300">
              <Briefcase className="h-4 w-4 text-gray-400" />
              <span>Recipient's Position</span>
            </label>
            <input
              type="text"
              id="position"
              value={position}
              onChange={(e) => onPositionChange(e.target.value)}
              className="mt-1 block w-full bg-gray-700 border border-gray-600 rounded-md shadow-sm py-2 px-3 text-gray-100 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-purple-500 sm:text-sm"
              placeholder="Manager, HR Director, etc."
              required
            />
          </div>

          <div>
            <label htmlFor="recipientAddress" className="flex items-center space-x-2 text-sm font-medium text-gray-300">
              <MapPin className="h-4 w-4 text-gray-400" />
              <span>Recipient's Address</span>
            </label>
            <textarea
              id="recipientAddress"
              value={recipientAddress}
              onChange={(e) => onRecipientAddressChange(e.target.value)}
              rows={2}
              className="mt-1 block w-full bg-gray-700 border border-gray-600 rounded-md shadow-sm py-2 px-3 text-gray-100 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-purple-500 sm:text-sm"
              placeholder="Recipient's Complete Address"
              required
            />
          </div>

          <div>
            <label htmlFor="recipientEmail" className="flex items-center space-x-2 text-sm font-medium text-gray-300">
              <Mail className="h-4 w-4 text-gray-400" />
              <span>Recipient's Email</span>
            </label>
            <input
              type="email"
              id="recipientEmail"
              value={recipientEmail}
              onChange={(e) => onRecipientEmailChange(e.target.value)}
              className="mt-1 block w-full bg-gray-700 border border-gray-600 rounded-md shadow-sm py-2 px-3 text-gray-100 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-purple-500 sm:text-sm"
              placeholder="recipient.email@example.com"
            />
          </div>
        </div>
      </div>

      {/* Letter Details Section */}
      <div className="space-y-4 bg-gray-800/50 p-4 rounded-lg border border-gray-700">
        <div className="flex items-center space-x-2">
          <FileText className="h-5 w-5 text-purple-400" />
          <h3 className="text-lg font-medium text-purple-400">Letter Details</h3>
        </div>
        <div>
          <label htmlFor="subject" className="flex items-center space-x-2 text-sm font-medium text-gray-300">
            <Mail className="h-4 w-4 text-gray-400" />
            <span>Subject</span>
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
          <label htmlFor="content" className="flex items-center space-x-2 text-sm font-medium text-gray-300">
            <FileText className="h-4 w-4 text-gray-400" />
            <span>Letter Content</span>
          </label>
          <textarea
            id="content"
            value={content}
            onChange={(e) => onContentChange(e.target.value)}
            rows={4}
            className="mt-1 block w-full bg-gray-700 border border-gray-600 rounded-md shadow-sm py-2 px-3 text-gray-100 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-purple-500 sm:text-sm"
            placeholder="Enter the main points of your letter..."
            required
          />
        </div>
      </div>

      {/* Submit Button */}
      <div>
        <button
          type="submit"
          disabled={isLoading}
          className="w-full flex justify-center items-center py-3 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-purple-600 hover:bg-purple-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-purple-500 transition-colors duration-200 disabled:opacity-50 disabled:cursor-not-allowed"
        >
          {isLoading ? (
            <>
              <Loader2 className="animate-spin h-5 w-5 mr-2" />
              Generating...
            </>
          ) : (
            <>
              Generate Letter <Send className="ml-2 h-5 w-5" />
            </>
          )}
        </button>
      </div>
    </form>
  );
};

export default LetterForm;