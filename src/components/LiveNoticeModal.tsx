"use client";

import { X } from "lucide-react";

interface LiveNoticeModalProps {
  open: boolean;
  message: string;
  onClose: () => void;
}

export function LiveNoticeModal({
  open,
  message,
  onClose,
}: LiveNoticeModalProps) {
  if (!open) return null;

  return (
    <div className="fixed inset-0 z-[60] flex items-center justify-center bg-black/70 px-4">
      <div className="w-full max-w-lg border-2 border-[#c9a77c]/60 bg-black p-5 md:p-6">
        <div className="flex items-start justify-between gap-4">
          <div className="text-[#c9a77c] font-mono text-sm md:text-base">
            [LIVE_STATUS]
          </div>
          <button
            onClick={onClose}
            className="text-[#c9a77c]/70 hover:text-[#c9a77c]"
            aria-label="Close"
          >
            <X className="w-4 h-4 md:w-5 md:h-5" />
          </button>
        </div>
        <p className="mt-3 whitespace-pre-line font-mono text-xs md:text-sm text-[#c9a77c]/80 leading-relaxed">
          {message}
        </p>
        <div className="mt-5 flex justify-end">
          <button
            onClick={onClose}
            className="px-4 py-2 border border-[#c9a77c]/60 text-[#c9a77c]/80 hover:text-[#c9a77c] hover:border-[#c9a77c] font-mono text-xs md:text-sm"
          >
            [OK]
          </button>
        </div>
      </div>
    </div>
  );
}
