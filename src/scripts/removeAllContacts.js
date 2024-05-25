import { PATH_DB } from '../constants/contacts.js';
import fs from 'fs/promises';

export const removeAllContacts = async () => {
  try {
    let contacts = [];
    await fs.writeFile(PATH_DB, JSON.stringify(contacts), 'utf8');
    console.log('Дані успішно видалено.');
  } catch (err) {
    console.error('Помилка видаленя даних:', err);
  }
};

await removeAllContacts();
