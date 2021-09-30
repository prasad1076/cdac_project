const Header = (props) => {
  return (
    <div>
      <span><h1 className="title">{props.title}</h1></span>
    
    </div>
   
  )
}

Header.defaultProps = {
  title: '',
}

export default Header
