import styles from "../styles/reserv.module.css";

function Show(){
    return(
        <div className={styles.res__space2}>
            <div className={styles.show__list}>
                <ul className={styles.class__8}>
                    8교시
                </ul>
                <ul className={styles.class__9}>
                    9교시
                </ul>
                <ul className={styles.class__10}>
                    10교시
                </ul>
                <ul className={styles.class__11}>
                    11교시
                </ul>
            </div>
        </div>
    );
}

export default Show;