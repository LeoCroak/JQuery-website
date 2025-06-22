/**
 * This is a simple jQuery example that runs when the document is ready.
 * @function
 * @returns {void}
 * @description This function will execute when the DOM is fully loaded. 
 */

$(document).ready(function() { // this is the same as document.addEventListener("DOMContentLoaded", function() {
    /**
     * This function sets the theme to dark mode. If user prefers dark mode, it will apply the dark mode styles.
     * @function
     * @returns {void}
     * @description This function checks the user's preference for dark mode and applies the appropriate styles.
     */

    function setDarkMode() {
        if (localStorage.getItem("theme") === "dark") {
            $("body").addClass("dark-mode");
        }
    }
    
    // Call the function here to actually run it
    setDarkMode();
});