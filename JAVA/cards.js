let cards = `[{
    "title" : "Playing World of Warcraft",
    "description" : "try to get more Transmog",    "priority" : "0",
    "pic" : "Img/wow.jpg"
},{
    "title" : "Buy Fast Food",
    "description" : "Don't have time to make my own food!",    "priority" : "0",
    "pic" : "Img/Noodle.jpg"
},{
    "title" : "Watch Netflix during Gaming",
    "description" : "Could fell asleep",    "priority" : "0",
    "pic" : "Img/Netflix.jpg"
},{
    "title" : "Handle your income wisely",
    "description" : "Can't spend my whole money",    "priority" : "0",
    "pic" : "Img/Money.png"
},{
    "title" : "Go outside for a workout",
    "description" : "Hit ur 10km in 30 minutes",    "priority" : "0",
    "pic" : "Img/Workout.jpg"
},{
    "title" : "Boxing session starts",
    "description" : "Practice your technice",    "priority" : "0",
    "pic" : "Img/Boxing.jpg"
},{
    "title" : "Need a new Wife",
    "description" : "The old one left you",    "priority" : "0",
    "pic" : "Img/Wife.jpg"
},{
    "title" : "Take Control of your Life",
    "description" : "Start with small tasks",    "priority" : "0",
    "pic" : "Img/Control.jpg"
},{
    "title" : "Protect the ones you Love",
    "description" : "The most Important task",    "priority" : "0",
    "pic" : "/Img/Kh.png"
}]`;

cards = JSON.parse(cards);

for(let x of cards){
    document.getElementById("result").innerHTML += `
    <div>
    <div class=" border border-dark card" style="width: 25rem;">
    <div>
    <p class="btn btn-primary">Task</p>
    </div>
    <img src="${x.pic}" class="container border border-dark card-img-top" alt="${x.title}">    <div class="card-body">
     <h5 class="card-title text-center">${x.title}</h5>
     <p class="text-center">${x.description}</p>
     <hr>
    <div class="propertylevel">
        <p class="priority fs-4">Priority Level:<span class="btn btn-success priorityBtn">${x.priority}</span</p>
        <div>
        </div>
    </div>
     <p class="fs-5">DeadLine: Which Deadline?</p>
     <hr>
     <div class="text-center">
     <p class="btn btn-danger">Delete</p>
     <p class="btn btn-success">Done</p>
     </div>
    </div>
    </div>
    </div>`;
}let btns = document.getElementsByClassName("priorityBtn");
for(let i = 0; i < btns.length; i++){
    btns[i].addEventListener("click", function(){
        cards[i].priority++;
        document.getElementsByClassName("priorityBtn")[i].innerHTML = cards[i].priority;        
        if (cards[i].priority < 2){
            document.getElementsByClassName("priorityBtn")[i].classList.remove("btn-warning");
            document.getElementsByClassName("priorityBtn")[i].classList.remove("btn-danger");
            document.getElementsByClassName("priorityBtn")[i].classList.add("btn-success");
        }else if (cards[i].priority < 4) {
            document.getElementsByClassName("priorityBtn")[i].classList.remove("btn-success");
            document.getElementsByClassName("priorityBtn")[i].classList.remove("btn-danger");
            document.getElementsByClassName("priorityBtn")[i].classList.add("btn-warning");
        }else if (cards[i].priority < 6) {
            document.getElementsByClassName("priorityBtn")[i].classList.remove("btn-success");
            document.getElementsByClassName("priorityBtn")[i].classList.remove("btn-warning");
            document.getElementsByClassName("priorityBtn")[i].classList.add("btn-danger");
        }
    })
}