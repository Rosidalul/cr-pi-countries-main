
const validation = (activity) => {

    const error = {};

    if (!activity.name) {
        error.name1 = "Put a activity name"
    }
    if(activity.name.length < 5) {
        error.name2 = "The name must be at least 5 characters"
    }

    if(!/^(0[0-9]|1[0-9]|2[0-3]):[0-5][0-9]$/.test(activity.duration)) {
        error.duration = 'The duration must have a time format (Ex: "05:00","15:55")';
    }

    if(!/^[1-5]$/.test(activity.difficulty)) {
        error.difficulty = "Select a difficulty";
    }

    if(!/^(Summer|Autumn|Winter|Spring)$/.test(activity.season)) {
        error.season = "Select a season";
    }

    if(!activity.countries.length) {
        error.countries = "Select at least one country"
    }


    activity.name === "" ||
        activity.difficulty === 0 ||
        activity.season === "" ||
        activity.duration === "" ||
        !activity.countries[0] 
        ?error.incomplete = "Please complete all the fields"
        : error.incomplete = "All ready!"


    return error
}

export default validation;