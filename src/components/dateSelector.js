import React from 'react';

const DateSelector = (props) => {

    const changeDate = (e) => {
        e.preventDefault();
        setPhotoDate()
    };
    return (
        <div className="date-selector">
            <h4>Select photo from different day here:</h4>
            <form>

            </form>
        </div>
    )
}

export default DateSelector;