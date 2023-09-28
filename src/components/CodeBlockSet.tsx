import CodeBlock from "./CodeBlock";

export default function CodeBlockSet({ blocks, path }) {
  return (
    <div
      style={{
        backgroundColor: "rgb(40, 42, 54)",
        borderRadius: "4px",
      }}
    >
      {" "}
      {blocks.map((block, i) => (
        <CodeBlock
          path={path}
          block={block}
          key={block.lines[0].line}
          isLast={i !== blocks.length - 1}
          wraplines
        />
      ))}
    </div>
  );
}
