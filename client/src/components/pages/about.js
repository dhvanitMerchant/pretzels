import React from "react";

function About() {
  return(
  
    <div id="demo" class = "container carousel slide" data-ride="carousel">
    
    <div id="demo" class="carousel slide" data-ride="carousel">
    
       <ul class="carousel-indicators">
        <li data-target="#demo" data-slide-to="0" class="active"></li>
        <li data-target="#demo" data-slide-to="1"></li>
        <li data-target="#demo" data-slide-to="2"></li>
       </ul>
    
       </div>
       <div class="carousel-inner">
        <div class="carousel-item active">
        <img src="./images/maulika.jpeg" alt="Mauli"  />
        <div class="carousel-caption">
        <h3>Maulika Desai</h3>
        <h4>I am admin of this group</h4>
        </div> 
       </div>
      
       <div class="carousel-item">
       <img src="./images/rinkle.jpeg" alt="Rinkal" width="400" height="200" />
       
       <div class="carousel-caption">
         <h3>Rinkal Vavadiya</h3>
         <h4>Hope you liked the desining of the website!!!</h4>
       </div>   
     </div>
     
    </div>
    <a class="carousel-control-prev" href="#demo" data-slide="prev">
     <span class="carousel-control-prev-icon"></span>
    </a>
    <a class="carousel-control-next" href="#demo" data-slide="next">
     <span class="carousel-control-next-icon"></span>
    </a>
      </div>



   
    
    

  );
  }

  

export default About;