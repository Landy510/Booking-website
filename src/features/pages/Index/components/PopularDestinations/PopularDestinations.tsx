import osakaImgUrl from '@/assets/images/Osaka.jpg';
import kyotoImgUrl from '@/assets/images/Kyoto.jpg';
import reykjavicImgUrl from '@/assets/images/Reykjavic.jpg';
import parisImgUrl from '@/assets/images/Paris.jpg';
import romanImgUrl from '@/assets/images/Roman.jpg';
import bangkokImgUrl from '@/assets/images/Bangkok.jpg';
import styles from './popularDestinations.module.scss';

const destinationsList = [
  {
    id: 0,
    country: 'JAPAN',
    city: 'Osaka',
    imgUrl: osakaImgUrl,
  },
  {
    id: 1,
    country: 'JAPAN',
    city: 'Kyoto',
    imgUrl: kyotoImgUrl,
  },
  {
    id: 2,
    country: 'ICELAND',
    city: 'Reykjavík',
    imgUrl: reykjavicImgUrl,
  },
  {
    id: 3,
    country: 'FRANCE',
    city: 'Paris',
    imgUrl: parisImgUrl,
  },
  {
    id: 4,
    country: 'ITALY',
    city: 'Roman',
    imgUrl: romanImgUrl,
  },
  {
    id: 5,
    country: 'THAILAND',
    city: 'Bangkok',
    imgUrl: bangkokImgUrl,
  },
];

function PopularDestinations() {
  return (
    <section className="container">
      <h2 className="font-Raleway text-[1.5rem] md:text-[2rem] font-bold mb-[1.5rem]">Popular Destinations</h2>
      <ul className="text-black flex flex-wrap m-[-0.25rem] md:m-[-0.75rem] xl:m-[-15px]">
        {
          destinationsList.map((info) => (
            <li
              key={info.id}
              className={[
                'w-full md:w-1/2 xl:w-[33.33333%] p-[0.25rem] md:py-[0.75rem] md:px-[15px] cursor-pointer',
                styles.destination,
              ].join(' ')}
            >
              <div
                className="px-[1.5rem] py-[1rem] rounded-[0.5rem] h-[78px] text-white-default flex items-center"
                style={{
                  backgroundImage: `linear-gradient(90deg, #000 0%, transparent 100%),url(${info.imgUrl})`,
                  backgroundPosition: 'center, center',
                  backgroundSize: 'cover, cover',
                }}
              >
                <div>
                  <p className="text-[0.75rem] text-white-600 font-bold">{info.country}</p>
                  <h3 className="font-Raleway text-[1.5rem] font-bold">{info.city}</h3>
                </div>
                <span className="material-symbols-outlined ml-auto">
                  expand_more
                </span>
              </div>
            </li>
          ))
        }
      </ul>
    </section>
  );
}

export default PopularDestinations;
