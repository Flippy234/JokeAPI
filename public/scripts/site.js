document.getElementById("new-joke").addEventListener("click", async () => {
    const response = await fetch('/api/v1/random-joke');
    const data = await response.json();

    document.getElementById("joke").innerText = data.joke;
    document.getElementById("punchline").innerText = data.punchline;
});