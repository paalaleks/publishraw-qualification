import { createRoot } from "react-dom/client";
import notes from "./generated/notes.json";
import "./style.css";

function FieldNotes() {
  return <main>
    <header><p>Outside, every day</p><h1>Field notes</h1><p>Small observations from the garden and the paths nearby.</p></header>
    <section aria-label="Notes">
      {notes.map(note => <article key={note.id} id={note.id}>
        <h2><a href={`#${note.id}`}>{note.title}</a></h2>
        <div dangerouslySetInnerHTML={{ __html: note.html }} />
      </article>)}
    </section>
    <footer>A notebook of ordinary days.</footer>
  </main>;
}
createRoot(document.getElementById("root")).render(<FieldNotes />);
