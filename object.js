const person = {
    firstName: 'Abhi',
    lastName: 'Joshi',
    contactNo: "7984635128",
    isAvailable:true,
    showPersonDetails() {
            const accepting = this.isAvailable ? "Yes he is." : "Nope he is not.";
            document.write("The "+ this.firstName +" "+ this.lastName +" ("+this.position+") - "+ this.contactNo +" is available:"+ accepting+" age of a founder is:"+ this.age);
    }
};
try{

    const foundedr = Object.create(person);
    foundedr.position = "Founder & Executive Chairman";
    foundedr.showPersonDetails();

    const coFounder=Object.create(founder);
    coFounder.showPersonDetails();

    const coFounder2=Object.create(coFounder);
    founder.age = 30;
    coFounder.showPersonDetails();
}
catch(err) {
    document.write(err);
}

const roles = {
    founder: 'Abhi Joshi',
    coFounder: 'Janki Purohit',
    managingDirector: 'Rushita',

};


const keys = Object.keys(roles);
document.write("<br/>+keys");


const values = Object.values(roles);
document.write("<br/>"+values);

Object.keys(roles).forEach(key => {
    let value = roles[key];
    document.write("<br/>"+key+":"+value);
});


const technicalRoles = {
	js: 'Abhi Joshi',
	php: 'Janki Purohit',
	mobileApps: 'Rushita',
};


const nestedRoles = Object.entries(technicalRoles);
document.write("<br/>"+nestedRoles);


nestedRoles.forEach(nestedRole => {
    let key = nestedRole[0];
    let value = nestedRole[1];

    document.write("<br/>"+key+":"+value);
});


const personName = {
    firstName: 'Abhi',
    lastName: 'Joshi'
};


const personRole = {
    designation: 'Assistent Professor',
    company: 'GLS'
};

const profile = Object.assign(personName, personRole);
document.write("<br/>"+JSON.stringify(profile));


const profileSpread = {...personName, ...personRole}
document.write("<br/>"+JSON.stringify(profileSpread));



const user = {
	username: 'abhijoshi10@gmail.com',
	password: 'XYZ123abc'
};


const newUser = Object.freeze(user);

newUser.password = '*******';
newUser.active = true;

document.write("<br/>"+JSON.stringify(newUser));



const userRecord = {
	username: 'abhijoshi10@gmail.com',
	password: 'XYZ123abc'
};


const newUserRecord = Object.seal(userRecord);

newUserRecord.password = '*******';
newUserRecord.active = true;

document.write("<br/>"+JSON.stringify(newUserRecord)+"<br/>");


const persons = ['ABC', 'DEF', 'GHI', 'JKL'];
document.write("<br/>"+Object.getPrototypeOf(persons)===Array.prototype);
