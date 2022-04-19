import './Hero.css';

const Hero = () => {
  return (
      <div className="main">
        <h1>I Love Color</h1>
        <p> Color really isn't that difficult to get right , if you know where to start . Learn by doing and you will be a
          master in no time .</p>
        <button>Over to you </button>
        <div className="wrapper">
          <div className="container">
            <img src='https://www.iconpacks.net/icons/2/free-file-icon-1453-thumb.png'/>
            <h2 className="title">Blue</h2>
            <p2 className="description">Blue is a color that has long been associated with royalty, art, military,
              business and nature, making it a color with a lot of applications. The first documented use of blue
              pigment is using blue.</p2>
          </div>
          <div className="container">
            <img src="https://image.shutterstock.com/image-vector/basic-design-televisiontv-icon-260nw-1503763298.jpg"/>
            <h2 className="title">Green</h2>
            <p2 className="description">Merely reading its name, forest green will likely evoke visions of thick bushes
              and tall trees. Named for that exact type of scenery, forest green is a dark green hue commonly found in
              nature.</p2>
          </div>
          <div className="container">
            <img src="	https://cdn4.vectorstock.com/i/1000x1000/98/03/notes-with-pen-and-pencil-icon-vector-18109803.jpg"/>
            <h2 className="title">Red</h2>
            <p2 className="description">Red is a rich color with an even richer history. Use of the pigment can be traced
              way back to Ancient Egypt where it was considered both a color of vitality and celebration, as well as
              evil and destruction</p2>
          </div>
        </div>
      </div>

  )
}
export default Hero