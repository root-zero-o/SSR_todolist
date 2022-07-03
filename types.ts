export interface TodoType {
    id? : number;
    content? : string;
    completed?: boolean;
}

export type Props = {
    todoData : TodoType[]; 
  }
  