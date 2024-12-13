/**
 * @typedef {Object} Position
 * Conforms to https://jsonresume.org/schema/
 * @property {string} name - Name of the company
 * @property {string} position - Position title
 * @property {string} url - Company website
 * @property {string} startDate - Start date of the position in YYYY-MM-DD format
 * @property {string|undefined} endDate - End date of the position in YYYY-MM-DD format.
 * If undefined, the position is still active.
 * @property {string|undefined} summary - html/markdown summary of the position
 * @property {string[]} highlights - plain text highlights of the position (bulleted list)
 */
const work = [
  {
    name: 'GuacaRasa',
    position: 'Co-founder',
    url: 'https://www.instagram.com/guacarasa?igsh=OWZhejBpbXN1cGp0',
    startDate: '2023-09-01', // Adjust the date to reflect when you started
    endDate: '2024-01-01',
    summary: 'GuacaRasa combines the freshness of guacamole with authentic Indonesian flavors, creating a unique blend of tradition and modernity.',
    highlights: [
      'Conceived the idea for the business and developed the name "GuacaRasa."',
      'Designed and created the business model canvas to establish a strong foundation for the business.',
      'Refined guacamole recipes inspired by Indonesian spices, such as rendang and sambal, to create unique and flavorful offerings.',
      'Launched innovative products like rendang-flavored guacamole, catering to health-conscious consumers, food enthusiasts, and Indonesian cuisine lovers.',
      'Built a sustainable business model emphasizing cultural appreciation, health, and fresh ingredients, while providing customizable and convenient snack options.',
    ],
  },
  {
    name: 'PsycHelp',
    position: 'Co-founder and Designer',
    startDate: '2024-02-01',
    endDate: '2024-06-01', // Corrected date and removed trailing spaces
    summary: 'PsycHelp is a conceptual app designed to assist users in managing their mental health by providing personalized care, privacy control, and daily task tracking to improve well-being.',
    highlights: [
      'Proposed the idea and designed the app concept, including the name "PsycHelp" and its primary features.',
      'Conducted user research by interviewing individuals with mental health struggles to understand their needs and pain points.',
      'Developed unique features like daily tasks for patient progress tracking and discounts for therapy sessions, addressing gaps in existing apps like Riliv and Bicarakan.',
      'Focused on a target market of Indonesian youth (ages 17-25), ensuring inclusivity across genders and mental health issues.',
      'Planned features for secure doctor-patient interactions, including detailed doctor profiles, appointment scheduling, and multiple payment methods.',
      'Outlined future development goals, such as face-to-face sessions, free online seminars, and improved user engagement strategies.',
    ],
  },
];

export default work;
