"use client";

import * as React from "react";
import {
  useQuery,
  useQueryClient,
} from 'react-query'
import * as resultsExample from "../mocks/fixtures/embeddings.json";
import CodeBlockSet from "../components/CodeBlockSet";

function querySeaGOAT(queryText: string) {
  return queryText.length > 0 ? resultsExample.default.results : [];
}


export default function SearchPage() {
  const query = useQuery('querySeaGOAT', querySeaGOAT)
  const queryClient = useQueryClient()
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
              <CodeBlockSet blocks={blocks} path={path} />
            </div>
          </article>
        ))}
      </div>
    </main>
  );
}
