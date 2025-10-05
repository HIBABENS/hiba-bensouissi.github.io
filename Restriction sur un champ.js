 //allow only alphanumeric characters and space
        var regex = new RegExp("^[a-zA-Z0-9][a-zA-Z0-9-& ]*$");
 
        if (!(regex.test(newValue))) {
            g_form.addErrorMessage('Name of the Mailbox accepts only alphanumeric characters');
            g_form.clearValue('v_eus_new_name');
            g_form.showFieldMsg('v_eus_new_name', 'Invalid input', 'error');
        }