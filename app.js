// 1.1 Basic Javascript
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

/* 1.3 First-Class Functions
หมายถึงการที่เราสามารถจับฟังก์ชันยัดลงไปเป็นตัวแปรได้ 
(ปกติเวลาเราสร้างตัวแปรก็มีแค่ int double String Object ) 
ตัวอย่างนี้ถ้าเขียน JavaScript */

var shippop = function (a,b) {
    return a+b ;
}