let names = [];

class createNames{
    constructor(fname,lname){
        this.firstName = fname;    
        this.lastName = lname;    
    }
}

// let person1 = new createNames("Manish","Basargekar");

const takeInput = () => {

    let fname = document.getElementById('fname');
    let lname = document.getElementById('lname');
    if(fname.value == '' || lname.value == ''){
        alert("Please input all fields")
        return
    }else{
        names.push(new createNames(fname.value,lname.value))
    }
}

let submitBtn = document.querySelector('button');


let peopleList = document.querySelector('.people-list');

const addPeopleToDom = () => {
    peopleList.innerHTML = ""
    names.forEach((Person) => {
        const peopleLists = 
         `<li> ${Person.firstName} ${Person.lastName}</li>`;
         peopleList.insertAdjacentHTML('afterbegin', peopleLists);
    })

}
const handleSubmit = (e) => {
    e.preventDefault();
    takeInput();
    console.log(names)
    addPeopleToDom();
}




submitBtn.addEventListener('click',handleSubmit);