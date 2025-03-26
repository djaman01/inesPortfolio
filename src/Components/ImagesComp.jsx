import Slider from "react-slick";
import "slick-carousel/slick/slick-theme.css";
import "slick-carousel/slick/slick.css";

function Arrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{
        ...style,
        display: "block",
        background: "black",
        borderRadius: "100%",
        cursor: "pointer",
        paddingTop: "0.5px",
      }}
      onClick={onClick}
    />
  );
}

const ImagesComp = ({
  image1,
  image2,
  image3,
  image4,
  image5,
  image6,
  image7,
  image8,
  alt1,
  alt2,
  alt3,
  alt4,
  alt5,
  alt6,
  alt7,
  alt8,
}) => {
  const settings = {
    nextArrow: <Arrow />,
    prevArrow: <Arrow />,
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    adaptativeHeight: true,
    autoplay: true,
    autoplaySpeed: 10000,
    centerMode: true,
    centerPadding: "60px",
    draggable: true,
    pauseOnFocus: true,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1, //ça marche comme ça, si on met plus que 1 ça fait une erreur
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
  return (
    <>
      <div className="mb-36 mt-10 rounded-2xl bg-[#dcdee7]">
        <Slider
          {...settings}
          className="mx-auto max-lg:mt-7 lg:h-[700px] lg:w-[900px]"
        >
          <div className="px-2 lg:h-[700px]">
            <img
              src={image1}
              alt={alt1}
              className="h-full w-full rounded-2xl border-4 border-black object-contain"
            />
          </div>

          <div className="px-2 lg:h-[700px]">
            <img
              src={image2}
              alt={alt2}
              className="h-full w-full rounded-2xl border-4 border-black object-contain"
            />
          </div>

          <div className="px-2 lg:h-[700px]">
            <img
              src={image3}
              alt={alt3}
              className="h-full w-full rounded-2xl border-4 border-black object-contain"
            />
          </div>

          <div className="px-2 lg:h-[700px]">
            <img
              src={image4}
              alt={alt4}
              className="h-full w-full rounded-2xl border-4 border-black object-contain"
            />
          </div>

          <div className="px-2 lg:h-[700px]">
            <img
              src={image5}
              alt={alt5}
              className="h-full w-full rounded-2xl border-4 border-black object-contain"
            />
          </div>

          {/* Il y a forcement 5 images, mais pas + en fonction du projet: donc je dis que si image6 existe alors montre une image avec un cadre, pour que s'il n'y a rien, on ne voit pas un cadre vide */}
          {image6 && (
            <div className="px-2 lg:h-[700px]">
              <img
                src={image6}
                alt={alt6}
                className="h-full w-full rounded-2xl border-4 border-black object-fill"
              />
            </div>
          )}

          {image7 && (
            <div className="px-2 lg:h-[700px]">
              <img
                src={image7}
                alt={alt7}
                className="h-full w-full rounded-2xl border-4 border-black object-fill"
              />
            </div>
          )}

          {image8 && (
            <div className="px-2 lg:h-[700px]">
              <img
                src={image8}
                alt={alt8}
                className="h-full w-full rounded-2xl border-4 border-black object-fill"
              />
            </div>
          )}
        </Slider>
      </div>
    </>
  );
};

export default ImagesComp;
