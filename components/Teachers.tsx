import React from 'react';
import { TEACHERS } from '../constants';

const Teachers: React.FC = () => {
  return (
    <>
      <div className="bg-indigo-50 -mb-1">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 220" className="w-full">
            <path fill="#ffffff" fillOpacity="1" d="M0,96L80,112C160,128,320,160,480,160C640,160,800,128,960,122.7C1120,117,1280,139,1360,149.3L1440,160L1440,320L1360,320C1280,320,1120,320,960,320C800,320,640,320,480,320C320,320,160,320,80,320L0,320Z"></path>
        </svg>
      </div>
      <section id="teachers" className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-800 mb-12">
            تعرف على نخبة أساتذتنا
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
            {TEACHERS.map((teacher) => (
               <div key={teacher.id} className="bg-gray-50 rounded-xl shadow-lg overflow-hidden group transform hover:-translate-y-2 transition-transform duration-300 text-center">
                <div className="relative pt-8">
                    <img className="w-40 h-40 object-cover rounded-full mx-auto shadow-xl border-4 border-white group-hover:border-indigo-400 transition-colors duration-300" src={teacher.imageUrl} alt={teacher.name} />
                </div>
                <div className="p-6">
                    <h3 className="text-xl font-bold text-gray-900">{teacher.name}</h3>
                    <p className="text-indigo-600 font-semibold mt-2">{teacher.subject}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default Teachers;
