import { Link, useLocation } from "react-router-dom";

// const pages = ["About", "Contact", "Portfolio", "Resume"];
function ListItem({ CurrentPage, page, children }) {
  return page === 'About' ? (
    <li className="nav-item">
      <Link
        to="/" 
        key={page}
        // This is a conditional (ternary) operator that checks to see if the current page is the page we are looping through
        // If it is, we set the current page to 'nav-link-active', otherwise we set it to 'nav-link'
        className={(CurrentPage === `/`) ? "nav-link active" : "nav-link"}
      >
        {children}
      </Link>
    </li>
  ) : (
    <li className="nav-item">
    <Link
      to={`/${page.toLowerCase()}`}
      key={page}
      // This is a conditional (ternary) operator that checks to see if the current page is the page we are looping through
      // If it is, we set the current page to 'nav-link-active', otherwise we set it to 'nav-link'
      className={(CurrentPage === `/${page.toLowerCase()}`) ? "nav-link active" : "nav-link"}
    >
      {children}
    </Link>
    </li>
  )
}

function Navigation() {
  const pages = ["About", "Contact", "Portfolio", "Resume"];
  const currentPage = useLocation().pathname;
  return (
    <ul className="nav nav-tabs">
      {pages.map((page) => (
        <ListItem CurrentPage={currentPage} page={page} key={page} >{page}</ListItem> 
      ))}
    </ul>
  );
}

export default Navigation;