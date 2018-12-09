'use strict'
first().then((value) => {
    return second(value)
}).then(second_value => console.log(second_value))