const usernames = 
["david","david1","david2"];

const spinner =
document.getElementById("spinner"),
alert= 
document.getElementById("alert");

const update = (value) => {
    spinner.classList.remove("visible");

    const UsernameExists = 
    usernames.some(u => u === value);

    if (UsernameExists) {
        alert.classList.add("visible");
    } else {
        alert.classList.remove("visible");
    }
};

const debounce = (callback, time) => {
    let interval;
    return(...arg) => {
        clearTimeout(interval);
        interval = setTimeout(() => {
            callback.apply(null,arg);
        },time);
    };
};

const handleStartTyping = () => {
    Spinner.classList.add("visible");
};
const handleChange = debounce(input => {
    const {value} = input.target;
    update(value);
},500)