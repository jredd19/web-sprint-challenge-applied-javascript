const Header = (title, date, temp) => {

  // creating elements
  const header = document.createElement('div');
  const headerTitle = document.createElement('h1');
  const headerDate = document.createElement('span');
  const headerTemp = document.createElement('span');

  // creating hierarchy
  header.appendChild(headerTitle);
  header.appendChild(headerDate);
  header.appendChild(headerTemp);

  // setting element classes
  header.classList.add('header');
  headerTitle.classList.add('header-title');
  headerDate.classList.add('header-date');
  headerTemp.classList.add('header-temp');

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

Header();

const headerAppender = (selector) => {

  // setting entry point
const entryPoint = document.querySelector(selector);
axios.get(Header);

  // TASK 2
  // ---------------------
  // Implement this function taking a css selector as its only argument.
  // It should create a header using the Header component above, passing arguments of your choosing.
  // It should append the header to the element in the DOM that matches the given selector.
  //
}

console.log(headerAppender('.header-container'))

export { Header, headerAppender }
