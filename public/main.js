'use strict';
function onSubmit(form) {
    let data = {
        user: form.elements['user'].value,
        email: form.elements['email'].value
    };

    let result = request('/users', data);


    console.log(data, result);
}
