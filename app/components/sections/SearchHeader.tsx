import SearchBar from "../SearchBar";

export default function SearchHeader() {
  return (
    <header className="p-4 bg-white">
      <h2 className="text-lg font-semibold mb-2">Realizar un nuevo viaje</h2>
      <SearchBar />
      <hr className="mt-5 mb-2 border-gray-300" />
    </header>
  );
}
