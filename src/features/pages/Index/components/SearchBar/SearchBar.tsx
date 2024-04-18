import { FormEvent } from 'react';

function SearchBar() {
  function handleSubmitEvt(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
  }
  return (
    <div className="mx-auto px-[15px] -translate-y-[15%] lg:-translate-y-1/2 flex justify-center">
      <form
        className="max-w-[360px] md:max-w-[600px] lg:max-w-[950px] w-full bg-purpleLight rounded-[0.5rem] p-[1.5rem] flex flex-col lg:flex-row shrink-0"
        onSubmit={handleSubmitEvt}
      >
        <div className="p-[0.5rem] grow relative">
          <span
            className="material-symbols-outlined absolute left-[1rem] top-1/2 translate-x-1/2 -translate-y-1/2 fontIconFill"
          >
            location_on
          </span>
          <input
            type="text"
            placeholder="Destination"
            className="w-full h-full pl-[3.5rem]"
          />
        </div>
        <div className="p-[0.5rem] grow relative">
          <span
            className="material-symbols-outlined absolute left-[1rem] top-1/2 translate-x-1/2 -translate-y-1/2 fontIconFill"
          >
            calendar_month
          </span>
          <input
            type="text"
            placeholder="Check-in / Check-out"
            className="w-full h-full pl-[3.5rem]"
          />
        </div>
        <div className="p-[0.5rem] grow relative">
          <span className="material-symbols-outlined absolute left-[1rem] top-1/2 translate-x-1/2 -translate-y-1/2 fontIconFill">
            person
          </span>
          <input
            type="text"
            placeholder="Guests"
            className="w-full h-full pl-[3.5rem]"
          />
        </div>

        <div className="p-[0.5rem]">
          <button
            type="submit"
            className="btn-purple font-bold w-full"
          >
            SEARCH
          </button>
        </div>
      </form>
    </div>
  );
}

export default SearchBar;
