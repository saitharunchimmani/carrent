import React from 'react'
import { useNavigate } from 'react-router-dom'
function Content() {
    const navigate=useNavigate();
    const RentBtn=()=>{
        navigate('/Book-page')
    }
  return (
    <>
    <section className="services" id="services">
        <div className="heading">
            <span>Best Services</span>
            <h1>Explore out Top Deals <br/> From Top Rated Dealers</h1>
        </div>
        <div className="services-container">
            <div className="box">
            <div className="box-img">
                    <img src="https://tse3.mm.bing.net/th?id=OIP.6GEM-_Q1BNmB4e30w2cJvAHaEs&pid=Api&P=0&h=180" alt=""/>
                </div>
                <p>2021</p>

                <h3>2021 Mahindra Thar </h3>
                <h2>Rs:5000 <span>/perDay</span></h2>
                <button type="submit" onClick={RentBtn}>Rent Now</button>
            </div>

            <div className="box">
                <div className="box-img">
                    <img src="https://th.bing.com/th/id/OIP.mKn2uGuq3f5qAsUGkAHQZQHaEc?w=290&h=180&c=7&r=0&o=5&pid=1.7"
                        alt=""/>
                </div>
                <p>2020</p>
                <h3>2020 Maruti Ertiga</h3>
                <h2>Rs:3000 |Rs:3500<span>/Per day</span></h2>
                <button type="submit" onClick={RentBtn}>Rent Now</button>
            </div>
            <div className="box">
                <div className="box-img">
                    <img src="https://th.bing.com/th/id/OIP.BadX7Gi9qPsRFu7i8j9haQAAAA?w=292&h=180&c=7&r=0&o=5&pid=1.7"
                        alt=""/>
                </div>
                <p>2020</p>
                <h3>2018 Innova Crystra</h3>
                <h2>Rs:3500<span>/PerDay</span></h2>
                <button type="submit" onClick={RentBtn}>Rent Now</button>
            </div>
            <div className="box">
                <div className="box-img">
                    <img src="https://tse2.mm.bing.net/th?id=OIP.L6ysPMTe0zeQeafMi8CpbQHaEK&pid=Api&P=0&h=180" alt=""/>
                </div>
                <p>2017</p>
                <h3>2018 Hyundai creta</h3>
                <h2>3000 <span>/PerDay</span></h2>
                <button type="submit" onClick={RentBtn}>Rent Now</button>
            </div>
            <div className="box">
                <div className="box-img">
                    <img src="https://media.ed.edmunds-media.com/honda/civic/2018/oem/2018_honda_civic_coupe_touring_fq_oem_1_815x543.jpg"
                        alt=""/>
                </div>
                <p>2017</p>
                <h3>2018 Honda Civic</h3>
                <h2>Rs.3000 <span>/PerDay</span></h2>
                <button type="submit" onClick={RentBtn}>Rent Now</button>
            </div>

            <div className="box">
                <div className="box-img">
                    <img src="https://tse1.mm.bing.net/th?id=OIP.9DC3G8imdbicr4izLCZhzQHaEK&pid=Api&P=0&h=180"
                        alt=""/>
                </div>
                <p>2022</p>
                <h3>2022 Renault Kwid</h3>
                <h2> Rs.2500 | Rs.3000 <span>/PerDay</span></h2>
                <button type="submit" onClick={RentBtn}>Rent Now</button>
            </div>
        </div>
    </section>
    
    </>
  )
}

export default Content