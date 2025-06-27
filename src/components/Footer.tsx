export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-4 text-center">
      <p>© {new Date().getFullYear()} Nilupul Udara. All rights reserved.</p>
      <div className="mt-2">
        <a
          href="https://linkedin.com/in/nilupul-udara"
          target="_blank"
          rel="noopener noreferrer"
          className="text-blue-400 hover:underline mx-2"
        >
          LinkedIn
        </a>
        <a
          href="https://github.com/NilupulUdara"
          target="_blank"
          rel="noopener noreferrer"
          className="text-blue-400 hover:underline mx-2"
        >
          GitHub
        </a>
      </div>
    </footer>
  );
}