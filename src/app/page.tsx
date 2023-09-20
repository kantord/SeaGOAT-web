export default function Home() {
  return (
    <main className="flex flex-col min-h-screen p-24 items-center">
      <input
        type="search"
        placeholder="Type here to search..."
        autoComplete="off"
        spellCheck="false"
        className="h-12 max-w-lg w-full px-4 mb-4"
      />
    </main>
  );
}
