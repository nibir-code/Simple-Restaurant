const DISHES = [
     {
         id: 1,
         name: 'Ginger Burger',
         image:'assets/images/burger.jpg',
         price: "$5.33",
         title: "Appetizer",
         description: "While eating your appetizer, don't be concerned with dessert. ",
         users: "50 recipes",
     
        comments :[
       {
         id: 1,
         rating : 5,
         author : "john",
         comment :"this is good",
         date: "2019-01-11"
       }

     ],

   },

{
        id: 2,
         name: 'pasta',
         image:'assets/images/pasta.jpg',
         price: "$6.33",
         title: "Appetizer",
         description: "This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.",
         users: "50 recipes",
       comments :[
         {
           id: 2,
           rating : 5,
           author : "jovan",
           comment :"this is not so good",
           date: "2019-01-11"
         }
       ]
       },
       {
         id: 3,
         name: 'pizza',
         image:'assets/images/pizza.jpg',
         price: "$9.33",
         title: "Appetizer",
         description: "While eating your appetizer, don't be concerned with dessert. ",
         users: "50 recipes",
         comments :[
           {
             id: 3,
             rating : 5,
             author : "jordan",
             comment :"this is  not good",
             date: "2029-01-11"
           }
         ]
       },
     ];

export default DISHES;