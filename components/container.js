const Container = ({ children }) => (
  <>
    <div>{children}</div>
    <style jsx>{`
      max-width: 65rem;
      margin: 0 auto;
      padding: 0 1em;
    `}</style>
  </>
);

export default Container;
