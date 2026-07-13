let users = [
        {
            name: "amisha rathore",
            pic: "https://tse3.mm.bing.net/th/id/OIP.8PNc5XkDdbWAagUPZpNIuwHaFJ?r=0&pid=Api&h=220&P=0",
            bio: 'silent kon ha bakl mujha batoo'
        },
        {
            name: "amisha",
            pic: "https://tse3.mm.bing.net/th/id/OIP.8PNc5XkDdbWAagUPZpNIuwHaFJ?r=0&pid=Api&h=220&P=0",
            bio: 'silent kon ha bakl mujha batoo'
        },
        {
            name: "amis",
            pic: "https://tse3.mm.bing.net/th/id/OIP.8PNc5XkDdbWAagUPZpNIuwHaFJ?r=0&pid=Api&h=220&P=0",
            bio: 'silent kon ha bakl mujha batoo'
        },
        {
            name: "misha",
            pic: "https://tse3.mm.bing.net/th/id/OIP.8PNc5XkDdbWAagUPZpNIuwHaFJ?r=0&pid=Api&h=220&P=0",
            bio: 'silent kon ha bakl mujha batoo'
        },
    ];

function showUsers(arr) { 
    arr.forEach(function (user) {
        // Create card
        const card = document.createElement("div");
        card.className = "card";

// Create image
        const img = document.createElement("img");
        img.src = "user.pic";
        img.classList.add("bg-img")

// Create blurred div
        const blured = document.createElement("div");
        blured.style.backgroundImage = `url(${user.pic})`;
        blured.classList.add("blured");
        blured.className = "blured";

// Create content div
       const content = document.createElement("div");
       content.className = "content";

// Create heading
       const heading = document.createElement("h3");
       heading.textContent = user.name;

// Create paragraph
       const paragraph = document.createElement("p");
       paragraph.textContent = user.bio;

// Append elements
       content.appendChild(heading);
       content.appendChild(paragraph);

       card.appendChild(img);
       card.appendChild(blured);
       card.appendChild(content);

       gap.appendChild(card);

// Add to the page
      document.querySelector(".cards").appendChild(card);
    });
}

showUsers(users);

let inp = document.querySelector(".inp");
inp.addEventListener("input", function ()) {
    let newUsers = users.filter((user) => {
        return user.name.startsWith(inp.value);
    });

document.querySelector(".cards").innerHTML = "";
showUsers(newUsers);
}
