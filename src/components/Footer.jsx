import { Code, Briefcase, Mail } from "lucide-react";

function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-gray-200 bg-white">
      <div className="max-w-5xl mx-auto px-4 py-8 flex flex-col sm:flex-row items-center justify-between gap-4">
        <p className="text-sm text-gray-500">
          &copy; {year} Derrick Dev. All rights reserved.
        </p>
        <div className="flex items-center gap-4">
          <a
            href="https://github.com/"
            target="_blank"
            rel="noreferrer"
            className="text-gray-500 hover:text-blue-600 transition-colors"
            aria-label="GitHub"
          >
            <Code className="w-5 h-5" />
          </a>
          <a
            href="https://linkedin.com/"
            target="_blank"
            rel="noreferrer"
            className="text-gray-500 hover:text-blue-600 transition-colors"
            aria-label="LinkedIn"
          >
            <Briefcase className="w-5 h-5" />
          </a>
          <a
            href="mailto:hello@example.com"
            className="text-gray-500 hover:text-blue-600 transition-colors"
            aria-label="Email"
          >
            <Mail className="w-5 h-5" />
          </a>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
