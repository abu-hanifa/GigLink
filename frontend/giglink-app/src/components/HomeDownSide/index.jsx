import React, { useEffect, useState } from "react";
import style from "./style.module.css";
import Line from "../../assets/icons8-вперед-90.png";
import Line1 from "../../assets/icons8-вперед-90 (1).png";
import Avatar from "../../assets/avatar.svg";
import Elipse from "../../assets/Ellipse 4.svg";
import Elipse1 from "../../assets/Ellipse 5.svg";
import Logo from "../../assets/transparent-logo.svg";
import Modal from '../Modal/index';

function HomeDownSide() {

  const [count, setCount] = useState(1)

  function handleDec(){
    if(count > 1){
      setCount(count - 1)
    } else {
      setCount(count + 2)
    }
  }

  function handleInc(){
    if(count < 3){
      setCount(count + 1)
    }else {
      setCount(count - 2)
    }
  }

  const [isModalOpen, setIsModalOpen] = useState(false);

  useEffect(() => {
    document.body.classList.toggle('modal-open', isModalOpen);
    return () => {
      document.body.classList.remove('modal-open');
    };
  }, [isModalOpen]);

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  return (
    <div>
    <Modal isOpen={isModalOpen} onClose={closeModal} />
      <button className={style.regis} onClick={openModal}>ЗАРЕГИСТРИРОВАТЬСЯ</button>
      <h1 className={style.comment}>Отзывы наших клиентов</h1>
      <div className={style.rodComm}>
       {count === 1 && ( <p className={style.comment1}>
          Я уже несколько лет работаю на этой фриланс платформе и могу с
          уверенностью сказать, что это одно из лучших мест для поиска проектов
          и заработка. Здесь я нашел множество интересных заказов и клиентов, с
          которыми продолжаю успешно сотрудничать до сих пор. Платформа
          предоставляет удобный и безопасный способ коммуникации с заказчиками,
          а также защиту от возможных споров. Спасибо этой платформе за
          возможность самореализоваться и заработать хорошие деньги.
          <br />
          <img className={style.avatar} src={Avatar} alt="" />
          <h5>Иванов Иван Иванович</h5>
          <img src={Elipse} alt="" />
          <img className={style.elips} src={Elipse1} alt="" />
          <img className={style.elips} src={Elipse1} alt="" />
        </p>)}

        {count === 2 && ( <p className={style.comment1}>
          Я уже несколько лет работаю на этой фриланс платформе и могу с
          уверенностью сказать, что это одно из лучших мест для поиска проектов
          и заработка. Здесь я нашел множество интересных заказов и клиентов, с
          которыми продолжаю успешно сотрудничать до сих пор. Платформа
          предоставляет удобный и безопасный способ коммуникации с заказчиками,
          а также защиту от возможных споров. Спасибо этой платформе за
          возможность самореализоваться и заработать хорошие деньги.
          <br />
          <img className={style.avatar} src={Avatar} alt="" />
          <h5>Aliev Ali Alievich</h5>
          <img  src={Elipse1} alt="" />
          <img className={style.elips} src={Elipse} alt="" />
          <img className={style.elips} src={Elipse1} alt="" />
        </p>)}

        {count === 3 && (<p className={style.comment1}>
          Я уже несколько лет работаю на этой фриланс платформе и могу с
          уверенностью сказать, что это одно из лучших мест для поиска проектов
          и заработка. Здесь я нашел множество интересных заказов и клиентов, с
          которыми продолжаю успешно сотрудничать до сих пор. Платформа
          предоставляет удобный и безопасный способ коммуникации с заказчиками,
          а также защиту от возможных споров. Спасибо этой платформе за
          возможность самореализоваться и заработать хорошие деньги.
          <br />
          <img className={style.avatar} src={Avatar} alt="" />
          <h5>Sergeev Sergey Sergeevich</h5>
          <img  src={Elipse1} alt="" />
          <img className={style.elips} src={Elipse1} alt="" />
          <img className={style.elips} src={Elipse} alt="" />
        </p>)}
        <img onClick={handleDec} className={style.imageLine} src={Line1} alt="" />
        <img onClick={handleInc} className={style.imageLine1} src={Line} alt="" />


        <div className={style.description}>
          Хотите улучшить свои навыки и стать востребованным специалистом на
          фрилансе?
          <br />
          Присоединяйтесь к нашему курсу.
          <br />
          Узнайте, как применять нейросети для оптимизации работы,
          <br />
          автоматизации задач и повышения эффективности вашего творчества.
          <br />
          Получите уникальные знания и навыки,
          <br />
          которые помогут вам выделиться на фоне конкурентов.
          <br />
             Наши эксперты поделятся с вами секретами успешного
          <br />
          применения нейросетей в различных областях фриланса.
          <br />
          Поднимите свою карьеру на новый уровень
          <br />с помощью инновационных технологий!
        </div>
      </div>
      <div className={style.rod}>
        <div className={style.footer}>
          <img src={Logo} alt="" />

          <ul>
            <li className={style.desc}>Продукт</li>
            <li>Домашняя страница</li>
            <li>Отзывы</li>
            <li>Тарифы</li>
          </ul>
          <ul>
            <li className={style.desc}> О GIGLINK</li>
            <li>Компани</li>
            <li>Вакансия</li>
            <li>Инвестирование</li>
          </ul>
          <ul>
            <li className={style.desc}>Помощь</li>
            <li>Фрилансеру</li>
            <li>Работадателю</li>
            <li>Видео тутореалы</li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default HomeDownSide;