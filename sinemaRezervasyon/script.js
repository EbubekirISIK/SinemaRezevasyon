const container = document.querySelector(".container");
const count = document.querySelector("#count");
const amount = document.querySelector("#amount");
const select = document.getElementById('movie');

container.addEventListener("click", function(event) {
    if(event.target.classList.contains('seat') && !event.target.classList.contains("reserved")){ // bu basılan koltuklarda bu classlar var mı yok mu kontrolu yapılıyor.
        event.target.classList.toggle('selected'); // koltuklara basıldığında selected classı yoksa ekler varsa siler.
        calculateTotal();
    }
});

select.addEventListener('change', function() { // eğer dropdown değişmişse
    calculateTotal();  
});

function calculateTotal(){
    let selectedSeatCount = container.querySelectorAll('.seat.selected').length; // kaç tane koltuk seçilmiş ona bakıyoruz.
    let price = select.value;
    count.innerText = selectedSeatCount;
    amount.innerText = selectedSeatCount * price;
}
