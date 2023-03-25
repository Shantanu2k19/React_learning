import data from './box_data.js'

export default function chat(){

    const renderDiv = data.map(
        val => (
            <div className={val.on? "on" : "off"}>
                Hi
            </div>
        )
    )
    return(
        <div>
            {renderDiv}
        </div>
    )
}
