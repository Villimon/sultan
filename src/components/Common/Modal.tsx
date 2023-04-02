import React from 'react';

type PropsType = {
    active: boolean
    children: React.ReactNode
    setActive: (active: boolean) => void

}


const Modal: React.FC<PropsType> = ({ active, setActive, children }) => {
    return (
        <div className={active ? 'modal active' : 'modal'} onClick={() => setActive(false)}>
            <div className={active ? 'modalContant active' : 'modalContant'} onClick={e => e.stopPropagation()} >
                {children}
            </div>
        </div>
    )
}

export default Modal