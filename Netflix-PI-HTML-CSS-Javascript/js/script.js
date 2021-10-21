class Accordion {
    constructor(accordionListQuestion) {
        this.accordionListQuestion = document.querySelectorAll(accordionListQuestion);
        this.activeItemClass = "active";
    }  

    toggleAccordion(item) {
        item.classList.toggle(this.activeItemClass);
        item.nextElementSibling.classList.toggle(this.activeItemClass);
    }

    addAccordionEvent() {
        this.accordionListQuestion.forEach((question) => {
            question.addEventListener("click", () => this.toggleAccordion(question));
        })
    }
    init() {
        if(this.accordionListQuestion.length) {
            this.addAccordionEvent();
        }
        return this;
    }
}

const accordion = new Accordion(".faq-question");
accordion.init();
