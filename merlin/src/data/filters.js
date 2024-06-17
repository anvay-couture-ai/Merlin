import { fakerEN as faker } from "@faker-js/faker";

const res = {
  person: {
    firstName: faker.person.firstName,
    bio: faker.person.bio,
    gender: faker.person.gender,
    age: faker.number.int({ min: 18, max: 100 }),
  },
  job: {
    jobTitle: faker.person.jobTitle,
    jobArea: faker.person.jobArea,
    jobType: faker.person.jobType,
  },
  product: {
    department: faker.commerce.department,
    isbn: faker.commerce.isbn,
    price: faker.commerce.price,
    product: faker.commerce.product,
    productAdjective: faker.commerce.productAdjective,
    productDescription: faker.commerce.productDescription,
    productMaterial: faker.commerce.productMaterial,
    productName: faker.commerce.productName,
  },
  location: {
    cityName: faker.location.cityName,
    country: faker.location.country,
    county: faker.location.county,

    state: faker.location.state,
    street: faker.location.street,
    streetName: faker.location.streetName,
    zipCode: faker.location.zipCode,
  },
};
const data = (group, attribute, pageNumber = 1, pageCount = 10) =>
  Array.from({ length: pageCount }, (_, i) => {
    return res[group][attribute]();
  });

export default data;
