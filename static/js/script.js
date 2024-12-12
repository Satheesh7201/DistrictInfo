/* styles.css */


@import url('https://fonts.googleapis.com/css2?family=Montserrat:ital,wght@0,100..900;1,100..900&display=swap');

* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}

body {
    font-family: 'Arial', sans-serif;
    background-color: #f7f7f7;
    color: #333;
    line-height: 1.6;
    transition: background-color 0.3s ease;
}

.container {
    max-width: 800px;
    width: 90%;
    margin: 40px auto;
    padding: 20px;
    background-color: #fff;
    border-radius: 8px;
    box-shadow: 0 0 20px rgba(0, 0, 0, 0.1);
    text-align: center;
    opacity: 0;
    animation: fadeIn 1s forwards;
    font-family: "Montserrat", sans-serif;
}

/* Fade-in effect for the container */
@keyframes fadeIn {
    0% {
        opacity: 0;
    }
    100% {
        opacity: 1;
    }
}

h1 {
    font-size: 24px;
    color: #0277bd;
    margin-bottom: 20px;
    animation: slideIn 0.6s ease-out;
}

@keyframes slideIn {
    0% {
        transform: translateY(-50px);
        opacity: 0;
    }
    100% {
        transform: translateY(0);
        opacity: 1;
    }
}

.dropdown-container {
    margin-bottom: 30px;
    text-align: left;
    opacity: 0;
    animation: fadeInUp 1s forwards;
}

@keyframes fadeInUp {
    0% {
        transform: translateY(30px);
        opacity: 0;
    }
    100% {
        transform: translateY(0);
        opacity: 1;
    }
}

select {
    width: 100%;
    max-width: 400px;
    padding: 12px;
    font-size: 16px;
    border: 2px solid #0277bd;
    border-radius: 5px;
    background-color: #f1f1f1;
    outline: none;
    transition: border-color 0.3s ease, box-shadow 0.3s ease;
    animation: fadeIn 1s ease-in-out;
}

select:focus {
    border-color: #00796b;
    box-shadow: 0 0 5px rgba(0, 121, 107, 0.5);
}

#district-details {
    padding: 20px;
    background-color: #ffffff;
    border-radius: 8px;
    box-shadow: 0 0 15px rgba(0, 0, 0, 0.1);
    display: none;
    margin-top: 20px;
    opacity: 0;
    animation: fadeInUp 1s forwards;
}

#district-details h2 {
    color: #00796b;
    margin-bottom: 15px;
    font-size: 22px;
    animation: fadeInRight 0.8s ease-out;
}

@keyframes fadeInRight {
    0% {
        transform: translateX(-50px);
        opacity: 0;
    }
    100% {
        transform: translateX(0);
        opacity: 1;
    }
}

#district-details p {
    color: #555;
    font-size: 16px;
    line-height: 1.6;
    opacity: 0;
    animation: fadeInText 1.2s ease-in-out forwards;
}

@keyframes fadeInText {
    0% {
        transform: translateY(20px);
        opacity: 0;
    }
    100% {
        transform: translateY(0);
        opacity: 1;
    }
}

/* For smooth transitions on hover */
select:hover {
    border-color: #0288d1;
    cursor: pointer;
}

/* Media query for mobile responsiveness */
@media (max-width: 600px) {
    .container {
        padding: 15px;
    }

    h1 {
        font-size: 20px;
    }

    select {
        padding: 10px;
        font-size: 14px;
    }

    #district-details h2 {
        font-size: 18px;
    }

    #district-details p {
        font-size: 14px;
    }
}
