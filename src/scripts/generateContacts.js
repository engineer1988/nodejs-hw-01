import { PATH_DB } from '../constants/contacts.js';
import { createFakeContact } from '../utils/createFakeContact.js';
import fs from 'fs/promises';

let data = [];

const generateContacts = async (number) => {
  for (let i = 1; i <= number; i++) {
    data.push(createFakeContact());
  }
};
// console.log(createFakeContact);
await generateContacts(5);

(async () => {
  // const data = 'Це дані, які ми записуємо у файл.';
  try {
    await fs.writeFile(PATH_DB, JSON.stringify(data), 'utf8');
    console.log('Дані успішно записані у файл.');
  } catch (err) {
    console.error('Помилка запису у файл:', err);
  }
})();
