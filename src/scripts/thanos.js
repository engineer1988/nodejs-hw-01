import { PATH_DB } from '../constants/contacts.js';
import fs from 'fs/promises';

export const thanos = async () => {
  try {
    let contacts = JSON.parse(await fs.readFile(PATH_DB));
    let newContacts = [];
    contacts.forEach(function (contact) {
      if (Math.random() >= 0.5) {
        newContacts.push(contact);
      }
    });
    await fs.writeFile(PATH_DB, JSON.stringify(newContacts), 'utf8');
    console.log('Дані успішно записані у файл.');
  } catch (err) {
    console.error('Помилка запису у файл:', err);
  }
};

await thanos();
