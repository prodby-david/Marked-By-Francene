"use client";

import { motion, AnimatePresence } from "framer-motion";
import { CheckCircle, XCircle, X } from "lucide-react";

type StatusType = "success" | "error";

interface StatusModalProps {
  open: boolean;
  type: StatusType;
  title: string;
  message: string;
  onClose: () => void;
}

export default function StatusModal({
  open,
  type,
  title,
  message,
  onClose,
}: StatusModalProps) {
  const isSuccess = type === "success";

  return (
    <AnimatePresence>
      {open && (
        <motion.div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/40"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
        >
          <motion.div
            className="relative bg-white rounded-2xl w-[90%] max-w-md p-6 shadow-xl"
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.8, opacity: 0 }}
            transition={{ type: "spring", stiffness: 300, damping: 25 }}
          >
            <button
              onClick={onClose}
              className="absolute top-4 right-4 text-gray-400 hover:text-gray-600 cursor-pointer"
            >
              <X size={18} />
            </button>

            <div className="flex justify-center mb-4">
              {isSuccess ? (
                <CheckCircle className="w-14 h-14 text-green-500" />
              ) : (
                <XCircle className="w-14 h-14 text-error-color" />
              )}
            </div>

            <h2
              className={`text-xl font-semibold text-center mb-2 ${
                isSuccess ? "text-green-600" : "text-error-color"
              }`}
            >
              {title}
            </h2>

            <p className="text-center text-gray-600 text-sm">{message}</p>

            <button
              onClick={onClose}
              className={`mt-6 w-full py-2 rounded-xl text-sm font-medium text-white cursor-pointer ${
                isSuccess
                  ? "bg-green-500 hover:bg-green-600"
                  : "bg-error-color hover:bg-error-color/90"
              }`}
            >
              Confirm
            </button>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
