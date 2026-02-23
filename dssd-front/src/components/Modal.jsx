import React, { useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function Modal({ isOpen, onClose, children }) {

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }

    return () => {
      document.body.style.overflow = "auto";
    };
  }, [isOpen]);

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          className="fixed inset-0 z-[9999] flex items-center justify-center 
                     bg-black/70 backdrop-blur-md p-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.25 }}
          onClick={onClose}
        >
          <motion.div
            initial={{ opacity: 0, y: 40, scale: 0.96 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 40, scale: 0.96 }}
            transition={{ duration: 0.3, ease: "easeOut" }}
            className="
              w-full max-w-xl 
              max-h-[90vh] 
              flex flex-col 
              overflow-hidden 
              rounded-2xl 
              border border-white/10
              bg-neutral-900/80
              backdrop-blur-xl
              shadow-[0_0_60px_rgba(0,0,0,0.6)]
            "
            onClick={(e) => e.stopPropagation()}
          >

            <div className="relative flex items-center justify-center p-4 border-b border-white/10">

              <h2 className="text-2xl font-semibold text-white text-center">
                Cuéntame sobre tu proyecto
              </h2>

              <button
                onClick={onClose}
                className="absolute right-4 text-gray-400 hover:text-white text-xl transition"
              >
                ✕
              </button>

            </div>

            <div className="p-6 overflow-y-auto text-white">
              {children}
            </div>

          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}