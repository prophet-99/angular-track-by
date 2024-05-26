import { of } from 'rxjs';

export type TaskItemType = { id: number; name: string };

let taskList = [
  { id: 1, name: 'Comprar leche' },
  { id: 2, name: 'Revisar correos electrónicos' },
  { id: 3, name: 'Llamar al cliente José' },
  { id: 4, name: 'Pagar factura de internet' },
  { id: 5, name: 'Programar reunión de equipo' },
];

export const getTasks$ = () => of(taskList);
export const storeTask$ = (task: TaskItemType) => {
  // ?? TO FORCE NEW REFERENCES TO BE RETURNED TO ME
  taskList = [...taskList.map((item) => ({ ...item })), task];
  return of(taskList);
};
