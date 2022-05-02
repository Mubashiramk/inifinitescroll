import { useQuery } from "react-query";
import classes from "./pokedex.module.css";

import CardFirm from "../../Components/CardFirm";
import { useState } from "react";

const fetchPokedex = async (page) => {
  console.log(page, "huh");
  const res = await fetch(
    `https://pokeapi.co/api/v2/pokemon/?offset=${page}&limit=20`
  );
  return res.json();
};

const Pokedex = () => {
  const [page, setPage] = useState(0);
  const { data, status } = useQuery(
    ["pokedex", page],
    () => fetchPokedex(page),
    {
      keepPreviousData: true,
    }
  );

  return (
    <div className={classes.main}>
      <h3 className={classes.h3}>Pokedex</h3>
      {status === "loading" && <div>Loading Data...</div>}
      {status === "error" && <div>Error fetching Data</div>}
      {status === "success" && (
        <>
          {/* <button onClick={() => setPage(0)}> page1</button>
          <button onClick={() => setPage(20)}> page2</button>
          <button onClick={() => setPage(40)}> page3</button> */}

          <div className={classes.body}>
            {data.results.map((post, index) => (
              <div>
                <CardFirm data={post} index={index} page={page} />
              </div>
            ))}
          </div>
        </>
      )}
    </div>
  );
};

export default Pokedex;
