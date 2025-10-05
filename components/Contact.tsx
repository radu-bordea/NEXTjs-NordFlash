import { Mail} from "lucide-react";
import { FaInstagram, FaFacebookSquare } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa6";


export default function Contact() {
  const subject = encodeURIComponent("Project inquiry — NordFlash");
  const body = encodeURIComponent(
    "Hi Radu,\n\nI’d like help with...\n\n— Name\n— Company\n— Budget\n— Timeline"
  );
  const mailto = `mailto:radubordea.digitalsolutions@gmail.com?subject=${subject}&body=${body}`;

  return (
    <section
      id="contact"
      className="section text-slate-600 border-b border-slate-200 pb-4"
    >
      <div className="">
        {/* Contact row */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-4 md:gap-8 mt-8 w-full mx-auto">
          {/* Left side: Title & Text */}
          <div>
            <h2 className="section-title text-2xl text-amber-600 mb-4">
              Contact
            </h2>
            <p className="section-sub mb-6">
              Tell me what you want to build — I’ll reply within 24 hours.
            </p>
          </div>

          {/* Middle: Email */}
          <div className="flex flex-col items-center md:items-start">
            <a
              className="btn flex items-center justify-center gap-2"
              href={mailto}
            >
              <Mail size={18} /> Email me
            </a>
            <p className="text-slate-800 mt-3">
              radubordea.digitalsolutions@gmail.com
            </p>
          </div>

          {/* Right side: Social icons */}
          <div className="flex justify-center md:justify-end gap-6">
            <a
              href="https://www.facebook.com/radubordeaofficial/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-sky-700 hover:text-sky-800 transition-colors"
            >
              <FaFacebookSquare size={24} />
            </a>
            <a
              href="https://www.instagram.com/radubordeaofficial/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-pink-600 hover:text-pink-700 transition-colors"
            >
              <FaInstagram size={24} />
            </a>
            <a
              href="linkedin.com/in/radu-bordea-695155220"
              target="_blank"
              rel="noopener noreferrer"
              className="text-sky-700 hover:text-sky-800 transition-colors"
            >
              <FaLinkedin size={24} />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
