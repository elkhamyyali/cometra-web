import React from "react";

const SendAMessage: React.FC = () => {
  return (
    <div className="bg-white/30 backdrop-blur-md rounded-none shadow-lg p-8 flex flex-col space-y-4">
      <h2 className="text-2xl font-semibold text-[#0C1D6D]">Send A Message</h2>
      <div className="grid grid-cols-2 gap-4">
        <div>
          <label className="block text-gray-600 text-sm">First Name</label>
          <input
            type="text"
            placeholder="Input Field"
            className="w-full p-2 border rounded-md bg-white/40 backdrop-blur-md outline-none border-none"
          />
        </div>
        <div>
          <label className="block text-gray-600 text-sm">Family Name</label>
          <input
            type="text"
            placeholder="Input Field"
            className="w-full p-2 border rounded-md bg-white/40 backdrop-blur-md outline-none border-none"
          />
        </div>
      </div>
      <div>
        <label className="block text-gray-600 text-sm">Phone Number</label>
        <input
          type="tel"
          placeholder="Input Field"
          className="w-full p-2 border rounded-md bg-white/40 backdrop-blur-md outline-none border-none"
        />
      </div>
      <div>
        <label className="block text-gray-600 text-sm">Email</label>
        <input
          type="email"
          placeholder="Input Field"
          className="w-full p-2 border rounded-md bg-white/40 backdrop-blur-md outline-none border-none"
        />
      </div>
      <div>
        <label className="block text-gray-600 text-sm">Message</label>
        <textarea
          placeholder="Input Field"
          className="w-full p-2 border rounded-md bg-white/40 backdrop-blur-md outline-none border-none"
          rows={4}
        />
      </div>
      <button className="bg-blue-600 text-white py-2 rounded-md hover:bg-blue-700 focus:outline-none">
        Send Request
      </button>
    </div>
  );
};

export default SendAMessage;
