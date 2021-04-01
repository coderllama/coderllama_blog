import styles from './tssux.module.css'

type Props = {
    children: any
}

export default function TSSux({children} : Props) {
    return (
        <div>
            { children }
        </div>
    )
}