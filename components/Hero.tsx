import React from 'react';

interface HeroProps {
  onRegisterClick: () => void;
}

const Hero: React.FC<HeroProps> = ({ onRegisterClick }) => {
  return (
    <section className="bg-indigo-50 py-20 md:py-32 relative overflow-hidden">
        <div className="absolute inset-0 z-0 opacity-5">
            <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg"><defs><pattern id="hero-pattern" patternUnits="userSpaceOnUse" width="40" height="40" patternTransform="scale(2) rotate(45)"><rect x="0" y="0" width="100%" height="100%" fill="none"></rect><path d="M10-10L-10 10M10 10L-10-10M10 30L-10 50M10 50L-10 30M30-10L10 10M30 10L10-10M30 30L10 50M30 50L10 30" strokeWidth="1" stroke="hsl(230, 80%, 50%)" fill="none"></path></pattern></defs><rect width="800%" height="800%" transform="translate(0,0)" fill="url(#hero-pattern)"></rect></svg>
        </div>
      <div className="container mx-auto px-6 text-center relative z-10">
        <h2 className="text-4xl md:text-6xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-gray-800 to-indigo-800 mb-4 leading-tight">
          مستقبلك يبدأ من هنا
        </h2>
        <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto mb-8">
          في أكاديمية المستقبل، نقدم دعماً شاملاً ومتخصصاً لمساعدتك على التفوق في مسارك الدراسي وتحقيق أفضل النتائج.
        </p>
        <button
          onClick={onRegisterClick}
          className="bg-gradient-to-r from-indigo-600 to-purple-600 text-white font-bold py-4 px-10 rounded-lg hover:from-indigo-700 hover:to-purple-700 transition-all transform hover:scale-105 shadow-xl text-lg"
        >
          انضم إلينا الآن
        </button>
      </div>
    </section>
  );
};

export default Hero;
