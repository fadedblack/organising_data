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
      genre: "fantasy",
    },
    {
      type: "movies",
      genre: "sci-fi",
    },
  ],
  pet: [
    {
      name: "Snowy",
      species: "rabbit",
      type: "",
      age: 2,
      vaccinatedFully: true,
      favouriteActivities: ["hoping around backyard", "nibbiling on carrot"],
    },
  ],
  employed: false,
  vehicleOwned: false,
  vehicleType: false,
  transport: "",
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
      genre: "rose garden",
    },
    {
      type: "reading",
      genre: "history",
    },
  ],
  pet: [
    {
      name: "Bella",
      species: "cat",
      type: "Persian",
      age: 3,
      vaccinatedFully: true,
      favouriteActivities: ["lounging in the sun"],
    },
    {
      name: "Leo",
      species: "cat",
      type: "Persian",
      age: 3,
      vaccinatedFully: true,
      favouriteActivities: ["lounging in the sun"],
    },
  ],
  employed: true,
  vehicleOwned: false,
  vehicleType: false,
  transport: "",
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
      genre: "Italian",
    },
  ],
  pet: [
    {
      name: "Kiwi",
      species: "parrot",
      type: "",
      age: 0,
      vaccinatedFully: true,
      favouriteActivities: ["knows over 20 languages", "mimicking"],
    },
  ],
  employed: false,
  vehicleOwned: false,
  vehicleType: false,
  transport: "public",
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
      genre: "",
    },
    {
      type: "gardening",
      genere: "",
    },
    {
      type: "weekend trips",
      genre: "",
    },
  ],
  pet: [
    {
      name: "Max",
      species: "dog",
      type: "Golden Retriever",
      age: 4,
      vaccinatedFully: true,
      favouriteActivities: ["playing fetch in park"],
    },
  ],
  employed: true,
  vehicleOwned: true,
  vehicleType: "car",
  transport: "private",
};

const people = [personRahul, personAnanaya, personRamesh, personKavya];

// 1. How many individuals are currently employed?

const getEmployed = function (people) {
  return people.filter((person) => person.employed);
};

const countEmployed = function (people) {
  return getEmployed(people).length;
};

// 2. How many people own a car?

const getVehicleOwner = function (people, vehicleType) {
  return people.filter((person) => person.vehicleType === vehicleType);
};

const countVehicleOwner = function (people, vehicleType) {
  return getVehicleOwner(people, vehicleType).length;
};

// 3. How many pets are fully vaccinated?

const getPetDetails = (people) => people.flatMap((person) => person.pet);

const vaccinatedPets = function (people) {
  return getPetDetails(people).filter((pet) => pet.vaccinatedFully);
};

const countVaccinatedPets = (people) => vaccinatedPets(people).length;

// 4. What are the names of all the pets, and what type of animal is each?

const getNameAndSpecies = function (pet) {
  return { name: pet.name, species: pet.species };
};

const listPetDetails = function (people) {
  return getPetDetails(people).map((pet) => getNameAndSpecies(pet));
};

// 5. Which cities do the individuals live in?

const listCities = function (people) {
  return people.map((person) => person.hometown);
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
  return people.map((person) => person.hobbies).flat();
};

const extractHobbyType = function (hobbies) {
  return hobbies.map((hobby) => hobby.type);
};

const listHobbies = function (people) {
  const hobbiesTypeList = extractHobbyType(getHobbies(people));
  const uniqueHobbies = getUniqueHobbies(hobbiesTypeList);

  return {
    no_of_hobbies: uniqueHobbies.length,
    hobbies: uniqueHobbies,
  };
};

// 7. How many pets belong to people who are currently unemployed?

const listUnemployedIndividuals = function (people) {
  return people.filter((person) => !person.employed);
};

const countUnemployedPetOwners = function (people) {
  return getPetDetails(listUnemployedIndividuals(people)).length;
};

// 8. What is the average age of the individuals mentioned in the passage?

const add = (number1, number2) => number1 + number2;

const sumOfAges = function (people) {
  return people.map((person) => person.age).reduce(add, 0);
};

const getAverageAge = function (people) {
  return sumOfAges(people) / people.length;
};

// 9. How many individuals have studied computer science, and how many of them
// have pets?

const getIndividualsWithDegree = function (people, degree) {
  return people.filter((person) => person["degree"].includes(degree));
};

const countDegressAndPets = function (people, degree) {
  return {
    individuals_with_degree: getIndividualsWithDegree(people, degree).length,
    pets: getPetDetails(getIndividualsWithDegree(people, degree)).length,
  };
};

// 10. How many individuals own more than one pet?

const individualsWithMoreThan1Pet = function (people) {
  return getPetDetails(people).filter((person) => person.length > 1).length;
};

// 11. Which pets are associated with specific favorite activities?

