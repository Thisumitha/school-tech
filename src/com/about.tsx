import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.min.js';
import logo from '../assets/logo.jpeg'
import './about.css'
function About() {
    return (
    <>
            <hr className="featurette-divider" />

            <div className="row featurette">
                <div className="col-md-7">
                    <h2 className="featurette-heading fw-normal lh-1">ABOUT US </h2>
                    <h2 className="featurette-heading fw-normal lh-1">Welcome To The Official Site Of Pinnawala Central College </h2>
                    <p className="lead">Pinnawala Central College is a public school located in Rambukkana in Sri Lanka. The college is approximately 2 km from Rambukkana town and approximately 7 km away from Kegalle city. The college is funded b the Ministry of Education, which appoints its Principal. The Principal is the head of the administration of the college and is assisted by Vice Principals. The college educates nearly 3000 students in both junior and senior education. Administration of the college hostels is carried out by the Warden under supervision of the Principal an is assisted by a Sub-warden.</p>
                </div>
                <div className="col-md-5">
                    <img className="setLogo" src={logo} alt="" />
                </div>

            </div>
            <hr className="featurette-divider"/>
            <div className="row featurette">
                <div className="col-md-7 order-md-2">
                    <h2 className="featurette-heading fw-normal lh-1">MR. WASANTHA KUMARA <span className="text-body-secondary">Principal's Message</span></h2>
                    <p className="lead">“To fight the bad in the society , there is good. So however it is hard to find the good , we have to find it. Then our society will be better without our notice.”</p>
                </div>
                <div className="col-md-5 order-md-1">
                    <svg className="bd-placeholder-img bd-placeholder-img-lg featurette-image img-fluid mx-auto" width="500" height="500" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Placeholder: 500x500" preserveAspectRatio="xMidYMid slice" focusable="false"><title>Placeholder</title><rect width="100%" height="100%" fill="var(--bs-secondary-bg)" /><text x="50%" y="50%" fill="var(--bs-secondary-color)" dy=".3em">500x500</text></svg>
                </div>
            </div>

            <hr className="featurette-divider"/>

                <div className="row featurette">
                    <div className="col-md-7">
                        <h2 className="featurette-heading fw-normal lh-1">And lastly, this one. <span className="text-body-secondary">Checkmate.</span></h2>
                        <p className="lead">And yes, this is the last block of representative placeholder content. Again, not really intended to be actually read, simply here to give you a better view of what this would look like with some actual content. Your content.</p>
                    </div>
                    <div className="col-md-5">
                        <svg className="bd-placeholder-img bd-placeholder-img-lg featurette-image img-fluid mx-auto" width="500" height="500" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Placeholder: 500x500" preserveAspectRatio="xMidYMid slice" focusable="false"><title>Placeholder</title><rect width="100%" height="100%" fill="var(--bs-secondary-bg)" /><text x="50%" y="50%" fill="var(--bs-secondary-color)" dy=".3em">500x500</text></svg>
                    </div>
                </div>

            </>
            );
}

            export default About;
