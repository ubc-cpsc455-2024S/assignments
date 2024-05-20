// code used to store and display member fields as a json string: https://www.geeksforgeeks.org/how-to-convert-html-form-field-values-to-json-object-using-javascript/

// function convertToJsonString() {
//     let form = document.getElementById("memberForm");
//     let formData = {};
//     for (let i = 0; i < form.elements.length; i++) {
//         let element = form.elements[i];
//         if (element.type !== "submit") {
//             formData[element.name] = element.value;
//         }
//     }
//     let jsonString = JSON.stringify(formData);
//     let jsonOutput = document.getElementById("jsonOutput");
//     jsonOutput.innerHTML = "<pre>" + jsonString + "</pre>";
//     // updateData(jsonString);
// }

// code written in 'displayAllMemberCards' was referenced from the following sources:
// HTML <template> Tag: https://www.w3schools.com/tags/tryit.asp?filename=tryhtml5_template
// How to display text input after submitting button in HTML and Javascript: 
// https://stackoverflow.com/questions/75505204/how-to-display-text-input-after-submitting-button-in-html-and-javascript
// Get element inside element by class and ID - JavaScript:
// https://stackoverflow.com/questions/7815374/get-element-inside-element-by-class-and-id-javascript
// Javascript, viewing [object HTMLInputElement]: https://stackoverflow.com/questions/15383765/javascript-viewing-object-htmlinputelement
// Lines 45-47 (assigning cloned template values from user input): based on code generated from ChatGPT 3.5 using the following prompt:
{/* <label for="moveData">Enter data</label>
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
    </template */}


let clone;
let temp;
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
        
        clone.getElementById("name").getElementsByClassName("memberName")[0].innerHTML = name;
        clone.getElementById("description").getElementsByClassName("memberDescription")[0].innerHTML = description;
        clone.getElementById("age").getElementsByClassName("memberAge")[0].innerHTML = age;
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

    allMembers.forEach(member => 
        {member.remove();
    });
}



// 'updateData' was genereated by ChatGPT 3.5 on May 18, 2024
// The prompt used was:
// The generated code was adapated: 
function updateData(jsonString) {
    ```
    Updated the data.json form when a new member is added

    Parameters
    ----------
    jsonString : string
        json string containing the form fields of the newly added member

    ```
    const path = './data.json';
    // reads existing data (data of all members added so far) ?and returns contents read into data
    FileSystem.readFile(path, 'utf8', (err, data) => {
        if (err) {
            console.error('Error reading data.json', err);
            return;
        }

        // read contents of file into an array of JSON objects
        let jsonArr;
        try {
            jsonArr = JSON.parse(data);
        } catch (err) {
            jsonArr = [];
        }

        // Append new data to array (adding info of new member to current list member info)
        jsonArr.push(JSON.parse(jsonString));

        // Write updated data back to data.json
        FileSystem.writeFile(path, JSON.stringify(jsonArr, null, 2), 'utf8', (err) => {
            if (err) {
                console.error("Error writing to data.json", err);
            } else {
                console.log("data.json was sucessfully updated");
            }
        })
    })

}


