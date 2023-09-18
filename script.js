const sampleObject = { red: "#FF0000", green: "#00FF00", white: "#FFFFFF" };

function hasKey(key) {
 // gf
	for (const objectKey in sampleObject) {
    if (objectKey === key) {
      return true;
    }
  }
  return false;
}



// Do not change the code below
const key = prompt("Enter Key.");
alert(hasKey(key));
