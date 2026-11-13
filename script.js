const contactForm = document.getElementById("contactForm");
if (contactForm) {
  contactForm.addEventListener("submit", function (e) {
    e.preventDefault();

    const username = document.getElementById("useR").value;
    const email = document.getElementById("user-email").value;
    const formMessage = document.getElementById("form-message");

    if (username.trim() !== "" && email.trim() !== "") {
      formMessage.textContent =
        "Thank you for visiting, " +
        username +
        "! We will contact you at " +
        email +
        ".";
    } else {
      formMessage.textContent = "Please enter your name and email.";
    }
  });
}

const tableRows = document.querySelectorAll("#experience-table tbody tr");
tableRows.forEach(function (row) {
  row.addEventListener("mouseover", function () {
    row.style.backgroundColor = "#ffe6ee";
  });
  row.addEventListener("mouseout", function () {
    row.style.backgroundColor = "";
  });
});

const themeButton = document.getElementById("theme-button");
if (themeButton) {
  themeButton.addEventListener("click", function () {
    document.body.classList.toggle("dark-mode");
  });
}

const serviceItems = document.querySelectorAll(".service-item");
const totalDisplay = document.getElementById("total");
serviceItems.forEach(function (item) {
  item.addEventListener("change", function () {
    let total = 0;
    serviceItems.forEach(function (chk) {
      if (chk.checked) {
        total = total + parseInt(chk.value) || 0;
      }
    });
    if (totalDisplay) {
      totalDisplay.textContent = "Selected Services Total: $" + total;
    }
  });
});

const birthYearInput = document.getElementById("birth-year");
if (birthYearInput) {
  birthYearInput.addEventListener("change", function () {
    const birthYearText = birthYearInput.value;
    const birthYear = parseInt(birthYearText);
    const discountMessage = document.getElementById("discount-message");
    if (isNaN(birthYear)) {
      discountMessage.textContent = "Please enter a valid birth year.";
      return;
    }
    const age = 2026 - birthYear;
    if (age <= 25 || age >= 60) {
      discountMessage.textContent =
        "You are " + age + " years old. You qualify for a special discount!";
    } else {
      discountMessage.textContent =
        "You are " + age + " years old. No special discount applies.";
    }
  });
}

const readMoreButton = document.getElementById("read-more-button");
const extraAbout = document.getElementById("extra-about");
if (readMoreButton && extraAbout) {
  readMoreButton.addEventListener("click", function () {
    if (extraAbout.classList.contains("hidden")) {
      extraAbout.classList.remove("hidden");
      readMoreButton.textContent = "Read Less";
    } else {
      extraAbout.classList.add("hidden");
      readMoreButton.textContent = "Read More";
    }
  });
}

const filterButtons = document.querySelectorAll(".filter-button");
const courseCards = document.querySelectorAll(".course-card");
filterButtons.forEach(function (button) {
  button.addEventListener("click", function () {
    const selectedCategory = button.dataset.category;
    courseCards.forEach(function (course) {
      if (
        selectedCategory === "all" ||
        course.dataset.category === selectedCategory
      ) {
        course.style.display = "";
      } else {
        course.style.display = "none";
      }
    });
  });
});

const currentHour = new Date().getHours();
const openingStatus = document.getElementById("opening-status");
if (openingStatus) {
  if (currentHour >= 8 && currentHour < 22) {
    openingStatus.textContent = "We are Open!";
    openingStatus.className = "open";
  } else {
    openingStatus.textContent = "Closed - Open at 8 AM";
    openingStatus.className = "closed";
  }
}

const specialNotes = document.getElementById("special-notes");
const characterCount = document.getElementById("character-count");
if (specialNotes && characterCount) {
  specialNotes.addEventListener("input", function () {
    const remaining = 100 - specialNotes.value.length;
    characterCount.textContent = remaining + " characters remaining";
  });
}

function showMessage() {
  alert("Hello! Thanks for visiting my portfolio.");
}
