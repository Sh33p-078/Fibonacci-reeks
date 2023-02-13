function fibonacci(num) {
    let eerste = 0,
        tweede = 1,
        temp;
    // Zet de eerste loop in wat opslaat en herhaald vanaf het volgende getal
    for (let i = 0; i < num; i++) {
        // Zorgt ervoor dat het tweede getal in de volgende print het eerste getal is en het tweede getal de som maakt van de eerste en de tweede van de vorige print
        temp = eerste;
        eerste = tweede;
        tweede = temp + tweede;
        // Print steeds het eerste nummer
        document.write(eerste + "<br>");
    }
}