import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { dracula } from 'react-syntax-highlighter/dist/cjs/styles/prism';


const languagesMap: Record<string, string> = {
  ".txt": "text",
  ".md": "markdown",
  ".py": "python",
  ".c": "c",
  ".h": "c",
  ".cpp": "cpp",
  ".cc": "cpp",
  ".cxx": "cpp",
  ".hpp": "cpp",
  ".ts": "typescript",
  ".tsx": "tsx",
  ".js": "javascript",
  ".jsx": "jsx",
  ".html": "html",
  ".go": "go",
  ".java": "java",
  ".php": "php",
  ".rb": "ruby",
};

function inferLanguageFromPath(path: string): string {
  const lastDotIndex = path.lastIndexOf(".");
  if (lastDotIndex === -1) return "text";
  const extension = path.substring(lastDotIndex);

  return languagesMap[extension] || "text";
}

export default function CodeBlock({ block, path }) {
  const fullText = block.lines.map(({ lineText }) => lineText).join("\n");

  return (
    <SyntaxHighlighter
      style={dracula} 
      language={inferLanguageFromPath(path)}
      showLineNumbers
      wrapLongLines
      startingLineNumber={block.lines[0].line}
    >
      {fullText}
    </SyntaxHighlighter>
  );
}
