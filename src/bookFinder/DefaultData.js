export let bookDefault = [
  {
    id: crypto.randomUUID(),
    title: "JavaScript and Jquery",
    by: "Jon Duckett",
    price: 62,
    published: 2008,
    isFavorite: true,
  },
  {
    id: crypto.randomUUID(),
    title: "Introduction to Algorithms",
    by: "Thomas H. Cormen",
    price: 100,
    published: 2009,
    isFavorite: false,
  },
  {
    id: crypto.randomUUID(),
    title: "Structure and Interpretation",
    by: " Harold Abelson",
    price: 87,
    published: 1996,
    isFavorite: false,
  },
  {
    id: crypto.randomUUID(),
    title: "The Clean Coder: A Code of Conduct for Professional Programmers",
    by: " Robert C. Martin",
    price: 150,
    published: 2011,
    isFavorite: false,
  },
  {
    id: crypto.randomUUID(),
    title: "Code Complete: A Practical Handbook of Software Construction",
    by: "Steve McConnell",
    price: 90,
    published: 2004,
    isFavorite: false,
  },
  {
    id: crypto.randomUUID(),
    title: "Design Patterns: Elements of Reusable Object-Oriented Software",
    by: "Erich Gamma,",
    price: 80,
    published: 1994,
    isFavorite: true,
  },
  {
    id: crypto.randomUUID(),
    title: "The Pragmatic Programmer",
    by: "Andrew Hunt",
    price: 105,
    published: 20019,
    isFavorite: false,
  },
  {
    id: crypto.randomUUID(),
    title: "Head First Design Patterns: A Brain-Friendly Guide",
    by: "Eric Freeman",
    price: 75,
    published: 2004,
    isFavorite: false,
  },
];

export function sortCul(bookslist) {
  bookslist.sort((titleOne, titleTwo) => {
    const title1 = titleOne.title.toUpperCase();
    const title2 = titleTwo.title.toUpperCase();
    if (title1 < title2) {
      return -1;
    }
    if (title1 > title2) {
      return 1;
    }
    return 0;
  });
}
