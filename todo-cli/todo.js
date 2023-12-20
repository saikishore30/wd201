const todoList = () => {
    let all = []
    const add = (todoItem) => {
      all.push(todoItem)
    }
    const markAsComplete = (index) => {
      all[index].completed = true
    }
  
    const overdue = () => {
      const today = new Date().toISOString().split("T")[0];
      return all.filter((item) => !item.completed && item.dueDate < today);
        // Write the date check condition here and return the array
        // of overdue items accordingly.
      }
    
      const dueToday = () => {
          const today = new Date().toISOString().split("T")[0];
          return all.filter((item) => item.dueDate === today);
        // Write the date check condition here and return the array
        // of todo items that are due today accordingly.
      }
    
      const dueLater = () => {
          const today = new Date().toISOString().split("T")[0];
      return all.filter((item) => !item.completed && item.dueDate > today);
        // Write the date check condition here and return the array
        // of todo items that are due later accordingly.
      }
    
      const toDisplayableList = (list) => {
        return list.map(item => {
            const dueText = item.dueDate? item.dueDate === new Date().toISOString().split("T")[0] ? "" : `${item.dueDate}` :"";
            // For tasks due today, don't include the date
            const Status = item.completed ? "[x]" : "[ ]";
            return `${Status} ${item.title} ${dueText}`;
        })
        .join("\n");
        // Format the To-Do list here, and return the output string
        // as per the format given above.
      }
    return {
      all,
      add,
      markAsComplete,
      overdue,
      dueToday,
      dueLater,
      toDisplayableList
    };
};
module.exports = todoList;
