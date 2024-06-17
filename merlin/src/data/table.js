import { fakerEN as faker } from "@faker-js/faker";

const dataRow = (i) => {
  return {
    key: i,
    name: faker.person.firstName(),
    bio: faker.person.bio(),
    gender: faker.person.gender(),
    zodiac: faker.person.zodiacSign(),
    age: faker.number.int({ min: 18, max: 100 }),
    address: faker.location.streetAddress(),
    text: faker.lorem.sentence({
      min: 5,
      max: 20,
    }),
  };
};
const data = (pageNumber = 0, pageCount = 5) =>
  Array.from({ length: pageCount }, (_, i) => dataRow(i));

export default data;
