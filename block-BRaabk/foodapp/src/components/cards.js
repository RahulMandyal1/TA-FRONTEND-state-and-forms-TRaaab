function Cards(props) {
  let cards = props.cardData;
  return (
    <>
      {cards.map((card, index) => {
        return (
          <div className="dish-container" key={index}>
            <figure>
              <img src={card.img} />
            </figure>

            <div className="card-info">
              <div className="flex-row">
                <h2>{card.title}</h2>
                <span>{card.price}</span>
              </div>
              <p>{card.desc}</p>
            </div>
          </div>
        );
      })}
    </>
  );
}
export default Cards;
