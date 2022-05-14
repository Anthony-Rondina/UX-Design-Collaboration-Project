export default function ListBar({artwork, WIP, about,following }) {
    <div className="userSortOptions">
        <ul className="sortList">
            <li className="sortOption" style={artwork ? {background: "white"} : {background: "gray"}}>Artwork</li>
            <li className="sortOption" style={WIP ? {background: "white"} : {background: "gray"}}>WIP</li>
            <li className="sortOption" style={following ? {background: "white"} : {background: "gray"}}>Following</li>
            <li className="sortOption" style={about ? {background: "white"} : {background: "gray"}}>About</li>
        </ul>
    </div>
}