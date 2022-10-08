interface ITodo {
  _id: string;
  name: string;
  description: string;
}

type TodoProps = {
  todo: ITodo;
};
