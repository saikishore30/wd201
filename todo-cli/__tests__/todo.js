<<<<<<< HEAD
const taskie = require("../todo");

describe("todoList Test Suite", () => {
  let tudu;

  beforeEach(() => {
    tudu = taskie();
  });

  test("We Should create a new todo", () => {
    tudu.add({
=======
const taskmanager = require("../todo");

describe("todoList Test Suite", () => {
  let td;

  beforeEach(() => {
    td = taskmanager();
  });

  test("We Should create a new todo", () => {
    td.add({
>>>>>>> a0ca2d06f609613df0020d1a6b7cee0f5b0086e3
      title: "New Todo",
      completed: false,
      dueDate: "2023-12-31",
    });

<<<<<<< HEAD
    expect(tudu.all.length).toBe(1);
    expect(tudu.all[0].title).toBe("New Todo");
  });

  test("Should mark a todo as completed after its completion", () => {
    tudu.add({
=======
    expect(td.all.length).toBe(1);
    expect(td.all[0].title).toBe("New Todo");
  });

  test("Should mark a todo as completed after its completion", () => {
    td.add({
>>>>>>> a0ca2d06f609613df0020d1a6b7cee0f5b0086e3
      title: "Incomplete Todo",
      completed: false,
      dueDate: "2023-12-31",
    });

<<<<<<< HEAD
    tudu.markAsComplete(0);

    expect(tudu.all[0].completed).toBe(true);
  });

  test("Should retrieve overdue items after the time is over", () => {
    tudu.add({
=======
    td.markAsComplete(0);

    expect(td.all[0].completed).toBe(true);
  });

  test("Should retrieve overdue items after the time is over", () => {
    td.add({
>>>>>>> a0ca2d06f609613df0020d1a6b7cee0f5b0086e3
      title: "Overdue Todo",
      completed: false,
      dueDate: "2023-01-01",
    });

<<<<<<< HEAD
    const allOverDueThings = tudu.overdue();
=======
    const allOverDueThings = td.overdue();
>>>>>>> a0ca2d06f609613df0020d1a6b7cee0f5b0086e3

    expect(allOverDueThings.length).toBe(1);
    expect(allOverDueThings[0].title).toBe("Overdue Todo");
  });

  test("Should retrieve due today items which are mentioned", () => {
    const todayDate = new Date().toISOString().split("T")[0];

<<<<<<< HEAD
    tudu.add({
=======
    td.add({
>>>>>>> a0ca2d06f609613df0020d1a6b7cee0f5b0086e3
      title: "Due Today Todo",
      completed: false,
      dueDate: todayDate,
    });

<<<<<<< HEAD
    const todayDueThings = tudu.dueToday();
=======
    const todayDueThings = td.dueToday();
>>>>>>> a0ca2d06f609613df0020d1a6b7cee0f5b0086e3

    expect(todayDueThings.length).toBe(1);
    expect(todayDueThings[0].title).toBe("Due Today Todo");
  });

  test("Should retrieve due later items", () => {
<<<<<<< HEAD
    tudu.add({
=======
    td.add({
>>>>>>> a0ca2d06f609613df0020d1a6b7cee0f5b0086e3
      title: "Due Later Todo",
      completed: false,
      dueDate: "2023-12-31",
    });

<<<<<<< HEAD
    const dueLaterThings = tudu.dueLater();
=======
    const dueLaterThings = td.dueLater();
>>>>>>> a0ca2d06f609613df0020d1a6b7cee0f5b0086e3

    expect(dueLaterThings.length).toBe(1);
    expect(dueLaterThings[0].title).toBe("Due Later Todo");
  });
});