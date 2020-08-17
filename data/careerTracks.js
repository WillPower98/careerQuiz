// The career tracks are organizd in this 2D array. Each array inside CareerTracks
// has two elements: an abbreviation and a object. The object holds all the data
// related to the career tracking, including its name, abbreviation, category,
// and score based on user responses. When a quizSession is initialized by a
// get request to "/quiz", the 2D array is loaded into the career map of that
// session. The conversion from array to map allows O(1) access to each
// career track object. At the end of the quiz, the map is converted back into an
// array for sorting.
const CareerTracks = [

  ['CONS_OFF', {
    'title': 'Consular Officers',
    'abbreviation ': 'CONS_OFF',
    'category': 'FSO',
    'score': 0
  }],
  ['ECO_OFF', {
    'title': 'Economic Officers',
    'abbreviation ': 'ECO_OFF',
    'category': 'FSO',
    'score': 0
  }],
  ['MGMT_OFF', {
    'title': 'Management Officers',
    'abbreviation ': 'MGMT_OFF',
    'category': 'FSO',
    'score': 0
  }],
  ['POL_OFF', {
    'title': 'Political Officers',
    'abbreviation ': 'POL_OFF',
    'category': 'FSO',
    'score': 0
  }],
  ['PUB_DIP_OFF', {
    'title': 'Public Diplomacy Officers',
    'abbreviation ': 'PUB_DIP_OFF',
    'category': 'FSO',
    'score': 0
  }],
  ['MED_HEL', {
    'title': 'Medical and Health',
    'abbreviation ': 'MED_HEALTH',
    'category': 'FSS',
    'score': 0
  }],
  ['IT', {
    'title': 'Information Technology',
    'abbreviation ': 'IT',
    'category': 'FSS',
    'score': 0
  }],
  ['ENG', {
    'title': 'Engineering',
    'abbreviation ': 'ENG',
    'category': 'FSS',
    'score': 0
  }],
  ['INT_PRGM_ENG_LANG', {
    'title': 'International Programs and English Language',
    'abbreviation ': 'INT_PRGM_ENG_LANG',
    'category': 'FSS',
    'score': 0
  }],
  ['LAW_ENF_SEC', {
    'title': 'Law Enforcement and Security',
    'abbreviation ': 'LAW_ENF_SEC',
    'category': 'FSS',
    'score': 0
  }],
  ['FOR_AFF_OFF', {
    'title': 'Foreign Affairs Officer',
    'abbreviation ': 'FOR_AFF_OFF',
    'category': 'CS',
    'score': 0
  }],
  ['IT_MGMT', {
    'title': 'Information Technology Management​',
    'abbreviation ': 'IT_MGMT',
    'category': 'CS',
    'score': 0
  }],
  ['INTEL_SER', {
    'title': 'Intelligence Series',
    'abbreviation ': 'INTEL_SERIES',
    'category': 'CS',
    'score': 0
  }],
  ['PUB_AFF', {
    'title': 'Public Affairs',
    'abbreviation ': 'PUB_AFF',
    'category': 'CS',
    'score': 0
  }],
  ['LANG_SPLST', {
    'title': 'Language Specialist',
    'abbreviation ': 'LANG_SPEC',
    'category': 'CS',
    'score': 0
  }]

];

module.exports = { CareerTracks };
