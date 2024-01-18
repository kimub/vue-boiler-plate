import { instance } from '@/api/instances';

export async function fetchTodos() {
  return await instance.get('/todos');
}
