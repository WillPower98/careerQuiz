const { QuizSession } = require('../../routes/QuizSession.js');
const assert = require("assert");


const TestQuizSession = new QuizSession();


const CareerTracks = [

  ['CONS_OFF', {'title': 'Consular Officers', 'abbreviation ': 'CONS_OFF', 'category': 'FSO', 'score': 0} ],
  ['ECO_OFF', {'title': 'Economic Officers', 'abbreviation ': 'ECO_OFF', 'category': 'FSO', 'score': 0}],
  ['MGMT_OFF', {'title': 'Management Officers', 'abbreviation ': 'MGMT_OFF', 'category': 'FSO', 'score': 0}],
  ['POL_OFF', {'title': 'Political Officers', 'abbreviation ': 'POL_OFF', 'category': 'FSO', 'score': 0}],
  ['PUB_DIP_OFF', {'title': 'Public Diplomacy Officers', 'abbreviation ': 'PUB_DIP_OFF', 'category': 'FSO', 'score': 0}],
  ['MED_HEL', {'title': 'Medical and Health', 'abbreviation ': 'MED_HEALTH', 'category': 'FSS', 'score': 0}],
  ['IT', {'title': 'Information Technology', 'abbreviation ': 'IT', 'category': 'FSS', 'score': 0}],
  ['ENG', {'title': 'Engineering', 'abbreviation ': 'ENG', 'category': 'FSS', 'score': 0}],
  ['INT_PRGM_ENG_LANG', {'title': 'International Programs and English Language', 'abbreviation ': 'INT_PRGM_ENG_LANG', 'category': 'FSS', 'score': 0}],
  ['LAW_ENF_SEC', {'title': 'Law Enforcement and Security', 'abbreviation ': 'LAW_ENF_SEC', 'category': 'FSS', 'score': 0}],
  ['FOR_AFF_OFF',  {'title': 'Foreign Affairs Officer', 'abbreviation ': 'FOR_AFF_OFF', 'category': 'CS', 'score': 0}],
  ['IT_MGMT', {'title': 'Information Technology Management​', 'abbreviation ': 'IT_MGMT', 'category': 'CS', 'score': 0}],
  ['INTEL_SER', {'title': 'Intelligence Series', 'abbreviation ': 'INTEL_SERIES', 'category': 'CS', 'score': 0}],
  ['PUB_AFF', {'title': 'Public Affairs', 'abbreviation ': 'PUB_AFF', 'category': 'CS', 'score': 0}],
  ['LANG_SPLST', {'title': 'Language Specialist', 'abbreviation ': 'LANG_SPEC', 'category': 'CS', 'score': 0} ]

]

// Check to make sure that the career ranking datastructure is properly
// initialized
const KeyIndex = 0;
CareerTracks.map(career => { assert(TestQuizSession._careerRankingMap.has(career[KeyIndex])); })
CareerTracks.map(career => { assert(TestQuizSession._careerRankingMap.get(career[KeyIndex]).score === 0); })

// Test return value for non-existent key
assert(TestQuizSession._careerRankingMap.has("SEC_MGMT") === false);
// Test return value for empty string
assert(TestQuizSession._careerRankingMap.has("") === false);
// Test that there are fifteen career tracks
assert(TestQuizSession.getCareerRankingMap().size === 15);
// Test that the getCareerRecommendations method returns a string of length 3
assert(TestQuizSession.getCareerRecomendations().length == 3);