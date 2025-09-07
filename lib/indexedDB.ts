import { openDB } from 'idb';

const DB_NAME = 'ecommerce-auth-db';
const STORE_NAME = 'users';

export const initDB = async () => {
  const db = await openDB(DB_NAME, 1, {
    upgrade(db) {
      if (!db.objectStoreNames.contains(STORE_NAME)) {
        db.createObjectStore(STORE_NAME, { keyPath: 'email' });
      }
    },
  });

  return db;
};

export const registerUser = async (email: string, password: string) => {
  const db = await initDB();
  console.log('Saving user:', email);
  await db.put(STORE_NAME, { email, password });
};

export const getUserByEmail = async (email: string) => {
  const db = await initDB();
  const user = await db.get(STORE_NAME, email);
  console.log('Retrieved user:', user);
  return user;
};
