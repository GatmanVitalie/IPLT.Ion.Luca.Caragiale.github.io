fetch('./js/news.json')
    .then(response => response.json())
    .then(data => {
        // Get the articles array from the JSON data
        const articles = data.news;

        // Get the container where you want to insert the articles
        const articlesContainer = document.getElementById('articole');


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
                { class: 'facebook', image: '.././images/Facebook_Logo_Secondary.png', },
                { class: 'instagram', image: '.././images/linkedin_logo.png' },
                { class: 'twiter', image: '.././images/logo.svg' }, // Fixed typo here
                { class: 'github', image: '.././images/share.svg' }
            ];

            for (let i = 0; i < socialMediaButtons.length; i++) {
                const button = socialMediaButtons[i];
                const socialButton = document.createElement('button');
                socialButton.type = 'button';
                socialButton.classList.add(button.class);
            
                // Add onclick event listener to the button
                socialButton.addEventListener('click', () => sharedata(button.class, article.title, article.image_link, article.descriere, article.data)); // Assuming handleButtonClick is a function defined elsewhere
            
                const socialImage = document.createElement('img');
                socialImage.src = button.image;
            
                socialButton.appendChild(socialImage);
                buttonHolderElement.appendChild(socialButton);
            }

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
