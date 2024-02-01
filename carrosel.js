document.addEventListener('DOMContentLoaded', () => {
    const carousel = document.querySelector(".carousel");
    const carouselTitle = document.querySelector(".carousel-title");

    const images = [
        {
            src: "assets/assets/tempo2.png",
            title: "Site previsão de tempo",
            description: "Desenvolvido com HTML, CSS, JavaScript e uso de API em tempo real",
            siteLink: "https://seusite1.com", // Substitua pela URL do seu site
            repoLink: "https://seurepo1.com" // Substitua pela URL do seu repositório
        },
        {
            src: "assets/newtaref2.PNG",
            title: "Site de gerenciamento de tarefas e projetos",
            description: "Desenvolvido com HTML, CSS, JavaScript",
            siteLink: "https://seusite2.com", // Substitua pela URL do seu site
            repoLink: "https://seurepo2.com" // Substitua pela URL do seu repositório
        },
        {
            src: "assets/ecomerce2024.png",
            title: "E-commerce",
            description: "Desenvolvido com HTML, CSS, JavaScript e ainda estamos implementando melhorias e bancos de dados para cadastro, login, compra",
            siteLink: "https://seusite3.com", // Substitua pela URL do seu site
            repoLink: "https://seurepo3.com" // Substitua pela URL do seu repositório
        }
    ];

    let currentIndex = 0;

    function renderImages() {
        const imageContainers = Array.from(carousel.querySelectorAll(".image-container"));

        // Limpa as imagens existentes
        imageContainers.forEach(container => {
            container.parentNode.removeChild(container);
        });

        // Adiciona as novas imagens
        for (let i = 0; i < 3; i++) {
            const newImageContainer = document.createElement("div");
            newImageContainer.classList.add("image-container");

            const newImage = document.createElement("img");
            newImage.classList.add("image");
            newImage.src = images[(currentIndex + i) % images.length].src;
            newImageContainer.appendChild(newImage);

            const imageInfo = document.createElement("div");
            imageInfo.classList.add("image-info");
            imageInfo.innerHTML = `
                <h3>${images[(currentIndex + i) % images.length].title}</h3>
                <p>${images[(currentIndex + i) % images.length].description}</p>
            `;

            const buttonsContainer = document.createElement("div");
            buttonsContainer.classList.add("buttons-container");

            const siteButton = document.createElement("a");
            siteButton.href = images[(currentIndex + i) % images.length].siteLink;
            siteButton.classList.add("btn-site");
            siteButton.target = "_blank";
            siteButton.textContent = "Site";

            const repoButton = document.createElement("a");
            repoButton.href = images[(currentIndex + i) % images.length].repoLink;
            repoButton.classList.add("btn-repo");
            repoButton.target = "_blank";
            repoButton.textContent = "Repositório";

            buttonsContainer.appendChild(siteButton);
            buttonsContainer.appendChild(repoButton);

            imageInfo.appendChild(buttonsContainer);
            newImageContainer.appendChild(imageInfo);

            carousel.appendChild(newImageContainer);
        }

        // Atualiza o título do carrossel
        carouselTitle.textContent = "Título do Carrossel - Imagem " + (currentIndex + 1);
    }

    renderImages();

    document.querySelector("#prev").addEventListener("click", () => {
        currentIndex = (currentIndex - 1 + images.length) % images.length;
        renderImages();
    });

    document.querySelector("#next").addEventListener("click", () => {
        currentIndex = (currentIndex + 1) % images.length;
        renderImages();
    });
});
