
   function sendmail(){
  
    var name = $('#Name').val();
    var email = $('#Sender').val();
    var subject = $('#Subject').val();
var message = $('#Message').val();

    // var body = $('#body').val();

    var Body='Name: '+name+'<br>Email: '+email+'<br>Subject: '+subject+'<br>Message: '+message;
    //console.log(name, phone, email, message);

    Email.send({
SecureToken:"c677431a-cf61-4783-bde8-2a84c3cf1ed8",
        To: 'optimalweb09@gmail.com',
        From: "demooptimalweb@gmail.com",
        Subject: "New message on contact from "+name,
        Body: Body
    }).then(
        message =>{
            //console.log (message);
            if(message=='OK'){
            alert('try again');
            }
            else{
                console.error (message);
                alert('There is error . ')
                
            }

        }
    );



}
