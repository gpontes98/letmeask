import copyImg from '../assets/images/copy.svg'

import '../styles/room-code.scss'

type RoomCodes = {
    code: string
}

export function RoomCode(props: RoomCodes) {
    function copyRoomCodeToClipboard(){
        navigator.clipboard.writeText(props.code)
    }

    return (
        <button className="room-code" onClick={copyRoomCodeToClipboard}>
            <div>
                <img src={copyImg} alt="Copy room code" />
            </div>
            <span>Sala #{props.code}</span>
        </button>
    )
}