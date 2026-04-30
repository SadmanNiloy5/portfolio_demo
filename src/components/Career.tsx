import "./styles/Career.css";

const Career = () => {
  return (
    <div className="career-section section-container">
      <div className="career-container">
        <h2>
          Education <span>&</span>
          <br /> qualifications
        </h2>
        <div className="career-info">
          <div className="career-timeline">
            <div className="career-dot"></div>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>BSc in CSE</h4>
                <h5>AIUB</h5>
              </div>
              <h3>Current</h3>
            </div>
            <p>
              Pursuing a Bachelor of Science in Computer Science and Engineering.
              Achieved a CGPA of 3.75 so far.
            </p>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Higher Secondary Certificate</h4>
                <h5>College</h5>
              </div>
              <h3>HSC</h3>
            </div>
            <p>
              Completed Higher Secondary Certificate with a GPA of 5.00.
            </p>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Secondary School Certificate</h4>
                <h5>School</h5>
              </div>
              <h3>SSC</h3>
            </div>
            <p>
              Completed Secondary School Certificate with a GPA of 5.00.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Career;
