import { Link, useLocation } from "react-router-dom";
import navStyles from "../css/header.module.css";

function ListItem({ CurrentPage, page, children }) {
  return page === 'About' ? (
    <li className="nav-item">
      <Link
        to="/" 
        key={page}
        // This is a conditional (ternary) operator that checks to see if the current page is the page we are looping through
        // If it is, we set the current page to 'nav-link-active', otherwise we set it to 'nav-link'
        className={(CurrentPage === `/`) ? `${navStyles.navlink} ${navStyles.active} ` : `${navStyles.navlink}`}
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
      className={(CurrentPage === `/${page.toLowerCase()}`) ? `${navStyles.active} ${navStyles.navlink}` : `${navStyles.navlink}`}
    >
      {children}
    </Link>
    </li>
  )
}

function Navigation() {
  const pages = ["About", "Portfolio", "Resume"];
  const currentPage = useLocation().pathname;
  console.log(currentPage)
  return (
    <ul className={`nav ${navStyles.nav} ${navStyles.removeborder}`} >
      {pages.map((page) => (
        <ListItem CurrentPage={currentPage} page={page} key={page} >{page}</ListItem> 
      ))}
    </ul>
  );
}

export default Navigation;
