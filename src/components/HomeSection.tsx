import Image from 'next/image';

export default function HomeSection() {
  return (
    <section
      id="home"
      className="animated-gradient py-20 text-white text-center relative"
    >
      <div className="absolute inset-0 bg-black/30"></div>
      <div className="container mx-auto px-4 relative z-10">
        {/* Profile Picture */}
        <div className="w-[150px] h-[150px] rounded-full overflow-hidden mx-auto mb-6 border-4 border-white shadow-lg">
          <Image
            src="/images/prof.jpeg"
            alt="Profile"
            width={150}
            height={150}
          />
        </div>

        {/* Heading */}
        <h1 className="text-4xl sm:text-5xl font-bold mb-4 text-white">
          Welcome to My Portfolio
        </h1>

        {/* Description */}
        <p className="text-lg sm:text-xl max-w-2xl mx-auto mb-6 text-white">
          Hi, I'm Nilupu Udara, a passionate developer creating awesome web experiences.
        </p>

        {/* Call-to-Action Button */}
        <a
          href="#contact"
          className="inline-block bg-white text-blue-600 px-6 py-3 rounded-full font-semibold hover:bg-gray-200 transition"
        >
          Get in Touch
        </a>
      </div>
    </section>
  );
}