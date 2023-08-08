import Navigation from "./Navigation";
import headerStyles from "../css/header.module.css";

export default function Header() {
  return <header>
    <h1 className={`${headerStyles.title}`}>Andrea</h1>
    <Navigation />
  </header>
}
