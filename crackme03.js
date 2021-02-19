// Vous devez assigner la bonne string à la variable password ci dessous
// Et obtenir le message 'GOOD' en éxecutant le programme

let password = '@ee!eeeeeeeeee'

const crackme3 = (password) => {
  if (password.length === 14 && password[0] === '@' && password[3] === '!') { // 14 caractères dont le caractère 0 = @ et le 4eme = ! 
    console.log('GOOD')
  } else {
    console.log('BAD')
  }
}

crackme3(password)