
//Results:poodle,bulldog,great dane, golden retriever  
// <18, >18;Black or Gold  
// <18 and Gold: Golden Retriever 
// >18 and Gold: Great Dane 
//<18 and Black : Poodle  
//>18 and Black : BullDog


let count = 0;
$(".submit").click(function() {
    let questionOne = $(".questionOne").val();
    let questionTwo = $(".questionTwo").val();
    count = count + 1;
    $(".counter").text("This quiz has been taken " + count + " times");
if (questionOne<18 && questionTwo==="gold"){
 $(".results").text("You're a golden retriever!!");   
}
    
 else if (questionOne>18 && questionTwo==="gold"){
 $(".results").text("You're a Great Dane!! "); 
 }
     if (questionOne<18 && questionTwo==="black"){
 $(".results").text("You're a Poodle!! ");     
     }
    
else if (questionOne>18 && questionTwo==="black"){
 $(".results").text("You're a BullDog!! ");     
}    
    
});