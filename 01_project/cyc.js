import './cyc.css';
const buttons = document.querySelectorAll('.button');

const body = document.querySelector('body');
const messageDiv=document.querySelector('#message')


buttons.forEach(function (button) {
  console.log(button);
  button.addEventListener('click', function (e) {
    console.log(e);
    console.log(e.target);
    if (e.target.id === 'grey') {
      body.style.backgroundColor = e.target.id;
      alert("HTML");
        messageDiv.innerHTML = "HTML is the standard markup language for Web pages.With HTML you can create your own Website.";
    }
    if (e.target.id === 'white') {
      body.style.backgroundColor = e.target.id;
      alert("CSS");
        messageDiv.innerHTML = "CSS is the language we use to style a Web page.CSS is used to define styles for your web pages, including the design, layout and variations in display for different devices and screen sizes.";
    }
    if (e.target.id === 'blue') {
      body.style.backgroundColor = e.target.id;
      alert("Javascript");
        messageDiv.innerHTML = "JavaScript is the world's most popular programming language.JavaScript is the programming language of the Web.JavaScript is easy to learn.";
    }
    if (e.target.id === 'yellow') {
      body.style.backgroundColor = e.target.id;
      alert("Thankyou");
      messageDiv.innerHTML = "Thanks for visiting.";
    }
    
  });
});