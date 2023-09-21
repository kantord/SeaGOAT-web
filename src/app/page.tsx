"use client";

import * as React from "react";

export default function Home() {
  const [queryText, setQueryText] = React.useState<string>("");
  const resultTexts =
    queryText.length > 0
      ? [
          "is is a foobar result",
          "is is not a foobar result",
          "is is another foobar result",
        ]
      : [];

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
        {resultTexts.map((text: string) => (
          <article
            className="card w-full bg-base-100 shadow-xl mb-4"
            key={text}
          >
            <div className="card-body">
              <h2 className="card-title">Card title!</h2>
              <p>{text}</p>
            </div>
          </article>
        ))}
      </div>
    </main>
  );
}
