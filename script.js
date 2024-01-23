//your JS code here. If required.
const tBody = document.getElementById("output")

function randomTime(){
	return Math.floor(Math.random() * 3000) + 1000;
}

function promise1(){
	return new Promise((resolve,reject)=>{
		const time = randomTime();
            tBody.textContent = "loading...";
		  setTimeout(()=>{
			  resolve({promise1, time : time/1000});
			  
        },time)
	})
}

function promise2(){
	return new Promise((resolve,reject)=>{
		const time = randomTime();
		  tBody.textContent = "loading...";
		  setTimeout(()=>{
			  resolve({promise2, time : time/1000});
        },time)
	})
}

function promise3(){
	return new Promise((resolve,reject)=>{
		const time = randomTime();
		  tBody.textContent = "loading...";
		  setTimeout(()=>{
			  resolve({promise3, time : time/1000});
        },time)
	})
}


Promise.all([promise1(),promise2(),promise3()])
    .then((results) => {
        // const loadingRow = document.getElementById('loadingRow');
        // loadingRow.parentNode.removeChild(loadingRow);

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
		tBody.textContent = "";
    });