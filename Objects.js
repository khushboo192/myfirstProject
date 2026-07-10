// objects in js;

let student = {
    name: "shikha",
    class: 12,
    phone: 987635637,
    subjects: ["physics", "chemistry", "Math", "science"],
}
console.log(students);

    let student = {
        name: "neha",
        class: 11,
        phone: 837399378,
        subject: ["physics", "chemistry", "Math", "science"],

    }

console.log(students);

// for in
let student = {
    name: "neha",
    class: 11,
    phone: 837399378,
    subject: ["physics", "chemistry", "Math", "science"]
};

let keys = Object.keys(student);

for (let index in keys) {
    console.log(index, ":", keys[index], ":", student[keys[index]]);
}

}
//for of
let student = {
    name: "anju",
    class: 8,
    phone: 95874893,
    subjects : ["physics", "chemistry", "Math", "science"],
};
for (let key  of Object.keys(student)) {
    console.log(key, ":", student[key]);
}

// for each
let student = {
    name: "Anju",
    class: 8,
    phone: 95874893
};

Object.keys(student).forEach(function(key) {
    console.log(key, ":", student[key]);
});

// map
let student = {
    name: "Anju",
    class: 8,
    phone: 95874893
};

let result = Object.keys(student).map((key) => {
    return key + " : " + student[key];
});

console.log(result);

let student = {
    name: "Anju",
    class: 8
};

student.city = "Delhi";

console.log(student);

let student = {
    name: "Anju",
    class: 8,
    phone: 95874893,
    city: "Delhi"
};

delete student.phone;
delete student.city;

console.log(student);






































































