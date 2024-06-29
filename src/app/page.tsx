// src/app/page.tsx
'use client';

import { useState } from 'react';

export default function Home() {
  const [formData, setFormData] = useState({
    share_code: '',
    forename: '',
    surname: '',
    dob: ''
  });
  const [response, setResponse] = useState<any>(null);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { id, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [id]: value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const { share_code, forename, surname, dob } = formData;

    try {
      const res = await fetch(
        `/api/check-rtw?share_code=${share_code}&forename=${forename}&surname=${surname}&dob=${dob}`
      );
      const data = await res.json();
      setResponse(data);
    } catch (error: any) {
      console.error(error);
      setResponse({ error: error.message });
    }
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center">
      <h1 className="text-3xl font-bold mb-6 text-center">UK Right to Work Sharecode API Form</h1>
      <form onSubmit={handleSubmit} className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4 w-full max-w-lg">
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="share_code">
            Share Code
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="share_code"
            type="text"
            value={formData.share_code}
            onChange={handleChange}
            placeholder="Share Code"
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="forename">
            Forename
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="forename"
            type="text"
            value={formData.forename}
            onChange={handleChange}
            placeholder="Forename"
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="surname">
            Surname
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="surname"
            type="text"
            value={formData.surname}
            onChange={handleChange}
            placeholder="Surname"
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="dob">
            Date of Birth (DD-MM-YYYY)
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="dob"
            type="text"
            value={formData.dob}
            onChange={handleChange}
            placeholder="DD-MM-YYYY"
          />
        </div>
        <div className="flex items-center justify-between">
          <button
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
            type="submit"
          >
            Submit
          </button>
        </div>
      </form>
      {response && (
        <div className="shadow-md rounded px-8 pt-6 pb-8 mb-4 w-full max-w-lg">
          <pre>{JSON.stringify(response, null, 2)}</pre>
        </div>
      )}
    </div>
  );
}
