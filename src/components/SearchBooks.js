const SearchBooks = () => {
    return (
        <form className="relative mx-auto w-3/5 md:w-max">
            <input
                type="search"
                name="search"
                className="peer relative z-10 h-12 w-full rounded-full border-2 bg-white pl-16 pr-4 outline-none focus:cursor-text focus:border-lime-600"
            />
            <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="absolute inset-y-0 z-10 my-auto h-8 w-12 cursor-pointer border-r border-transparent border-gray-300 stroke-gray-500 px-3.5 peer-focus:border-lime-300 peer-focus:stroke-lime-600"
            >
                <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z"
                />
            </svg>
        </form>
    );
};
export default SearchBooks;
