import React from "react";
import doctor from "../assets/images/heroimg.jpg";
import profile1 from "../assets/images/profile-1.png";
import profile2 from "../assets/images/profile-2.png";
import profile3 from "../assets/images/profile-3.png";
import profile4 from "../assets/images/profile-4.png";
// import profile5 from "../assets/images/profile-5.png";
// import profile6 from "../assets/images/profile-6.png";
// import profile7 from "../assets/images/profile-7.png";
// import profile8 from "../assets/images/";
import DoctorCard from "../Doctor/DoctorCard";
import "./Doctor.css";

const Doctor = () => {
  return (
    <div>
      <section className="hero">
        <div className="hero-content">
          <h1>
            Your Health, <br />
            Our Responsibility
          </h1>
          <p>
            You came to the right place. Get support for stress, family issues,
            life balance from your home. Consulting a healthcare professional,
            buying medicine, ordering lab tests and improving your health and
            wellbeing, all can be done 24/7 with DocTime!
          </p>
          <div>
            <ul className="ft-list-items">
              <li>
                <a href="mailto:support@healthplus.com">
                  support@healthcare.com
                </a>
              </li>
              <li>
                <a href="mailto:appointment@healthplus.com">
                  healthcareUs@gmail.com
                </a>
              </li>
              <li>
                <a href="tel:+022 5454 5252">+022 5454 5252</a>
              </li>
              <li>
                <a href="tel:+022 2326 6232">+022 2326 6232</a>
              </li>
            </ul>
          </div>
        </div>
        <div className="hero-img">
          <img src={doctor} alt="hero" />
        </div>
      </section>

      <section className="doctors">
        <div className="doctor-section" id="doctors">
          <div className="dt-title-content">
            <h3 className="dt-title">
              <span>Meet Our Doctors</span>
            </h3>

            <p className="dt-description">
              Meet our exceptional team of specialist doctors, dedicated to
              providing top-notch healthcare services at Health Plus. Trust in
              their knowledge and experience to lead you towards a healthier and
              happier life.
            </p>
          </div>

          <div className="dt-cards-content">
            <DoctorCard
              img={profile1}
              name="Dr. Kathryn Murphy"
              title="General Surgeons"
              stars="4.9"
              reviews="1800"
              phoneNumber="123-321-1122"
            />
            <DoctorCard
              img={profile2}
              name="Dr. Jacob Jones"
              title="Hematologists"
              stars="4.8"
              reviews="700"
              phoneNumber="456-654-4455"
            />
            <DoctorCard
              img={profile3}
              name="Dr. Jenny Wilson"
              title="Endocrinologists"
              stars="4.7"
              reviews="450"
              phoneNumber="789-987-7788"
            />
            <DoctorCard
              img={profile4}
              name="Dr. Albert Flores"
              title="Orthopedic surgeons"
              stars="4.4"
              reviews="670"
              phoneNumber="987-789-9988"
            />
            <DoctorCard
              // img={profile5}
              name="Dr. Mahendra Mukherjee"
              title="Neurologists"
              stars="4.8"
              reviews="960"
              phoneNumber="654-456-6655"
            />
            <DoctorCard
              // img={profile6}
              name="Dr. Dhanshree Joshi"
              title="physiotherapist"
              stars="4.7"
              reviews="800"
              phoneNumber="321-123-3322"
            />
            <DoctorCard
              // img={profile7}
              name="Dr. Suzanne Holroyd"
              title="Pulmonologists"
              stars="4.5"
              reviews="900"
              phoneNumber="678-980-8888"
            />
            <DoctorCard
              // img={profile8}
              name="Dr. Puneet Girdhar"
              title="Cardiologists"
              stars="4.9"
              reviews="980"
              phoneNumber="456-987-4499"
            />
          </div>
        </div>
      </section>
    </div>
  );
};

export default Doctor;
