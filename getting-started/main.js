const companies=[
    {
        name:'Kiki Events',
        start:2016,
        end:2022
    },
    {
        name:'Kiri Consultants',
        start:2015,
        end:2022
    },
    {
        name:'Lewis Consultants',
        start:2050,
        end:2072
    },
    {
        name:'Imran Consultants',
        start:2050,
        end:2060
    },
]

const age=[44,43,45,76,98,23,7877,22,89,23,86,12,87,29,7,57,88,32,21,66,97,32,2,3,6,67,7,9]

//forEach using for loop
// for(let i=0; i < companies.length; i++) {
//     console.log(companies[i])
// }

//forEach array method
// companies.forEach((company,index,array) => {
//     console.log(company)
// });

//filter using for loop
//1 for(let i=0; i<age.length;i++) {
//     if(age[i]>21){
//         console.log(age[i],"Older")
//     }
// }

// const canDrink=[];
// for(let i=0; i<age.length;i++) {
//     if(age[i]>=21){
//         canDrink.push(age[i])
//     }
// }
// console.log(canDrink);

//filter array method
// let canDrink=age.filter((age)=>{
//     if(age>=21) {
//         return true;
//     }
// })
// console.log(canDrink)
 
// const canDrink=age.filter(age=> age>=21);

// const $2050Companies=companies.filter(year=>{
//     if(year.start===2050){
//         return true;
//     }
// })
// console.log($2050Companies)

//map
// const companyName=companies.map(companie=>{
//     return companie.name
// })
// console.log(companyName)
// const companyName=companies.map(companie=>console.log(companie.name))

//sort
// const sortCompanies=companies.sort((c1,c2)=>{
//     if(c1.start>c2.start){
//         return 1;
//     }else{
//         return -1;
//     }
// })
// console.log(sortCompanies)

// const sortCompanies=companies.sort((a,b)=>(a.start>b.start ? 1 :-1))
// console.log(sortCompanies)

//reduce
// let ageSum=0;
// for(let i=0;i<age.length;i++) {
//     ageSum+=age[i]
// }
// console.log(ageSum)

// const ageSum=age.reduce((total,age)=>{
//     return total +age;
// },0);

// console.log(ageSum)