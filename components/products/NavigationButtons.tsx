"use client";

import { ArrowLeft, ArrowRight } from "lucide-react";
import { useRouter } from "next/navigation";

interface NavigationButtonsProps {
  onPrevious?: () => void;
  onNext?: () => void;
  showPrevious?: boolean;
  showNext?: boolean;
}

export function NavigationButtons({ 
  onPrevious, 
  onNext,
  showPrevious = true,
  showNext = true 
}: NavigationButtonsProps) {
  const router = useRouter();

  return (
    <div className="fixed bottom-8 left-8 flex gap-4">
      {showPrevious && (
        <button
          onClick={() => {
            if (onPrevious) {
              onPrevious();
            } else {
              router.back();
            }
          }}
          className="bg-black/80 hover:bg-black text-white p-4 rounded-full shadow-lg transition-all duration-300 hover:scale-110"
          aria-label="Previous page"
        >
          <ArrowLeft className="h-6 w-6" />
        </button>
      )}
      
      {showNext && (
        <button
          onClick={() => onNext?.()}
          className="bg-black/80 hover:bg-black text-white p-4 rounded-full shadow-lg transition-all duration-300 hover:scale-110"
          aria-label="Next page"
        >
          <ArrowRight className="h-6 w-6" />
        </button>
      )}
    </div>
  );
}