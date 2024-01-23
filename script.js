//your JS code here. If required.
const tBody = document.getElementById("output");
let table = document.querySelector("table");

function randomTime(){
	return Math.floor(Math.random() * 3000) + 1000;
}

function createLoading(){
	         let row = document.createElement("tr");
		let cell = document.createElement("td");
		row.innerText = "loading...";
		row.appendChild(cell);
		table.appendChild(row);
	return row;
}

function promise1(){
	return new Promise((resolve,reject)=>{
		const time = randomTime();
            const loadingRow = createLoading();
		  setTimeout(()=>{
			  table.removeChild(loadingRow);
			  resolve({promise1, time : time/1000});
			  
        },time)
	})
}

function promise2(){
	return new Promise((resolve,reject)=>{
		const time = randomTime();
	const loadingRow = createLoading();
	
		  setTimeout(()=>{
			   table.removeChild(loadingRow);
			  resolve({promise2, time : time/1000});
        },time)
	})
}

function promise3(){
	return new Promise((resolve,reject)=>{
		const time = randomTime();
		const loadingRow = createLoading();
		  setTimeout(()=>{
			   table.removeChild(loadingRow);
			  resolve({promise3, time : time/1000});
        },time)
	})
}


Promise.all([promise1(),promise2(),promise3()])
    .then((results) => {
        const table = document.querySelector('table');

        results.forEach((result,i) => {
		
            const row = table.insertRow(-1);
            const cell1 = row.insertCell(0);
            const cell2 = row.insertCell(1);
		
            cell1.textContent = `promise ${i+1}`;
            cell2.textContent = result.time.toFixed(3);
	
        });

        const totalRow = table.insertRow(-1);
        const totalCell1 = totalRow.insertCell(0);
        const totalCell2 = totalRow.insertCell(1);
        totalCell1.textContent = 'Total';  
        totalCell2.textContent = results.reduce((sum, result) => sum + result.time, 0).toFixed(3);

    });