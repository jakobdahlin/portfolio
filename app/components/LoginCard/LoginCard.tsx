import React from 'react';
import { FaUser, FaLock } from 'react-icons/fa';

const LoginCard: React.FC = () => {
  return (
    
    <div className="relative w-full h-full py-40 rounded-lg block">
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="bg-white/5 backdrop-blur-xl border border-white/20 
        rounded-3xl shadow-lg w-full lg:py-10 h-auto p-6">
          <h2 className="text-4xl font-bold text-center text-white mb-6">Login</h2>
          
          <div className="flex items-center bg-white/20 rounded-full p-3 mb-4
            border-2 border-white/0 hover:border-white/20">
            <FaUser className="text-white mr-3" />
            <input
              type="text"
              placeholder="Username"
              className="bg-transparent outline-none w-full text-white placeholder:text-white"
            />
          </div>


          <div className="flex items-center bg-white/20 rounded-full p-3 mb-4
          border-2 border-white/0 hover:border-white/20 ">
            <FaLock className="text-white mr-3" />
            <input
              type="password"
              placeholder="Password"
              className="bg-transparent outline-none w-full text-white placeholder:text-white 
              transition-all focus-within:border-blue-500"
            />
          </div>

          <div className="flex justify-between items-center text-md text-white mb-4">
            <a href="#" className="underline text-white ">Forgot password?</a>
          </div>

          <button className="w-full bg-neutral-200/50 text-white py-4 rounded-full 
          hover:bg-neutral-200/70 active:bg-neutral-100/50 transition">
            Login
          </button>

          <p className="text-center text-md text-white mt-4">
            Don't have an account? <a href="#" className="font-bold underline">Register</a>
          </p>

        </div>
      </div>
    </div>
  );
};

export default LoginCard;