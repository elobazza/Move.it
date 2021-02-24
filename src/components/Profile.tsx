import styles from '../styles/components/Profile.module.css';


export function Profile() {
    return (
        <div className={styles.profileContainer} >
            <img src="https://github.com/elobazza.png" alt="Eloísa Bazzanella" />
            <div>
                <strong>Eloísa Bazzanella</strong>
                <p>
                    <img src="icons/level.svg" alt="Level" />
                    Level 1

                </p>
            </div>
        </div>
    );
}