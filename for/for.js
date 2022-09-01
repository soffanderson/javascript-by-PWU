var jmlAngkot = 10;
var angkotBeroperasi = 7;
var i = 1;

while (i <= angkotBeroperasi) {
  console.log("Angkot no. " + i + " beroperasi dengan baik.");
  i++;
}

for (i = angkotBeroperasi + 1; i <= jmlAngkot; i++) {
  console.log("Angkot no. " + i + " sedang tidak beroperasi.");
}
