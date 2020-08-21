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
    'title': 'Consular Officer',
    'abbreviation ': 'CONS_OFF',
    'category': 'FSO',
    'score': 0,
    'description': `Strategic thinkers and crisis managers who protect U.S.citizens and interests abroad.
    Consular Officers make judgments about foreign nationals who want to travel to
    the United States. They also facilitate adoptions, help evacuate Americans,
    combat fraud to protect our borders, and fight human trafficking. Consular
    Officers touch people’s lives in important ways, often reassuring families
    in crisis.`
  }],
  ['ECO_OFF', {
    'title': 'Economic Officer',
    'abbreviation ': 'ECO_OFF',
    'category': 'FSO',
    'score': 0,
    'description': `Resourceful negotiators who build and maintain positiveeconomic and trade
    relations between the U.S. and other countries. While having an economics
    background is useful, it’s not required. Foreign Service Economic Officers focus
    on developing relationships with important economic figures, including those
    in the business community, the government and opposition, non-governmental
    organizations, academia and multilateral organizations. They promote U.S.
    economic and commercial interests. Their reporting and analysis on economic
    conditions and trends in the host country influence U.S. policy formulation
    and implementation.`
  }],
  ['MGMT_OFF', {
    'title': 'Management Officer',
    'abbreviation ': 'MGMT_OFF',
    'category': 'FSO',
    'score': 0,
    'description': `Creative, fast-thinking problem-solvers who handle diverse challenges
    Nothing is routine about managing an embassy or consulate! Management Officers
    are the "go to" leaders at U.S. embassies. They are resourceful and creative,
    as they manage all embassy operations, from real estate to human resources,
    from security to budget. Management officers make diplomacy work and many
    advance to the level of ambassador, where such skills are highly valued.`
  }],
  ['POL_OFF', {
    'title': 'Political Officer',
    'abbreviation ': 'POL_OFF',
    'category': 'FSO',
    'score': 0,
    'description': `Informed negotiators who interpret situations and advise on international issues.
    Political Officers communicate with foreign governments to seek support for
    shared goals, including votes in multilateral fora. While some Political
    Officers do make it to the top, there are representatives from all generalist
    career tracks in the ambassadorial ranks.`
  }],
  ['PUB_DIP_OFF', {
    'title': 'Public Diplomacy Officer',
    'abbreviation ': 'PUB_DIP_OFF',
    'category': 'FSO',
    'score': 0,
    'description': `Experts in cross-cultural relations and communications who build public
    awareness and promote U.S. interests abroad. Public Diplomacy Officers engage
    and network with the full range of host nation contacts to shape the public
    message and perceptions about the United States. Public Diplomacy Officers
    maintain contacts with key people who influence public opinion. They are also
    managers of people, programs, budgets and resources. Public Diplomacy Officers
    engage, inform, and influence opinion leaders, local non-governmental groups,
    the next generation of leaders, academics, think tanks, government officials,
    and the full range of civil society in order to promote mutual understanding
    and support for U.S policy goals. Public diplomacy officers explain the breadth
    of American foreign policies to ensure that our positions are understood and
    misrepresentations are corrected.`
  }],
  ['MED_HEL', {
    'title': 'Medical and Health',
    'abbreviation ': 'MED_HEALTH',
    'category': 'FSS',
    'score': 0,
    'description': `Provides primary medical and psychiatric care to
    U.S.government employees and their families while abroad. Roles range
    frommedical providers stationed in austere or remote countries to regional
    laboratoryscientists.`
  }],
  ['IT', {
    'title': 'Information Technology',
    'abbreviation ': 'IT',
    'category': 'FSS',
    'score': 0,
    'description': `Operate the Department of State’s worldwide information
    technology infrastructure. Officers ensure computer, radio,telecommunication,
    and physical communication systems run smoothly aroundthe world.`
  }],
  ['ENG', {
    'title': 'Engineering',
    'abbreviation ': 'ENG',
    'category': 'FSS',
    'score': 0,
    'description': `Facilitate the inner workings of the Department of State’s
    international operations. Roles include finance, logistics, human resources,
    facility, and office management specialists. Engineers also perform
    anadministrative position in the oversight of new construction or renovations
    to existing overseas properties.`
  }],
  ['INT_PRGM_ENG_LANG', {
    'title': 'International Programs and English Language',
    'abbreviation ': 'INT_PRGM_ENG_LANG',
    'category': 'FSS',
    'score': 0,
    'description': `Promote and develop overseas
    educational opportunities, often in conjunction with consulates orembassies.
    Officers develop partnerships with English language professionals
    across the world and provide them with resources and support. Public engagement
    specialists make strong local connections with libraries andinformation
    hubs in regions with a U.S. presence.`
  }],
  ['LAW_ENF_SEC', {
    'title': 'Law Enforcement and Security',
    'abbreviation ': 'LAW_ENF_SEC',
    'category': 'FSS',
    'score': 0,
    'description': `Ensure the safety and wellbeing of U.S.Department
    of State facilities and personnel abroad. Diplomatic couriers play a unique role
    in the delivery of diplomatic pouches that contain classified andsensitive
    materials. Technical specialists and engineering officers design and test
    security systems to protect U.S. assets from espionage, acts of terrorism, and
    crime. Diplomatic Special Agents are sworn federal law enforcement officers
    specially trained to protect and advise the U.S. Secretary of State.`
  }],
  ['FOR_AFF_OFF', {
    'title': 'Foreign Affairs Officer',
    'abbreviation ': 'FOR_AFF_OFF',
    'category': 'CS',
    'score': 0,
    'description': `Foreign Affairs Officers perform a similar role to
    Foreign Service Officers but operate domestically. They analyze, advise upon,
    and research forigen policy and topics in international relations.`
  }],
  ['IT_MGMT', {
    'title': 'Information Technology Management​',
    'abbreviation ': 'IT_MGMT',
    'category': 'CS',
    'score': 0,
    'description': `Cybersecurity and digital technology
    managers work to support United States operations by ensuring data and systems a
    re secure and operate smoothly.`
  }],
  ['INTEL_SER', {
    'title': 'Intelligence Series',
    'abbreviation ': 'INTEL_SERIES',
    'category': 'CS',
    'score': 0,
    'description': `The Intelligence Series is comprised of positions in
    which officials with expertise in fields ranging from military science to
    economic analysiswork with information as it pertains to national security.
    Applicants have interest in social science.`
  }],
  ['PUB_AFF', {
    'title': 'Public Affairs',
    'abbreviation ': 'PUB_AFF',
    'category': 'CS',
    'score': 0,
    'description': `Positions pertaining to Public Affairs primarily formulate
    policy and facilitate communication between Federal agencies and members of
    the public using print and digital media. This employee’s work may include
    journalism, social media, or earned media.`
  }],
  ['LANG_SPLST', {
    'title': 'Language Specialist',
    'abbreviation ': 'LANG_SPEC',
    'category': 'CS',
    'score': 0,
    'description': `Language Specialists work in the translation and/or
    interpretation of forigen language physical and digital media into English and
    viceversa. They are critical to ensuring the Office of the President among other
    keyagencies accurately understand and can act on non-English information.`
  }]

];

module.exports = { CareerTracks };
