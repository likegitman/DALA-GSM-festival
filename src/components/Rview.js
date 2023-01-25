import styles from "../styles/reserv.module.css";
import moment from "moment";
import { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

const SERVER_URL_LOGIN = "http://localhost:8070/api/login";

function Rview() {
  const [apply, setApply] = useState(true);
  const [canceled, setCanceled] = useState(false);
  const [impo, setImpo] = useState(false);
  const [selectedNum, setSelectedNum] = useState();
  const [selectedClass, setSelectedClass] = useState();
  const [user, setUser] = useState(0);
  const optionList1 = [
    { id: 2, list: 2 },
    { id: 3, list: 3 },
    { id: 4, list: 4 },
    { id: 5, list: 5 },
  ];
  const optionList2 = [
    { id: 10, list: 10 },
    { id: 11, list: 11 },
  ];

  const [userList10, setUserList10] = useState([]);
  const [userList11, setUserList11] = useState([]);
  const [listCnt10, setListCnt10] = useState(0);
  const [listCnt11, setListCnt11] = useState(0);

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

  // 현재 시간 출력
  let timer;
  const [time, setTime] = useState(moment());

  useEffect(() => {
    timer = setInterval(() => {
      setTime(moment());
    }, 1000);
    return () => {
      clearInterval(timer);
    };
  }, []);

  const userPlus = () => {
    if (user === 34) {
      setUser(34);
    } else if (selectedClass === "10") {
      if (selectedNum !== "1") {
        if (listCnt10 > 17) {
          alert("10교시는 17명까지입니다!");
          setUser(user - Number(selectedNum));
          setListCnt10(listCnt10 - Number(selectedNum));
          userList10.pop();
          // setUserList10(userList10.filter((user10)=>user10===name + "님 및 " + Number(selectedNum - 1) + "명"));
          setUserList11(userList11);
        } else {
          if (listCnt10 === 17) {
            setListCnt10(17);
          } else {
            setListCnt10(listCnt10 + Number(selectedNum));
            userList10.push(name + "님 및 " + Number(selectedNum - 1) + "명");
            // setUserList10((currentArray) => [name + "님 및 " + Number(selectedNum - 1) + "명", ...userList10]);
            setUser(user + Number(selectedNum));
            setApply(false);
            setCanceled(true);
            setUserList11(userList11);
          }
        }
      }
    } else if (selectedClass === "11") {
      if (selectedNum !== "1") {
        if (listCnt11 > 17) {
          alert("11교시는 17명까지입니다!");
          setUser(user - Number(selectedNum));
          setListCnt11(listCnt11 - Number(selectedNum));
          userList11.pop();
          // setUserList11(userList11.filter((user11)=>user11===name + "님 및 " + Number(selectedNum - 1) + "명"));
          setUserList10(userList10);
        } else {
          if (listCnt11 === 17) {
            setListCnt11(17);
          } else {
            setListCnt11(listCnt11 + Number(selectedNum));
            userList11.push(name + "님 및 " + Number(selectedNum - 1) + "명");
            // setUserList11((currentArray) => [name + "님 및 " + Number(selectedNum - 1) + "명", ...userList11]);
            setUser(user + Number(selectedNum));
            setApply(false);
            setCanceled(true);
            setUserList10(userList10);
          }
        }
      }
    }
  };

  const userMinus = () => {
    if (user === 0) {
      setUser(0);
    } else {
      if (selectedClass === "10") {
        userList10.pop();
        // setUserList10(userList10.filter((user10)=>user10===name + "님 및 " + Number(selectedNum - 1) + "명"));
        setUser(user - Number(selectedNum));
        setCanceled(false);
        setImpo(true);
      } else if (selectedClass === "11") {
        userList11.pop();
        // setUserList11(userList11.filter((user11)=>user11===name + "님 및 " + Number(selectedNum - 1) + "명"));
        setUser(user - Number(selectedNum));
        setCanceled(false);
        setImpo(true);
      }
    }
  };

  const onSelectedNum = (e) => {
    setSelectedNum(e.target.value);
  };

  const onSelectedClass = (e) => {
    setSelectedClass(e.target.value);
  };

  // useEffect(()=>{
  //   if(time.format("HH:mm:ss")>="18:30:00" && time.format("HH:mm:ss")<="19:30:00"){
  //     setApply(true);
  //     setCanceled(false);
  //     setImpo(false);
  //   }
  //   else{
  //     setApply(false);
  //     setImpo(true);
  //   }
  // }, [time]);

  localStorage.setItem("")

  return (
    <div>
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
        <div className={styles.time__space}>
          <h1 className={styles.gd__time}>18 : 30 분부터 신청이 가능합니다.</h1>
          <div className={styles.time}>{time.format("HH:mm:ss")}</div>
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
          {apply === true && canceled === false && impo === false ? (
            <form onSubmit={userPlus} className={styles.apply__box}>
              <div className={styles.apply__inbox}>
                <div
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                    width: "20%",
                  }}
                >
                  <h1>인원</h1>
                  <select
                    value={selectedNum}
                    onChange={onSelectedNum}
                    className={styles.apply__select__num}
                    name="person"
                  >
                    <option>선택</option>
                    {optionList1.map((option1) => (
                      <option key={option1.id} value={option1.id}>
                        {option1.list}
                      </option>
                    ))}
                  </select>
                </div>
                <div
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                    width: "20%",
                  }}
                >
                  <h1>교시</h1>
                  <select
                    value={selectedClass}
                    onChange={onSelectedClass}
                    className={styles.apply__select__class}
                    name="classTime"
                  >
                    <option>선택</option>
                    {optionList2.map((option2) => (
                      <option key={option2.id} value={option2.id}>
                        {option2.list}
                      </option>
                    ))}
                  </select>
                </div>
              </div>
              <button className={styles.apply__btn} type="submit">
                신청
              </button>
            </form>
          ) : null}

          {apply === false && canceled === true && impo === false ? (
            <button className={styles.canceled__btn} onClick={userMinus}>
              신청 취소
            </button>
          ) : null}

          {apply === false && canceled === false && impo === true ? (
            <button className={styles.impo__btn}>신청 불가</button>
          ) : null}
        </div>

        <div className={styles.res__sec2}>
          <h1 style={{ fontSize: "2.2rem" }}>명단 ({user} / 34)</h1>
          <div className={styles.res__space2}>
            <div className={styles.show__list}>
              <span>10교시</span>
              <span>11교시</span>
            </div>
            <div style={{ display: "flex", justifyContent: "space-around" }}>
              <ul className={styles.class__10}>
                {userList10.map((list10, index) => (
                  <li key={index}>{list10}</li>
                ))}
              </ul>
              <ul className={styles.class__11}>
                {userList11.map((list11, index) => (
                  <li key={index}>{list11}</li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>
      {/*Footer Section*/}
      <footer className={styles.foot}>
        <hr className={styles.foot__border} />
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

export default Rview;
