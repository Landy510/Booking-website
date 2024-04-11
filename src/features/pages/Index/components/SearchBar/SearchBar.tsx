import { FormEvent } from 'react';

function SearchBar() {
  function handleSubmitEvt(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
  }
  return (
    <div className="mx-auto -translate-y-1/2 flex justify-center">
      <form
        className="max-w-[57.5rem] w-full bg-purpleLight rounded-[0.5rem] p-[1.5rem] flex flex-col lg:flex-row shrink-0"
        onSubmit={handleSubmitEvt}
      >
        <div className="px-[0.5rem] grow relative">
          <span className="material-symbols-outlined absolute left-[1rem] top-1/2 translate-x-1/2 -translate-y-1/2">
            location_on
          </span>
          <input
            type="text"
            placeholder="Destination"
            className="w-full h-full pl-[3.5rem]"
          />
        </div>
        <div className="px-[0.5rem] grow relative">
          <span
            className="material-symbols-outlined absolute left-[1rem] top-1/2 translate-x-1/2 -translate-y-1/2"
          >
            calendar_month
          </span>
          <input
            type="text"
            placeholder="Check-in / Check-out"
            className="w-full h-full pl-[3.5rem]"
          />
        </div>
        <div className="px-[0.5rem] grow relative">
          <span className="material-symbols-outlined absolute left-[1rem] top-1/2 translate-x-1/2 -translate-y-1/2">
            person
          </span>
          <input
            type="text"
            placeholder="Guests"
            className="w-full h-full pl-[3.5rem]"
          />
        </div>

        <div className="px-[0.5rem]">
          <button
            type="submit"
            className="btn-purple font-bold"
          >
            SEARCH
          </button>
        </div>
      </form>
    </div>
  );
}

export default SearchBar;
