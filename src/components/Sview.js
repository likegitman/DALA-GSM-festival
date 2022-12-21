import styles from "../styles/signup.module.css";
import { Link } from "react-router-dom";
import { useForm } from "react-hook-form";
import { useRef } from "react";

function Sview() {
  const {
    register,
    watch,
    formState: { errors },
    handleSubmit,
  } = useForm();

  const password = useRef();
  password.current = watch("password");

  const onSubmit = (data) => {
    console.log("data", data);
  };

  return (
    <div className={styles.signup__box}>
      <h1 className={styles.title}>DALA</h1>
      <form className={styles.signup__form} onSubmit={handleSubmit(onSubmit)}>
        <label>이메일</label>
        <input type="email" name="email" placeholder="학교 이메일을 입력해주세요"
            {...register("email", {required: true, pattern: /(\W|^)[\w.\-]{0,25}@(gsm.hs)\.kr(\W|$)/ })}
        />
        {errors.email && errors.email.type==="required" && <p>이메일이 입력되지 않았습니다!</p>}
        {errors.email && errors.email.type==="pattern" && <p>저희 학교 이메일이 아닙니다!</p>}

        <label>이름</label>
        <input type="text" name="name" placeholder="이름을 입력해주세요"
            {...register("name", {required: true, maxLength: 3})}
        />
        {errors.name && errors.name.type==="required" && <p>이름이 입력되지 않았습니다!</p>}
        {errors.name && errors.name.type==="maxLength" && <p>이름을 3글자 이하로 적어주세요!</p>}

        {/* <label>비밀번호</label>
        <input
          type="password"
          name="password"
          pattern="^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$"
          placeholder="최소 8자, 하나 이상의 문자, 하나의 숫자 및 하나의 특수 문자"
          {...register("password", {required: true})}
        />
        {errors.password && errors.password.type==="required" && <p>비밀번호가 입력되지 않았습니다!</p>}

        <label>비밀번호 확인</label>
        <input
          type="password"
          name="password__confirm"
          placeholder="비밀번호를 재입력해주세요"
          {...register("password__confirm", {required: true, validate: (value)=>value===password.current})}
        />
        {errors.password__confirm && errors.password__confirm.type==="required" && <p>비밀번호가 재입력되지 않았습니다!</p>}
        {errors.password__confirm && errors.password__confirm.type==="validate" && <p>위에서 작성한 비밀번호와 일치하지 않습니다!</p>} */}
        
        <input
          type="submit"
          name="submit"
          className={styles.signup__btn}
          value="회원가입"
        />
      </form>
      <span>이미 계정이 있으신가요?</span>
      <Link to={`/DALA/login`} className={styles.if__login}>
        로그인
      </Link>
    </div>
  );
}

export default Sview;
