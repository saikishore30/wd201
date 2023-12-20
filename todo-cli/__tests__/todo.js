const taskie = require("../todo");

describe("todoList Test Suite", () => {
  let tudu;

  beforeEach(() => {
    tudu = taskie();
  });

  test("We Should create a new todo", () => {
    tudu.add({
      title: "New Todo",
      completed: false,
      dueDate: "2023-12-31",
    });

    expect(tudu.all.length).toBe(1);
    expect(tudu.all[0].title).toBe("New Todo");
  });

  test("Should mark a todo as completed after its completion", () => {
    tudu.add({
      title: "Incomplete Todo",
      completed: false,
      dueDate: "2023-12-31",
    });

    tudu.markAsComplete(0);

    expect(tudu.all[0].completed).toBe(true);
  });

  test("Should retrieve overdue items after the time is over", () => {
    tudu.add({
      title: "Overdue Todo",
      completed: false,
      dueDate: "2023-01-01",
    });

    const allOverDueThings = tudu.overdue();

    expect(allOverDueThings.length).toBe(1);
    expect(allOverDueThings[0].title).toBe("Overdue Todo");
  });

  test("Should retrieve due today items which are mentioned", () => {
    const todayDate = new Date().toISOString().split("T")[0];

    tudu.add({
      title: "Due Today Todo",
      completed: false,
      dueDate: todayDate,
    });

    const todayDueThings = tudu.dueToday();

    expect(todayDueThings.length).toBe(1);
    expect(todayDueThings[0].title).toBe("Due Today Todo");
  });

  test("Should retrieve due later items", () => {
    tudu.add({
      title: "Due Later Todo",
      completed: false,
      dueDate: "2023-12-31",
    });

    const dueLaterThings = tudu.dueLater();

    expect(dueLaterThings.length).toBe(1);
    expect(dueLaterThings[0].title).toBe("Due Later Todo");
  });
});