import styles from "../styles/commu.module.css";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import moment from "moment";
import axios from "axios";

const SERVER_URL_LOGIN = "http://localhost:8070/api/login";

function Cview() {
  let timer;
  const [time, setTime] = useState(moment());

  const [name, setName] = useState("");
  const [logined, setLogined] = useState(false);

  const axiosLoginData = async () => {
    await axios
      .get(SERVER_URL_LOGIN, { withCredentials: true })
      .then((response) => {
        setName(response.data);
        setLogined(true);
      })
      .catch((error) => {
        alert(error);
      });
  };

  useEffect(() => {
    axiosLoginData();
  }, []);

  useEffect(() => {
    timer = setInterval(() => {
      setTime(moment());
    }, 1000);
    return () => {
      clearInterval(timer);
    };
  }, []);

  useEffect(() => {
    if (
      time.format("HH:mm:ss") >= "19:00:00" &&
      time.format("HH:mm:ss") <= "22:00:00"
    ) {
      setMatters([]);
      setMattersNum(0);
      setAddInput(false);
    } else {
      setAddInput(true);
    }
  }, [time]);

  const noticeArr = [
    "GSM festival 프로젝트이자 홈베이스 예약 웹사이트 DALA입니다!",
    "이 프로젝트는 프론트엔드 1명과 백엔드 3명이 함께 개발하였습니다!",
    "불편사항이 있다면 올려주세요 적극 반영하겠습니다!",
  ];

  const [value, setValue] = useState("");
  const [mattersNum, setMattersNum] = useState(0);
  const [matters, setMatters] = useState([]);
  const [addInput, setAddInput] = useState(true);

  const onChange = (e) => {
    setValue(e.target.value);
  };

  const onSubmit = (e) => {
    e.preventDefault();
    if (value === "") {
      return;
    }
    if (mattersNum === 5) {
      setAddInput(false);
    } else {
      setMattersNum(mattersNum + 1);
      if (mattersNum === 5) {
        setAddInput(false);
      }
      setMatters((currentArray) => [value, ...currentArray]);
      setValue("");
    }
  };

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
              Reservation
            </Link>
          </li>
          <li>
            <Link to={`/DALA/commu`} className={styles.navbar__links}>
              <b>Community</b>
            </Link>
          </li>
          <li>
            <h1 className={styles.navbar__name}>{name}</h1>
          </li>
          <li>
            <Link to={`/DALA/login`}>
              {logined === false ? (
                <button className={styles.button}>Login</button>
              ) : (
                <button className={styles.button}>Logout</button>
              )}
            </Link>
          </li>
        </ul>
      </nav>
      <section>
        <div className={styles.commu__sec1}>
          <div className={styles.notice}>
            <h1 className={styles.notice__text}>공지</h1>
            <h1 className={styles.notice__text}>
              {noticeArr[Math.floor(Math.random() * noticeArr.length)]}
            </h1>
          </div>
        </div>
        <div className={styles.commu__sec2}>
          <h1 className={styles.inconvenience}>불편사항 ({mattersNum} / 5)</h1>
          {addInput ? (
            <form
              autoComplete="new-password"
              className={styles.matter__form}
              onSubmit={onSubmit}
            >
              <input
                maxLength="35"
                type="text"
                value={value}
                onChange={onChange}
              />
              <button>추가</button>
            </form>
          ) : null}
          <div className={styles.commu__space}>
            <ul className={styles.matters__list}>
              {Array.isArray(matters)
                ? matters.map((matter, index) => (
                      <li className={styles.speech__bubble} key={index}>
                        {matter}
                      </li>
                  ))
                : null}
            </ul>
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

export default Cview;
