const bd = document.getElementById('body');
const p_name = document.getElementById('name');
const Btnmale = document.getElementById('male');
const Btnfemale = document.getElementById('female');
const p_mail = document.getElementById('email');
const p_birth = document.getElementById('birthday');
const address = document.getElementById('address');
const city = document.getElementById('city');
const region = document.getElementById('region');
const zip_code = document.getElementById('zip');
const Btnclear = document.getElementById('clear');
const Btnfinish = document.getElementById('finish');

Btnfinish.addEventListener('click', function() {
    let isValid = true;

    if (
        p_name.value.trim() === '' ||
        p_mail.value.trim() === '' ||
        (Btnmale.checked === false && Btnfemale.checked === false) ||
        !isValidEmail(p_mail.value.trim()) ||
        !isValidDateOfBirth(p_birth.value.trim()) ||
        address.value.trim() === '' ||
        city.value === '' ||
        region.value === '' ||
        !isValidZipCode(zip_code.value.trim())
    ) {
        isValid = false;

        if (!isValidEmail(p_mail.value.trim())) {
            alert("Email: must contain one “@”, before “@” is an account name, after “@” is a domain name, the domain name has at least one “.”");
        }

        if (!isValidDateOfBirth(p_birth.value.trim())) {
            alert("DOB: should be in mm/dd/yyyy format");
        }

        if (!isValidZipCode(zip_code.value.trim())) {
            alert("Zip code: includes exactly 5 digits");
        }
    }

    if (isValid) {
        alert("Done");
    }
});

function isValidEmail(email) {
    const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
    return emailRegex.test(email);
}

function isValidDateOfBirth(dob) {
    const dobRegex = /^(0[1-9]|1[0-2])\/(0[1-9]|[12][0-9]|3[01])\/(19|20)\d\d$/;
    return dobRegex.test(dob);
}

function isValidZipCode(zip) {
    const zipRegex = /^\d{5}$/;
    return zipRegex.test(zip);
}

Btnclear.addEventListener('click',function(){
    p_name.value ='';
    p_mail.value='';
    Btnmale.checked = false;
    Btnfemale.checked=false;
    p_birth.value = '';
    address.value ='';
    city.value='';
    region.value = '';
    zip_code.value = '';
})