export interface Todo {
  id?: string,
  title: string,
  description: string,
  is_complete: boolean,
  user_id?: number,
  deadline: Date,
}