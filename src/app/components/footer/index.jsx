import DateTime from '../datetime';
import style from './style.module.css';

export const Footer = () => {
    return (
        <footer className={style.footer}>
            <p>Date: Thursday December 14,2017; 04:12:58 [SID:10000004]</p>
            <p>Powered by School Switch | www.schoolswitch.com.ng</p>
            {/* <DateTime/> */}
        </footer>
    )
}