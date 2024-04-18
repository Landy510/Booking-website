function Subscribe() {
  return (
    <section className="mt-[4.5rem]">
      <div className="flex justify-center items-center bg-purpleLight py-[1.5rem] px-[1rem] md:py-[5.75rem]">
        <div className="">
          <p className="whitespace-nowrap text-center text-[1.5rem] md:text-[3rem] font-Raleway font-bold md:font-extrabold mb-[1rem] lg:mb-[1.5rem]">Subscribe for Exclusive Offer</p>
          <form className="flex md:px-[4rem]">
            <input
              type="email"
              className="rounded-r-none grow w-[1px]"
              placeholder="Your email address"
            />
            <button
              className="btn-purple !px-[1rem] md:!px-[2rem] font-bold !rounded-l-none"
              type="submit"
            >
              SUBSCRIBE
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}

export default Subscribe;
