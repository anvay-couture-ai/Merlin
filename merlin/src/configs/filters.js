// const res = {
//     person: {
//       firstName: faker.person.firstName,
//       bio: faker.person.bio,
//       gender: faker.person.gender,
//       age: faker.number.int({ min: 18, max: 100 }),
//     },
//     job: {
//       jobTitle: faker.person.jobTitle,
//       jobArea: faker.person.jobArea,
//       jobType: faker.person.jobType,
//     },
//     product: {
//       department: faker.commerce.department,
//       isbn: faker.commerce.isbn,
//       price: faker.commerce.price,
//       product: faker.commerce.product,
//       productAdjective: faker.commerce.productAdjective,
//       productDescription: faker.commerce.productDescription,
//       productMaterial: faker.commerce.productMaterial,
//       productName: faker.commerce.productName,
//     },
//     location: {
//       cityName: faker.location.cityName,
//       country: faker.location.country,
//       county: faker.location.county,

//       state: faker.location.state,
//       street: faker.location.street,
//       streetName: faker.location.streetName,
//       zipCode: faker.location.zipCode,
//     },
//   };
const config = {
  filters: {
    person: {
      title: "Person",
      options: {
        firstName: "First Name",
        bio: "Bio",
        gender: "Gender",
        age: "Age",
      },
    },
    job: {
      title: "Job",
      options: {
        jobTitle: "Job Title",
        jobArea: "Job Area",
        jobType: "Job Type",
      },
    },
    product: {
      title: "Product",
      options: {
        department: "Department",
        isbn: "ISBN",
        price: "Price",
        product: "Product",
        productAdjective: "Product Adjective",
        productDescription: "Product Description",
        productMaterial: "Product Material",
        productName: "Product Name",
      },
    },
    location: {
      title: "Location",
      options: {
        cityName: "City Name",
        country: "Country",
        county: "County",
        state: "State",
        street: "Street",
        streetName: "Street Name",
        zipCode: "Zip Code",
      },
    },
  },
};
export default config;
