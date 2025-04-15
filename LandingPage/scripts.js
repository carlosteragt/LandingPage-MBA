let images = ["images/depoimento-1.png", "images/depoimento-2.png"];
let currentIndex = 0;

function nextSlide() {
    currentIndex = (currentIndex + 1) % images.length;
    document.getElementById("testimonial-img").src = images[currentIndex];
}

function prevSlide() {
    currentIndex = (currentIndex - 1 + images.length) % images.length;
    document.getElementById("testimonial-img").src = images[currentIndex];
}

document.addEventListener("DOMContentLoaded", () => {
    const form = document.querySelector(".mba-form");

    form.addEventListener("submit", async (event) => {
        event.preventDefault();

        const dados = {
            nome: form.elements["nome"].value,
            email: form.elements["email"].value,
            telefone: form.elements["telefone"].value,
            cargo: form.elements["cargo"].value,
            formacao: form.elements["formacao"].value,
            faixa_salarial: form.elements["faixa_salarial"].value,
        };

        const url = "https://prod-16.brazilsouth.logic.azure.com:443/workflows/4b134dfe7cae46da85ca685c4344bb43/triggers/manual/paths/invoke?api-version=2016-06-01&sp=%2Ftriggers%2Fmanual%2Frun&sv=1.0&sig=dtHK6PqEW_M4CWw_idOBYSgCTB-9oQS9I5J2ObFa5rU";

        const emailData = {
            email: dados.email
        };

        try {
            const resposta = await fetch(url, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(emailData),
            });

            if (resposta.ok) {
                alert("Inscrição enviada com sucesso!");
                form.reset();
            } else {
                const textoErro = await resposta.text();
                alert("Erro: " + textoErro);
            }
        } catch (erro) {
            alert("Erro ao enviar os dados: " + erro.message);
        }
    });
});
