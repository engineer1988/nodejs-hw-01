import { PATH_DB } from '../constants/contacts.js';
import { createFakeContact } from '../utils/createFakeContact.js';
import fs from 'fs/promises';

const generateContacts = async (number) => {
  try {
    let contacts = JSON.parse(await fs.readFile(PATH_DB));
    for (let i = 1; i <= number; i++) {
      let newContact = createFakeContact();
      contacts.push(newContact);
    }
    await fs.writeFile(PATH_DB, JSON.stringify(contacts), 'utf8');
    console.log('Дані успішно записані у файл.');
  } catch (err) {
    console.error('Помилка запису у файл:', err);
  }
};
await generateContacts(3);
