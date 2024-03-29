fetch('./js/news.json')
    .then(response => response.json())
    .then(data => {
        // Get the articles array from the JSON data
        const articles = data.news;

        // Get the container where you want to insert the articles
        const articlesContainer = document.getElementById('articole');

        // Function to handle the click event
        function handleButtonClick(buttonClass) {
            console.log('Button clicked:', buttonClass);
            if (buttonClass === 'facebook') {
                window.location.href = "https://www.facebook.com/L.T.I.L.Caragiale";
            }
            else if (buttonClass === 'instagram') {
                window.location.href = "https://www.instagram.com/consiliul.elevilor.caragiale?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==";
            }
            else if (buttonClass === 'twiter') {
                window.location.href = "https://twitter.com/";
            }
            else {
                window.location.href = "https://github.com/GatmanVitalie";
            }
        }

        // Loop through the articles array
        articles.forEach(article => {
            // Create elements for the article
            const articleElement = document.createElement('div');
            articleElement.classList.add('article');

            const titleElement = document.createElement('h2');
            titleElement.textContent = article.title;

            const imageHolderElement = document.createElement('div');
            imageHolderElement.classList.add('image_holder');

            const imageElement = document.createElement('img');
            imageElement.src = article.image_link;
            imageElement.alt = article.title;

            imageHolderElement.appendChild(imageElement);

            const textHolderElement = document.createElement('div');
            textHolderElement.classList.add('text_holder');

            const descriptionElement = document.createElement('a');
            descriptionElement.textContent = article.descriere;

            textHolderElement.appendChild(descriptionElement);

            const dateElement = document.createElement('h3');
            dateElement.textContent = article.data;

            const buttonHolderElement = document.createElement('div');
            buttonHolderElement.classList.add('button_holder');

            // Create buttons for social media
            const socialMediaButtons = [
                { class: 'facebook', image: '.././images/Facebook_Logo_Secondary.png' },
                { class: 'instagram', image: '.././images/Instagram_logo_2022.svg' },
                { class: 'twiter', image: '.././images/logo.svg' }, // Fixed typo here
                { class: 'github', image: '.././images/github-mark-white.svg' }
            ];

            socialMediaButtons.forEach(button => {
                const socialButton = document.createElement('button');
                socialButton.type = 'button';
                socialButton.classList.add(button.class);

                // Add onclick event listener to the button
                socialButton.addEventListener('click', () => handleButtonClick(button.class));

                const socialImage = document.createElement('img');
                socialImage.src = button.image;

                socialButton.appendChild(socialImage);
                buttonHolderElement.appendChild(socialButton);
            });

            // Append elements to the article container
            articleElement.appendChild(titleElement);
            articleElement.appendChild(imageHolderElement);
            articleElement.appendChild(textHolderElement);
            articleElement.appendChild(dateElement);
            articleElement.appendChild(buttonHolderElement);

            // Append the article container to the articles container
            articlesContainer.appendChild(articleElement);
        });
    })
    .catch(error => console.error('Error fetching data:', error));
