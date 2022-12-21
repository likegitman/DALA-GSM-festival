import styles from "../styles/login.module.css";
import { Link } from "react-router-dom";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { useRef } from "react";

function Lview() {
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
    <div className={styles.login__box}>
      <h1 className={styles.title}>DALA</h1>
      <form
        autocomplete="off"
        className={styles.login__form}
        onSubmit={handleSubmit(onSubmit)}
      >
        <label>이메일</label>
        <input
          type="email"
          name="email"
          placeholder="우리 학교 이메일을 입력해주세요"
          {...register("email", {
            required: true,
            pattern: /(\W|^)[\w.\-]{0,25}@(gsm.hs)\.kr(\W|$)/,
          })}
        />
        {errors.email && errors.email.type === "required" && (
          <p>이메일이 입력되지 않았습니다!</p>
        )}
        {errors.email && errors.email.type === "pattern" && (
          <p>저희 학교 이메일이 아닙니다!</p>
        )}

        <label>이름</label>
        <input
          type="text"
          name="name"
          placeholder="이름을 입력해주세요"
          {...register("name", { required: true, maxLength: 3 })}
        />
        {errors.name && errors.name.type === "required" && (
          <p>이름이 입력되지 않았습니다!</p>
        )}
        {errors.name && errors.name.type === "maxLength" && (
          <p>이름을 3글자 이하로 작성해주세요!</p>
        )}

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
