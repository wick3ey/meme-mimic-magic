import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import HackerTerminal from '@/components/HackerTerminal';

const PreloadPage = () => {
  const navigate = useNavigate();

  useEffect(() => {
    const timer = setTimeout(() => {
      navigate('/home');
    }, 4000);

    return () => clearTimeout(timer);
  }, [navigate]);

  return (
    <div className="min-h-screen bg-[#1A1F2C] flex items-center justify-center p-4">
      <div className="w-full max-w-4xl">
        <HackerTerminal />
      </div>
    </div>
  );
};

export default PreloadPage;