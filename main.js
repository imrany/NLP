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

const canDrink=[];
for(let i=0; i<age.length;i++) {
    if(age[i]>=21){
        canDrink.push(age[i])
    }
}
console.log(canDrink);

//filter array method
age.filter((age)=>{
    // console.log(age)
})

//sort
//map
//reduce