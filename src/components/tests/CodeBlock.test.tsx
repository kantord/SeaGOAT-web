import React from "react";
import { render } from "@testing-library/react";
import CodeBlock from "../CodeBlock";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";

jest.mock("react-syntax-highlighter", () => ({
  Prism: jest.fn(({ children }) => <div>{children}</div>),
}));

const mockBlock = {
  lines: [{ lineText: 'console.log("Hello, World!");' }],
};

const examples = [
  { path: "file.txt", language: "text" },
  { path: "file.md", language: "markdown" },
  { path: "file.py", language: "python" },
  { path: "file.cpp", language: "cpp" },
  { path: "file.ts", language: "typescript" },
  { path: "file.js", language: "javascript" },
  { path: "file.html", language: "html" },
  { path: "file.unknown", language: "text" },
  { path: "file.randomThing", language: "text" },
];

describe("<CodeBlock />", () => {
  examples.forEach(({ path, language }) => {
    test(`renders with correct language prop for ${path}`, () => {
      render(<CodeBlock block={mockBlock} path={path} />);
      expect(SyntaxHighlighter).toHaveBeenCalledWith(
        expect.objectContaining({
          language,
        }),
        expect.anything(),
      );
      SyntaxHighlighter.mockClear();
    });
  });
});
