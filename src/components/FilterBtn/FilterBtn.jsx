import { useState } from "react";
import styles from "./FilterBtn.module.css"

export default function FilterBtn() {
    const filterTypes = ['All', 'Watercolor', 'Canvis', 'Quilling', 'Acrylic', 'DIY'];
    const [btn, setBtn] = useState(filterTypes[0]);
    return (
        <div className={styles.filterBar}>
            {filterTypes.map(filterType => (
                <button name={filterType} onclick={() => setBtn(filterType)}>{filterType}</button>
            ))}
        </div>
    )
}