const getPetsFavouriteActivities = function (people) {
  const pets = getPetDetails(people);
  return pets.flatMap((pet) => pet.favouriteActivities);
};

// 12. What are the names of all animals that belong to people who live in
// Bangalore or Chennai?

const extractPeopleFrom = function (people, city) {
  return people.filter(({ hometown }) => hometown === city);
};

const getPetNames = function (pets) {
  return pets.map(({ name }) => name);
};

const extractPetNamesFrom = function (people, cities) {
  return cities.flatMap(function (city) {
    const petDetails = getPetDetails(extractPeopleFrom(people, city));
    return getPetNames(petDetails);
  });
};

// 13. How many vaccinated pets belong to people who do not own a car?

const extractPeopleWithNoCar = function (people) {
  return people.filter(({ vehicleType }) => vehicleType !== "car");
};

const countVaccinatedPetsOfPeopleWithNoCar = function (people) {
  return countVaccinatedPets(extractPeopleWithNoCar(people));
};

// 14. What is the most common type of pet among the group?

// @Refactor: Frequency and MaxOccured are doing the same thing
const frequency = function (pets) {
  return pets.reduce(function (object, pet) {
    if (object[pet.species] === undefined) {
      object[pet.species] = 1;
      return object;
    }

    object[pet.species] += 1;
    return object;
  }, {});
};

const maxOccured = function (frequency, names) {
  return names.reduce(
    function (max, name) {
      if (frequency[name] > max.occuring) {
        max.name = name;
        max.occuring = frequency[name];
      }

      return max;
    },
    { name: "", occuring: 0 }
  );
};

const commonTypeOfPet = function (people) {
  const pets = getPetDetails(people);
  const petFrequency = frequency(pets);
  const petNames = pets.map((pet) => pet.species);

  const maxOccuring = maxOccured(petFrequency, petNames);
  return maxOccuring.name;
};

// 15. How many individuals have more than two hobbies?

const individualsWithMultipleHobby = function (people) {
  return people.filter(({ hobbies }) => hobbies.length > 2);
};

const countIndividualsWithMultipleHobby = function (people) {
  return individualsWithMultipleHobby(people).length;
};

// 16. How many individuals share at least one hobby with Ramesh?

const getHobbiesOf = function (people, personToGet) {
  const hobbyDetails = people.find(({ name }) => name === personToGet).hobbies;

  return hobbyDetails.map(({ type }) => type);
};

const anyElementsMatching = function (array1, array2) {
  return array1.some(function (element) {
    return array2.includes(element);
  });
};

const namesAndHobbiesOf = function (people) {
  const names = people.map(({ name }) => name);

  return names.map(function (name) {
    return { name: name, hobbies: getHobbiesOf(people, name) };
  });
};

const countHobbyMatesOf = function (people, candidateName) {
  const namesAndHobbies = namesAndHobbiesOf(people);
  const candidateHobby = namesAndHobbies.find(
    ({ name }) => name === candidateName
  );

  return (
    namesAndHobbies.filter(function ({ hobbies }) {
      return anyElementsMatching(candidateHobby.hobbies, hobbies);
    }).length - 1
  );
};

// 17. Which pet is the youngest, and what is its name?
const minAge = function (youngestPet, pet) {
  if (pet.age < youngestPet.age && pet.age !== 0) {
    youngestPet.name = pet.name;
    youngestPet.age = pet.age;
  }

  return youngestPet;
};

const getYoungestPet = function (people) {
  const pets = getPetDetails(people);

  return pets.reduce(minAge, { name: "", age: Infinity });
};

// 18. What types of books are mentioned as interests, and who reads them?

const getTypeOfBook = function (people, hobbyType) {
  const types = people.flatMap(function (person) {
    return person.hobbies.filter((hobby) => hobby.type === hobbyType);
  });

  return types.map((type) => type.genre);
};

const extractPeopleByHobby = function (people, hobbyType) {
  return people.filter(function (person) {
    return person.hobbies.filter((hobby) => hobby.type === hobbyType).length;
  });
};

const extractTypeOfBook = function (people) {
  const reading = extractPeopleByHobby(people, "reading");
  const typeOfBook = getTypeOfBook(reading, "reading");

  const names = reading.map((person) => person.name);

  return {
    name: names,
    genre: typeOfBook,
  };
};

// 19. How many individuals live in cities starting with the letter "B"?

const liveInCitiesWithChar = function (people, char) {
  return people.filter((person) => [...person.hometown][0] === char);
};

const countLiveInCitiesWithChar = function (people, char) {
  return liveInCitiesWithChar(people, char).length;
};

// 20. Which individuals do not own any pets?

const doNotOwnPets = function (people) {
  const persons = people.filter((person) => person.pets === undefined);

  return persons.map((person) => person.name);
};
