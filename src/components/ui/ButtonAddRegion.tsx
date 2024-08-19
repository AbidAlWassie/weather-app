'use client';

import { addRegion } from '@/../actions/actions';
import React, { useState } from 'react';

interface ButtonAddRegionProps {
  regionId: string;
  userEmail: string;
}

const ButtonAddRegion: React.FC<ButtonAddRegionProps> = ({ regionId, userEmail }) => {
  const [message, setMessage] = useState<string | null>(null);
  const [messageType, setMessageType] = useState<'success' | 'error' | null>(null);

  const handleAddRegion = async () => {
    try {
      await addRegion(regionId, userEmail);
      setMessage('Added Region successfully ✔️');
      setMessageType('success');
      window.location.reload();
    } catch (error) {
      console.error('Error adding region:', error);
      setMessage('Already added ❌');
      setMessageType('error');
    }
  };

  return (
    <div className="flex">
      {message && (
        <div className={`p-2 rounded mr-2 justify-start items-start ${messageType === 'success' ? 'bg-blue-600' : 'bg-red-600'} text-white`}>
          {message}
        </div>
      )}
      <button
        onClick={handleAddRegion}
        className="float-right px-3 py-2 bg-indigo-600 text-white rounded"
      >
        Add Region
      </button>
    </div>
  );
};

export default ButtonAddRegion;
