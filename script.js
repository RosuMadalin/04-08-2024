document.addEventListener('DOMContentLoaded', (event) => {
    const dateContainer = document.getElementById('date-container');
    const currentDate = new Date();
    
    const options = { year: 'numeric', month: 'long', day: 'numeric' };
    const formattedDate = currentDate.toLocaleDateString(undefined, options);
    
    dateContainer.textContent = `Today's date is: ${formattedDate}`;
});