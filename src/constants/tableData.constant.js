function getRandomDate(startDate, endDate) {
  const startTimestamp = new Date(startDate).getTime();
  const endTimestamp = new Date(endDate).getTime();
  const randomTimestamp =
    Math.floor(Math.random() * (endTimestamp - startTimestamp + 1)) +
    startTimestamp;
  return new Date(randomTimestamp);
}
const startDate = "2024-05-01";
const endDate = "2024-06-4";

export const TableData = [
  {
    firstName: "Sasidharan",
    lastName: "S",
    amount: 10000,
    gender: "Male",
    added_on: getRandomDate(startDate, endDate),
    status: "Pending",
  },
  {
    firstName: "Ananya",
    lastName: "B",
    amount: 15000,
    gender: "Female",
    added_on: getRandomDate(startDate, endDate),
    status: "Paid",
  },
  {
    firstName: "Rajesh",
    lastName: "V",
    amount: 20000,
    gender: "Male",
    added_on: getRandomDate(startDate, endDate),
    status: "Rejected",
  },
  {
    firstName: "Meena",
    lastName: "D",
    amount: 5000,
    gender: "Female",
    added_on: getRandomDate(startDate, endDate),
    status: "Pending",
  },
  {
    firstName: "Vikram",
    lastName: "V",
    amount: 12000,
    gender: "Male",
    added_on: getRandomDate(startDate, endDate),
    status: "Paid",
  },
  {
    firstName: "Priya",
    lastName: "S",
    amount: 25000,
    gender: "Female",
    added_on: getRandomDate(startDate, endDate),
    status: "Rejected",
  },
  {
    firstName: "Karthik",
    lastName: "K",
    amount: 18000,
    gender: "Male",
    added_on: getRandomDate(startDate, endDate),
    status: "Pending",
  },
  {
    firstName: "Sneha",
    lastName: "S",
    amount: 3000,
    gender: "Female",
    added_on: getRandomDate(startDate, endDate),
    status: "Paid",
  },
  {
    firstName: "Arjun",
    lastName: "A",
    amount: 22000,
    gender: "Male",
    added_on: getRandomDate(startDate, endDate),
    status: "Rejected",
  },
  {
    firstName: "Divya",
    lastName: "D",
    amount: 9000,
    gender: "Female",
    added_on: getRandomDate(startDate, endDate),
    status: "Pending",
  },
  {
    firstName: "Ravi",
    lastName: "R",
    amount: 11000,
    gender: "Male",
    added_on: getRandomDate(startDate, endDate),
    status: "Paid",
  },
  {
    firstName: "Nisha",
    lastName: "N",
    amount: 27000,
    gender: "Female",
    added_on: getRandomDate(startDate, endDate),
    status: "Rejected",
  },
  {
    firstName: "Manoj",
    lastName: "M",
    amount: 14000,
    gender: "Male",
    added_on: getRandomDate(startDate, endDate),
    status: "Pending",
  },
  {
    firstName: "Shalini",
    lastName: "A",
    amount: 23000,
    gender: "Female",
    added_on: getRandomDate(startDate, endDate),
    status: "Paid",
  },
  {
    firstName: "Rohit",
    lastName: "S",
    amount: 19000,
    gender: "Male",
    added_on: getRandomDate(startDate, endDate),
    status: "Rejected",
  },
  {
    firstName: "Lakshmi",
    lastName: "L",
    amount: 8000,
    gender: "Female",
    added_on: getRandomDate(startDate, endDate),
    status: "Pending",
  },
  {
    firstName: "Gaurav",
    lastName: "G",
    amount: 16000,
    gender: "Male",
    added_on: getRandomDate(startDate, endDate),
    status: "Paid",
  },
  {
    firstName: "Neha",
    lastName: "N",
    amount: 21000,
    gender: "Female",
    added_on: getRandomDate(startDate, endDate),
    status: "Rejected",
  },
  {
    firstName: "Kiran",
    lastName: "K",
    amount: 13000,
    gender: "Male",
    added_on: getRandomDate(startDate, endDate),
    status: "Pending",
  },
  {
    firstName: "Ritika",
    lastName: "R",
    amount: 24000,
    gender: "Female",
    added_on: getRandomDate(startDate, endDate),
    status: "Paid",
  },
  {
    firstName: "Aravind",
    lastName: "A",
    amount: 17000,
    gender: "Male",
    added_on: getRandomDate(startDate, endDate),
    status: "Rejected",
  },
  {
    firstName: "Preeti",
    lastName: "P",
    amount: 6000,
    gender: "Female",
    added_on: getRandomDate(startDate, endDate),
    status: "Pending",
  },
  {
    firstName: "Harish",
    lastName: "H",
    amount: 25000,
    gender: "Male",
    added_on: getRandomDate(startDate, endDate),
    status: "Paid",
  },
  {
    firstName: "Swati",
    lastName: "S",
    amount: 10000,
    gender: "Female",
    added_on: getRandomDate(startDate, endDate),
    status: "Rejected",
  },
  {
    firstName: "Amit",
    lastName: "K",
    amount: 9000,
    gender: "Male",
    added_on: getRandomDate(startDate, endDate),
    status: "Pending",
  },
  {
    firstName: "Kavya",
    lastName: "K",
    amount: 15000,
    gender: "Female",
    added_on: getRandomDate(startDate, endDate),
    status: "Paid",
  },
  {
    firstName: "Sunil",
    lastName: "S",
    amount: 22000,
    gender: "Male",
    added_on: getRandomDate(startDate, endDate),
    status: "Rejected",
  },
  {
    firstName: "Renu",
    lastName: "R",
    amount: 3000,
    gender: "Female",
    added_on: getRandomDate(startDate, endDate),
    status: "Pending",
  },
  {
    firstName: "Mahesh",
    lastName: "M",
    amount: 12000,
    gender: "Male",
    added_on: getRandomDate(startDate, endDate),
    status: "Paid",
  },
  {
    firstName: "Shreya",
    lastName: "V",
    amount: 20000,
    gender: "Female",
    added_on: getRandomDate(startDate, endDate),
    status: "Rejected",
  },
  {
    firstName: "Swati",
    amount: 10000,
    lastName: "S",
    gender: "Female",
    added_on: getRandomDate(startDate, endDate),
    status: "Rejected",
  },
  {
    firstName: "Amit",
    lastName: "Q",
    amount: 9000,
    gender: "Male",
    added_on: getRandomDate(startDate, endDate),
    status: "Pending",
  },
];
