import React from 'react';
import './App.css';

const App = () => {
    return (
        <div className='app-wrapper'>
            <header className='header'>
                <img
                    src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTe7XyJEKAiSyavfOhv8Oe80Eh2faL7zZMxJg&usqp=CAU'/>
            </header>
            <nav className='nav'>
                <div>
                    <a>Profile</a>
                </div>
                <div>
                    <a>Message</a>
                </div>
                <div>
                    <a>News</a>
                </div>
                <div>
                    <a>Musik</a>
                </div>
                <div>
                    <a>Settings</a>
                </div>
            </nav>
            <div className='content'>
                <div>
                    <img src="https://www.sostav.ru/images/news/2019/06/20/d9eelmcf_md.jpg"/>
                </div>
                <div>
                    Ava + discription
                </div>
                <div>
                    My posts
                    <div>
                        New post
                    </div>
                    <div>
                        <div>
                            Post 1
                        </div>
                        <div>
                            Post 2
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default App;