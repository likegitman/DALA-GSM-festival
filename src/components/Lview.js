import styles from "../styles/login.module.css";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const SERVER_URL = "/api/login";

function Lview() {
  const replace  = useNavigate();

  const onSubmitHandler = async (e) => {
    e.preventDefault();
    const name = e.target.name.value;
    const email = e.target.email.value;
    //const password = e.target.password.value;

    await axios
      .post(SERVER_URL, { name: name, email: email}, {withCredentials: true})
      .then((response) => {
        console.log(response.data);
        
        replace(`/`);
      }).catch((error)=>{
        alert("로그인 오류입니다!");
      });
  };

  return (
    <div className={styles.login__box}>
      <h1 className={styles.title}>DALA</h1>
      <form
        autoComplete="off"
        className={styles.login__form}
        onSubmit={onSubmitHandler}
      >
        <label>이메일</label>
        <input
          type="email"
          name="email"
          placeholder="생성한 이메일을 입력해주세요"
          pattern="(\W|^)[\w.-]{0,25}@(gsm.hs).kr(\W|$)"
          // {...register("email", {
          //   required: true,
          //   pattern: /(\W|^)[\w.\-]{0,25}@(gsm.hs)\.kr(\W|$)/,
          // })}
        />
        {/* {errors.email && errors.email.type === "required" && (
          <p className={styles.error__p}>이메일이 입력되지 않았습니다!</p>
        )}
        {errors.email && errors.email.type === "pattern" && (
          <p className={styles.error__p}>저희 학교 이메일이 아닙니다!</p>
        )} */}

        <label>이름</label>
        <input
          type="text"
          name="name"
          placeholder="생성한 이름을 입력해주세요."
          maxLength="3"
          // {...register("password", {
          //   required: true,
          //   pattern:
          //     /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/,
          // })}
        />
        {/* {errors.password && errors.password.type === "required" && (
          <p className={styles.error__p}>비밀번호가 입력되지 않았습니다!</p>
        )}
        {errors.password && errors.password.type === "pattern" && (
          <p className={styles.error__p}>비밀번호 패턴을 맞춰주세요!</p>
        )} */}

        <input type="submit" className={styles.login__btn} value="로그인" />
      </form>
      <span>아직 회원이 아니신가요?</span>
      <Link to={`/DALA/signup`} className={styles.if__nosignup}>
        회원가입
      </Link>
    </div>
  );
}

export default Lview;