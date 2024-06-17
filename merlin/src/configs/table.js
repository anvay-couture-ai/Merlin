//  key: i,
//   name: faker.person.firstName(),
//   bio: faker.person.bio(),
//   gender: faker.person.gender(),
//   zodiac: faker.person.zodiacSign(),
//   age: faker.number.int({ min: 18, max: 100 }),
//   address: faker.location.streetAddress(),
const config = {
  columns: [
    {
      title: "Name",
      dataIndex: "name",
      key: "name",
      colSpan: 2,
    },
    {
      title: "Bio",
      dataIndex: "bio",
      key: "bio",
      colSpan: 3,
    },
    {
      title: "Gender",
      dataIndex: "gender",
      key: "gender",
      colSpan: 2,
    },
    {
      title: "Zodiac",
      dataIndex: "zodiac",
      key: "zodiac",
      colSpan: 2,
    },
    {
      title: "Age",
      dataIndex: "age",
      key: "age",
      colSpan: 2,
    },
    {
      title: "Address",
      dataIndex: "address",
      key: "address",
      colSpan: 3,
    },
    {
      title: "Essay",
      dataIndex: "text",
      key: "text",
      colSpan: 4,
    },
  ],
};
export default config;
