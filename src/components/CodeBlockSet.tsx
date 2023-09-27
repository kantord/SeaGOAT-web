import CodeBlock from "./CodeBlock";
import {
  EllipsisHorizontalIcon,
  ScissorsIcon,
} from "@heroicons/react/24/solid";

function Separator() {
  return (
    <div className="flex justify-center">
      <EllipsisHorizontalIcon className="h-4 w-4 text-blue-500" />
      <EllipsisHorizontalIcon className="h-4 w-4 text-blue-500" />
      <EllipsisHorizontalIcon className="h-4 w-4 text-blue-500" />
      <ScissorsIcon className="h-4 w-4 text-blue-500" />
      <EllipsisHorizontalIcon className="h-4 w-4 text-blue-500" />
      <EllipsisHorizontalIcon className="h-4 w-4 text-blue-500" />
      <EllipsisHorizontalIcon className="h-4 w-4 text-blue-500" />
    </div>
  );
}

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
        <>
          <CodeBlock
            path={path}
            block={block}
            key={block.lines[0].line}
            wraplines
          />
          {i !== blocks.length - 1 ? <Separator /> : null}
        </>
      ))}
    </div>
  );
}
