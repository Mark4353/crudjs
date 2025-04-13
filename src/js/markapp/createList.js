export const createList = (plants) => {
  let plants = plants.map(
    (plant) =>
      `
        <li class="plant">
        <h2 class="plant__title">${plants.title}</h2>
        <img src="${plants.photo}" alt="${plants.title}" class="plant__img">
        <p class="price">${plants.price}</p>
        <label class="plants__label"> <input type="checkbox" class="favorite" checked="${plants.favorite}" ></label>
       
    </li>
        `
  );
};
