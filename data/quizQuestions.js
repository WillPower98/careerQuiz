const preferenceQuestions = [

  {
    id: 0,
    section: "preferences",
    title: "What is your preferred work location?",
    image: "res/worldMap.jpg",
    buttontype: "radio",
    choices: [

      ['U.S.', {
        'CONS_OFF': -5,
        'ECO_OFF': -5,
        'MGMT_OFF': -5,
        'POL_OFF': -5,
        'PUB_DIP_OFF': -5,
        'MED_HEL': 1,
        'IT': 1,
        'ENG': 1,
        'INT_PRGM_ENG_LANG': 1,
        'LAW_ENF_SEC': 1,
        'FOR_AFF_OFF': 1,
        'IT_MGMT': 1,
        'INTEL_SER': 1,
        'PUB_AFF': 1,
        'LANG_SPLST': 1
      }],
      ['International', {
        'CONS_OFF': -5,
        'ECO_OFF': -5,
        'MGMT_OFF': -5,
        'POL_OFF': -5,
        'PUB_DIP_OFF': -5,
        'MED_HEL': 1,
        'IT': 1,
        'ENG': 1,
        'INT_PRGM_ENG_LANG': 1,
        'LAW_ENF_SEC': 1,
        'FOR_AFF_OFF': -5,
        'IT_MGMT': -5,
        'INTEL_SER': -5,
        'PUB_AFF': -5,
        'LANG_SPLST': -5
      }],
      ['Both', {
        'CONS_OFF': 1,
        'ECO_OFF': 1,
        'MGMT_OFF': 1,
        'POL_OFF': 1,
        'PUB_DIP_OFF': 1,
        'MED_HEL': 1,
        'IT': 1,
        'ENG': 1,
        'INT_PRGM_ENG_LANG': 1,
        'LAW_ENF_SEC': 1,
        'FOR_AFF_OFF': 1,
        'IT_MGMT': 1,
        'INTEL_SER': 1,
        'PUB_AFF': 1,
        'LANG_SPLST': 1
      }]

    ]
  },

  {
    id: 1,
    section: "preferences",
    title: "What kind of professions are you interested in?",
    image: "res/profession.jpeg",
    buttontype: "checkbox",
    choices: [

      ["Engineering", {
        'ENG': 1
      }],
      ["Cybersecurity/Information Technology", {
        'IT': 1,
        'IT_MGMT': 1
      }],
      ["Teaching/Education", {
        'INT_PRGM_ENG_LANG': 1
      }],
      ["Medicine", {
        'MED_HEL': 1
      }],
      ["International Studies", {
        'MED_HEL': 1,
        'IT': 1,
        'ENG': 1,
        'INT_PRGM_ENG_LANG': 1,
        'LAW_ENF_SEC': 1
      }],
      ["Language Studies", {
        'INT_PRGM_ENG_LANG': 1,
        'LANG_SPLST': 1
      }],
      ["Law Enforcement", {
        'LAW_ENF_SEC': 1,
        'INTEL_SER': 1
      }],
      ["Communications and Journalism", {
        'PUB_DIP_OFF': 1,
        'PUB_AFF': 1
      }],
      ["Finance", {
        'ECO_OFF': 1
      }],
      ["Logistics", {
        'MGMT_OFF': 1,
        'ENG': 1
      }],
      ["Office Management", {
        'CONS_OFF': 1,
        'MGMT_OFF': 1,
        'ENG': 1
      }],
      ["Social Science/Statistics", {
        'ECO_OFF': 1,
        'INTEL_SER': 1
      }],
      ["Construction/Trade skills", {
        'ENG': 1
      }],
      ["Other/None", {}]

    ]
  },

  {
    id: 2,
    section: "preferences",
    title: "What are some of your skills?",
    image: "res/skills.png",
    buttontype: "checkbox",
    choices: [

      ["Organization & Management", {
        'CONS_OFF': -1,
        'MGMT_OFF': -1
      }],
      ["Ability to work under pressure", {
        'CONS_OFF': 1,
        'ECO_OFF': 1,
        'MGMT_OFF': 1,
        'POL_OFF': 1,
        'PUB_DIP_OFF': 1,
        'ENG': 1,
        'LAW_ENF_SEC': 1,
        'FOR_AFF_OFF': 1,
        'INTEL_SER': 1,
        'PUB_AFF': 1
      }],
      ["Flexibility and adaptability", {
        'CONS_OFF': 1,
        'ECO_OFF': 1,
        'MGMT_OFF': 1,
        'POL_OFF': 1,
        'PUB_DIP_OFF': 1,
        'ENG': 1,
        'INT_PRGM_ENG_LANG': 1,
        'LAW_ENF_SEC': 1,
        'FOR_AFF_OFF': 1,
        'PUB_AFF': 1
      }],
      ["Creativity and problem solving", {
        'CONS_OFF': 1,
        'ECO_OFF': 1,
        'MGMT_OFF': 1,
        'POL_OFF': 1,
        'PUB_DIP_OFF': 1,
        'IT': 1,
        'ENG': 1,
        'FOR_AFF_OFF': 1,
        'IT_MGMT': 1,
        'INTEL_SER': 1
      }],
      ["Ability to build consensus with opposing views", {
        'ECO_OFF': 1,
        'POL_OFF': 1
      }],
      ["Analytical thinker", {
        'ECO_OFF': 1,
        'LAW_ENF_SEC': 1,
        'INTEL_SER': 1
      }],
      ["Interpersonal skills", {
        'ECO_OFF': 1,
        'POL_OFF': 1,
        'PUB_DIP_OFF': 1,
        'INT_PRGM_ENG_LANG': 1,
        'PUB_AFF': 1
      }],
      ["Proficiency in another language", {
        'PUB_DIP_OFF': 1,
        'INTEL_SER': 1,
        'LANG_SPLST': 1
      }],
      ["Computer programming", {
        'ENG': 1,
        'IT_MGMT': 1
      }],
      ["Academic research", {
        'INT_PRGM_ENG_LANG': 1,
        'FOR_AFF_OFF': 1
      }],
      ["Other/None", {}]

    ]
  },


  {
    id: 3,
    section: "preferences",
    title: "Which statements do you self identify with the most?",
    image: "res/identity.jpeg",
    buttontype: "radio",
    choices: [

      ["I am a strategic thinker", {
        'CONS_OFF': 1
      }],
      ["I am good at persuading people", {
        'ECO_OFF': 1,
        'POL_OFF': 1
      }],
      ["I enjoy talking in front of large crowds", {
        'PUB_DIP_OFF': 1,
        'PUB_AFF': 1
      }],
      ["I like to work on complex technical projects", {
        'ECO_OFF': 1,
        'IT': 1,
        'ENG': 1,
        'IT_MGMT': 1,
        'INTEL_SER': 1
      }],
      ["I strive at making processes more effective and efficient", {
        'CONS_OFF': 1,
        'MGMT_OFF': 1,
        'ENG': 1
      }],
      ["I like to lead when working in team settings", {
        'CONS_OFF': 1,
        'ECO_OFF': 1,
        'MGMT_OFF': 1,
        'POL_OFF': 1,
        'PUB_DIP_OFF': 1
      }],
      ["I would enjoy analyzing large amounts of data and using statistical techniques", {
        'IT': 1,
        'INTEL_SER': 1
      }],
      ["I like working with my hands", {
        'ENG': 1,
        'LAW_ENF_SEC': 1
      }],
      ["I would feel comfortable working in a warzone", {
        'CONS_OFF': 1,
        'ECO_OFF': 1,
        'MGMT_OFF': 1,
        'POL_OFF': 1,
        'PUB_DIP_OFF': 1,
        'MED_HEL': 1,
        'IT': 1,
        'ENG': 1,
        'INT_PRGM_ENG_LANG': 1,
        'LAW_ENF_SEC': 1
      }],
      ["I am particularly interested in publishing and digital media", {
        'PUB_DIP_OFF': 1,
        'PUB_AFF': 1
      }]

    ]
  }
];



