const tuduList = require("../todo");

describe("TodoList Test Suite", () => {
  let ted;

  beforeEach(() => {
    ted = tuduList();
  });

  test("We Should create a new todo", () => {
    ted.add({
      title: "New Todo",
      completed: false,
      dueDate: "2023-12-31",
    });

    expect(ted.all.length).toBe(1);
    expect(ted.all[0].title).toBe("New Todo");
  });

  test("Should mark a todo as completed after its completion", () => {
    ted.add({
      title: "Incomplete Todo",
      completed: false,
      dueDate: "2023-12-31",
    });

    ted.markAsComplete(0);

    expect(ted.all[0].completed).toBe(true);
  });

  test("Should retrieve overdue items after the time is over", () => {
    

    ted.add({
      title: "Overdue Todo",
      completed: false,
      dueDate: "2023-01-01",
    });

    const allOverDueThings = ted.overdue();

    expect(allOverDueThings.length).toBe(1);
    expect(allOverDueThings[0].title).toBe("Overdue Todo");
  });

  test("Should retrieve due today items which are mentioned", () => {
    const todayDate = new Date().toISOString().split("T")[0];

    ted.add({
      title: "Due Today Todo",
      completed: false,
      dueDate: todayDate,
    });

    const todayDueThings = ted.dueToday();

    expect(todayDueThings.length).toBe(1);
    expect(todayDueThings[0].title).toBe("Due Today Todo");
  });

  test("Should retrieve due later items", () => {
    

    ted.add({
      title: "Due Later Todo",
      completed: false,
      dueDate: "2023-12-31",
    });

    const dueLaterThings = ted.dueLater();

    expect(dueLaterThings.length).toBe(1);
    expect(dueLaterThings[0].title).toBe("Due Later Todo");
  });
});