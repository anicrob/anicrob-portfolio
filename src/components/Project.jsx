import GitHub from '../../public/github.jpg'

export default function Project({Title, Technology, Link, Deploy, Image}) {
  return <div>

    <a href={`${Deploy}`}>
    <h3>{Title}</h3>
    <h6>{Technology}</h6>
    <img src={Image} />
    <a href={Link}><img src={GitHub}></img></a>
    </a>
  </div>
}
