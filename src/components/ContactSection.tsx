import Image from 'next/image';

export default function ContactSection() {
  return (
    <section
      id="contact"
      className="animated-gradient py-16 relative"
    >
      <div className="absolute inset-0 bg-black/50"></div>
      <div className="container mx-auto px-4 relative z-10 text-center">
        <h2 className="text-4xl font-bold mb-8 text-white">Get in Touch</h2>
        <p className="text-lg mb-6 max-w-2xl mx-auto text-white">
          Reach out via email or connect on social media.
        </p>
        <div className="flex justify-center space-x-4">
          <a
            href="mailto:nilupu.udara@example.com"
            className="bg-white text-blue-600 px-6 py-3 rounded-full hover:bg-gray-200 transition"
          >
            Email Me
          </a>
          <a
            href="https://linkedin.com/in/nilupul-udara"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-white text-blue-600 px-6 py-3 rounded-full hover:bg-gray-200 transition"
          >
            LinkedIn
          </a>
          <a
            href="https://github.com/NilupulUdara"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-white text-blue-600 px-6 py-3 rounded-full hover:bg-gray-200 transition"
          >
            GitHub
          </a>
        </div>
      </div>
    </section>
  );
}