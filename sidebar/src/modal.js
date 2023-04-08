import React from "react"
import './modal.css'

export default function Modal() {

    const [enabled, setEnabled] = React.useState(false);

    function showPopup() {
        setEnabled(!enabled);
    }

    const [data, setData] = React.useState({ fname: "" });

    function handleChange(event) {
        // console.log(event.target)

        const { name, value, type, checked } = event.target

        setData(prevVal => {
            return {
                ...prevVal,
                [name]: type == "checkbox" ? checked : value,
            }
        });
    }

    function handleSubmit(event) {
        event.preventDefault();
        console.log("submitted")
    }
    return (
        <>
            <button className="button" onClick={showPopup}> Click Me </button>

            <div className="globalDiv" style={enabled ? { top: "13%" } : { top: "-100px" }}>
                <div className="insidecontent">
                    <form onSubmit={handleSubmit}>
                        <label className="label"> Write a brief description about the bug
                            <input
                                type="text"
                                placeholder="Feedback"
                                onChange={handleChange}
                                name="fname"
                                value={data.fname}
                            />
                        </label>
                        <div className="submitButtons">
                            <button className="button-17">Submit</button>
                            <button className="button-17" onClick={showPopup}>Close</button>
                        </div>
                    </form>
                </div>
            </div>

        </>
    )
}