import React from 'react';

function About(props) {
    const about = [
        {
            id: 1,
            why: "6 лет",
            text: "В сфере рекламы"
        },
        {
            id: 2,
            why: "более 100",
            text: "Наших постоянных клиентов"
        },
        {
            id: 3,
            why: "+20%",
            text: "Конверсия продаж"
        },
        {
            id: 4,
            why: "-70%",
            text: "Ошибок менеджеров"
        },

    ]

    return (
        <div className='about'>
            <div className='container'>
                <div className='about_start'>
                    <div className='about_text'>
                        <h3>МЫ ЗНАЕМ ТОЛК В ДИЗАЙНЕ!</h3>
                    </div>
                    <div className='about_numbers'>
                        {
                            about.map(x =>{
                                return(
                                    <div className='about_map' key={x.id}>
                                        <h4>{x.why}</h4>
                                        <p>{x.text}</p>
                                    </div>
                                )
                            })
                        }
                    </div>
                </div>


            </div>
            
        </div>
    );
}

export default About;