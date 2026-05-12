document.addEventListener("DOMContentLoaded", () => {

    const questions = document.querySelectorAll(".faq-question");

    questions.forEach(button => {
        button.addEventListener("click", () => {

            const item = button.parentElement;

            item.classList.toggle("active");

        });
    });

    const elements = document.querySelectorAll(
        ".section, .card, .moment-card, .faq-item"
    );

    const observer = new IntersectionObserver(entries => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add("show");
            }
        });
    });

    elements.forEach(el => observer.observe(el));

});