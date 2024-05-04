var arttır = document.getElementById('arttır');
var azalt = document.getElementById('azalt');
var counterText = document.getElementById('counter');
var counter = 0;
if (counter == 0) {
    arttır.addEventListener('click', function () {
        counter++;
        console.log(counter);
        if (counterText) {
            counterText.textContent = counter.toString();
        }
    });
}
azalt.addEventListener('click', function () {
    counter--;
    console.log(counter);
    if (counterText) {
        counterText.textContent = counter.toString();
    }
});
