const taskmanager = require("../todo");

describe("todoList Test Suite", () => {
  let td;

  beforeEach(() => {
    td = taskmanager();
  });

  test("We Should create a new todo", () => {
    td.add({
      title: "New Todo",
      completed: false,
      dueDate: "2023-12-31",
    });

    expect(td.all.length).toBe(1);
    expect(td.all[0].title).toBe("New Todo");
  });

  test("Should mark a todo as completed after its completion", () => {
    td.add({
      title: "Incomplete Todo",
      completed: false,
      dueDate: "2023-12-31",
    });

    td.markAsComplete(0);

    expect(td.all[0].completed).toBe(true);
  });

  test("Should retrieve overdue items after the time is over", () => {
    td.add({
      title: "Overdue Todo",
      completed: false,
      dueDate: "2023-01-01",
    });

    const allOverDueThings = td.overdue();

    expect(allOverDueThings.length).toBe(1);
    expect(allOverDueThings[0].title).toBe("Overdue Todo");
  });

  test("Should retrieve due today items which are mentioned", () => {
    const todayDate = new Date().toISOString().split("T")[0];

    td.add({
      title: "Due Today Todo",
      completed: false,
      dueDate: todayDate,
    });

    const todayDueThings = td.dueToday();

    expect(todayDueThings.length).toBe(1);
    expect(todayDueThings[0].title).toBe("Due Today Todo");
  });

  test("Should retrieve due later items", () => {
    td.add({
      title: "Due Later Todo",
      completed: false,
      dueDate: "2023-12-31",
    });

    const dueLaterThings = td.dueLater();

    expect(dueLaterThings.length).toBe(1);
    expect(dueLaterThings[0].title).toBe("Due Later Todo");
  });
});
