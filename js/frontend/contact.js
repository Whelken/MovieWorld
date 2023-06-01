const p = Array.from(document.querySelectorAll(".p1, .p2, .p3, .p4, .p5, .p6"));
const addToggleListener = (element, index) => {
  const question = document.querySelector(`.cont__question${index + 1}`);
  question.addEventListener("click", () => {
    p[index].classList.toggle(`p${index + 1}Move`);
  });
};
p.forEach(addToggleListener);