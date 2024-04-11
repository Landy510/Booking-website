import indexBannerImgUrl from '@/assets/images/index-banner.jpg';

function Banner() {
  return (
    <div>
      <ul className="h-[320px]">
        <li
          className="h-full bg-center bg-cover"
          style={{
            backgroundImage: `url(${indexBannerImgUrl})`,
          }}
        />
      </ul>
    </div>
  );
}

export default Banner;
