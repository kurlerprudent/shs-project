import React from 'react'
import styles from './LoginPage.module.css'
import Link from 'next/link'

const LoginPage = () => {
  return (
    <div className={styles.container}>
        
<form className={styles.form}>
  <p>Login</p>
  <div className={styles.group}>
    <input required="true" className={styles.mainInput} type="text" />
    <span className={styles.highlightSpan}></span>
    <label className={styles.lebalEmail}>Email / Username</label>
  </div>
  <div className={styles.container1}>
    <div className={styles.group}>
      <input required="true" className={styles.mainInput} type="text" />
      <span className={styles.highlightSpan}></span>
      <label className={styles.lebalEmail}>password</label>
    </div>
  </div>
  <Link href="/auth/dashboard">
  <button className={styles.submit}>submit</button>
  </Link>
</form>
    </div>
  )
}

export default LoginPage