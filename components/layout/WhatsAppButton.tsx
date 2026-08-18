"use client";

import { motion } from "motion/react";

export default function WhatsAppButton() {
  const phoneNumber = "92915703151";
  const whatsappUrl = `https://wa.me/${phoneNumber}?text=Hello,%20I%20would%20like%20to%20inquire%20about%20your%20financial%20and%20advisory%20services.`;

  return (
    <motion.a
      href={whatsappUrl}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat on WhatsApp"
      initial={{ scale: 0, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      transition={{ delay: 1, type: "spring", stiffness: 260, damping: 20 }}
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.95 }}
      className="fixed bottom-6 right-6 z-40 flex h-12 w-12 items-center justify-center rounded-full bg-[#25D366] text-white shadow-lg md:h-14 md:w-14"
    >
      <svg
        className="h-6 w-6 fill-current md:h-7 md:w-7"
        viewBox="0 0 24 24"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946C.06 5.348 5.397.01 12.008.01c3.202.001 6.212 1.246 8.477 3.514 2.266 2.268 3.507 5.28 3.505 8.484-.004 6.657-5.34 11.997-11.953 11.997-2.005-.001-3.973-.502-5.724-1.455L0 24zm6.59-4.846c1.6.95 3.188 1.449 4.825 1.451 5.436 0 9.86-4.37 9.864-9.799.002-2.63-1.023-5.101-2.885-6.963C16.528 2.022 14.056.99 11.425.99c-5.44 0-9.866 4.372-9.87 9.802 0 1.634.453 3.23 1.31 4.633L1.879 21.65l6.386-1.666zM17.47 15.3c-.3-.15-1.77-.874-2.034-.972-.263-.09-.455-.135-.644.15-.189.285-.735.972-.9 1.162-.165.195-.33.225-.63.075-3.512-1.705-4.263-2.822-4.697-3.585-.118-.21-.015-.315.09-.465.1-.135.225-.285.34-.42.11-.135.15-.225.224-.375.075-.15.037-.285-.015-.39-.052-.105-.455-1.11-.623-1.515-.165-.4-.36-.345-.494-.352l-.42-.008c-.15 0-.39.06-.595.285-.205.225-.78.765-.78 1.86s.8 2.155.91 2.305c.11.15 1.575 2.405 3.815 3.375.53.23 1.037.37 1.393.485.533.17 1.018.145 1.4.085.427-.064 1.77-.724 2.02-1.414.247-.69.247-1.29.172-1.414-.074-.12-.27-.195-.57-.345z" />
      </svg>
    </motion.a>
  );
}
