import logo from '../assets/244396834_683283099297966_5993122135789503446_n.jpg'

const NavBar = () => {
  return (
    <div className="inline-flex items-center gap-2 p-2">
        <img src={logo} className='w-16 rounded-2xl'/>
        <p>NavBar</p>
    </div>
  )
}

export default NavBar