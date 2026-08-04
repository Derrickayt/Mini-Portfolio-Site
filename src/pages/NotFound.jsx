import { Link } from "react-router-dom";
import { Home as HomeIcon } from "lucide-react";

function NotFound() {
  return (
    <section className="max-w-md mx-auto px-4 py-32 text-center">
      <p className="text-sm font-medium text-blue-600">404</p>
      <h1 className="mt-2 text-3xl font-bold text-gray-900">Page not found</h1>
      <p className="mt-3 text-gray-600">
        The page you're looking for doesn't exist or may have been moved.
      </p>
      <Link
        to="/"
        className="mt-6 inline-flex items-center gap-2 bg-blue-600 text-white font-medium rounded-lg px-5 py-2.5 hover:bg-blue-700 transition-colors"
      >
        <HomeIcon className="w-4 h-4" />
        Back to Home
      </Link>
    </section>
  );
}

export default NotFound;
