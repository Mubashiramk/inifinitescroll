import { Fragment } from "react";
import Link from "next/link";

const News = () => {
  return (
    <Fragment>
      <ul>
        <li>
          <Link href="/News/mu">mu</Link>
        </li>
        <li>
          <Link href="/News/details">details</Link>
        </li>
      </ul>
    </Fragment>
  );
};

export default News;
