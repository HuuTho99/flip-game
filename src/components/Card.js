import styled from "styled-components";

const CardStyled = styled.div`
  cursor: pointer;
  border-radius: 0.5rem;
  width: 100%;
  height: 100%;

  .flip-card-inner {
    width: 100%;
    height: 100%;
    transition: transform 0.6s;
    transform-style: preserve-3d;
    position: relative;
  }
  img {
    width: 100%;
    height: 100%;
    border-radius: 0.5rem;
  }
  .flip-front,
  .flip-back {
    width: 100%;
    height: 100%;
    position: absolute;
    top: 0;
    left: 0;
    backface-visibility: hidden;
    border-radius: 0.5rem;
  }
  .flip-front {
  }
  .flip-back {
    transform: rotateY(180deg);
    background-color: black;
  }

  .transform-card {
    transform: rotateY(180deg);
  }
`;

function Card({
  card,
  image,
  currentChoose = false,
  setCurrentChoose,
  isDone = false,
}) {
  const handleOnclick = () => {
    setCurrentChoose(card);
  };
  return (
    <CardStyled>
      <div
        className={`flip-card-inner ${currentChoose ? "transform-card" : ""}`}
        onClick={() => handleOnclick()}
      >
        <div className="flip-front">
          <img
            src={
              isDone
                ? "https://en.pimg.jp/037/667/905/1/37667905.jpg"
                : "https://64.media.tumblr.com/7ece81f58b54c4b7afa43a7e3db5f4f7/tumblr_n1n77kRqhr1qa8kbzo1_500.png"
            }
            alt="imgae"
          />
        </div>
        <div className="flip-back">
          <img src={image} alt="imgae" />
        </div>
      </div>
    </CardStyled>
  );
}

export default Card;
