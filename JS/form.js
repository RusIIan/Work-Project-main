// Получаем все элементы с классом "switcher"
const switchers = document.querySelectorAll(".switcher");

// Преобразуем NodeList в массив для использования forEach
const switchersArray = Array.from(switchers);

// Добавляем обработчик события клика для каждого элемента "switcher"
switchersArray.forEach((item) => {
  item.addEventListener("click", function () {
    // Удаляем класс "is-active" у родительских элементов всех switchers
    switchersArray.forEach((switcher) =>
      switcher.parentElement.classList.remove("is-active")
    );

    // Добавляем класс "is-active" родительскому элементу текущего switcher
    this.parentElement.classList.add("is-active");
  });
});
