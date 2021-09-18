function About() {
  return (
    <>
      <div>
        <h1 className="title"> Tish Faroul ⚡️🎧🌙 </h1>
        <p className="about-info">
          - Software Engineering Student at Flatiron School
          <br />
          -placeholder
          <br />- placeholder
        </p>
      </div>
      <br />

      <p></p>

      <footer className="footer">
        <a href="mailto:lfaroul14@gmail.com">
          {" "}
          <img
            alt="EMAIL"
            src="https://www.vippng.com/png/detail/113-1134424_logo-email-preto-png-transparent-background-logo-email.png"
            width="180"
            height="120"
          />{" "}
        </a>
        <span>
          <a href="https://github.com/LatishaFar1">
            {" "}
            <img
              alt="GITHUB"
              src="https://cdn-icons-png.flaticon.com/512/25/25231.png"
              width="120"
              height="120"
            />{" "}
          </a>
        </span>
      </footer>
    </>
  );
}

export default About;
