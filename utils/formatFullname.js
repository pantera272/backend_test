module.exports = (fullName) => {
  if (typeof fullName !== "string" || !fullName){
    return "Error"
  } else {
    const name = fullName.split(' ');
    const length = name.length;    
    if (length === 2){
      const [firstName, lastName ] = name;
      return firstName[0].toUpperCase() + firstName.slice(1).toLowerCase() + ' ' + lastName[0].toUpperCase() + lastName.slice(1).toLowerCase();
    } else {
      return "Error"
    }
  }
};
