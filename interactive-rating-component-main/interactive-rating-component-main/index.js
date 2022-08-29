// button funct. testing.

    const ratingOneBtn = document.getElementById("btnOne");
    const ratingTwoBtn = document.getElementById("btnTwo");
    const ratingThreeBtn = document.getElementById("btnThree");
    const ratingFourBtn = document.getElementById("btnFour");
    const ratingFiveBtn = document.getElementById("btnFive");

    ratingOneBtn.addEventListener('click', () => {
        let starBox = document.getElementById("starBox");
        let mobileIllustrator = document.getElementById("mobileIllustrator");
        let valueSubmitter = document.getElementById("valueSubmitter");
        let questText = document.getElementById("questText");
        let appricText = document.getElementById("appricText");
        let mainText = document.getElementById("mainText");
        let subText = document.getElementById("subText");
        let rating_circles = document.querySelector(".rating_circles");

        starBox.classList.add("d-none")
        mainText.classList.add("d-none")
        questText.classList.add("d-none")
        mobileIllustrator.classList.remove("d-none");
        subText.classList.remove("d-none");
        appricText.classList.remove("d-none");
        valueSubmitter.classList.remove("d-none")
        valueSubmitter.innerText= "You selected 1 out of 5"
        rating_circles.classList.add("d-none")
    });

    ratingTwoBtn.addEventListener('click', () => {
        let starBox = document.getElementById("starBox");
        let mobileIllustrator = document.getElementById("mobileIllustrator");
        let valueSubmitter = document.getElementById("valueSubmitter");
        let questText = document.getElementById("questText");
        let appricText = document.getElementById("appricText");
        let mainText = document.getElementById("mainText");
        let subText = document.getElementById("subText");
        let rating_circles = document.querySelector(".rating_circles");

        starBox.classList.add("d-none")
        mainText.classList.add("d-none")
        questText.classList.add("d-none")
        mobileIllustrator.classList.remove("d-none");
        subText.classList.remove("d-none");
        appricText.classList.remove("d-none");
        valueSubmitter.classList.remove("d-none")
        valueSubmitter.innerText= "You selected 2 out of 5"
        rating_circles.classList.add("d-none")
    });

    ratingThreeBtn.addEventListener('click', () => {
        let starBox = document.getElementById("starBox");
        let mobileIllustrator = document.getElementById("mobileIllustrator");
        let valueSubmitter = document.getElementById("valueSubmitter");
        let questText = document.getElementById("questText");
        let appricText = document.getElementById("appricText");
        let mainText = document.getElementById("mainText");
        let subText = document.getElementById("subText");
        let rating_circles = document.querySelector(".rating_circles");

        starBox.classList.add("d-none")
        mainText.classList.add("d-none")
        questText.classList.add("d-none")
        mobileIllustrator.classList.remove("d-none");
        subText.classList.remove("d-none");
        appricText.classList.remove("d-none");
        valueSubmitter.classList.remove("d-none")
        valueSubmitter.innerText= "You selected 3 out of 5"
        rating_circles.classList.add("d-none")
    });

    ratingFourBtn.addEventListener('click', () => {
        let starBox = document.getElementById("starBox");
        let mobileIllustrator = document.getElementById("mobileIllustrator");
        let valueSubmitter = document.getElementById("valueSubmitter");
        let questText = document.getElementById("questText");
        let appricText = document.getElementById("appricText");
        let mainText = document.getElementById("mainText");
        let subText = document.getElementById("subText");
        let rating_circles = document.querySelector(".rating_circles");

        starBox.classList.add("d-none")
        mainText.classList.add("d-none")
        questText.classList.add("d-none")
        mobileIllustrator.classList.remove("d-none");
        subText.classList.remove("d-none");
        appricText.classList.remove("d-none");
        valueSubmitter.classList.remove("d-none")
        valueSubmitter.innerText= "You selected 4 out of 5"
        rating_circles.classList.add("d-none")
    });

    ratingFiveBtn.addEventListener('click', () => {
        let starBox = document.getElementById("starBox");
        let mobileIllustrator = document.getElementById("mobileIllustrator");
        let valueSubmitter = document.getElementById("valueSubmitter");
        let questText = document.getElementById("questText");
        let appricText = document.getElementById("appricText");
        let mainText = document.getElementById("mainText");
        let subText = document.getElementById("subText");
        let rating_circles = document.querySelector(".rating_circles");

        starBox.classList.add("d-none")
        mainText.classList.add("d-none")
        questText.classList.add("d-none")
        mobileIllustrator.classList.remove("d-none");
        subText.classList.remove("d-none");
        appricText.classList.remove("d-none");
        valueSubmitter.classList.remove("d-none")
        valueSubmitter.innerText= "You selected 5 out of 5"
        rating_circles.classList.add("d-none")
    });