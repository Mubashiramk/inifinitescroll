import classes from "./cardfirm.module.css";

const CardFirm = ({ data, index, page }) => {
  let num = index + 1;
  let offsetNumber = page;
  const paddedId = 0;
  paddedId = ("00" + (num + offsetNumber)).slice(-3);
  return (
    <div className={classes.pokemon}>
      {data.name}
      <img
        src={`https://assets.pokemon.com/assets/cms2/img/pokedex/detail/${paddedId}.png`}
        alt={data.name}
      />
      {/* {index} */}
    </div>
  );
};

export default CardFirm;
