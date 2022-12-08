import React from 'react';
import Alibaba from "../Images/Alibaba.png"
import google from "../Images/logo-google.png"
import yandex from "../Images/yandex.png"
import group from "../Images/Group.png"

function System(props) {
    return (
        <div className='system'>
            <div className='container'>
                <div className='system_start-generel'>
                    <h2>Наш Работы</h2>
                </div>

                <div className='system_start'>
                    <div className='system_left'>
                        <div className='system_left-block'>
                            <div className='system_left-block_one'>
                                <img src={Alibaba} alt="logo" />
                                <p>Самая крупная в Финляндии компания по обработке камня и крупнейший в мире производитель теплоаккумулирующих печей каминов текст пример</p>
                            </div>

                            <div className='system_left-block_two'>
                                <h5>Результат:</h5>
                                <div className='block_two-percent'>
                                    <div className='block_two-percent-one'>
                                        <span className="percent_span">+85,71%</span>
                                        <p>Увелечение количества <br/> обращений с рекламы</p>
                                    </div>

                                    <div className='block_two-percent-two'>
                                        <span className="percent_span">+85,71%</span>
                                        <p>Увелечение <br/> конверсы</p>
                                    </div>

                                    <div className='block_two-percent-one'>
                                        <span className="percent_span">-50%</span>
                                        <p>Снижение стоимости <br/> за обращение</p>
                                    </div>
                                </div>
                            </div>

                            <div className='system_left-block_three'>
                                <h5>Системы:</h5>
                                <div className='system_left-block_three-sponsor'>
                                    <img src={google} alt="logo" />
                                    <img src={yandex} alt="logo" />
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className='system_right'>
                        <div className='system_right-block'>
                            <div className='system_right-block_one'>
                                <img src={group} alt="logo" />
                                <p>Самая крупная в Финляндии компания по обработке камня и крупнейший в мире производитель теплоаккумулирующих печей каминов текст пример</p>
                            </div>

                            <div className='system_right-block_two'>
                                <h5>Результат:</h5>
                                <div className='block_two-percent'>
                                    <div className='block_two-percent-one'>
                                        <span className="percent_span">+85,71%</span>
                                        <p>Увелечение количества <br/> обращений с рекламы</p>
                                    </div>

                                    <div className='block_two-percent-two'>
                                        <span className="percent_span">+85,71%</span>
                                        <p>Увелечение <br/> конверсы</p>
                                    </div>

                                    <div className='block_two-percent-one'>
                                        <span className="percent_span">-50%</span>
                                        <p>Снижение стоимости <br/> за обращение</p>
                                    </div>
                                </div>
                            </div>

                            <div className='system_right-block_three'>
                                <h5>Системы:</h5>
                                <div className='system_right-block_three-sponsor'>
                                    <img src={google} alt="logo" />
                                    <img src={yandex} alt="logo" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default System;