import { Link } from "react-router-dom";
import { motion } from "framer-motion";

export default function NotFound() {
  return (
    <div className="flex items-center justify-center h-screen bg-black text-white text-center">
      <motion.div 
        initial={{ opacity: 0, scale: 0.5 }} 
        animate={{ opacity: 1, scale: 1 }} 
        transition={{ duration: 0.8 }}
        className="max-w-lg p-6 rounded-xl bg-gray-900 shadow-2xl"
      >
        <h1 className="text-9xl font-bold text-red-500 animate-pulse">404</h1>
        <p className="text-xl mt-4">Oops! The page you're looking for doesn't exist.</p>
        <motion.div 
          initial={{ y: 20, opacity: 0 }} 
          animate={{ y: 0, opacity: 1 }} 
          transition={{ delay: 0.5, duration: 0.8 }}
        >
          <Link 
            to="/" 
            className="mt-6 inline-block px-6 py-3 bg-red-500 hover:bg-red-700 rounded-full text-lg font-semibold transition"
          >
            Go Home
          </Link>
        </motion.div>
      </motion.div>
    </div>
  );
}