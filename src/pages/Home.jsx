import { Link } from "react-router"

Link

export const Home = () => {
  return (
    <div>
      <h1>Home</h1>
      <Link to="/login">
        <button>
          Login
        </button>
      </Link>
    </div>
  )
}
