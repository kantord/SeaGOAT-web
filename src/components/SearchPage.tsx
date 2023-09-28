"use client";

import * as React from "react";
import { useQuery, useQueryClient } from "react-query";
import * as resultsExample from "../mocks/fixtures/embeddings.json";
import CodeBlockSet from "../components/CodeBlockSet";

async function querySeaGOAT({ queryKey }) {
  const [_, queryText] = queryKey;

  return queryText.length > 0 ? resultsExample.default.results : [];
}

export default function SearchPage() {
  const queryClient = useQueryClient();
  const [queryText, setQueryText] = React.useState<string>("");
  const { data, isLoading, isError, error } = useQuery(
    ["querySeaGOAT", queryText],
    querySeaGOAT,
  );

  return (
    <main className="flex flex-col min-h-screen p-24 items-center">
      <input
        type="search"
        placeholder="Type here to search..."
        autoComplete="off"
        spellCheck="false"
        onChange={({ target }) => setQueryText(target.value)}
      />

      <div className="w-full flex flex-col">
        {isLoading ? <span>Loading...</span> : null}
        {isError ? <span>Error: {error.message}</span> : null}
        {data === undefined
          ? null
          : data.map(({ path, blocks }) => (
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
