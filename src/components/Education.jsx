import React from 'react';
import './Education.css';

function Education() {
  return (
    <section id="education">
      <div className="education-container active">
        <div className="education-content">
          <div className="blur-box show">
            <div className="education-box">
              <img src="img/stacruz.jpg" className="education-image" alt="Elementary" />
              <div className="education-box-title">Elementary</div>
              <div className="education-box-content">
                Sta Cruz Elementary School <br /> 2011-2017
              </div>
            </div>
            <div className="education-box">
              <img src="img/camhigh.jpg" className="education-image" alt="Junior High" />
              <div className="education-box-title">Junior High School</div>
              <div className="education-box-content">
                Camarines Sur National Highschool <br /> Basic Education Program (B.E.P) <br /> 2017-2021
              </div>
            </div>
            <div className="education-box">
              <img src="img/camhigh.jpg" className="education-image" alt="Senior High" />
              <div className="education-box-title">Senior High School</div>
              <div className="education-box-content">
                Camarines Sur National Highschool <br /> Technical-Vocational-Livelihood (T.V.L) <br /> 2021-2023
              </div>
            </div>
            <div className="education-box">
              <img src="img/ncf.jpg" className="education-image" alt="College" />
              <div className="education-box-title">College</div>
              <div className="education-box-content">
                Naga College Foundation Inc. <br /> Bachelor of Science in Information System (BSIS)
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Education;
