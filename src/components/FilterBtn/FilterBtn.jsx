import { useState } from "react";
import styles from "./FilterBtn.module.css"

export default function FilterBtn() {
    const filterTypes = ['All', 'Watercolor', 'Canvas', 'Quilling', 'Acrylic', 'DIY'];
    const [btn, setBtn] = useState(filterTypes[0]);
    return (
        <div className={styles.filterPanel}>
            {filterTypes.map(filterType => (
                <button className={styles.filterBtn} name={filterType} onclick={() => setBtn(filterType)}>{filterType}</button>
            ))}
        </div>
    )
}