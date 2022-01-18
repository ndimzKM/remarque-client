import MarkdownView from "react-showdown";
import { useSelector } from "react-redux";

const PreviewEditor = () => {
  const { activeNote } = useSelector((state) => state.reducer);

  return (
    <MarkdownView
      markdown={activeNote.content}
      options={{ tables: true, emoji: true }}
    />
  );
};

export default PreviewEditor;
