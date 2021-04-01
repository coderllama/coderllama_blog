import React, { useEffect, useRef } from 'react'
import BubbleNav from './bubble-nav'
import styles from './nav-room-layout.module.css'

type Props = {}

var forwardRef:any = null

const ForwardButton = () => {

    forwardRef = React.useRef<HTMLDivElement>(null)
    
    React.useEffect(() => {
        forwardRef.current?.addEventListener('mouseover',(e : any) => {
            forwardRef.current?.classList.add(styles.forwardButtonHover)
            leftPreviewRef.current?.classList.add(styles.leftPreviewVisible)
        })
    }, [])

    return (
        <div ref={forwardRef} className={ styles.forwardButton }>
            {"  "}
        </div>
    )
}

const BackwardsButton = () => {
    return (
        <div className={ styles.backwardsButton }>
            {"  "}
        </div>
    )
}
var leftPreviewRef:any = null

const NavRoomLayout = ({} : Props) => {


    const navRoomRef = useRef<HTMLDivElement | null>(null)
    leftPreviewRef = useRef<HTMLDivElement>(null)
    useEffect(() => {
        // navRoomRef.current?.addEventListener('click', e => {
        //     if (e.clientX < navRoomRef.current?.clientWidth * .7  ){
        //         forwardRef.current?.classList.remove(styles.forwardButtonHover)
        //         leftPreviewRef.current?.classList.remove(styles.leftPreviewVisible)
        //     }

        // })
    }, [])

    return (
        <div ref={navRoomRef} className={styles.main}>

            <div className={styles.topRibbon}>
                <h1>
                    [ CODERLLAMA ]
                </h1>
            </div>

            {/* <ForwardButton/> */}

            <BubbleNav />

            {/* <BackwardsButton/> */}

            <div ref={leftPreviewRef} className={ styles.leftPreview }>
                test 
            </div>
 
        </div>
    )
}

export default NavRoomLayout