// src/pages/NotFound.jsx
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet";

export default function NotFound() {
  return (
    <motion.div
      className="flex flex-col items-center justify-center min-h-screen text-center p-4"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
    >
      <Helmet>
        <title>404 Not Found | Irtiza Ali</title>
        <meta name="description" content="The page you are looking for does not exist. Return to Irtiza Ali's portfolio home page." />
      </Helmet>
      <h1 className="text-6xl font-bold mb-4">404</h1>
      <p className="text-xl mb-6">Oops! Page not found.</p>
      <Link to="/" className="text-blue-600 hover:underline">
        Go back to Home →
      </Link>
    </motion.div>
  );
}
