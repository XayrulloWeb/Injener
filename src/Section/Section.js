import React from 'react';

function Section(props) {
    const product = [
        {
            id:1,
            gtext:"Рекламные  материалы",
            money: "2000 руб."            
        },
        {
            id:2,
            gtext:"бренд Дизайн",
            money: "2000 руб."
        },
        {
            id:3,
            gtext:"Дизайн вывесок и рекламы",
            money: "2000 руб."
        },
        {
            id:4,
            gtext:"Digital  Дизайн",
            money: "2000 руб."
        },
         
     
    ]
    return (
        <div className='section'>
            <div className='container'>
                <div className='section_start'>
                    <div className='section_about'>
                        <h3>НАШИ УСЛУГИ</h3>
                    </div>
                    <div className='section_products'>
                        {
                            product.map(item => {
                                return(
                                    <div className='seection_product_box' key={item.id}>
                                    <div className='section_product'>
                                        <div className='section_product-about'>
                                            <p>{item.gtext}</p>
                                        </div>

                                        <div className='section_uz'>
                                            <div className='section_product-start' >
                                                <p>Верстка макетов</p>
                                                <p>Флаеры</p>
                                                <p>Визитки</p>
                                                <p>Листовки</p>
                                                <p>Брошюры</p>
                                            </div>
                                            <div className='section_product-money'>
                                                <p><span>Oт</span> {item.money}</p>
                                            </div>
                                        </div>
                                       
                                    </div>
                                    <div className='section_btn'>
                                        <button>Подробнее</button>
                                    </div>
        
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

export default Section;