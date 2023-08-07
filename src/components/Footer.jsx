import GitHub from '../../public/github.jpg'
import LinkedIn from '../../public/linkedIn.jpg'
export default function Footer() {
  return <footer>
    <a href='https://github.com/anicrob'><img src={GitHub} /></a>
    <a href='https://www.linkedin.com/in/andrea-robbins-capm-psm-pspo-sasm/'><img src={LinkedIn} /></a>
  </footer>
}