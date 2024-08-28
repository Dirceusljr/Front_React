
const Button = ({color = 'btn-primary', children}) => {
  return (
    <button className={`${color}`} >
        {children}
    </button>
  )
}

export default Button