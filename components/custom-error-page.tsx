import styles from './custom-error-page.module.css'
import Image from 'next/image'
const CustomErrorPage = (props : { statusCode: string }) => {
    return (<div className={styles.main}>

        <Image src='/assets/al.gif' alt='alfie Salamence' width='400' height='400' />
        <div style={ { height: '120px' } }>
            {"  "}
        </div>
        <h1>
            { props.statusCode } | Whatever you're looking for mate, it ain't 'ere 
        </h1>
    </div>)
}

export default CustomErrorPage