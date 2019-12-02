import React from "react";
import Link from "next/link";
import { parse, format } from "date-fns";

function PublishedAt(props) {
  const { link, date } = props;
  return (
    <>
      <Link href={link}>
        <a href={link} className="u-url" mcolor="#aaa" {...props}>
          <small>
            <time className="dt-published">
              {format(parse(date), "MMMM DD, YYYY")}
            </time>
          </small>
        </a>
      </Link>
      <style jsx>{`
        a {
          color: #9eabb3;
          font-size: 1.4rem;
          text-decoration: none;
        }
      `}</style>
    </>
  );
}

export default PublishedAt;
