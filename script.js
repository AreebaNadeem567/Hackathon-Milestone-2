// Function to toggle the visibility of the Skills section
function toggleSkills() {
    var skillsSection = document.getElementById('skills');
    if (skillsSection) {
        if (skillsSection.style.display === 'none') {
            skillsSection.style.display = 'block';
        }
        else {
            skillsSection.style.display = 'none';
        }
    }
}
// Add event listener to the button
var toggleButton = document.getElementById('toggleSkills');
if (toggleButton) {
    toggleButton.addEventListener('click', toggleSkills);
}
