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

    /**
     * This function toggles all the effects of the elements when they are hovered.
     * @function
     * @returns {void}
     * @description This function toggles the effects of the elements when they are hovered.
     */

    function toggleEffectHover() {
        // Toggle underline effect on hover
        $("#underline-hover").hover(
            function () { // mouse enters the element
                $(this).css("text-decoration", "underline"); // JQuery does not support semicolon in the css method
            },
            function () { // mouse leaves the element
                $(this).css("text-decoration", "none");
            }
        );

        $("#opacity-hover").hover(
            function () { // mouse enters the element
                $(this).css("opacity", "0.5"); // Change opacity to 0.8 on hover
            },
            function () { // mouse leaves the element
                $(this).css("opacity", "1"); // Change opacity back to 1 when not hovered
            }
        );

        $("#color-change-hover").hover(
            function () { // mouse enters the element
                $(this).addClass("toggle-red") // Change color to red on hover
            },
            function () { // mouse leaves the element
                $(this).removeClass("toggle-red"); // Remove the color change when not hovered
            }
        )
    }

    toggleEffectHover();
});