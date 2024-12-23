const personKavya = {
  name: "Kavya",
  age: 28,
  occupation: "salaried",
  profession: "professional dancer",
  degree: [],
  hometown: "Chennai",
  hobbies: [
    {
      type: "reading",
      genre: "fantasy"
    },
    {
      type: "movies",
      genre: "sci-fi"
    }
  ],
  pet: [{
    name: "Snowy",
    species: "rabbit",
    type: "",
    age: 2,
    vaccinated_fully: true,
    favourite_activities: [
      "hoping around backyard",
      "nibbiling on carrot"
    ]
  }],
  employed: false,
  vehicle_owned: false,
  vehicle_type: false,
  transport: ""
};

const personRamesh = {
  name: "Ramesh",
  age: 45,
  occupation: "business",
  profession: "business owner",
  degree: [],
  hometown: "Jaipur",
  hobbies: [
    {
      type: "gardening",
      genre: "rose garden"
    },
    {
      type: "reading",
      genre: "history"
    }
  ],
  pet: [
    {
      name: "Bella",
      species: "cat",
      type: "Persian",
      age: 3,
      vaccinated_fully: true,
      favourite_activities: [
        "lounging in the sun"
      ]
    },
    {
      name: "Leo",
      species: "cat",
      type: "Persian",
      age: 3,
      vaccinated_fully: true,
      favourite_activities: [
        "lounging in the sun"
      ]
    }],
  employed: true,
  vehicle_owned: false,
  vehicle_type: false,
  transport: ""
};

const personAnanaya = {
  name: "Ananya",
  age: 30,
  profession: "",
  occupation: "",
  degree: ["computer science", "minor graphic design"],
  hometown: "Bangalore",
  hobbies: [
    {
      type: "cooking",
      genre: "Italian"
    }
  ],
  pet: [
    {
      name: "Kiwi",
      species: "parrot",
      type: "",
      age: 0,
      vaccinated_fully: true,
      favourite_activities: [
        "knows over 20 languages",
        "mimicking"
      ]
    }
  ],
  employed: false,
  vehicle_owned: false,
  vehicle_type: false,
  transport: "public"
};

const personRahul = {
  name: "Rahul",
  age: 0,
  profession: "salaried",
  occupation: "software engineer",
  degree: ["computer science"],
  hometown: "Pune",
  hobbies: [
    {
      type: "chess",
      genre: ""
    },
    {
      type: "gardening",
      genere: ""
    },
    {
      type: "weekend trips",
      genre: ""
    }
  ],
  pet: [
    {
      name: "Max",
      species: "dog",
      type: "Golden Retriever",
      age: 4,
      vaccinated_fully: true,
      favourite_activities: [
        "playing fetch in park"
      ]
    }
  ],
  employed: true,
  vehicle_owned: true,
  vehicle_type: "car",
  transport: "private"
};

const people = [personRahul, personAnanaya, personRamesh, personKavya];

// 1. How many individuals are currently employed?

const getEmployed = function (people) {
  return people.filter(person => person.employed);
};

const countEmployed = function (people) {
  return getEmployed(people).length;
};

// 2. How many people own a car?

const getVehicleOwner = function (people, vehicleType) {
  return people.filter(person => person.vehicle_type === vehicleType);
};

const countVehicleOwner = function (people, vehicleType) {
  return getVehicleOwner(people, vehicleType).length;
};

// 3. How many pets are fully vaccinated?

const getAllPets = (people => people.flatMap(person => person.pet));

const vaccinatedPets = function (people) {
  return getAllPets(people).filter(pet => pet.vaccinated_fully);
};

const countVaccinatedPets = people => vaccinatedPets(people).length;

// 4. What are the names of all the pets, and what type of animal is each?

const getNameAndSpecies = function (pet) {
  return { name: pet.name, species: pet.species };
};

const listPetDetails = function (people) {
  return getAllPets(people).map(pet => getNameAndSpecies(pet));
};

