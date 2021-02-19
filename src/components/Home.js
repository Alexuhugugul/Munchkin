import { React, useEffect } from 'react';
import image2 from '../image/3-man.png';


function Home() {

    useEffect(() => {
        // fullPagesScroll();
    });

    return (
        <div className="container" >
            <div className="top-content panel">
                <header>
                    <div id="toggle" onClick={toggleActive}></div>
                </header>
                <h1 className="title">Манчкин</h1>
                <div className="text-content">
                </div>
            </div>
            <div className="about-game panel">
                <h1 className="title">Об игре</h1>
                <div className="text-content">
                    <p>  Итак, настольная игра "Манчкин" – это ролевая игра по форме, пародия по содержанию. Манчкины игроков ходят по подземелью, вытаскивают на свет божий тамошних чудовищных обитателей и либо раскаиваются в этом, либо получают за победу новые уровни и сокровища. Исход каждого подобного приключения (боя, короче) зависит от того, кто с чем на бой вышел. У игрока это уровень и бонусы/штрафы от шмоток, класса, расы и проклятий. У монстра это уровень плюс карты-усилители и разовые шмотки. Откуда шмотки у монстра? В Вашем бою могут принять участие и завистливые соперники: они могут помогать монстру и ослаблять вас. Поэтому, хотя в "Манчкин" и можно играть вдвоём, наберите на матч побольше народу: на руках будет больше проклятий, усилителей и зелий, которыми так легко изменить баланс сил в бою в любую сторону, и бдительные завистники не дадут никому из Вас выйти в единоличные лидеры гонки к 10-му победному уровню.</p>
                    <img className="long-img" src={image2} />
                </div>
            </div>

        </div>
    )
}

function toggleActive() {
    const container = document.querySelector(".container");
    const navigation = document.querySelector("#navigation");
    container.classList.toggle("active");
    navigation.classList.toggle("active");
}




export default Home;