
import { useEffect, useState } from 'react';

const LoaderAnimation = () => {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(interval);
          return 100;
        }
        return prev + 2;
      });
    }, 50);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="fixed inset-0 bg-background flex items-center justify-center z-50">
      <div className="text-center">
        {/* Simple elegant logo */}
        <div className="relative mb-12">
          <div className="w-16 h-16 mx-auto mb-6 relative">
            <div className="absolute inset-0 rounded-full border border-primary/30"></div>
            <div 
              className="absolute inset-0 rounded-full border border-primary border-t-transparent animate-spin"
              style={{ animationDuration: '2s' }}
            ></div>
            <div className="absolute inset-3 rounded-full bg-primary/10 flex items-center justify-center">
              <div className="w-2 h-2 rounded-full bg-primary"></div>
            </div>
          </div>
          
          <h1 className="text-2xl font-semibold text-foreground mb-2">
            Elegant Pro Design
          </h1>
          <p className="text-sm text-muted-foreground">
            Creative Frontend Developer
          </p>
        </div>

        {/* Clean progress bar */}
        <div className="w-80 mx-auto mb-6">
          <div className="h-px bg-border rounded-full overflow-hidden">
            <div 
              className="h-full bg-primary transition-all duration-300 rounded-full"
              style={{ width: `${progress}%` }}
            ></div>
          </div>
        </div>

        {/* Simple loading text */}
        <p className="text-sm text-muted-foreground">
          {progress}%
        </p>
      </div>
    </div>
  );
};

export default LoaderAnimation;
