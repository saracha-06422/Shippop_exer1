function receiver(name,lastname) {
    if (name.length <= 0 || lastname.length <= 0){
        console.log('Please enter your name and lastname')
        alert('Please enter your name and lastname')
    }
    else {
        if (name === 'Shippop'){
            console.log('Best Online Shipping Platform')
        }
        else {
            console.log('Hello Shippop, My name is '+name+' '+lastname)
        }
    }
}

function submit() {
    let Name = document.getElementById("name").value
    let lastname = document.getElementById("last").value
    receiver(Name,lastname);
}

var shippop = function (a,b) {
    return a+b ;
}