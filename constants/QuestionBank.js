const dummyQuestions = [
    {
      id: 1,
      question: " The deadly “Coronavirus outbreak” in January 2020 was started in the Chinese city of",
      options: ["Chengdu", "Wuhan", "New York"],
      answer: "Wuhan"
    },
    {
      id: 2,
      question: "About how much “mass of the human body” is made up of Oxygen?",
      options: ["25%", "35%", "65%"],
      answer: "65%"
    },
    {
      id: 3,
      question: "Which component of the blood fight against infectious disease?",
      options: ["White Blood Cells", "Red Blood Cells", "Blood Proteins"],
      answer: "White Blood Cells"
    },
    {
      id: 4,
      question: "HTML is an abbreviation for?",
      options: ["HiTech Meaningful Language", "HiTech Markup Language", "HyperText Markup Language"],
      answer: "HyperText Markup Language"
    },
  
    {
      id: 5,
      question: " LAN is an abbreviation for?",
      options: ["Large Access Network", "Local Access Network", "Local Area Network"],
      answer: "Local Area Network"
    },
  
    {
      id: 6,
      question: "Which is the world’s oldest democracy?",
      options: ["India", "UK", "Greece"],
      answer: "Greece"
    },
  
    {
      id: 7,
      question: "Who was the inventor of Ctrl+C (copy), Ctrl+V (Paste ) and Ctrl+X (Cut)?",
      options: ["Bill Gates", "Larry Tesler", "David Sundstrand"],
      answer: "Larry Tesler"
    },
  
    {
      id: 8,
      question: "What do you call a single point on a computer screen?",
      options: ["Cell", "Element", "Pixel"],
      answer: "Pixel"
    },
  
    {
      id: 9,
      question: "Super Computer was invented by?",
      options: ["J.H, Van Tassel", "J.C. Perrier", "W.L.Judson"],
      answer: "J.H, Van Tassel"
    },
  
    {
      id: 10,
      question: "Till date how many generations of computers have been developed?",
      options: ["3", "4", "5"],
      answer: "5"
    },
      
  ];
  
  
  var shuffled = dummyQuestions.sort(function(){return .5 - Math.random()});
  export var randomSelected=shuffled.slice(0,5);
  