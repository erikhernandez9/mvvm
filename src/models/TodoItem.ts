// src/models/TodoItem.ts
export default class TodoItem {
    id: number;
    description: string;
    isCompleted: boolean;
  
    constructor(id: number, description: string, isCompleted = false) {
      this.id = id;
      this.description = description;
      this.isCompleted = isCompleted;
    }
  }
  