const icon = document.getElementById("icon");

icon.onclick = function() {
    document.body.classList.toggle("darkmode");
    document.body.classList.toggle("lightmode");

    // Toggle icon
    if (document.body.classList.contains("darkmode")) {
        icon.src = "./images/sun.png"; // Change to sun icon for light mode
    } else {
        icon.src = "./images/moon.png"; // Change back to moon icon for dark mode
    }
};





let currentSlide = 0;
const slides = document.querySelectorAll('.slide');

function showSlide(index) {
    slides.forEach((slide, i) => {
        slide.classList.remove('active');
        if (i === index) {
            slide.classList.add('active');
        }
    });
}

function nextSlide() {
    currentSlide = (currentSlide + 1) % slides.length;
    showSlide(currentSlide);
}

function prevSlide() {
    currentSlide = (currentSlide - 1 + slides.length) % slides.length;
    showSlide(currentSlide);
}

// Dastlab birinchi rasmni ko'rsatish
showSlide(currentSlide);










function showCars(type) {
    // Hamma mashinalarni yashirish
    document.getElementById('compact-cars').style.display = 'none';
    document.getElementById('sports-cars').style.display = 'none';
    document.getElementById('vans').style.display = 'none';
    
    // Faqat kerakli turdagi mashinalarni ko'rsatish
    document.getElementById(type).style.display = 'flex';
}






    
openBtn.addEventListener('click', () => {
    modal.showModal()
})
closeBtn.addEventListener('click', () => {
    modal.close()
})















// Mashina ma'lumotlari ro'yxati
const cars = [
    { type: 'compact', name: 'Toyota Corolla' },
    { type: 'sport', name: 'Ferrari 488' },
    { type: 'vans', name: 'Ford Transit' },
    { type: 'compact', name: 'Honda Civic' },
    { type: 'sport', name: 'Lamborghini Huracan' },
    { type: 'vans', name: 'Mercedes Sprinter' },
];

// Filter funksiyasi
function filterCars(type) {
    const carList = document.getElementById('car-list');
    carList.innerHTML = '';

    const filteredCars = cars.filter(car => car.type === type);

    filteredCars.forEach(car => {
        const carItem = document.createElement('p');
        carItem.textContent = car.name;
        carList.appendChild(carItem);
    });
}





document.getElementById("viewAllCarsBtn").addEventListener("click", function() {
    let cars = document.querySelectorAll(".car");
    cars.forEach(car => {
        car.style.display = "block"; // Barcha mashinalarni ko'rsatadi
    });
});
