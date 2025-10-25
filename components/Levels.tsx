import React, { useState, useMemo } from 'react';
import { LEVELS } from '../constants';
import { Level } from '../types';

const Levels: React.FC = () => {
  const [selectedLevel, setSelectedLevel] = useState<Level>(LEVELS[0]);

  const totalCost = useMemo(() => {
    return selectedLevel.subjects.reduce((sum, subject) => sum + subject.price, 0);
  }, [selectedLevel]);

  return (
    <>
      <div className="bg-white -mb-1">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 220" className="w-full">
            <path fill="#f9fafb" fillOpacity="1" d="M0,96L80,112C160,128,320,160,480,160C640,160,800,128,960,122.7C1120,117,1280,139,1360,149.3L1440,160L1440,320L1360,320C1280,320,1120,320,960,320C800,320,640,320,480,320C320,320,160,320,80,320L0,320Z"></path>
        </svg>
      </div>
      <section id="levels" className="py-20 bg-gray-50">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-800 mb-12">
            المستويات الدراسية والأسعار
          </h2>
          <div className="max-w-4xl mx-auto">
            <div className="flex mb-6 flex-wrap justify-center bg-gray-200/50 p-1 rounded-xl">
              {LEVELS.map((level) => (
                <button
                  key={level.id}
                  onClick={() => setSelectedLevel(level)}
                  className={`flex-1 py-3 px-4 font-bold text-sm sm:text-base transition-all duration-300 focus:outline-none rounded-lg ${
                    selectedLevel.id === level.id
                      ? 'bg-white text-indigo-600 shadow'
                      : 'text-gray-500 hover:text-indigo-600 hover:bg-gray-100'
                  }`}
                >
                  {level.name}
                </button>
              ))}
            </div>

            <div className="bg-white rounded-xl shadow-xl overflow-hidden">
              <div className="p-6 md:p-8">
                  <h3 className="text-2xl font-bold text-gray-900 mb-6 text-center md:text-right">{selectedLevel.name}</h3>
                  <div className="overflow-x-auto">
                    <table className="w-full text-right">
                      <thead className="border-b-2 border-gray-200">
                        <tr>
                          <th className="p-4 font-semibold text-gray-700 uppercase tracking-wider">المادة</th>
                          <th className="p-4 font-semibold text-gray-700 uppercase tracking-wider">الثمن (درهم)</th>
                        </tr>
                      </thead>
                      <tbody>
                        {selectedLevel.subjects.map((subject, index) => (
                          <tr key={subject.id} className={`border-b border-gray-100 ${index % 2 === 0 ? 'bg-white' : 'bg-gray-50/50'}`}>
                            <td className="p-4 text-gray-800">{subject.name}</td>
                            <td className="p-4 text-gray-600 font-mono">{subject.price.toFixed(2)}</td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
              </div>
              <div className="bg-indigo-50 border-t-2 border-indigo-200 px-6 md:px-8 py-4">
                  <table className="w-full">
                      <tbody>
                      <tr>
                        <td className="font-extrabold text-lg text-indigo-800">المجموع</td>
                        <td className="text-left font-extrabold text-lg text-indigo-800 font-mono">{totalCost.toFixed(2)} د.م.</td>
                      </tr>
                      </tbody>
                  </table>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Levels;
