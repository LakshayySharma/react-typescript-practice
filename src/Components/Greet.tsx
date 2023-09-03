import Heading from "./Heading";

type GreetProps = {
  name: string;
  pendingTaks: number;
  isLoggedIn: boolean;
  status?: "loading" | "success" | "failure"; // ? tells that prop is optional
  todos: {
    task: string;
    completed: boolean;
  }[];
};

export const Greet = (props: GreetProps) => {
  return (
    <div>
      <Heading>Welcome to app</Heading>
      <div>
        {props.isLoggedIn
          ? `Hello ${props.name}, You have ${props.pendingTaks} tasks pending.`
          : `Welcome guest`}
      </div>
      <div>
        {props.todos.map((todo) => (
          <div>
            {todo.task} : {todo.completed ? "Completed" : "Not completed"}
          </div>
        ))}
      </div>
    </div>
  );
};
