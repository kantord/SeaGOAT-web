"use client";

import * as React from "react";
import * as resultsExample from "../mocks/fixtures/embeddings.json";
import CodeBlock from "../components/CodeBlock";
// import { default } from "react-syntax-highlighter/cjs/styles/prism/material-dark"

export default function Home() {
  const [queryText, setQueryText] = React.useState<string>("");
  const resultTexts =
    queryText.length > 0 ? resultsExample.default.results : [];

  return (
    <main className="flex flex-col min-h-screen p-24 items-center">
      <input
        type="search"
        placeholder="Type here to search..."
        autoComplete="off"
        spellCheck="false"
        className="h-12 max-w-lg w-full px-4 mb-4"
        value={queryText}
        onChange={({ target }) => setQueryText(target.value)}
      />

      <div className="w-full flex flex-col">
        {resultTexts.map(({ path, blocks }) => (
          <article
            className="card w-full bg-base-100 shadow-xl mb-4"
            key={path}
          >
            <div className="card-body">
              <h2 className="card-title">{path}</h2>
              {blocks.map((block) => (
                <CodeBlock
                  path={path}
                  block={block}
                  key={block.lines[0].line}
                />
              ))}
            </div>
          </article>
        ))}
      </div>
    </main>
  );
}
