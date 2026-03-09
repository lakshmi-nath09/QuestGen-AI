function generateQuestions(){

let topic=document.getElementById("topic").value;

let oneMarkTable=document.getElementById("oneMark");
let fiveMarkTable=document.getElementById("fiveMark");

oneMarkTable.innerHTML="<tr><th>No</th><th>Question</th><th>Answer</th></tr>";
fiveMarkTable.innerHTML="<tr><th>No</th><th>Question</th><th>Answer</th></tr>";

let oneMarkQuestions=[
"What is "+topic+"?",
"Define "+topic+".",
"Write a short note on "+topic+".",
"What is the purpose of "+topic+"?",
"List one application of "+topic+"."
];

let fiveMarkQuestions=[
"Explain the concept of "+topic+" in detail.",
"Describe the working of "+topic+" with examples.",
"Write advantages and disadvantages of "+topic+".",
"Explain the applications of "+topic+".",
"Differentiate "+topic+" with related concepts."
];

for(let i=0;i<oneMarkQuestions.length;i++){

let row=oneMarkTable.insertRow();

row.insertCell(0).innerText=i+1;
row.insertCell(1).innerText=oneMarkQuestions[i];

let btn=document.createElement("button");
btn.innerText="Show Answer";
btn.className="show-btn";
btn.onclick=function(){
alert(topic+" is an important concept related to the subject. Study its definition, working and applications.");
};

row.insertCell(2).appendChild(btn);

}

for(let i=0;i<fiveMarkQuestions.length;i++){

let row=fiveMarkTable.insertRow();

row.insertCell(0).innerText=i+1;
row.insertCell(1).innerText=fiveMarkQuestions[i];

let btn=document.createElement("button");
btn.innerText="Show Answer";
btn.className="show-btn";
btn.onclick=function(){
alert("Explain "+topic+" with definition, diagram, working and applications.");
};

row.insertCell(2).appendChild(btn);

}

}
