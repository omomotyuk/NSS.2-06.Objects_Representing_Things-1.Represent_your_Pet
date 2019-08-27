/*  Practice: Represent your Pet
    Create an object that represents your pet.

    Name property with a string value.
    Species property with a string value.
    Nicknames property with an array value. Array contains strings.
    Age property with an integer value
*/
/*  Practice: Pet Sounds
    Now that you have an object that represents your pet, it's time to add some behavior. Pick three behaviors that your pet has and add three kys to your pet object. Each key's value should be a function that logs to the console or displays a window alert. Your choice.
*/
/*  Practice: My Pet This
    Give your pet a new key named favoriteToys whose value is an empty array.
    Now define another new key named play whose value is a function with a single parameter named toy.
    The function should determine if your pet liked the toy, and if s/he does, then it should be added to the favoriteToys array using the this keyword
*/
let pet =  {
    name: "parrot",
    species: "bird",
    nickname: "Cockatoo",
    age: 5,

    favoriteToys: [ ],

    flying: function ( where ) {
        window.alert( this.name + " " + this.nickname + " is flying high in a " + where + "." );
    },

    playing: ( what ) => {
        window.alert( this.name + " " + this.nickname + " is playing with a " + what + "." );
    },

    singing: ( what ) => {
        window.alert( this.name + " " + this.nickname + " is singing a " + what + "." );
    },
/* It doesn't work: 
    play: ( toy ) => {
        if ( toy === "mirror" ) { this.favoriteToys.push( toy ); }
        console.log( "Cockatoo favorite toys are ", this.favoriteToys );
    }
*/
    play: function ( toy ) {
        if ( toy.indexOf( "mirror" ) != -1 ) { this.favoriteToys.push( toy ); }
        console.log( "Cockatoo favorite toys are ", this.favoriteToys );
    }



}

pet.flying( "sky" );
pet.playing( "mirror" );
pet.singing( "song" );

pet.play( "round mirror" );
pet.play( "mirror ball" );
pet.play( "square mirror" );
pet.play( "hard candy");
