import top1ImgUrl from '@/assets/images/top1.jpg';
import top2ImgUrl from '@/assets/images/top2.jpg';
import top3ImgUrl from '@/assets/images/top3.jpg';
import top4ImgUrl from '@/assets/images/top4.jpg';

const topChoicesList = [
  {
    id: 0,
    img: top1ImgUrl,
    name: 'Hotel Aqua',
  },
  {
    id: 1,
    img: top2ImgUrl,
    name: 'Hotel Aqua',
  },
  {
    id: 2,
    img: top3ImgUrl,
    name: 'Hotel Aqua',
  },
  {
    id: 3,
    img: top4ImgUrl,
    name: 'Hotel Aqua',
  },
];

function TopChoices() {
  return (
    <section className="mb-[4.5rem]">
      <h2 className="font-Raleway text-[1.5rem] md:text-[2rem] font-bold mb-[1.5rem] container">Top Choices</h2>
      <ul className="font-Raleway flex mb-[1.5rem] container overflow-x-auto">
        <li className="text-[1.25rem] md:text-[1.5rem] text-grey font-bold px-[1rem] md:px-[1.5rem] border-b-[0.15rem] border-purple border-solid text-purple cursor-pointer">
          Bali
          <span className="align-super text-[0.75rem] md:text-[1rem]">128</span>
        </li>
        <li className="text-[1.25rem] md:text-[1.5rem] text-grey font-bold px-[1rem] md:px-[1.5rem] border-b-[0.15rem] border-purpleLight border-solid cursor-pointer">
          Okinawa
          <span className="align-super text-[0.75rem] md:text-[1rem]">67</span>
        </li>
        <li className="text-[1.25rem] md:text-[1.5rem] text-grey font-bold px-[1rem] md:px-[1.5rem] border-b-[0.15rem] border-purpleLight border-solid cursor-pointer">
          Taipei
          <span className="align-super text-[0.75rem] md:text-[1rem]">53</span>
        </li>
      </ul>
      <div className="max-w-[1280px] ml-[15px] md:ml-[39px] xl:px-[85px] xl:mx-auto overflow-x-auto">
        <ul className="flex mx-[-15px] ">
          {
              topChoicesList.map((info) => (
                <li
                  key={info.id}
                  className="flex flex-col shrink-0 px-[15px] w-[300px] xl:w-[25%]"
                >
                  <img
                    src={info.img}
                    alt=""
                    className="grow rounded-[0.5rem] mb-[0.5rem] max-h-[164px] md:max-h-[185px] w-full object-cover"
                  />
                  <h3 className="font-Open-Sans font-bold mb-[0.5rem]">{info.name}</h3>
                  <div className="flex items-center mb-[0.5rem]">
                    <span className="flex items-center mr-[0.25rem]">
                      <span className="material-symbols-outlined fontIconFill">
                        star
                      </span>
                      <span className="material-symbols-outlined fontIconFill">
                        star
                      </span>
                      <span className="material-symbols-outlined fontIconFill">
                        star
                      </span>
                      <span className="material-symbols-outlined fontIconFill">
                        star
                      </span>
                      <span className="material-symbols-outlined fontIconFill">
                        star
                      </span>
                    </span>
                    <span className="text-[14px] leading-[1.5rem]">5.0</span>
                    <span className="text-[12px] text-grey leading-[1.5rem]">．2k reviews</span>
                  </div>
                  <div className="font-Open-Sans text-grey">
                    <span className="mr-[0.5rem] text-[14px]">TWD 2480</span>
                    <span className="text-[12px] text-greyLight line-through">TWD 3980</span>
                  </div>
                </li>
              ))
            }
        </ul>
      </div>
    </section>
  );
}

export default TopChoices;
