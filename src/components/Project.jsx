import GitHub from '/github.jpg'
import projectStyles from '../css/project.module.css'


export default function Project({Title, Technology, Link, Deploy, Image}) {
  return <div className ={`card ${projectStyles.card} ${projectStyles.blueBorder}`} >
    <a href={`${Deploy}`}>
    <img src={Image} className= "card-image-top" />
    </a>
    <h3 className={`card-title ${projectStyles.cardtitle}`}>{Title}</h3>
    <div className={`card-body ${projectStyles.cardbody}`}>
    <h6>{Technology}</h6>
    <a href={Link}><img className={projectStyles.github} src={GitHub}></img></a>
    </div>


  </div>
}
