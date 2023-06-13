import classes from '../components/Home.module.css'

function Home() {

  return (
    <>
      <div>
        <h1> Algorithm</h1>
        <h1> Study</h1>
        <h1> Manager</h1>
      </div>
      <br/><br/><br/>
      <div>
        <button className={classes.button}>체험하기</button>
      </div>
      <br></br>
      <div>
      <a href="https://kauth.kakao.com/oauth/authorize?response_type=code&client_id=066a9dce2159116612102daa2fb7c920&redirect_uri=http://localhost:8080
"><img className={classes.img} src="../src/assets/kakao_login_medium_narrow.png"/></a>
      </div>
    </>
  )
}

export default Home