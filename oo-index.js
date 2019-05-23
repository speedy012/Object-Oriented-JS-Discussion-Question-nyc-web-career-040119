class Unicorn {
  constructor(name) {
    this.name = name;
    this.health = 1000;
    this.restart = "Out on the street, ready to go!";
    this.attack = "ATTAAAAAAAAAK!";
    this.defend = "You put sunglasses on."
    this.heal = "You feel refreshed after yoga."
    this.breakdance = "It's really spinning class"
    this.eat = "You've gained 1000 health points."
  }
}
//Seed Unicorn
let herman = new Unicorn("herman")
//DOM Nodes
const eventArea = document.querySelector("#event_area")
const commandContainer= document.querySelector("#unicorn-commands")
const imageArea = document.querySelector("#image_area")
//Event Listener
commandContainer.addEventListener('click', function(e){
  let unicornCommands = e.target.id
  //helper method
  function changeImage(command) {
    return imageArea.className = command
  }
  function commandObject(unicornCommand) {
    let command = document.createElement("div")
    command.innerHTML = `${unicornCommand} <br/>`
    eventArea.prepend(command)
  } //end of helper methods
  switch(e.target.id) {
    case ("restart"):
      changeImage("new")
      eventArea.innerHTML = `${herman.restart}`
      break
    case("attack"):
      changeImage("attack")
      commandObject(herman.attack)
      break
    case("defend"):
      changeImage("defend")
      commandObject(herman.defend)
      break
    case("heal"):
      changeImage("heal")
      commandObject(herman.heal)
      break
    case("breakdance"):
      changeImage("breakdance")
      commandObject(herman.breakdance)
      break
    case("eat"):
      changeImage("eat")
      commandObject(herman.eat)
      break
  }
})
