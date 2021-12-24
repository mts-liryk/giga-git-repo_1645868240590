class Main{
    constructor(){

        this.btnAdd = null;
        this.inp = null;
        this.tab = null;
        this.entryId = 0;
        
        this.attach();
        // this.showTable();
    }
    

    attach(){
        let ob = this;
        this.btnAdd = document.getElementById("btnAdd");
        this.btnRemove = document.getElementById("btnRemove");
        this.inp = document.getElementById("inp");
        this.tab = document.getElementById("tab");
        

        btnAdd.addEventListener('click', function(){
            ob.addEntry();
        })

        this.btnRemove.addEventListener('click', function(){
            if(confirm("Are you sure?")){
                localStorage.clear();
                this.enterId = 0;
                console.log("LocalStorage and table cleared!")
            }

        })
    }

    addEntry(){
        let entryString = "";
        entryString = inp.value;
        
        if(entryString  != ""){
            localStorage.setItem(this.entryId, entryString);
            this.showTable(this.entryId, entryString);
            // this.showTable();
            this.entryId++;
    
;
            console.log("done");
 
        }
    }

    showTable(entryId, entryString){
        let htmlCode = ``;
        
        for(let x = 0; x <= localStorage.length - 1; x++)
        htmlCode = 
        `
        <tr id="${this.entryId}">
            <td colspan="3">${localStorage.getItem(entryId, entryString)}</td>
        </tr>
        `
        this.tab.innerHTML += htmlCode;

        console.log("test")
    }
}

document.addEventListener('DOMContentLoaded', ()=>{

	let obiekt = new Main();
});
