function carregarFrames() {
  let array = ["Final_Fantasy", "Super_Mario_Bros.", "Resident_Evil", "Halo:_Combat_Evolved"];
  let frames:WindowProxy = window.frames;
  for (let i = 0; i < array.length; i++) {
    frames[i].location = "https://ca.wikipedia.org/wiki/" + array[i];
  }
}
