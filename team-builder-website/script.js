// ''convertToJsonString()'was genereated by ChatGPT 3.5 on May 18, 2024
// The prompt used was: 
// how do we store the member fields (the values of the li elements, e.g. name, description etc.) in a json string?
// <copied and pasted code from home.html of hardcoded initial member> 
function convertToJsonString() {
    const memberName = document.querySelector('.memberName').textContent;
    const memberDescription = document.querySelector('.memberDescription').textContent;
    const memberAge = document.querySelector('.memberAge').textContent;
    const memberPhoto = document.querySelector('.displayImage').src;

    const firstMember = {
        name: memberName,
        description: memberDescription,
        age: memberAge,
        photo: memberPhoto
    }

    const jsonString = JSON.stringify(firstMember, null, 2);
    console.log(jsonString);
}

// code written in 'displayAllMemberCards' was referenced from the following sources:
// HTML <template> Tag: https://www.w3schools.com/tags/tryit.asp?filename=tryhtml5_template
// How to display text input after submitting button in HTML and Javascript: 
// https://stackoverflow.com/questions/75505204/how-to-display-text-input-after-submitting-button-in-html-and-javascript
// Get element inside element by class and ID - JavaScript:
// https://stackoverflow.com/questions/7815374/get-element-inside-element-by-class-and-id-javascript
// Javascript, viewing [object HTMLInputElement]: https://stackoverflow.com/questions/15383765/javascript-viewing-object-htmlinputelement
// Lines 67-69 (assigning cloned template values from user input): based on code generated from ChatGPT 3.5 using the following prompt:
/* <label for="moveData">Enter data</label>
<input type="text" id="moveData" name="moveData"><br>
<button id="btn" type="button">Move the data</button>

<script>
    document.getElementById("btn").onclick = function() {
        var input = document.getElementById("moveData").value; // <-- this line
        document.getElementById("p1").innerHTML = input;
    }
</script>

<p id="p1"></p>   but how if we wanted to changed the inner html of not p1, but name, description, etc. inside the template element? <template id="member info">
      <ul>
        <li id="name"></li>
        <li id="description"></li>
        <li id="age"></li>
        <li id="image"></li>
      </ul>
    </template */

let clone;
let temp;
let newMemberInfo;
function cloneEmptyForm() {
    // store template in a temp variable 
    temp = document.getElementsByTagName("template")[0];
    // clone the template (i.e. create a new copy of the empty form)
    clone = temp.content.cloneNode(true);
    console.log("cloned empty form");
}

function displayAllMemberCards() {
        var name = document.getElementById("memberForm").getElementsByClassName("name")[0].value;
        var description = document.getElementById("memberForm").getElementsByClassName("description")[0].value;
        var age = document.getElementById("memberForm").getElementsByClassName("age")[0].value;
        console.log("retrieved all user input");
        
        clone.getElementById("name").getElementsByClassName("memberName")[0].textContent = name;
        clone.getElementById("description").getElementsByClassName("memberDescription")[0].textContent = description;
        clone.getElementById("age").getElementsByClassName("memberAge")[0].textContent = age;
        console.log("updated empty form with new member info");
    
        document.body.appendChild(clone);
        console.log("added new member info");
}

// 'handleImageUpload()' uses code from the following post:
//  https://stackoverflow.com/questions/49942611/how-to-display-a-photo-uploaded-by-user-in-html-and-javascript
//  The code was adapted to by using htmlelements specific to 'home.html' 
function handleImageUpload() 
{
    cloneEmptyForm();
    var image_field = document.getElementById("memberForm").getElementsByClassName("image")[0];
    var image = image_field.files[0];

    var reader = new FileReader();

    reader.onload = function(e) {
        clone.getElementById("image").getElementsByClassName("displayImage")[0].src = e.target.result;
    }

    reader.readAsDataURL(image);
} 

// 'clearAllMemberCards()' was genereated by ChatGPT 3.5 on May 19, 2024
// The prompt used was:
// function clearAllMemberCards() {
    // delete all html elements with class='newMember'
// }
// The generated code was adapted by changing variable and parameter names
function clearAllMemberCards() {
    const allMembers = document.querySelectorAll('.newMember');

    allMembers.forEach(member => {member.remove();
    });
}



// 'deleteMemberCard() was genereated by ChatGPT 3.5 on May 20, 2024
// The prompt used was: 
// function deleteMemberCard() {
//     const memberToDelete = document.getElementById("deleteMember").value;
//     const allCards = document.querySelectorAll('.memberInfo');
//     for (const memberCard of allCards) {
//         if (memberCard.getElementById("name").getElementsByClassName("memberName")[0].value == memberToDelete) {
//             memberCard.remove();
//             window.print("Member" + "\'" + memberToDelete + "\'" + "has been deleted!");
//         }
//     }
//     window.print("Member name" + "\'" + memberToDelete + "\'" + "was not found!");
// }
// this doesn't work because I can't call getElementById (probably because querySelectorAll only 
// returns the non-live NodeList) what should I do instead
// The generated code was adapated by adding the functionality of making the confirmation message appear, which
// used code referenced from https://www.geeksforgeeks.org/how-to-convert-html-form-field-values-to-json-object-using-javascript/

function deleteMemberCard() {
    const memberToDelete = document.getElementById("deleteMember").value;
    const allCards = document.querySelectorAll('.newMember');
    let msg = document.getElementById("confirmationMsg");
    let found = false;

    for (const memberCard of allCards) {
        const memberName = memberCard.querySelector(".memberName");
        if (memberName && memberName.textContent.trim() == memberToDelete) {
            console.log(memberName);
            memberCard.remove();
            msg.textContent = "<pre>" + "Member" + " \'" + memberToDelete + "\' " + "has been deleted!" + "<pre>";
            found = true;
            break;
        }
    }

    if (!found) {
        msg.textContent = "<pre>" + "Member name" + " \'" + memberToDelete + "\' " + "was not found!" + "<pre>";
    }
    
    setTimeout(() => {
        msg.textContent = "";
        document.getElementById("deleteMember").textContent = "";
    }, 1000)
}



