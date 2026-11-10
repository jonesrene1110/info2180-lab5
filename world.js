document.addEventListener("DOMContentLoaded", function() {
    const countryName = document.getElementById("country");
    const searchBtn = document.getElementById("lookup");
    const result = document.getElementById("result");

    searchBtn.addEventListener("click", async function(event) {
        event.preventDefault();
        const country = countryName.value.trim();

        try {
            const params = new URLSearchParams({country: country});
            const response = await fetch("world.php?" + params.toString());
            if (!response.ok) {
                throw new Error("Server error: " + response.status);
            }
            const html = await response.text();
            result.innerHTML = html;
        }

        catch(error) {
            alert("Error returning list.");
            console.error(error);
        }
    });
});
