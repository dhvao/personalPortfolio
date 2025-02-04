"use client";

export const Header = () => {
  return (
    <div id="home" className="fixed top-3 left-0 w-full z-50 flex justify-center items-center">
      <nav className="flex gap-1 p-0.5 border border-white/15 rounded-full bg-white/10 backdrop-blur">
        <a href="#top" className="nav-item">Home</a>
        <a href="#featured-projects" className="nav-item">Projects</a>
        <a href="#work-experience" className="nav-item">Work</a>
        <a href="#contact" className="nav-item bg-white text-gray-900 hover:bg-white/70 hover:text-gray-900">
          Contact
        </a>
      </nav>
    </div>
  );
};
