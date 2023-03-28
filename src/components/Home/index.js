import { Link } from 'react-router-dom';
import LogoTitle from '../../assets/images/logo-s.png';
import './index.scss';
const Home = () => {


    return (
        <div className="container home-page">
            <h1>Hi, <br/> I,m  .
            <img src={LogoTitle} alt="developer"/>
            imanshu
            <br/>
            Web developer
            </h1>
            <h2>Frontend Developer / Javascript Expert / Open-Source COntributor</h2>
            <Link to="/contact" className='flat-button'>CONTACT-ME</Link>
        </div>
    )
}

export default Home