import GitHub from "../../public/github.jpg";
import LinkedIn from "../../public/linkedIn.jpg";
import footerStyles from "../css/footer.module.css";

export default function Footer() {
  return (
    <footer>
      <a href="https://github.com/anicrob">
        <img className={footerStyles.img1} src={GitHub} />
      </a>
      <a href="https://www.linkedin.com/in/andrea-robbins-capm-psm-pspo-sasm/">
        <img className={footerStyles.img2} src={LinkedIn} />
      </a>
    </footer>
  );
}
