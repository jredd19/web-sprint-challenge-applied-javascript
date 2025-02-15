const Header = (title, date, temp) => {

  // creating elements
  const header = document.createElement('div');
  const headerDate = document.createElement('span');
  const headerTitle = document.createElement('h1');
  const headerTemp = document.createElement('span');

  // creating hierarchy
  header.appendChild(headerTitle);
  header.appendChild(headerDate);
  header.appendChild(headerTemp);

  // setting element classes
  header.classList.add('header');
  headerTitle.classList.add('header');
  headerDate.classList.add('date');
  headerTemp.classList.add('temp');

// adding text 
  headerTitle.textContent = title;
  headerDate.textContent = date;
  headerTemp.textContent = temp;

  return header;


  // TASK 1
  // ---------------------
  // Implement this function taking `title`, `date` and `temp` as its 3 args and returning the markup below.
  // The tags used, the hierarchy of elements and their attributes must match the provided markup exactly!
  // The text inside elements will be set using their `textContent` property (NOT `innerText`).
  //
  //  <div class="header">
  //    <span class="date">{ date }</span>
  //    <h1>{ title }</h1>
  //    <span class="temp">{ temp }</span>
  //  </div>
  //
}

console.log(Header('Lambda Times', 'January 6, 2021', 26));

const headerAppender = (selector) => {

  // setting
  const entryPoint = document.querySelector(selector);
  document.body.appendChild(Header());


  // TASK 2
  // ---------------------
  // Implement this function taking a css selector as its only argument.
  // It should create a header using the Header component above, passing arguments of your choosing.
  // It should append the header to the element in the DOM that matches the given selector.
  //
}

export { Header, headerAppender }
