import { signIn, signOut } from "next-auth/react";
import { FunctionComponent } from "react";
import { ChangeEvent } from "react";

interface Props {
  setHasIngredient: (arg0: boolean) => void;
  setLatestSearch: (arg0: string) => void;
  search: (arg0: string) => void;
  hasIngredient: boolean;
}

const Search: FunctionComponent<Props> = ({
  setHasIngredient,
  setLatestSearch,
  search,
  hasIngredient,
}) => {
  const handleSearch = (e: ChangeEvent<HTMLInputElement>) => {
    setLatestSearch(e.target.value);
    search(e.target.value);
  };

  const handleToggle = (): void => {
    setHasIngredient(!hasIngredient);
  };

  return (
    <>
      <p>Check for triggering ingredients here.</p>
      <label className="inline-flex relative items-center cursor-pointer mt-8">
        <input
          type="checkbox"
          value=""
          id="default-toggle"
          className="sr-only peer"
          onChange={handleToggle}
        />
        <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 dark:peer-focus:ring-stone rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-stone"></div>
        <span className="ml-3 text-sm font-medium text-gray-900 dark:text-gray-300">
          {hasIngredient
            ? "With this ingredient... "
            : "Without this ingredient..."}
        </span>
      </label>
      <div className="items-center px-4 flex justify-center mt-10">
        <div className="relative mr-3">
          <div className="absolute top-3 left-3 items-center">
            <svg
              className="w-5 h-5"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fillRule="evenodd"
                d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z"
                clipRule="evenodd"
              ></path>
            </svg>
          </div>
          <input
            type="text"
            className="block p-2 pl-10 w-96 bg-clay rounded-lg focus:pl-10"
            placeholder="alcohol..."
            onChange={handleSearch}
            name="search"
          />
        </div>
      </div>
    </>
  );
};

export default Search;
