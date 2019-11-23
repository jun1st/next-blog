import Link from "next/link";

const Nav = () => (
  <nav>
    <Link href="/about">
      <a>关于我</a>
    </Link>
    <style jsx>{`
      nav {
        display: flex;
      }

      a:not(:last-child) {
        margin-right: 1em;
      }
    `}</style>
  </nav>
);

export default Nav;
