var randomRestaurant = {
    randomRestaurantName: "",
    findRestaurant: function() {
      var restaurantName = Math.random();
      if (restaurantName < 0.20) {
        this.randomRestaurantName = "Viet Deli";
      } else if (restaurantName < 0.40) {
        this.randomRestaurantName = "Papa John's";
      } else if (restaurantName < 0.60) {
        this.randomRestaurantName = "Nori Sushi";
      } else if (restaurantName < 0.80) {
        this.randomRestaurantName = "TexasRoad House";
      } else {
        this.randomRestaurantName = "Sol Agave Mexican";
      }
    }
  };
  
  var randomRestaurantButton = document.getElementById('randomRestaurantName');
  randomRestaurantButton.addEventListener('click', function() {
    randomRestaurant.findRestaurant();
    document.getElementById("restaurantNameDisplay").innerHTML = randomRestaurant.randomRestaurantName;
  });