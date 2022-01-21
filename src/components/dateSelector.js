import React, {useState} from 'react';



const DateSelector = (props) => {
    // const [testDate, setTestDate] = useState('');
    // console.log(props.photoDate);

    const [testDate, setTestDate] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        props.setPhotoDate(testDate);
        props.setAPI_ENDPOINT(`&date=${testDate}`);
        console.log(testDate);
        console.log(`Photo Date : ${props.photoDate}`);
        console.log(`API ENDPOINT : ${props.API_ENDPOINT}`)
    }

    
    return (
        <div className="date-selector">
            <h4>Select photo from different day here (YYYY-MM-DD):</h4>
            <form onSubmit={handleSubmit}>
                <label>
                    Enter Date:
                    <input type="text" value={testDate} onChange={(e) => setTestDate(e.target.value)}
                    />
                </label>
                <input type="submit" />
            </form>
        </div>
    )
}

export default DateSelector;