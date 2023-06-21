import React from 'react'

function Footer() {
  return (
    <>
    <section className="reviews" id="reviews">
        <div className="heading">
            <span>Reviews</span>
            <h1>whats Our Customer Say</h1>
        </div>
        <div className="reviews-container">
            <div className="box">
                <div className="rev-img">
                    <img src="https://tse1.mm.bing.net/th?id=OIP.HgOMMBlkQkB1hjkmHNgPRQAAAA&pid=Api&P=0&h=180" alt=""/>
                </div>
                <h2>Noah</h2>
                <div className="stars">
                    <i className='bx bxs-star'></i>
                    <i className='bx bxs-star'></i>
                    <i className='bx bxs-star'></i>
                    <i className='bx bxs-star'></i>
                    <i className='bx bxs-star-half'></i>
                </div>
                <p>The driver was extremely polite, and that's one of the most important requirements for an outstation cab. He drove carefully, never taking any risks, and never refused to ply us anywhere.</p>
            </div>

            <div className="box">
                <div className="rev-img">
                    <img src="https://tse4.mm.bing.net/th?id=OIP.hZx8XluN1Xagr6SF9cocdQHaIC&pid=Api&P=0&h=180" alt=""/>
                </div>
                <h2>Margaret</h2>
                <div className="stars">
                    <i className='bx bxs-star'></i>
                    <i className='bx bxs-star'></i>
                    <i className='bx bxs-star'></i>
                    <i className='bx bxs-star'></i>
                    <i className='bx bxs-star-half'></i>
                </div>
                <p>Journey was good. Car was clean. Driver was on time, polite and effiefficient and it was his first trip to Veĺlankanni. Overall satsfactory experience.</p>
            </div>

            <div className="box">
                <div className="rev-img">
                    <img src="https://tse1.mm.bing.net/th?id=OIP.t5Gg-YJbApcSDhWOFrkFwAHaLH&pid=Api&P=0&h=180" alt=""/>
                </div>
                <h2>Muhammad</h2>
                <div className="stars">
                    <i className='bx bxs-star'></i>
                    <i className='bx bxs-star'></i>
                    <i className='bx bxs-star'></i>
                    <i className='bx bxs-star'></i>
                    <i className='bx bxs-star-half'></i>
                </div>
                <p>The driver arrived before time and facilitated us for our needs, he was very well behaved and professional driver. He was very clear in accounts. No tips no favours asked by him, that's a surprise. Overall it was a pleasant trip.</p>
            </div>
        </div>
    </section>
    </>
  )
}

export default Footer