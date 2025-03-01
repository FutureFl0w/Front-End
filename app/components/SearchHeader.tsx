import SearchBar from "./SearchBar";

export default function SearchHeader() {
  return (
    <header className=" bg-white">
      <h2 className="text-lg font-semibold mb-2">Realizar un nuevo viaje</h2>
      <SearchBar />
      <hr className="my-5 border-gray-300" />
    </header>
  );
}
