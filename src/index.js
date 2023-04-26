document.addEventListener("DOMContentLoaded", () => {
  // your code here
  let form = document.querySelector('#create-task-form');
  form.addEventListener('submit',(e) => {
    e.preventDefault();
    buildTaskList(e.target.querySelector('#new-task-description').value);
    form.releasePointerCapture();
  })
});
