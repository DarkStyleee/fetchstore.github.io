export default function initForm() {
    const form = $('#checkout_form');


    form.on('submit', e => {
        e.preventDefault();

        const callbackSuccess = () => {
            location.href = 'checkout-complete.html';
        };
        

        window.API.onFormSubmit(callbackSuccess);
    });
}