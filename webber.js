let foodList = [
    {
        name: "Rice",
        description: "Rice is a staple in many African diets and is high in carbohydrates and calories. Consuming large amount can contribute significantly to weight gain. It is versatile and   can be paired with various stews and proteins to enhance it calories content.",
    },
    {
        name: "Avocado",
        description: "Rich in healthily fats and calories, avocados are excellent for healthyweight gain. A single avocado contains about 322 calories and is packed withvitamines and minerals. Adding avocado to meals or Consuming it as a snackcan significantly increase your caloric intake."
    },
    {
        name: "Nigerians Soups and Swallows",
        description: "Foods like egusi, ogbono, and groundnut soups are calorie-dense. When pairedpaired with Swallows such as pounded yam, eba, or semo, they provide a subtantialcalorie boost. These combination are both nutrient-rich and filling, making them ideal for weight gain."
    },
    {
        name: "Nuts and Seeds",
        description: "Groundnuts (peanuts), cashew nuts, and other nuts are highly fats and calories.These can be consumed as snacks or added to meals. They are portable and easy to incorporate into your diet, providing a convenient source of extra calories."
    },
    {
        name: "Milk and Dairy",
        description: "Whole milk, yogurt, and cheese are high in calories and protein. Full-fat dairy products are particularly effective for weight gain. They can be consumed as beverages, added to meals, or eaten as snacks."
    },
    {
        name:"Plantain",
        description: "Fried yellow Plantains are high in calories and can be a delicious part of weight gain diet, esoecially when combined with tomatoe sauce or other High-calorietoppings.  They are versatile foods that can be prepared in several ways to  enhance their calorie content."
    },
    {
        name: "Tubers",
        description: "Yams, potatoes, and sweet potatoes are rich in carbohydrates and calories. They can be prepared in various ways to enhance their calorie content. These  tubers are staple in many African diets and are excellent for promoting weight gain."
    },
    {
        name: "Smothies and Shakes" ,
        description: "Protein-rich smoothies made with bananas, peanut butter, milk, and other high-calorie ingredientscan be very effective in increasing caloric intake. They are easy to prepare and can be consumed on the go, making them a convenient option for busy individuals."
    },
    {
        name: "Red Meat",
        description: "Beef and goet meat are rich sources of protein and fats, essential for weight  gain. They are also packed with iron and vitamins. Including red meat in your diet, can help you build muscle mass while also increasing your overall calorie intake."
    },
    {
        name: "Peanut Butter and Groundnut Soup" ,
        description: "Peanut butter is calorie-dense, and groundnut soup, made from peanuts, is rich in fats and protein, aiding weight gain. These can be consumed as part of mealsor as snacks, providing a substantial caloric boost."
    },
    {
        name: "cheese" ,
        description: 'Full-fat cheese, including local varieties like Nigeria "wara",is high in calories, protein, and fat,contributing to weight gain. Cheese can be addedto meals or eaten as a snack, providing an easy way to increase your calorie intake.'
    },
    {
        name: "Fruits like Mangoes and Bananas" ,
        description: "Mangoes and bananas are calorically dense and can be consumed in smoothies or as snacks to boost calorie intake. These fruits are not only delicious, but also provide essential vitamines and minerals."
    },
    {
        name: "Butter and Oils",
        description: "Adding butter or oils like olive oil to meals can significantly increase caloriecontent. These fats are essential for gaining weight healthily and can be easilyincorporated into various dishes."
    }
]
 function foodListFunc(){
    for (let i = 0; i < foodList.length; i++) {
        let h2 = document.createElement("h2");
        let p = document.createElement("p");
        let div = document.createElement("div");

        h2.textContent = foodList[i].name;
        p.textContent = foodList[i].description;

        div.appendChild(h2);
        div.appendChild(p);

        div.classList.add("card")

        let food = document.querySelector(".food")

        food.appendChild(div);
    }
 }

foodListFunc();