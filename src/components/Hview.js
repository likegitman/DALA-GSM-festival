import styles from "../styles/home.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faList } from "@fortawesome/free-solid-svg-icons";
import { faPenClip } from "@fortawesome/free-solid-svg-icons";
import { faComment } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";

function Hview() {
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
              <b>Home</b>
            </Link>
          </li>
          <li>
            <Link to={`/DALA/reserv`} className={styles.navbar__links}>
              Reservation
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
      {/*Main Section*/}
      <section className={styles.main}>
        <div className={styles.main__sec1}>
          <h1 className={styles.hi__text}>안녕하세요!</h1>
          <h2 className={styles.hi__text2}>
            GSM 홈베이스 예약 웹사이트입니다.
          </h2>
        </div>
        <div className={styles.main__sec2}>
          <h1 className={styles.gd__texth}>
            기존의 예약 방식과는 다른
            <br />
            간단하고 편리한 시스템
          </h1>
          <p className={styles.gd__textp}>클릭 몇 번이면 예약완료!</p>
          <div className={styles.circle__1}>
            <div className={styles.book__circle}>
              <Link to={`DALA/reserv`}>
                <FontAwesomeIcon icon={faList} />
              </Link>
            </div>
            <div className={styles.pen__circle}>
              <Link to={`DALA/reserv`}>
                <FontAwesomeIcon icon={faPenClip} />
              </Link>
            </div>
          </div>
        </div>
        <div className={styles.main__sec3}>
          <h1 className={styles.gd__texth2}>
            불편사항이 있다면 <br />
            community에 말해주세요
          </h1>
          <p className={styles.gd__textp2}>
            공지와 community가 구현돼있습니다!
          </p>
          <div className={styles.circle__2}>
            <div className={styles.message__circle}>
              <Link to={`/DALA/commu`}>
                <FontAwesomeIcon icon={faComment} />
              </Link>
            </div>
          </div>
        </div>
      </section>
      {/*Footer Section*/}
      <footer className={styles.foot}>
        <hr class={styles.foot__border} />
        <h1 className={styles.gd__texth3}>Developers</h1>
        <ul className={styles.role__list}>
          <li>
            <h2>Front-end</h2>
            <hr />
            <ul className={styles.front__info}>
              <li>
                <a href="https://github.com/likegitman">
                  <img src="img/woonrin.jpg" alt="woonrin" />
                </a>
                <span>이운린</span>
              </li>
            </ul>
          </li>
          <li>
            <h2>Back-end</h2>
            <hr />
            <ul className={styles.back__info}>
              <li>
                <a href="https://github.com/min9-530">
                  <img src="img/minsu.jpg" alt="minsu" />
                </a>
                <span>김민수</span>
              </li>
              <li>
                <a href="https://github.com/eggfry313">
                  <img src="img/chan.jpg" alt="chanjeong" />
                </a>
                <span>계찬정</span>
              </li>
              <li>
                <a href="https://github.com/BelraQ">
                  <img src="img/Yeonkyun.png" alt="yeonkyun" />
                </a>
                <span>나연균</span>
              </li>
            </ul>
          </li>
        </ul>
      </footer>
    </div>
  );
}

export default Hview;
