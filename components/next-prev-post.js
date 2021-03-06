import PropTypes from "prop-types";
import Link from "next/link";

const NextPrevPost = ({ title, path, position }) => {
  const isNext = position === "next";
  const linkTitle = position === "next" ? "下一篇" : "上一篇";
  return (
    <>
      <Link href={path}>
        <a>
          <small>{linkTitle}</small>
          {title}
        </a>
      </Link>
      <style jsx>{`
        a {
          display: flex;
          flex-direction: column;
          ${isNext ? "text-align: right;" : ""}
          ${isNext ? "grid-column: 2 / 2;" : ""}
        }
      `}</style>
    </>
  );
};

NextPrevPost.propTypes = {
  title: PropTypes.string.isRequired,
  path: PropTypes.string.isRequired,
  position: PropTypes.oneOf(["next", "previous"])
};

export default NextPrevPost;
