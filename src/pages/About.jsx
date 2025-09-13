// src/pages/About.jsx
import React from "react";

export default function About() {
  return (
    <div className="min-h-screen bg-black text-white px-6 py-16">
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12">
        {/* Left Side */}
        <div>
          <h1 className="text-3xl font-bold">
            About<span className="text-blue-500">•</span>
          </h1>
          <h3 className="text-gray-400 mt-2">Skills & Journey</h3>
          <p className="mt-6 text-gray-300 leading-relaxed">
            Hey there! I'm Zelalem Belay, a passionate web developer from Ethiopia.
            I specialize in front-end development with HTML, CSS, JavaScript,
            React, and WordPress, and I also work with back-end tools like PHP
            and MySQL. I enjoy creating responsive, interactive, and modern
            websites tailored to client needs.
          </p>
          <p className="mt-4 text-gray-300 leading-relaxed">
            I love solving complex problems, continuously learning, and
            transforming ideas into digital experiences. If you’re looking for
            someone reliable and detail-oriented, let’s connect and build
            something impactful together!
          </p>
        </div>

        {/* Right Side */}
        <div>
          <h3 className="font-semibold">💻 Programming & Tools</h3>
          <div className="flex flex-wrap gap-3 mt-3">
            {[
              "HTML",
              "CSS",
              "JavaScript",
              "React",
              "WordPress",
              "PHP",
              "MySQL",
              "UI/UX Design"
            ].map((s) => (
              <span
                key={s}
                className="px-4 py-1 bg-gray-800 rounded-full text-gray-200"
              >
                {s}
              </span>
            ))}
          </div>

          <h3 className="font-semibold mt-8">📝 Certificates</h3>
          <div className="flex flex-wrap gap-3 mt-3">
            {["Udacity Nanodegree", "Frontend Development", "Database Management"].map(
              (c) => (
                <span
                  key={c}
                  className="px-4 py-1 bg-gray-800 rounded-full text-gray-200"
                >
                  {c}
                </span>
              )
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
