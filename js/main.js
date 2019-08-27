/*
    Create an object that represents your pet.

    Name property with a string value.
    Species property with a string value.
    Nicknames property with an array value. Array contains strings.
    Age property with an integer value
*/

let pet =  {
    name: "parrot",
    species: "bird",
    nickname: "Cockatoo",
    age: 5,

    flying: function fly ( where ) {
        window.alert( this.name + " " + this.nickname + " is flying high in a " + where + "." );
    },

    playing: ( what ) => {
        window.alert( this.name + " " + this.nickname + " is playing with a " + what + "." );
    },

    singing: ( what ) => {
        window.alert( this.name + " " + this.nickname + " is singing a " + what + "." );
    }
}

pet.flying( "sky" );
pet.playing( "mirror" );
pet.singing( "song" );
