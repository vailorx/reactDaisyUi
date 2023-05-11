import React from 'react';
import '../App.css';
export default function Header(props) {
  function roundHcp(props) {
    hcpRounded = Math.round(props.hcp);
    return hcpRounded;
  }
  return (
    <div className="card w-screen bg-base-100 shadow-xl rounded-none flex flex-row">
      <div id="headerLeftSide" className="bg-blue-900 w-1/2 py-3 px-4 ">
        <h2 className="card-title text-blue-200">R.Mcllroy</h2>
        <div className="flex flex-row">
          <div className="w-1/2 text-blue-200">
            <p>27.4 (`{roundHcp}`)</p>
          </div>
          <div className="w-1/2">
            <p className="text-white"> P </p>
          </div>
        </div>
        <p className="text-blue-200">No entrega</p>
      </div>
      <div id="headerRighttSide" className="bg-green-500 w-1/2 py-3 px-4 m-0">
        <h2 className="card-title text-yellow-100">R.Mcllroy</h2>
        <div className="flex flex-row">
          <div className="w-1/2">
            <p className="text-yellow-100">27.4 (28)</p>
          </div>
          <div className="w-6 text-center ">
            <p className="bg-gray-400 rounded-2 rounded-full text-white"> R </p>
          </div>
        </div>
        <p className="text-yellow-100">No entrega</p>
      </div>
      <div className="card-actions justify-end"></div>
    </div>
  );
}
