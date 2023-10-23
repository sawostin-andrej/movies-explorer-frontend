import "./AboutProject.css";

export default function AboutProject() {
  return (
    <section className="about-project" id="about-project">
      <h2 className="about-project__header">О проекте</h2>
      <div className="about-project__container">
        <div className="about-project__info">
          <h3 className="about-project__title">
            Дипломный проект включал 5 этапов
          </h3>
          <p className="about-project__subtitle">
            Составление плана, работу над бэкендом, вёрстку, добавление
            функциональности и финальные доработки.
          </p>
        </div>
        <div className="about-project__info">
          <h3 className="about-project__title">
            На выполнение диплома ушло 5 недель
          </h3>
          <p className="about-project__subtitle">
            У каждого этапа был мягкий и жёсткий дедлайн, которые нужно было
            соблюдать, чтобы успешно защититься.
          </p>
        </div>
      </div>
      <div className="about-project__process-container">
        <div className="about-project__process">
          <h4 className="about-project__process-title">1 неделя</h4>
          <p className="about-project__process-subtitle">Back-end</p>
        </div>
        <div className="about-project__process">
          <h4 className="about-project__process-title about-project__process-title_type_color">
            4 недели
          </h4>
          <p className="about-project__process-subtitle">Front-end</p>
        </div>
      </div>
    </section>
  );
}
