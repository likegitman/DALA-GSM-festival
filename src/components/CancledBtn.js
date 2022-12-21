import styles from "../styles/reserv.module.css";

function CancledBtn({onclick, apply}){
    return(
        <button className={styles.cancled__btn} onClick={()=> !apply ? onclick((e)=>true) : ''}>신청 취소</button>
    );
}

export default CancledBtn;