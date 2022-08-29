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

        starBox.classList.add("d-none")
        mainText.classList.add("d-none")
        questText.classList.add("d-none")
        mobileIllustrator.classList.remove("d-none");
        subText.classList.remove("d-none");
        appricText.classList.remove("d-none");
        valueSubmitter.classList.remove("d-none")
        valueSubmitter.innerText= "You selected 1 out of 5"
    });