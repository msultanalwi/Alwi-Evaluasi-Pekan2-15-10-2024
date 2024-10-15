// 1..
const user = function (id, username, email, hobby) {
    return  id = "",
            username = "",
            email = "",
            hobby = ""
} 
let id = ('1, 2, 3,')
let username = ('JohnDoe', 'ExKoi', 'test')
let email  = ('Johndoe@gmail.com', 'exkoi01@gmail.com')
let hobby = ('coding', 'gaming', 'reading')
console.log(user);

// 2. 
const id = [1,2,3]
const username = ['JohnDoe','exKoi']
const email = ['johndoe@gmail.com', 'exkoi01@gmail.com']
const hobby = [ 'coding', 'gaming']
const role = [user, user]

let id, username, email, hobby, role = id.map, username.map, email.map, hobby.map, role.map 

console.log(id, username, email, hobby, role)



// 3. diket : Segitiga, A = 4, T = 3
/* jawab : */ function luas(alas, tinggi){
    let luasSegitiga = 0.5 * alas * tinggi;
    return `luas segitiga yang mempunyai alas: ${alas} dan tinggi ${tinggi} adalah ${luasSegitiga}`
}

let alas = 4
let tinggi = 3
console.log(luas(alas, tinggi))

// 4.
function test() {
    let a = 1
    let b = 2

    [a,b] = [b,a]

    console.log('a awal = ', a);
    console.log('b awal = ', b);

    
    console.log('a final = ', a);
    console.log('b final = ', b);
}

test()

// 5. 
function Palindrome (malam, level) {
    let = malam = true
        level = true
    return Palindrome
}
console.log(Palindrome(malam, level));
