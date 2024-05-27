import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";

interface RichTextEditorProps {
  value: string;
  onChange: (content: string) => void;
}

const modules = {
  toolbar: [
    [{ header: "1" }, { header: "2" }, { font: [] }],
    [{ size: [] }],
    ["bold", "italic", "underline", "strike", "blockquote"],
    [
      { list: "ordered" },
      { list: "bullet" },
      { indent: "-1" },
      { indent: "+1" },
    ],
    // ["link", "image", "video"],
    ["link"],
  ],
};

const RichTextEditor: React.FC<RichTextEditorProps> = ({ value, onChange }) => {
  return <ReactQuill value={value} onChange={onChange} modules={modules} />;
};

export default RichTextEditor;