////////////////////////////////////////////////////////////////////////////////////
///////////////////////         Scenario-Based Questions       /////////////////////
////////////////////////////////////////////////////////////////////////////////////
const scenarioQuestions = [

  {
    id: 0,
    section: "scenarios",
    title: `You are a Diplomat in a country with conservative social rules. An
  American dance group is coming into town. This is a commerciallly organized
  performance but the embassy is provididng some support that will get its
  name on the program sponsor. There is a reception planned with 100 VIP guests
  to be held at the Ambassadors after the performance. The local theatre director
  then says the costumes aren't modest enough. Neither the theatre director nor
  of the dance group will budge. What is the best and and worse course
  of action?`,
    image: "res/theatre.jpeg",
    buttontype: "radio",
    choices: [
      ["You tell the theatre director to cooporate because the embassy is a sponsor and has the right to do whatever it wants.", {
        'PUB_DIP_OFF': -1,
        'INT_PRGM_ENG_LANG': -1,
        'LANG_SPLST': -1
      }],
      ["You ask the director of the dance group if is possible to change or alter the costumes. ", {
        'PUB_DIP_OFF': 1,
        'INT_PRGM_ENG_LANG': 1,
        'LANG_SPLST': 1
      }],
      ["You listen to both directors and negotiate a compromise that would allow to the show to go on.", {
        'PUB_DIP_OFF': 2,
        'INT_PRGM_ENG_LANG': 2,
        'LANG_SPLST': 2
      }]

    ]
  },


  {
    id: 1,
    section: "scenarios",
    title: `You are a Consular official and you recieve a call that 3 Peace Corps Volunteers have
  been detained in a town about 200 miles from the embassy on charges of illegally spying on a
  military base. You learn that the volunteers were hiking and taking pictures to send back home.
  The local Authorities say they will let the volunteers go for a monetary compensation in the form of
  a bribe and a couple bottles of wine. What do you do?`,
    image: "res/hiking.jpg",
    buttontype: "radio",
    choices: [
      ["You take the information and report to the security officer so they can begin arranging the release through official channels.", {
        'CONS_OFF': 1,
        'LAW_ENF_SEC': 1
      }],
      ["You accept and offer money as compensation to have the volunteers released.", {
        'CONS_OFF': -1,
        'LAW_ENF_SEC': -1
      }],
      ["You get the names of the volunteers, the information of where they are detained and you work with the authorities on releasing the volunteers. You explain that while you cannot offer a payment outside of what is allowed by the law, you can clarify the situation  to resolve the matter.", {
        'CONS_OFF': 2,
        'LAW_ENF_SEC': 2
      }]
    ]
  },


  {
    id: 2,
    section: "scenarios",
    title: `As an adminsitrative official, your responsability is to see that all embassy confidential
  materials are reduced so that they may be destroyed within 5 minutes in the event of an emergency.
  The embassy is not currently meeting this requirement. Your boss tells headquarters back in Washington D.C.
  that mission is completed when you know that in fact, it is not. What do you do?`,
    image: "res/classified.jpg",
    buttontype: "radio",
    choices: [
      ["You say nothing since your boss has already deemed the task as complete.", {
        'MGMT_OFF': -1
      }],
      ["You go over your boss and speak to their boss about the situation and explain why they are wrong.", {
        'MGMT_OFF': 1
      }],
      ["You schedule a meeting with your boss and discuss why you disagree with their assesment. You take the opportunity to present the evidence to back your claim and bring up a few solutions to meet the requirement.", {
        'MGMT_OFF': 2
      }]
    ]
  }

];



