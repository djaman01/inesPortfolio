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
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
        },
      },
    ],
  };
  return (
    <>
      <div className="rounded-2xl">
        <Slider {...settings} className="mx-auto lg:h-[700px] lg:w-[900px]">
          <div className="px-2 lg:h-[700px]">
            <img
              src={image1}
              alt={alt1}
              className="h-full w-full rounded-2xl object-contain max-lg:h-72"
            />
            {/* max-lg:h-72 permet d'aligner toutes les images en responsives (c'est la seule manière que j'ai trouvé car si on fait my-20, si je mets une autre images ça ne sera pas bien centré) */}
          </div>

          <div className="px-2 lg:h-[700px]">
            <img
              src={image2}
              alt={alt2}
              className="h-full w-full rounded-2xl object-contain max-lg:h-72"
            />
          </div>

          <div className="px-2 lg:h-[700px]">
            <img
              src={image3}
              alt={alt3}
              className="h-full w-full rounded-2xl object-contain max-lg:h-72"
            />
          </div>

          <div className="px-2 lg:h-[700px]">
            <img
              src={image4}
              alt={alt4}
              className="h-full w-full rounded-2xl object-contain max-lg:h-72"
            />
          </div>

          <div className="px-2 lg:h-[700px]">
            <img
              src={image5}
              alt={alt5}
              className="h-full w-full rounded-2xl object-contain max-lg:h-72"
            />
          </div>

          {/* Il y a forcement 5 images, mais pas + en fonction du projet: donc je dis que si image6 existe alors montre une image avec un cadre, pour que s'il n'y a rien, on ne voit pas un cadre vide */}
          {image6 && (
            <div className="px-2 lg:h-[700px]">
              <img
                src={image6}
                alt={alt6}
                className="h-full w-full rounded-2xl object-contain max-lg:h-72"
              />
            </div>
          )}

          {image7 && (
            <div className="px-2 lg:h-[700px]">
              <img
                src={image7}
                alt={alt7}
                className="h-full w-full rounded-2xl object-contain max-lg:h-72"
              />
            </div>
          )}

          {image8 && (
            <div className="px-2 lg:h-[700px]">
              <img
                src={image8}
                alt={alt8}
                className="h-full w-full rounded-2xl object-contain max-lg:h-72"
              />
            </div>
          )}
        </Slider>
      </div>
    </>
  );
};

export default ImagesComp;
