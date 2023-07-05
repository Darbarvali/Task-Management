import { types } from 'mobx-state-tree';

const Task = types
  .model('Task', {
    title: types.string,
    description: types.string,
    status: types.enumeration(['To Do', 'In Progress', 'Completed']),
  })
  .actions((self) => ({
    setTitle(title: string) {
      self.title = title;
    },
    setDescription(description: string) {
      self.description = description;
    },
    setStatus(status: 'To Do' | 'In Progress' | 'Completed') {
      self.status = status;
    },
  }));

const TaskStore = types
  .model('TaskStore', {
    tasks: types.array(Task),
  })
  .actions((self) => ({
    addTask(task: typeof Task.Type) {
      self.tasks.push(task);
    },
    updateTask(index: number, task: typeof Task.Type) {
      self.tasks[index] = task;
    },
    deleteTask(index: number) {
      self.tasks.splice(index, 1);
    },
  }));

export default TaskStore;
