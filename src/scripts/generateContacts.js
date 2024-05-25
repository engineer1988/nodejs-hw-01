import { PATH_DB } from '../constants/contacts.js';
import { createFakeContact } from '../utils/createFakeContact.js';
import fs from 'fs/promises';

let contacts = JSON.parse(await fs.readFile(PATH_DB));

const generateContacts = async (number) => {
  for (let i = 1; i <= number; i++) {
    let newContact = createFakeContact();
    contacts.push(newContact);
  }
  (async () => {
    try {
      await fs.writeFile(PATH_DB, JSON.stringify(contacts), 'utf8');
      console.log('Дані успішно записані у файл.');
    } catch (err) {
      console.error('Помилка запису у файл:', err);
    }
  })();
};
await generateContacts(3);
