document.addEventListener('DOMContentLoaded', (event) => {

    const madalinFunction = () => {

        /// continut start
        const dateContainer = document.getElementById('date-container');
        const currentDate = new Date();
        
        const options = { year: 'numeric', month: 'long', day: 'numeric' };
        const formattedDate = currentDate.toLocaleDateString(undefined, options);
        
        
        const formattedTime = String(currentDate.getHours()).padStart(2, '0') + ":"  
                    + String(currentDate.getMinutes()).padStart(2, '0') + ":" 
                    + String(currentDate.getSeconds()).padStart(2, '0');
        
        dateContainer.textContent = `Today's date is: ${formattedDate}, and time is: ${formattedTime}`;
        // continut sfarsit

    };
    
    // Display date once
    madalinFunction();

    // Update time every second
    setInterval(madalinFunction, 1000);
});