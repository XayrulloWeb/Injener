import React from 'react';
import contact from "../Images/contact_img.png"

function Contact(props) {
    return (
        <div className='contact'>
            <div className='container'>
                <div className='contact_start'>
                    <div className='contant_left'>
                        <div className='contact_generel-text'>
                            <h3>заказать Консультацию <br /> СПЕЦИАЛИСТА!</h3>
                        </div>
                        <div className='contact_text'>
                            <p>Заполните форму и мы свяжемся с вами в ближайшее время!</p>
                        </div>
                        <div className='contact_filling'>
                            <input className='contact_input-name' type="text" placeholder='Ваше имя...' />
                            <input className='contact_input-number' type="number" placeholder="Номер вашего телефона" />
                        </div>
                        <div className='x'>
                            <input className='contact_input-text' type="text" placeholder='Ваш вопрос' />
                        </div>
                        <div className='contact_agreement'>
                            <input type="checkbox" />
                            <p>Я согласен с условиями обработки персональных данных </p>
                        </div>
                        <div className='contact_button'>
                            <button>Отправить</button>
                        </div>
                    </div>

                    <div className='contact_right'>
                        <img src={contact} alt="contact_img" />
                    </div>
                </div>

            </div>

        </div>
    );
}

export default Contact;