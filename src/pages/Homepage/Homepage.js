import { Link } from "react-router-dom"

export default function Homepage({ user }) {
    return (
        <div>
            <h1>This is the Homepage</h1>
            <Link to={`/user/${user._id}`}> <p>Link to User Page</p></Link>
        </div>

    )
};