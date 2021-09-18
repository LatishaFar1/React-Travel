import "./style.css";

function Home() {
  return (
    <>
      <h1 className="title"> Welcome </h1>
      <div className="home-box">
        <div className="home-desc-box">
          <h3> About this demo</h3>
          <p>
            _____________________ place desc here
            <br />
            _____________________
          </p>
          <div class="home-img">
            <img
              src="https://images.unsplash.com/photo-1508672019048-805c876b67e2?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1400&q=80"
              alt="home logo"
            />
          </div>
        </div>
      </div>
    </>
  );
}

export default Home;