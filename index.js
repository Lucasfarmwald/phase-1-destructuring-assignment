const farmAnimals = 'cow horse sheep pig chicken';

const colors = ['red', 'orange', 'yellow', 'green', 'blue', 'indigo', 'violet'];

const muppet = {
  muppetName: 'Miss Piggy',
  color: 'pink',
  song: 'Never Before, Never Again',
  job: 'Cast member of The Muppet Show',
  partner: 'Kermit'
};

const nestedMuppet = {
  nestedName: 'Kermit',
  nestedColor: 'green',
  album: {
    theMuppetMovie: {
      song1: 'Rainbow Connection',
      song2: 'Moving Right Along',
      song3: 'Never Before, Never Again',
      song4: 'I Hope That Something Better Comes Along',
    },
  },
  nestedJob: 'Host of The Muppet Show',
  nestedPartner: 'Miss Piggy'
};

// Strings

// 1. Use destructuring to assign appropriate variables based on the sounds animals make.
   //const {c} = farmAnimals 
    farmAnimals.split(' ')
      let moo = 'cow'
      let neigh = 'horse'
      let baa = 'sheep'
      let oink = 'pig'
      let cluck = 'chicken'
// 2. Bolt the horse wandered off, so just give us four animals, and let's name them bessie, dolly, babe, and little.
      let bessie = 'cow'
      let dolly = 'sheep'
      let babe = 'pig'
      let little = 'chicken'
// 3. Little the chicken had to go back to the coop, so now we're left with three. Let's use color variables of blackAndWhite, black, and pink.
     let blackAndWhite = 'cow'
     let black = 'sheep'
     let pink = 'pig'
// Arrays

// 4. Use destructuring to assign appropriate variables using the color names.
 let red = 'red'
 let orange = 'orange'
 let yellow = 'yellow'
 let blue = 'blue'
 let green = 'green'
 let indigo = 'indigo'
 let violet = 'violet'

// 5. Some people have a really hard time picking out indigo, so let's leave that one out, using the first letter of each color as the variable names.
   let r = 'red'
   let o = 'orange'
   let y = 'yellow'
   let b = 'blue'
   let g = 'green'
   let i = 'indigo'
   let v = 'violet'

// 6. But wait! Indigo is now feeling *super* left out. Let's only assign indigo using indg. 
let indg = 'indigo'
// Objects

// 7. Use destructuring to assign all variables using the keys as the variable names
  let muppetName = 'Miss Piggy'
  let color = 'pink'
  let song = 'Never Before, Never Again'
  let job = 'Cast member of The Muppet Show'
  let partner = 'Kermit'
// 8. Use destructuring to assign songs 2 and 4, and Kermit's job and partner
   let song2 = 'Moving Right Along'
   let song4 = 'I Hope That Something Better Comes Along'
   let nestedJob = 'Host of The Muppet Show'
   let nestedPartner = 'Miss Piggy'