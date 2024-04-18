import italyImgUrl from '@/assets/images/italy.jpg';
import newZealandImgUrl from '@/assets/images/NewZealand.jpg';
import thailandImgUrl from '@/assets/images/Thailand.jpg';

const articlesList = [
  {
    id: 0,
    imgUrl: italyImgUrl,
    title: 'The fifth most visited country',
    content: 'Italy is the fifth most visited country in the world, with a total of 52.3 million…',
  },
  {
    id: 1,
    imgUrl: newZealandImgUrl,
    title: 'Visit Thailand for Bangkok',
    content: 'Asian tourists primarily visit Thailand for Bangkok and the historical, natural, and…',
  },
  {
    id: 2,
    imgUrl: thailandImgUrl,
    title: 'Lord of the Rings Tour',
    content: 'The national cuisine has been described as Pacific Rim, incorporating the native Māori…',
  },
];

function GetInspiration() {
  return (
    <section>
      <div className="flex justify-between items-center mb-[1.5rem] container">
        <h2 className="font-Raleway text-[1.5rem] md:text-[2rem] font-bold">Get Inspiration</h2>
        <button
          className="btn-outline-purple !text-purple !py-[0.5rem] !px-[1rem] font-bold"
          type="button"
        >
          SEE MORE
        </button>
      </div>
      <div className="max-w-[1280px] ml-[15px] md:mx-auto md:px-[39px] xl:px-[85px] overflow-x-auto">
        <ul className="flex mx-[-15px]">
          {
            articlesList.map((info) => (
              <li
                key={info.id}
                className="px-[15px] w-[240px] shrink-0 md:shrink md:w-[33.33333%]"
              >
                <article className="h-full">
                  <img
                    src={info.imgUrl}
                    alt=""
                    className="rounded-[0.5rem] mb-[1.5rem] w-full h-full max-h-[181px] md:max-h-[158px] xl:max-h-[263px]"
                  />
                  <h2 className="fonr-Raleway text-[1.5rem] font-bold mb-[0.5rem]">
                    {info.title}
                  </h2>
                  <p className="text-grey">
                    {info.content}
                  </p>
                </article>
              </li>
            ))
          }
        </ul>

      </div>
    </section>
  );
}

export default GetInspiration;
