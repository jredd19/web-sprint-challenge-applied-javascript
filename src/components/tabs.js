const Tabs = (topics) => {

  const topicsDiv = document.createElement('div');
  const javaTab = document.createElement('div');
  const bootTab = document.createElement('div');
  const techTab = document.createElement('div');
  const jQueryTab = document.createElement('div');
  const nodeTab = document.createElement('div');

  topicsDiv.appendChild(javaTab);
  topicsDiv.appendChild(bootTab);
  topicsDiv.appendChild(techTab);
  topicsDiv.appendChild(jQueryTab);
  topicsDiv.appendChild(nodeTab);

  topicsDiv.classList.add('topics');
  javaTab.classList.add('title-tab');
  bootTab.classList.add('title-tab');
  techTab.classList.add('title-tab');
  jQueryTab.classList.add('title-tab');
  nodeTab.classList.add('title-tab');

javaTab.textContent = 'JavaScript';
bootTab.textContent = 'Bootstrap';
techTab.textContent = 'Technology';
jQueryTab.textContent = 'JQuery';
nodeTab.textContent = 'Node.js';

  return topicsDiv
  // TASK 3
  // ---------------------
  // Implement this function which takes an array of strings ("topics") as its only argument.
  // As an example, if the topics passed are ['javascript', 'bootstrap', 'technology']
  // then the function returns the markup below.
  // The tags used, the hierarchy of elements and their attributes must match the provided markup!
  // The text inside elements will be set using their `textContent` property (NOT `innerText`).
  //
  // <div class="topics">
  //   <div class="tab">javascript</div>
  //   <div class="tab">bootstrap</div>
  //   <div class="tab">technology</div>
  // </div>
  //
}

console.log(Tabs());

const tabsAppender = (selector) => {
  // TASK 4
  // ---------------------
  // Implement this function which takes a css selector as its only argument.
  // It should obtain topics from this endpoint: `http://localhost:5001/api/topics` (test it with a console.log!).
  // Find the array of topics inside the response, and create the tabs using the Tabs component.
  // Append the tabs to the element in the DOM that matches the selector passed to the function.
  //
}

export { Tabs, tabsAppender }
