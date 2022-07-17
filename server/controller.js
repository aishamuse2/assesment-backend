const compliments = [
  "Gee, you're a smart cookie!",
  "Cool shirt!",
  "Your Javascript skills are stellar.",
];


module.exports = {
  getCompliment: (req, res) => {
    // choose random compliment
    let randomIndex = Math.floor(Math.random() * compliments.length);
    let randomCompliment = compliments[randomIndex];

    res.status(200).send(randomCompliment);
  },
  getFortune: (req, res) => {
    const fortunes = [
      "A faithful friend is a strong defense.",
      "A good time to finish up old tasks.",
      "A pleasant surprise is waiting for you",
      "A smile is your personal welcome mat",
      "A soft voice may be awfully persuasive",
      "Adventure can be real happiness",
    ];
    //choose random fortune
    let randomItem = Math.floor(Math.random() * fortunes.length);
    let randomFortune = fortunes[randomItem];

    res.status(200).send(randomFortune);
  },
  addCompliment: (req, res) => {
    const compliment = req.body.compliment;
    compliments.push(compliment);
    res.status(200).send("Succesfully added Compliment: " + compliment);
  },
  getRandomCountry: (req, res) => {
    const continent = req.body.continent;
    let country = "";
    const northAmericaCountries = ["Usa", "Mexico", "Canada"];
    const southAmericaCountries = ["Brazil", "Peru", "Argentina"];
    const AfricaCountries = ["Somalia", "Ethopia", "Ghana"];
    const EuropeCountries = ["United Kingdom", "Grecce", "France"];
    const AsiaCountries = ["Japan", "China", "India"];
    let randomIndex = Math.floor(Math.random() * 3);
    if (continent == "North America") {
      country = northAmericaCountries[randomIndex];
    }
    if (continent == "South America") {
      country = southAmericaCountries[randomIndex];
    }
    if (continent == "Africa") {
      country = AfricaCountries[randomIndex];
    }
    if (continent == "Europe") {
      country = EuropeCountries[randomIndex];
    }
    if (continent == "Asia") {
      country = AsiaCountries[randomIndex];
    }

    res.status(200).send(country);
  },
  deleteCompliment: (req, res) => {
    const removedCompliment = compliments.pop();

    res
      .status(200)
      .send("Succesfully Deleted Compliment: " + removedCompliment);
  },
};
