'use client';

import { addRegion } from '@/../actions/actions'; // Import the server action
import { FormEvent, useEffect, useState } from 'react';

const AddRegion = ({ userEmail }: { userEmail: string }) => {
  const [regionName, setRegionName] = useState('');
  const [message, setMessage] = useState<string | null>(null);
  const [messageType, setMessageType] = useState<'success' | 'error' | null>(null);

  useEffect(() => {
    // Log userEmail for debugging
    console.log('Received userEmail:', userEmail);
  }, [userEmail]);

  const handleAddRegion = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    if (!userEmail) {
      setMessage('User email is required to add a region.');
      setMessageType('error');
      console.error('User email is missing.');
      return;
    }

    try {
      // Log the regionName and userEmail before making the server call
      console.log('Submitting region:', regionName);
      console.log('User email:', userEmail);

      // Call the server-side action with form data
      await addRegion(regionName, userEmail);
      setMessage('Region added successfully ✔️');
      setMessageType('success');
      setRegionName(''); // Clear the input field
    } catch (error) {
      console.error('Error adding region:', error);
      setMessage('Error adding region ❌');
      setMessageType('error');
    }
  };

  return (
    <form onSubmit={handleAddRegion} className="flex flex-col space-y-4">
      <input
        type="text"
        name="region"
        value={regionName}
        onChange={(e) => setRegionName(e.target.value)}
        placeholder="Add new region"
        className="py-2 px-3 rounded-md"
        required
      />
      <button type="submit" className="bg-blue-500 text-white py-2 px-3 rounded-md">
        Add Region
      </button>
      {message && (
        <p className={`${messageType === 'success' ? 'text-green-600' : 'text-red-600'}`}>
          {message}
        </p>
      )}
    </form>
  );
};

export default AddRegion;
