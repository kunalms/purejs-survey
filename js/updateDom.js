const formControlContainer = 'formControls';
const formContainer = 'form';

function createUi(question, options) {
    if (question.type === 'radio' || question.type === 'checkbox') {
        addInputWithOptions(question, options)
    } else {
        addInputWithoutOptions(question)
    }
}

function hideForm() {
    const form = document.getElementById(formContainer);
    form.style.display = 'none';

    alert('Form submitted successfully!');
    return false;
}

function addInputWithOptions(question, options) {
    const form = document.getElementById(formControlContainer);

    // add label for group of options
    let p = document.createElement('p');
    p.innerText = question.title;
    p.className = 'h5 margin'
    form.appendChild(p);

    // Add each option in following pattern
    //<div class="input-group">
    //   <div class="input-group-text">
    //     <input class="form-check-input" type="radio/chechbox" value="">
    //   </div>
    //   <input type="text" class="form-control" read-only>
    // </div>
    for (const option of options) {

        const externalDiv = document.createElement('div');
        externalDiv.className = 'input-group margin-top-10';

        const internalDiv = document.createElement('div');
        internalDiv.className = 'input-group-text';

        const input = document.createElement('input');
        input.id = 'question' + question.id;
        input.name = 'question' + question.id;
        input.type = question.type;
        input.value = option.value;
        input.className = 'form-check-input mt-0';

        const label = document.createElement('input');
        label.htmlFor = 'question' + question.id;
        label.value = option.label
        label.className = 'form-control'
        label.readOnly = true;

        internalDiv.appendChild(input);
        externalDiv.appendChild(internalDiv);
        externalDiv.appendChild(label);

        form.appendChild(externalDiv);
        form.appendChild(document.createElement('BR'));
    }
}


function addInputWithoutOptions(question) {
    const form = document.getElementById(formControlContainer);

    // Add each option in following pattern
    //  <div >
    //     <label for="for" class="form-label">First name</label>
    //     <input type="text" class="form-control" id="validationCustom01" value="Mark" required>
    //  </div>

    const externalDiv = document.createElement('div');
    externalDiv.className = 'margin-vertical-30'

    const label = document.createElement('Label');
    label.htmlFor = 'question' + question.id;
    label.innerHTML = question.title;
    label.className = 'h5';

    const input = document.createElement('input');
    input.id = 'question' + question.id;
    input.name = 'question' + question.id;
    input.type = question.type;
    input.className = 'form-control';


    if (question.mandatory) {
        input.setAttribute('required', '');
    }

    externalDiv.appendChild(label);
    externalDiv.appendChild(input);

    form.appendChild(externalDiv);
}
