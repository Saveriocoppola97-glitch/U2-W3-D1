class User {
  constructor(_firstName, _LastName, _age, _location) {
    this.firstName = _firstName;
    this.lastName = _LastName;
    this.age = _age;
    this.location = _location;
  }

  ageDiverso = function (altriUser) {
    if (this.age > altriUser.age) {
      return `${this.firstName} è più vecchio di ${altriUser.firstName}`;
    } else {
      return `${this.firstName} è più giovane di ${altriUser.firstName}`;
    }
  };
}

const x = new User("Saverio", "Coppola", 29, "Catania");
const y = new User("Brandon", "Casabianca", 24, "Piacenza");

console.log(x.confrontoAge(y));
