import Carousel from "react-material-ui-carousel";

const withCarousel = (WrappedComponent, carouselProps) => {
  const HOCComponent = (props) => {
    return (
      <Carousel {...carouselProps}>
        <WrappedComponent {...props} />
      </Carousel>
    );
  };

  return HOCComponent;
};

export default withCarousel;
