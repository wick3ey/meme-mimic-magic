import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import HackerTerminal from '@/components/HackerTerminal';

const PreloadPage = () => {
  const navigate = useNavigate();

  useEffect(() => {
    const timer = setTimeout(() => {
      navigate('/home');
    }, 3000); // Changed from 20000 to 3000 milliseconds (3 seconds)

    return () => clearTimeout(timer);
  }, [navigate]);

  return (
    <div className="min-h-screen w-full bg-black overflow-hidden fixed top-0 left-0 right-0 bottom-0">
      <div className="w-full h-full">
        <HackerTerminal />
      </div>
    </div>
  );
};

export default PreloadPage;