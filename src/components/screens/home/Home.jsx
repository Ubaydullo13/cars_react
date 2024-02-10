import styles from './Home.module.css';
import cars from './cars.json';

function Home() {
    return (
        <>
            <div>
                <h1>Cars catalog</h1>
                <div className={styles.cards}>
                    {cars.map((car, index) => (
                        <div key={index} className={styles.item}>
                            <div>
                                <img className={styles.image} src={car.image} alt={car.name} />
                            </div>
                            <div className={styles.info}>
                                <h2>{car.title}</h2>
                                <span>{car.start_production}</span>
                                {
                                  car.start_production > 2000 ? <span className={styles.green}>{"yangi"}</span> : <span className={styles.red}>{"eski"}</span>
                                }
                                <p>{car.class}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </>
    );
}

export default Home;
