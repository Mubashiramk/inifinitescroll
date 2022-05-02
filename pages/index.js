import Card from "../Components/Card";

const Homepage = () => {
  let green = "#4fc1a6";
  let orange = "#f47768";
  let blue = "#59aaf6";
  let yellow = "#ffce4a";
  let purple = "#7c538c";
  let brown = "#b0736c";

  return (
    <div>
      <h2>What Pokemon are you looking for?</h2>
      <input type="text" placeholder="Search Pokemon, Move ,Ability etc.." />
      <Card name="Pokedex" color={green} />
      <Card name="Moves" color={orange} />
      <Card name="Abilities" color={blue} />
      <Card name="Items" color={yellow} />
      <Card name="Locations" color={purple} />
      <Card name="Type Charts" color={brown} />
    </div>
  );
};

export default Homepage;
