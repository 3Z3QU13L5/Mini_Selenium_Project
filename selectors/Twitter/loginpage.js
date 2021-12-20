module.exports = {
    
    page_title: ['Twitter', 'Iniciar sesión en Twitter / Twitter'],
    uid_input: 'input[autocomplete="username"]', //Attributes
    password_input: 'input[name="password"]', //Attributes
    next_button: "div[role='button'][style*='background-color']",
    login_button: 'div[data-testid="LoginForm_Login_Button"]', //Attributes
    waiting_element: 'input[name="session[username_or_email]"]', 
    header: '',
    create_button: 'div[aria-label="Create"]',
    warning_message: 'div[role="alert"]',
    warning_messageText: 'El nombre de usuario y la contraseña que ingresaste no coinciden con nuestros registros. Por favor, revisa e inténtalo de nuevo.',
}