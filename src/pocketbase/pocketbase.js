import PocketBase from 'pocketbase';

const url = import.meta.env.VITE_PBLink

export const client = new PocketBase(url)
