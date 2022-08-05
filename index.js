let form = document.getElementById('form');
let fName = document.getElementById('fName');
let lName = document.getElementById('lName');
let age = document.getElementById('age');
let email = document.getElementById('email');
let country = document.getElementById("country");
let contact = document.getElementById("contact");
let radBtn = document.getElementsByClassName('form-check-input');


function Validate() {

    if (fName.value == "" || fName.value == null) {
        document.getElementById("error1").innerHTML = "Please Enter your fName";
    } else if (fName.value !== "" || fName.value !== null) {
        document.getElementById("error1").innerHTML = "";
    };
    if (lName.value == "" || lName.value == null) {
        document.getElementById("error2").innerHTML = "Please Enter your lName";
    } else if (lName.value !== "" || lName.value !== null) {
        document.getElementById("error2").innerHTML = "";
    };
    if (age.value == "" || age.value == null) {
        document.getElementById("error3").innerHTML = "Please Enter your Age";
    } else if (age.value !== "" || age.value !== null) {
        document.getElementById("error3").innerHTML = "";
    };
    if (email.value == "" || email.value == null) {
        document.getElementById("error4").innerHTML = "Please Enter your Email";
    } else if (email.value !== "" || email.value !== null) {
        document.getElementById("error4").innerHTML = "";
    };
    if (contact.value == "" || contact.value == null) {
        document.getElementById("error5").innerHTML = "Please Enter your Phone Number";
    } else if (contact.value !== "" || contact.value !== null) {
        document.getElementById("error5").innerHTML = "";
    };
    if (country.value == "") {
        document.getElementById("errorcountry").innerHTML = "Please Enter your Country";
    } else if (country.value !== "") {
        document.getElementById("errorcountry").innerHTML = "";
    };
    if (fName.value == "" || lName.value == "" || age.value == "" || email.value == "" || contact.value == "" || country.value == "") {
        return false;
    };
    const radiosBtnOp = document.querySelector('input[type=radio][name=inlineRadioOptions]:checked').value;
    const firstName = fName.value;
    const lastName = lName.value;
    const userAge = age.value;
    const userEmail = email.value;
    const userCountry = country.value;
    const userContact = contact.value;
    var cardHTML = `<div class="container-fluid d-flex justify-content-center" id="removablehtml">
    <div class="row">
        <div class="col-12">
            <div class="card text-dark bg-light mb-3" style="max-width: 18rem;">
                <div class="card-body">
                    <h5 class="card-title text-center text-white-50 bg-dark">RESULT</h5>
                        <label class="lbl">First Name:</label><span id = "spfirstName" >${firstName}</span><br>
                        <label class="lbl">First Name:</label><span id = "splastName" >${lastName}</span><br>
                        <label class="lbl">Age:</label><span id = "spAge" >${userAge}</span><br>
                        <label class="lbl">Email:</label><span id = "spEmail">${userEmail}</span><br>
                        <label class="lbl">Country:</label><span id = "spContact">${userContact}</span><br>
                        <label class="lbl">Contact:</label><span id = "spCountry">${userCountry}</span><br>
                        <label class="lbl">Opinion:</label><span id = "spRadios">${radiosBtnOp}</span><br>
                        <button type="button" class="btn btn-danger d-block mx-auto my-3" onclick = "delFunction()">Remove</button>
                        <button type="button" class="btn btn-dark d-block mx-auto my-3" onclick ="returnFunction()">Edit</button>
                    </p>
                </div>
            </div>
        </div>
    </div>
</div>`;
    document.getElementById('cardGen').innerHTML = cardHTML;

    form.reset();
} 
function returnFunction() {
    let a = document.getElementById("spfirstName").innerHTML;
    let b = document.getElementById("splastName").innerHTML;
    let c = document.getElementById("spAge").innerHTML;
    let d = document.getElementById("spEmail").innerHTML;
    let e = document.getElementById("spContact").innerHTML;
    let f = document.getElementById("spCountry").innerHTML;
    let g =  document.getElementById("spRadios").innerHTML;
    document.myform.inlineRadioOptions.value = g;
    fName.value = a;
    lName.value = b;
    age.value = c;
    email.value = d;
    contact.value = e;
    country.value = f;
}
function delFunction() {
    var x = document.getElementById('removablehtml');
    x.remove();
} 
