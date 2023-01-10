function Signin(){
  //  alert("Welcome")
    var nameFromHtml=document.getElementById("name");
    if(nameFromHtml){
        var name=nameFromHtml.value;
         console.log(name);
    }

    var emailFromHtml=document.getElementById("email");
    if(emailFromHtml){
        var email=emailFromHtml.value;
         console.log(email);
    }
    var passwordFromHtml=document.getElementById("password");
    if(passwordFromHtml){
       var password=passwordFromHtml.value;
        console.log(password);
    }
    if( name && email && password){
        localStorage.setItem("userData",JSON.stringify({nameOfUser:name,emailOfUser:email,passwordOfUser:password}));
        localStorage.setItem("isUserLoggedIn","false");
        alert("Registration Done.. ")
        window.location.href ="./login.html";
    }else{

        alert("Error:Write all fields");
    }

    }
    function login(){
        // alert("login");
        var emailFromHtml=document.getElementById("email");
        if(emailFromHtml){
            var emailFromLogin=emailFromHtml.value;
            console.log(emailFromLogin);
        }
        var passwordFromHtml=document.getElementById("password");
        if(passwordFromHtml){
            var passwordFromLogin=passwordFromHtml.value;
            console.log(passwordFromLogin)

        }
        if(emailFromLogin && passwordFromLogin){
            var dataFromLocal=localStorage.getItem("userData");
            //console.log(dataFromLocal);
            var parsedData =JSON.parse(dataFromLocal);
          //  console.log(parsedData.emailOfUser,"parsedData.emailOfUser");
            if(emailFromLogin == parsedData.emailOfUser && passwordFromLogin == parsedData.passwordOfUser)
            localStorage.setItem("isUserLoggedIn","true");
            alert("Login Successful");
            window.location.href="./home.html";
           } else {
            alert("Wrong cred!");
           }

            
        }

        function addToCart(proId){
        //   alert("Add to cart");
          console.log(proId,"proId")

          var existingProduct =JSON.parse(localStorage.getItem("allProducts"));
          // console.log(existingProduct,"existingProduct");
           
          if (existingProduct==null){existingProduct=[]}
          // console.log(existingProduct,"existingProduct1")

          var proImg= proId.querySelector("img").src;
          console.log(proImg,"proImg");
            
          var proPs = proId.querySelectorAll("p");
          // console.log(proPs)
          var proName = proPs[0].innerText;
          console.log(proName);

          var proPrice = proPs[1].innerText;
          console.log(proPrice);

          var proObj = {pI:proImg,pN:proName,pP:proPrice}
          // console.log(proObj);

          existingProduct.push(proObj);
          console.log(existingProduct,"existingProduct");

          localStorage.setItem("allProducts",JSON.stringify(existingProduct))
          alert("Product added !")

        }


        
        
        
        

    

    

    

  
       
    


