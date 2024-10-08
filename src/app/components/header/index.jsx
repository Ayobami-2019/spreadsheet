import style from './style.module.css'

export const Header = () => {
    return (
        <header className={style.header}>
            <div className={style.sheetHead}>
                <div>
                    <img src="" alt="LOGO" width='40' height='40' />
                </div>
                <h1>NEW HOPE COLLEGE, ILORIN</h1>
                <h2>FIRST TERM ACADEMIC PERFORMANCE REPORT 2017/2018 SESSION</h2>
            </div>
            <div className={style.studentInfo}>
                <div>
                    <img src="" alt="Passport" height='30' width='30'/>
                </div>
                <ul>
                    <li>NAME: <span></span></li>
                    <li>CLASS: <span></span></li>
                    <li>ADMISSION ID: <span></span></li>
                </ul>
            </div>
        </header>
    )
}