// 5. Which cities do the individuals live in?

const listCities = function (people) {
  return people.map(person => person.hometown);
};

// 6. How many hobbies are shared across the group? What are they?

const getUniqueHobbies = function (list) {
  return list.reduce(function (uniqueList, element) {
    if (!uniqueList.includes(element)) {
      uniqueList.push(element);
    }

    return uniqueList;
  }, []);
};

const getHobbies = function (people) {
  return people.map(person => person.hobbies).flat();
};

const extractHobbyType = function (hobbies) {
  return hobbies.map(hobby => hobby.type);
};

const listHobbies = function (people) {
  const hobbiesTypeList = extractHobbyType(getHobbies(people));
  const uniqueHobbies = getUniqueHobbies(hobbiesTypeList);

  return {
    no_of_hobbies: uniqueHobbies.length,
    hobbies: uniqueHobbies
  };
};

// 7. How many pets belong to people who are currently unemployed?

const listUnemployedIndividuals = function (people) {
  return people.filter(person => !person.employed);
};

const countUnemployedPetOwners = function (people) {
  return getAllPets(listUnemployedIndividuals(people)).length;
};

// 8. What is the average age of the individuals mentioned in the passage?

const add = (number1, number2) => number1 + number2;

const sumOfAges = function (people) {
  return people.map(person => person.age).reduce(add, 0);
};

const getAverageAge = function (people) {
  return sumOfAges(people) / people.length;
};

// 9. How many individuals have studied computer science, and how many of them 
// have pets?

const getIndividualsWithDegree = function (people, degree) {
  return people.filter(person => person["degree"].includes(degree));
};

const countDegressAndPets = function (people, degree) {
  return {
    individuals_with_degree: getIndividualsWithDegree(people, degree).length,
    pets: getAllPets(getIndividualsWithDegree(people, degree)).length
  };
};

// 10. How many individuals own more than one pet?

const individualsWithMoreThan1Pet = function (people) {
  return getAllPets(people).filter(person => person.length > 1).length;
};

// 11. Which pets are associated with specific favorite activities?

// 12. What are the names of all animals that belong to people who live in 
// Bangalore or Chennai?

const extractPeopleFrom = function (people, city) {
  return people.filter(person => person.hometown === city);
};

const getPetNames = function (pets) {
  return pets.map(pets => pets.name);
};

const extractPetNamesFrom = function (people, cities) {
  const bangalorePeople = extractPeopleFrom(people, cities[0]);
  const chennaiPeople = extractPeopleFrom(people, cities[1]);

  const bangalorePets = getAllPets(bangalorePeople);
  const chennaiPets = getAllPets(chennaiPeople);

  return getPetNames(bangalorePets).concat(getPetNames(chennaiPets));
};

// 13. How many vaccinated pets belong to people who do not own a car?

const extractPeopleWithNoCar = function (people) {
  return people.filter(person => person.vehicle_type !== "car");
};

const petsOfPeopleWithNoCar = function (people) {
  return countVaccinatedPets(extractPeopleWithNoCar(people));
};

// 14. What is the most common type of pet among the group?

// 15. How many individuals have more than two hobbies?

const individualsWithMoreThan2Hobbies = function (people) {
  return people.filter(person => person.hobbies.length > 1);
};

const countIndividualsWithMoreThan2Hobbies = function (people) {
  return individualsWithMoreThan2Hobbies(people).length;
};

// 16. How many individuals share at least one hobby with Ramesh?

// 17. Which pet is the youngest, and what is its name?

const minAge = function (youngestPet, pet) {
  if (pet.age < youngestPet.age && pet.age !== 0) {
    youngestPet.name = pet.name;
    youngestPet.age = pet.age;
  }

  return youngestPet;
};

const getYoungestPet = function (people) {
  const pets = getAllPets(people);

  return pets.reduce(minAge, { name: '', age: Infinity });
};