import cl from './App.module.css';
import './App.css';

function App() {
  return (
    <div className={cl.container}>
      <div className={cl.frame}>
        <div className={`${cl.progressCircle} ${cl.progress0}`}>
          <svg width="60" height="60">
            <circle className={cl.progressBg} cx="30" cy="30" r="29"></circle>
            <circle className={cl.progressBar} cx="30" cy="30" r="29"></circle>
          </svg>
          <div className={cl.progressText}>0/7</div>
        </div>
        <div className={cl.frame__data}>
          <div className={cl.frame__data__top}>
            <div className={cl.frame__data_miniTitle}>Чеклист</div>
            <div className={cl.frame__data_progress}>Выполнено: 0 из 7 действий</div>
          </div>
          <div className={cl.frame__data_progression}>Следующее действие: Созвониться с клиентом до 23.05.24 12:00</div>
        </div>


        <button type="button" className={cl.frame__button}>Открыть чеклист</button>
      </div>
    </div>
  );
}

export default App;
