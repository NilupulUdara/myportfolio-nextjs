import Image from 'next/image';

export default function AboutSection() {
  return (
    <section
      id="about"
      className="animated-gradient py-20 relative"
    >
      <div className="absolute inset-0 bg-black/30"></div>
      <div className="container mx-auto px-4 relative z-10">
        <h2 className="text-4xl font-bold mb-12 text-center text-white">About Me</h2>
        <div className="max-w-3xl mx-auto bg-white rounded-lg shadow-lg p-8 border border-gray-200">
          <div className="flex flex-col md:flex-row items-center mb-6">
            <Image
              src="/images/prof.jpeg"
              alt="Nilupu Udara"
              width={150}
              height={150}
              className="rounded-full object-cover mb-4 md:mb-0 md:mr-6"
            />
            <div className="text-lg text-gray-700">
              <p className="mb-4">
                As a passionate Computer Science undergraduate at Eastern University, Sri Lanka. I am
                actively building my skills in software development with a keen interest in full-stack
                applications. I have hands-on experience with languages such as JavaScript, TypeScript, C#,
                and C++, and frameworks like ASP.NET and Angular. I enjoy solving complex problems and
                continuously seek opportunities to enhance software solutions. I thrive in collaborative
                environments and bring enthusiasm, adaptability, and a strong desire to learn. I am eager to
                gain industry experience and contribute meaningfully through an internship opportunity in
                the IT field.
              </p>
            </div>
          </div>
          <div className="text-center">
            <a
              href="#contact"
              className="inline-block bg-blue-600 text-white px-6 py-3 rounded-full hover:bg-blue-700 transition duration-300"
            >
              Learn More
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}