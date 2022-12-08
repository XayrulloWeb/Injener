import React from 'react';
import Logo from "../Images/logo.png"

function Footer(props) {
    return (
        <div className='footer'>
            <div className='container'>
                <div className='footer_start'>
                    <div className='footer_left'>
                        <img src={Logo} alt="logo" />
                        <p>Политика</p>
                        <p className='footer_left-text'>Кондефициальность</p>
                        <button>Обратная связь</button>
                    </div>

                    <div className='footer_center'>
                        <div className='footer_center-generel-text'>
                            <h3>Информация</h3>
                        </div>
                        <div className='footer_center-text'>
                            <p>Главная</p>
                            <p>Услуги</p>
                            <p>Наши работы</p>
                            <p>Контакты</p>
                        </div>
                    </div>

                    <div className='footer_right'>
                        <div className='footer_right-generel-text'>
                            <h3>Услуги</h3>
                        </div>
                        <div className='footer_right-text'>
                            <p>Реклама в интернете</p>
                            <p>Дизайн вывесок и рекламы</p>
                            <p>Дизайн сайтов на Тильде</p>
                            <p>СММ</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Footer;