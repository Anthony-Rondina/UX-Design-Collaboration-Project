import { useState } from "react";
import styles from "./FilterBtn.module.css"

export default function FilterBtn({ btn, setBtn }) {
    const filterTypes = ['All', 'Watercolor', 'Canvas', 'Quilling', 'Acrylic', 'DIY'];
    return (
        <div className={styles.filterPanel}>
            {filterTypes.map(filterType => (
                <button className={styles.filterBtn} name={filterType} onClick={(e) => { console.log(e.target.name); setBtn(e.target.name) }}>{filterType}</button>
            ))}
        </div>
    )
}