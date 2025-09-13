// src/pages/Home.jsx
export default function Home(){
  return (
    <section className="min-h-screen flex items-center justify-center bg-gradient-to-br from-slate-50 to-white">
      <div className="max-w-3xl text-center p-8">
        <h1 className="text-4xl font-extrabold mb-4">Hi — I'm Zelalem</h1>
        <p className="text-lg text-slate-600">Front-end developer building practical, production-ready apps.</p>
        <div className="mt-6 flex justify-center gap-3">
          <a className="px-4 py-2 rounded bg-slate-900 text-white hover:opacity-90" href="/projects">View Projects</a>
          <a className="px-4 py-2 rounded border" href="/contact">Contact</a>
        </div>
      </div>
    </section>
  )
}
