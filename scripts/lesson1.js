const myName = "Dianne";

const greet = (name) => {
  const now = new Date();
  const hour = now.getHours();
  const timeOfDay = hour < 12 ? 'morning' : hour < 18 ? 'afternoon' : 'evening';
  return `Hey ${name}! Good ${timeOfDay} — cheers from ${myName} 👋`;
};

const classmates = ["Chenee", "Gwyneth", "Carlo", "Dina", "Eli", "Fiona"];

console.log(classmates.map((name) => greet(name)));

console.log(greet(myName));
