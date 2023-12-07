const fname = document.getElementById('fname');
const lname = document.getElementById('lname');
const submit = document.getElementById('submit');

submit.addEventListener('submit',(e)=>{
    e.preventDefault();
    let ebody = `
    <h1>First Name: </h1>${fname.value}
    <br>
    <h1>Last Name: </h1>${lname.value}
    `;

    Email.send({
        SecureToken : "4962d7e6-9a7d-4dc2-befe-56464f6817e2",
        To : 'trinhviethieu0112@gmail.com',
        From : "trinhviethieu0112@gmail.com",
        Subject : "Test_email",
        Body : ebody
    }).then(
      message => alert(message)
    );
    
    // Email.send({
    //     Host : "smtp.elasticemail.com",
    //     Username : "trinhviethieu0112@gmail.com",
    //     Password : "944256D4460A373C5A5324B77E2D1882841C",
    //     To : 'hieuviet0112@gmail.com',
    //     From : "trinhviethieu0112@gmail.com",
    //     Subject : "This is the subject",
    //     Body : ebody
    // }).then(
    //   message => alert(message)
    // );
});