//cultural adaptablity questions
const trivaQuestions = [

  {
    id: 3,
    section: "scenarios",
    title: "You are in Amman, Jordan, and you are invited to go to the souk. Where will you be going?",
    image: "res/img_snow_wide.jpg",
    buttontype: "radio",
    choices: [
      ["Mosque", {}],
      ["Market", {
        'CONS_OFF': 1,
        'ECO_OFF': 1,
        'MGMT_OFF': 1,
        'POL_OFF': 1,
        'PUB_DIP_OFF': 1,
        'MED_HEL': 1,
        'IT': 1,
        'ENG': 1,
        'INT_PRGM_ENG_LANG': 1,
        'LAW_ENF_SEC': 1
      }],
      ["Park", {}],
      ["Turkish bath", {}]
    ]
  },

  {
    id: 4,
    section: "scenarios",
    title: "In Italy, mums and roses are the flavored flowers to take when invited to dinner. True or False?",
    image: "res/img_snow_wide.jpg",
    buttontype: "radio",
    choices: [
      ["True", {}],
      ["False", {
        'CONS_OFF': 1,
        'ECO_OFF': 1,
        'MGMT_OFF': 1,
        'POL_OFF': 1,
        'PUB_DIP_OFF': 1,
        'MED_HEL': 1,
        'IT': 1,
        'ENG': 1,
        'INT_PRGM_ENG_LANG': 1,
        'LAW_ENF_SEC': 1
      }]
    ]
  }
];


module.exports = {
  preferenceQuestions,
  scenarioQuestions,
  trivaQuestions
};
