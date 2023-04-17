const main=()=>{
    async function howdy(word:string) {
        return word;
    }

    async function greet() {
       return await howdy("hello");    
    }

    greet()
        .then(i=>console.log(i))
        .catch(err=>console.log(err))
}
main();

function sum(a:number,b:number) :number{
    return a+b;
}
sum(4,4)

type id={
    name:string,
    number:number,
    age?:number
}
interface identity{
    firstName:string,
    lastName:string,
    age:number,
    number?:number|string
}

const _name:id={
    name:"imran",
    number:6,
    age:89
}

const grades:number[]|string[]=[
    "A","b"
]

enum books{
    num=0,
    title="Journey to the west",
    pages=920,
    publish="true"
}
const content={
    number:books.num,
    title:books.title,
    published:books.publish
}

//tuple
const sweets:[string,number]=["name",6]

interface students{
    name:string;
    adminNo:number;
}
const pupil:students[]=[
    {
        name:"chris",
        adminNo:8
    },
    {
        name:"mbappe",
        adminNo:7
    }
]
console.log(pupil)