import React from 'react';
const Language = ({ lang, setLang }) => {
  
    
    return (
      <button
      onClick={() => setLang(lang === 'en' ? 'mr' : 'en')}
      className="btn btn-secondary"
      style={{ padding: '0.5rem 1rem', cursor: 'pointer' }}
    >
      {lang === 'en' ? 'मराठी मध्ये पहा' : 'View in English'}
    </button>
  );
};

export default Language;