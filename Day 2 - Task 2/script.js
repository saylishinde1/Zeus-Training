function validateForm() {
                    var name = document.getElementById('name').value;
                    var comments = document.getElementById('comments').value;
                    var male = document.getElementById('male').checked;
                    var female = document.getElementById('female').checked;
        
                    if (name === '') {
                        alert('All fields are compulsory');
                        document.getElementById('name').focus();
                        return false;
                    } else if (comments === '') {
                        alert('All fields are compulsory');
                        document.getElementById('comments').focus();
                        return false;
                    } else if (!male && !female) {
                        alert('All fields are compulsory');
                        document.getElementById('male').focus();
                        return false;
                    } else {
                        alert('Form submitted successfully!');
                        // Here you can add the code to submit the form if needed
                    }
                }





/*

function validateForm(){
    const name=
    document.getElementById("name");
    const comments=
    document.getElementById("comments");
    const male=
    document.getElementById("male");
    const female=
    document.getElementById("female");

    if(name.value.trim()==""){
        alert("All Fields are Required");
        name.focus();
        return false;
    }
    if(comments.value.trim()==""){
        alert("All Fields are Required");
        comments.focus();
        return false;
    }

    if(!male.checker && !female.checker){
        alert("All Fields are Required");
        male.focus();
        return false;
    }

    alert("Form submitted successfully!");
    return true;
}
*/