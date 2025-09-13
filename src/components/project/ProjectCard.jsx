export default function ProjectCard({ p }){
  return (
    <article className="border rounded-md p-4 hover:shadow-lg transition">
      <img src={p.img} alt={p.title} className="w-full h-44 object-cover rounded" />
      <h3 className="mt-3 font-semibold">{p.title}</h3>
      <p className="text-sm mt-1 text-slate-600">{p.short}</p>
      <div className="mt-3 flex flex-wrap gap-2">
        {p.tech.map(t => <span key={t} className="text-xs px-2 py-1 border rounded">{t}</span>)}
      </div>
      <div className="mt-3 flex gap-3">
        {p.live && <a href={p.live} target="_blank" rel="noreferrer" className="underline">Live</a>}
        {p.repo && <a href={p.repo} target="_blank" rel="noreferrer" className="underline">Code</a>}
      </div>
    </article>
  )
}
