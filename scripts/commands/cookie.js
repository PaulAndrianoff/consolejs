// Name: cookie
// Options: [list|edit|delete|create] [cookie_name] [cookie_value]
// Description: Manage browser cookies - list, edit, delete, or create a cookie.
// Working script:
function cookieCommand(commandArgs) {
    const action = commandArgs[0];
    
    switch (action) {
        case 'list':
            const cookies = document.cookie.split(';');
            
            if (cookies.length === 1 && cookies[0] === '') {
                window.addToConsoleOutput('No cookies found.');
            } else {
                window.addToConsoleOutput('Cookies:');
                cookies.forEach((cookie) => {
                    const [name, value] = cookie.trim().split('=');
                    window.addToConsoleOutput(`- ${name} = <span class="success-message">${value}</span>`);
                });
            }
            break;
        
        case 'edit':
            const cookieName = commandArgs[1];
            const cookieValue = commandArgs[2];
            
            if (!cookieName || !cookieValue) {
                window.addToConsoleOutput('Invalid input. <span class="error-message">Please provide both cookie name and value.</span>');
                return;
            }
            
            document.cookie = `${cookieName}=${cookieValue}`;
            window.addToConsoleOutput(`Cookie <span class="success-message">"${cookieName}"</span> updated.`);
            break;
        
        case 'delete':
            const cookieNameToDelete = commandArgs[1];
            
            if (!cookieNameToDelete) {
                window.addToConsoleOutput('Invalid input. <span class="error-message">Please provide the name of the cookie to delete.</span>');
                return;
            }
            
            document.cookie = `${cookieNameToDelete}=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;`;
            window.addToConsoleOutput(`Cookie <span class="success-message">"${cookieNameToDelete}"</span> deleted.`);
            break;
        
        case 'create':
            const cookieNameToCreate = commandArgs[1];
            const cookieValueToCreate = commandArgs[2];
            
            if (!cookieNameToCreate || !cookieValueToCreate) {
                window.addToConsoleOutput('Invalid input. <span class="error-message">Please provide both cookie name and value.</span>');
                return;
            }
            
            document.cookie = `${cookieNameToCreate}=${cookieValueToCreate}`;
            window.addToConsoleOutput(`Cookie <span class="success-message">"${cookieNameToCreate}"</span> created.`);
            break;
        
        default:
            window.addToConsoleOutput('Invalid action. <span class="error-message">Use "list", "edit", or "delete"</span>.');
            break;
    }
}

window.cookieCommand = cookieCommand;
