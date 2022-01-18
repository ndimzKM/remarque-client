import ReactMarkdown from "react-markdown";
import { useSelector } from "react-redux";

const PreviewEditor = () => {
  const { activeNote } = useSelector((state) => state.reducer);

  return (
    <section className="editor-container preview-editor h-full px-3 py-2">
      <ReactMarkdown>{activeNote.content}</ReactMarkdown>
    </section>
  );
};

export default PreviewEditor;
