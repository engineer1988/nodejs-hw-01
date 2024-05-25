import { PATH_DB } from '../constants/contacts.js';
import fs from 'fs/promises';

export const getAllContacts = async () => {
  try {
    let contacts = JSON.parse(await fs.readFile(PATH_DB));
    console.log('Дані успішно виведені в консоль для читання.');
    return contacts;
  } catch (err) {
    console.error('Помилка виведеня в консоль:', err);
  }
};

console.log(await getAllContacts());
