import styles from "./ArtistCard.module.css";

export default function ArtistCard() {
    return (
        <div className="artCard">
            <div className="image">
                <img src="http://saschristian.com/wp-content/uploads/2014/04/Fever-18x24-oil-on-board-20101.jpg" />
            </div>
            <div className="artText">
                <p stye={{ fontWeight: 'bold' }}>Artist Name
                    <br>Art Title</br>
                </p>
            </div>
            <div className="views">
                <p>
                    Test Views
                </p>

            </div>
        </div>
    );
}

