import styles from "../styles/reserv.module.css";
import { Link } from "react-router-dom";
import moment from "moment";
import "moment/locale/ko";
import { useState, useEffect } from "react";
import Show from "./Show";
import ApplyBtn from "./ApplyBtn";
import CancledBtn from "./CancledBtn";
import ImpoBtn from "./ImpoBtn";


function Rview() {

  const [apply, setApply]=useState(true);//참 -> 허용됨
  const [canceled, setCanceled] = useState(false);//참 -> impossible 사용
  const [user, setUser]=useState(0);

  const userPlus=()=>{
    if(apply===true){
      setUser(user+1);
    }
  };

  // 현재 시간 출력
  const [time, setTime] = useState();
  useEffect(() => {
    const id = setInterval(() => {
      setTime(moment().format("hh:mm:ss"));
    }, 1000);
    return () => clearInterval(id);
  }, []);

  return (
    <div className={styles.wrap__M}>
      {/*Navbar Section*/}
      <nav className={styles.navbar}>
        <Link to={`/`} id={styles.navbar__logo}>
          DALA
        </Link>
        <ul className={styles.navbar__menu}>
          <li>
            <Link to={`/`} className={styles.navbar__links}>
              Home
            </Link>
          </li>
          <li>
            <Link to={`/DALA/reserv`} className={styles.navbar__links}>
              <b>Reservation</b>
            </Link>
          </li>
          <li>
            <Link to={`/DALA/commu`} className={styles.navbar__links}>
              Community
            </Link>
          </li>
          <li>
            <Link to={`/DALA/login`} className={styles.button}>
              Login
            </Link>
          </li>
        </ul>
      </nav>
      <section>
        <div className={styles.time__space}>
          <h1 className={styles.gd__time}>04 : 20 분부터 신청이 가능합니다.</h1>
          <div className={styles.time}>{time}</div>
        </div>
        <div className={styles.res__sec1}>
          <div className={styles.res__space}>
            <div className={styles.area__1}>
              <ul className={styles.sits__1}>
                <li></li>
                <li></li>
                <li></li>
              </ul>
              <div className={styles.sit__table}>
                <ul className={styles.sits__2}>
                  <li></li>
                  <li></li>
                </ul>
                <div className={styles.table}></div>
              </div>
              <ul className={styles.sits__3}>
                <li></li>
                <li></li>
                <li></li>
              </ul>
            </div>

            <div className={styles.area__2}>
              <ul className={styles.sits__1}>
                <li></li>
                <li></li>
              </ul>
              <div className={styles.sit__table}>
                <ul className={styles.sits__2}>
                  <li></li>
                </ul>
                <div className={styles.table}></div>
              </div>
              <ul className={styles.sits__3}>
                <li></li>
                <li></li>
              </ul>
            </div>
            <div className={styles.area__3}>
              <ul className={styles.sits__1}>
                <li></li>
                <li></li>
                <li></li>
                <li></li>
              </ul>
              <ul className={styles.tables}>
                <li></li>
                <li></li>
              </ul>
            </div>
          </div>
            <h1>{user} / 17</h1>
          <div onClick={userPlus}>
            {!canceled ? apply ? <ApplyBtn onclick={setApply} /> : <CancledBtn onclick={setCanceled} apply={apply} />:<ImpoBtn/>}
          </div>
        </div>
        <div className={styles.res__sec2}>
          <h1 style={{fontSize: '2.5rem'}}>명단</h1>
          <Show />
        </div>
      </section>
    </div>
  );
}

export default Rview;
