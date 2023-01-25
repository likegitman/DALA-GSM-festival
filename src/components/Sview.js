import styles from "../styles/signup.module.css";
import { Link } from "react-router-dom";
// import { useForm } from "react-hook-form";
import axios from "axios";
import { useNavigate } from "react-router-dom";
const SERVER_URL = "/api/login";

function Sview() {
  const replace = useNavigate();

  const onSubmitHandler = async (e) => {
    e.preventDefault();
    const name = e.target.name.value;
    const email = e.target.email.value;

    await axios
      .post(SERVER_URL, { name, email })
      .then((response) => {
        console.log(response.data);
        replace(`/DALA/signup`);
      })
      .catch((error)=>{
        console.log(error);
      });
  };

  return (
    <div className={styles.signup__box}>
      <h1 className={styles.title}>DALA</h1>
      <form
        className={styles.signup__form}
        onSubmit={onSubmitHandler}
        autoCapitalize="off"
      >
        <label>이메일 생성</label>
        <input
          type="email"
          name="email"
          placeholder="학교 이메일을 입력해주세요"
          pattern="(\W|^)[\w.\-]{0,25}@(gsm.hs)\.kr(\W|$)"
          // {...register("email", {
          //   required: true,
          //   pattern: (\W|^)[\w.\-]{0,25}@(gsm.hs)\.kr(\W|$),
          // })}
        />
        {/* {errors.email && errors.email.type === "required" && (
          <p className={styles.error__p}>이메일이 입력되지 않았습니다!</p>
        )}
        {errors.email && errors.email.type === "pattern" && (
          <p className={styles.error__p}>저희 학교 이메일이 아닙니다!</p>
        )} */}

        <label>이름 생성</label>
        <input
          type="text"
          name="name"
          placeholder="이름을 입력해주세요"
          maxLength="3"
          // {...register("name", { required: true, maxLength: 3 })}
        />
        {/* {errors.name && errors.name.type === "required" && (
          <p className={styles.error__p}>이름이 입력되지 않았습니다!</p>
        )}
        {errors.name && errors.name.type === "maxLength" && (
          <p className={styles.error__p}>이름을 3글자 이하로 적어주세요!</p>
        )} */}

        <button type="submit" className={styles.signup__btn}>
          회원가입
        </button>
      </form>
      <span>이미 계정이 있으신가요?</span>
      <Link to={`/DALA/login`} className={styles.if__login}>
        로그인
      </Link>
    </div>
  );
}

export default Sview;
