import classes from "./card.module.css";
import Link from "next/link";

const Card = (props) => {
  let link = props.name;

  return (
    <Link href={"/" + link}>
      <div
        className={classes.main}
        style={{ backgroundColor: `${props.color}` }}
      >
        {props.name}
      </div>
    </Link>
  );
};

export default Card;
