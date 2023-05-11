import React from 'react';
import '../App.css';
export default function HolePoints() {
  return (
    <div className="w-screen flex flex-row">
      <div className="bg-gray-600 w-1/2 flex flex-row h-1/18 justify-center text-white">
        <div className="text-6xl p-2">
          <p className="">1</p>
        </div>
        <div className="flex flex-col">
          <div className="text-2xl p-1 border-b-2 border-gray-600">
            <p>1</p>
          </div>
          <div className="text-2xl p-1">
            <p>1</p>
          </div>
        </div>
        <div className="flex-row border-2 rounded-md border-blue-400 text-6xl p-2 ml-3 my-2">
          <p>...</p>
        </div>
        <div className="flex-row text-6xl p-1 ml-2 my-2">
          <p>?</p>
        </div>
      </div>
      <div className="bg-green-800 w-1/2 flex flex-row h-1/18 justify-center text-green-200">
        <div className="text-6xl p-2">
          <p className="">1</p>
        </div>
        <div className="flex flex-col">
          <div className="text-2xl p-1 border-b-2 border-gray-600">
            <p>1</p>
          </div>
          <div className="text-2xl p-1">
            <p>1</p>
          </div>
        </div>
        <div className="flex-row border-2 border-blue-400 rounded-md text-6xl p-2 ml-3 my-2">
          <p>...</p>
        </div>
        <div className="flex-row text-6xl p-1 ml-2 my-2">
          <p>?</p>
        </div>
      </div>
    </div>
  );
}
