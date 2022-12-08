import React from 'react';
import start from "../Images/start.png"

function Start(props) {
    return (
        <div className='start'>
            <div className='container'>
                <div className='start_content'>
                    <div className='start_left'>
                        <div className='start_text'>
                            <h3>Студия дизайна</h3>
                            <h2>Полного цикла</h2>
                            <p>От дизайна визиток по дизайна сайтов</p>
                        </div>
                        <div className='start_btns'>

                        </div>
                    </div>

                    <div className='start_right'>
                        <img src={start} alt="img"/>
                    </div>
                    
                </div>

            </div>
            
        </div>
    );
}

export default Start;