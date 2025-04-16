
import { FC, ReactNode } from 'react'

import "./Content.scss"

interface ContentProps {
  children?: ReactNode;
}


export const Content:FC<ContentProps> = ({children}) => {

  return (
    <div className="content">
      <header className="content__header">
        <h1>Одноэтажный дом с двумя спальнями в стиле эклектика</h1>
        <aside>Для оформления этой дачи заказчики выбрали необычное смешение самых разнообразных стилей</aside>
      </header>
      <article className="content__main">
        <section className="content__section">
          <h2>Вкратце</h2>
          <p>Этот загородный дом оформила дизайнер Сара Михайлова для заказчицы и ее взрослого сына.
            Предполагалось, что это будет дача, где можно жить в том числе на постоянной основе в любое время года.
            В ходе работы над объектом пожелания владельцев изменились, им захотелось добавить в дизайн больше жизни,
            даже дерзости и игривости, совместить сразу несколько стилей, вписав в общую концепцию антикварную мебель
            и предметы современного искусства.
          </p>
        </section>

        <section className="content__section">
          <h2>Подробности</h2>
          <p>
            Дом одноэтажный. Основная задача была — скрыть максимально все технические зоны (прачечную,
            хранение, крупную бытовую технику разместили в отдельном помещении). Обустроили две спальни:
            в одной есть собственная ванная комната с окном.
          </p>
          <blockquote>
            «Кухня в доме исключительно видовая. Всю технику — как крупную, так и мелкую — мы перенесли в
            отдельное помещение, чтобы не нарушать общую гармонию столовой и гостиной и избавить помещение
            от „визуального шума“», — рассказывает дизайнер.
          </blockquote>
          <p>
            В интерьере сложно выделить какую-то одну запоминающуюся деталь. «Это просто шкатулка с драгоценностями.
            Мои личные фавориты, кроме антиквариата (эти предметы вне конкуренции), — торшер-лицо, стул на одной
            ноге и сама мысль, что они в одном помещении со столетним столом и легендарными креслами Морис»,
            — говорит автор проекта.
          </p>
          <blockquote>
            Для фона выбрали оливковый оттенок стен. В эклектичном интерьере цвет — это идеальный инструмент,
            который объединяет в гармоничную композицию предметы мебели из разных стилей, которые сами по себе
            яркие, с индивидуальным дизайном, текстурой, орнаментом или причудливой формой. «Я выбрала мягкие,
            приглушенные цвета, сделала их однотонными, без сложных орнаментов, чтобы они не отвлекали внимание
            от обстановки», — делится дизайнер
          </blockquote>
          <p>
            Ванная после мягкого и сдержанного интерьера спальни выглядит особенно экстравагантной за счет ярких
            элементов. «Начать стоит со света, которого в избытке во всем доме. Лучи солнца встречают хозяев при
            пробуждении, за трапезой и даже во время приема ванны. Ретромодель на ножках стоит в центре комнаты,
            что позволяет наслаждаться и пышной пеной, и пейзажем за окном. Провокационная живопись на стенах,
            наполовину отделанных камнем и окрашенных в технике омбре в теплый желтый цвет, алый столик необычной
            изогнутой формы, массивная вешалка, являющаяся одновременно арт-объектом, светильник в виде золотой о
            безьянки… Все здесь — чистая красота, призывающая к радости и любви к себе», — говорит Сара Михайлова.
          </p>
          <p>
            Мужскую спальню украшает сервант XIX века. Освещает ее антикварная люстра родом из Франции XVIII века,
            обрамленная ручной росписью на потолке. Глянцевые узоры натурального оникса «согревают» ковры ручной работы.
          </p>
        </section>
        <section className="content__section">
          <h2>LOREM</h2>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam architecto voluptas a temporibus libero
            enim delectus qui! Ex consectetur provident reiciendis nam ipsum vero architecto? Recusandae, voluptates
            distinctio. Est, repellendus.
          </p>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam architecto voluptas a temporibus libero
            enim delectus qui! Ex consectetur provident reiciendis nam ipsum vero architecto? Recusandae, voluptates
            distinctio. Est, repellendus.
          </p>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam architecto voluptas a temporibus libero
            enim delectus qui! Ex consectetur provident reiciendis nam ipsum vero architecto? Recusandae, voluptates
            distinctio. Est, repellendus.
          </p>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam architecto voluptas a temporibus libero
            enim delectus qui! Ex consectetur provident reiciendis nam ipsum vero architecto? Recusandae, voluptates
            distinctio. Est, repellendus.
          </p>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam architecto voluptas a temporibus libero
            enim delectus qui! Ex consectetur provident reiciendis nam ipsum vero architecto? Recusandae, voluptates
            distinctio. Est, repellendus.
          </p>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam architecto voluptas a temporibus libero
            enim delectus qui! Ex consectetur provident reiciendis nam ipsum vero architecto? Recusandae, voluptates
            distinctio. Est, repellendus.
          </p>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam architecto voluptas a temporibus libero
            enim delectus qui! Ex consectetur provident reiciendis nam ipsum vero architecto? Recusandae, voluptates
            distinctio. Est, repellendus.
          </p>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam architecto voluptas a temporibus libero
            enim delectus qui! Ex consectetur provident reiciendis nam ipsum vero architecto? Recusandae, voluptates
            distinctio. Est, repellendus.
          </p>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam architecto voluptas a temporibus libero
            enim delectus qui! Ex consectetur provident reiciendis nam ipsum vero architecto? Recusandae, voluptates
            distinctio. Est, repellendus.
          </p>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam architecto voluptas a temporibus libero
            enim delectus qui! Ex consectetur provident reiciendis nam ipsum vero architecto? Recusandae, voluptates
            distinctio. Est, repellendus.
          </p>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam architecto voluptas a temporibus libero
            enim delectus qui! Ex consectetur provident reiciendis nam ipsum vero architecto? Recusandae, voluptates
            distinctio. Est, repellendus.
          </p>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam architecto voluptas a temporibus libero
            enim delectus qui! Ex consectetur provident reiciendis nam ipsum vero architecto? Recusandae, voluptates
            distinctio. Est, repellendus.
          </p>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam architecto voluptas a temporibus libero
            enim delectus qui! Ex consectetur provident reiciendis nam ipsum vero architecto? Recusandae, voluptates
            distinctio. Est, repellendus.
          </p>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam architecto voluptas a temporibus libero
            enim delectus qui! Ex consectetur provident reiciendis nam ipsum vero architecto? Recusandae, voluptates
            distinctio. Est, repellendus.
          </p>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam architecto voluptas a temporibus libero
            enim delectus qui! Ex consectetur provident reiciendis nam ipsum vero architecto? Recusandae, voluptates
            distinctio. Est, repellendus.
          </p>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam architecto voluptas a temporibus libero
            enim delectus qui! Ex consectetur provident reiciendis nam ipsum vero architecto? Recusandae, voluptates
            distinctio. Est, repellendus.
          </p>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam architecto voluptas a temporibus libero
            enim delectus qui! Ex consectetur provident reiciendis nam ipsum vero architecto? Recusandae, voluptates
            distinctio. Est, repellendus.
          </p>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam architecto voluptas a temporibus libero
            enim delectus qui! Ex consectetur provident reiciendis nam ipsum vero architecto? Recusandae, voluptates
            distinctio. Est, repellendus.
          </p>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam architecto voluptas a temporibus libero
            enim delectus qui! Ex consectetur provident reiciendis nam ipsum vero architecto? Recusandae, voluptates
            distinctio. Est, repellendus.
          </p>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam architecto voluptas a temporibus libero
            enim delectus qui! Ex consectetur provident reiciendis nam ipsum vero architecto? Recusandae, voluptates
            distinctio. Est, repellendus.
          </p>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam architecto voluptas a temporibus libero
            enim delectus qui! Ex consectetur provident reiciendis nam ipsum vero architecto? Recusandae, voluptates
            distinctio. Est, repellendus.
          </p>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam architecto voluptas a temporibus libero
            enim delectus qui! Ex consectetur provident reiciendis nam ipsum vero architecto? Recusandae, voluptates
            distinctio. Est, repellendus.
          </p>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam architecto voluptas a temporibus libero
            enim delectus qui! Ex consectetur provident reiciendis nam ipsum vero architecto? Recusandae, voluptates
            distinctio. Est, repellendus.
          </p>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam architecto voluptas a temporibus libero
            enim delectus qui! Ex consectetur provident reiciendis nam ipsum vero architecto? Recusandae, voluptates
            distinctio. Est, repellendus.
          </p>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam architecto voluptas a temporibus libero
            enim delectus qui! Ex consectetur provident reiciendis nam ipsum vero architecto? Recusandae, voluptates
            distinctio. Est, repellendus.
          </p>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam architecto voluptas a temporibus libero
            enim delectus qui! Ex consectetur provident reiciendis nam ipsum vero architecto? Recusandae, voluptates
            distinctio. Est, repellendus.
          </p>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam architecto voluptas a temporibus libero
            enim delectus qui! Ex consectetur provident reiciendis nam ipsum vero architecto? Recusandae, voluptates
            distinctio. Est, repellendus.
          </p>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam architecto voluptas a temporibus libero
            enim delectus qui! Ex consectetur provident reiciendis nam ipsum vero architecto? Recusandae, voluptates
            distinctio. Est, repellendus.
          </p>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam architecto voluptas a temporibus libero
            enim delectus qui! Ex consectetur provident reiciendis nam ipsum vero architecto? Recusandae, voluptates
            distinctio. Est, repellendus.
          </p>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam architecto voluptas a temporibus libero
            enim delectus qui! Ex consectetur provident reiciendis nam ipsum vero architecto? Recusandae, voluptates
            distinctio. Est, repellendus.
          </p>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam architecto voluptas a temporibus libero
            enim delectus qui! Ex consectetur provident reiciendis nam ipsum vero architecto? Recusandae, voluptates
            distinctio. Est, repellendus.
          </p>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam architecto voluptas a temporibus libero
            enim delectus qui! Ex consectetur provident reiciendis nam ipsum vero architecto? Recusandae, voluptates
            distinctio. Est, repellendus.
          </p>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam architecto voluptas a temporibus libero
            enim delectus qui! Ex consectetur provident reiciendis nam ipsum vero architecto? Recusandae, voluptates
            distinctio. Est, repellendus.
          </p>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam architecto voluptas a temporibus libero
            enim delectus qui! Ex consectetur provident reiciendis nam ipsum vero architecto? Recusandae, voluptates
            distinctio. Est, repellendus.
          </p>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam architecto voluptas a temporibus libero
            enim delectus qui! Ex consectetur provident reiciendis nam ipsum vero architecto? Recusandae, voluptates
            distinctio. Est, repellendus.
          </p>

        </section>
        </article>
        {children}
    </div>
  )

}
