
pattern printing in js

for (let i = 1; i <= 5; i++) {
    let star = "";
    for (let j = 1; j <= i; j++) {
        star = star + "*";
    }
    console.log(star);
}
reverse pattern of star
for (let i = 5; i >= 1; i--) {
    let star = "";
    for (let j = 1; j <= i; j++) {
        star = star + "*";
    }
    console.log(star);
}
number increasing pyramid
for (let i = 1; i <= 5; i++) {
    let num = "";
    for (let j = 1; j <= i; j++) {
        num = num + j;
    }
    console.log(num)
}
reverse pattern of number
for (let i = 5; i >= 1; i--) {
    let num = "";
    for (let j = 1; j <= i; j++) {
        num = num + j;
    }
    console.log(num);
}
square pattern of hallow
for (let i = 1; i <= 5; i++) {
    let str = "";
    for (let j = 1; j <= 5; j++) {
        if (i == 1 || i== 5 || j == 1 || j == 5) {
            str = str + "*";
        }else{
            str = str +"";
    }

    }
    console.log(str);
}

number triangular
let n = 4
for (let i = 1; i <= n; i++) {
    let str = "";
}
for (let j = 1; j <= i; j++) {
    str += i + "";
}
console.log(str);


number changing pyramid
let n = 5;
let num = 1;
for (let i = 1; i <= n; i++) {
    let str = "";

    for (let j = 1; j <= i; j++) {
        str += num + "";

        num++;
    }
    console.log(str);
}
polindrome  triangular
let n = 4;
for (let i = 1; i <= n; i++) {
    let str = "";

for (let j = 1; j <= n-i; j++) {
    str += "";
}
for (let j = i; j >= 1; j--) {
    str += j + "";
}
    for (let j = 2; j <= i; j++) {
        str += j + "";
    }
    console.log(str);
}

square fill patterns
let n = 5;
for (let i = 1; i <= n; i++) {
    let str = "";
    for (let j = 1; j <= n; j++) {
        str += "*";
    }
    console.log(str);
}
centre triangular pattern
let n = 5;
for (let i = 1; i <= n; i++) {
    pattern = "";
    for (let j = 1; j <= n - i; j++) {
        pattern += "";
    }
    for (let k = 1; k <= 2 * i - 1; k++) {
        pattern += "*";
    }
    console.log(pattern);
}
reverse right half pyramid
let n = 5
for (let i = n; i >= 1; i--) {
    let star = "";

    for (let j = 1; j <= 1; j++) {
        star = "*"
    }
    console.log(star);
}
left  half pyramid
let n = 5;
for (let i = 1; i <= n; i++) {
    let pattern = "";
    for (let j = 1; j <= n - i; j++) {
        pattern +="";
    }
    for ( let k = 1; k <= i; k++) {
        pattern +="*";
    }

    console.log(pattern);
}
