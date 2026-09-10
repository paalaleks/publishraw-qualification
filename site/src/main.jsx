import { createRoot } from "react-dom/client";
import { marked } from "marked";
import "./style.css";

const notes = [
  {
    "id": "garden",
    "title": "A morning in the garden",
    "order": 1,
    "markdown": "The first **tomatoes** are ready to pick.\n\n- Water the seedlings\n- Gather the ripe fruit\n"
  },
  {
    "id": "walk",
    "title": "The woodland path",
    "order": 2,
    "markdown": "A quiet walk beneath the birch trees.\n\n## Along the way\n\nWe paused beside the stream.\n"
  }
];

function FieldNotes() {
  return <main>
    <header><p>Outside, every day</p><h1>Field notes</h1><p>Small observations from the garden and the paths nearby.</p></header>
    <section aria-label="Notes">
      {notes.map(note => <article key={note.id} id={note.id}>
        <h2><a href={`#${note.id}`}>{note.title}</a></h2>
        <div dangerouslySetInnerHTML={{ __html: marked.parse(note.markdown, { async: false }) }} />
      </article>)}
    </section>
    <footer>A notebook of ordinary days.</footer>
  </main>;
}
createRoot(document.getElementById("root")).render(<FieldNotes />);
