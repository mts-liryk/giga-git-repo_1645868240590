class Main{

    constructor(){

        this.btnAdd = null;
        this.inp = null;
        this.tab = null;
        this.entryId = localStorage.length;

        this.removeBtns = null;
        
        this.attachElements();
        this.showTableAtStart();
    }
    

    attachElements(){
        let ob = this;
        this.btnAdd = document.getElementById("btnAdd");
        this.btnRemove = document.getElementById("btnRemove");
        this.inp = document.getElementById("inp");
        this.tab = document.getElementById("tab");
        

        btnAdd.addEventListener('click', function(){
            ob.addEntry();
        })

        this.btnRemove.addEventListener('click', function(){
            if(confirm("Are you sure?") && localStorage.length > 0){
                localStorage.clear();
                ob.tab.innerHTML = "";
                ob.entryId = 0;
                console.log("LocalStorage and table cleared!");
            }

        })
    }

    attachRemoveBtns(){
        this.removeBtns = document.querySelectorAll('[data-pole="remove"]');

        let ob = this;

        for(let x = 0; x < localStorage.length; x++){
            this.removeBtns[x].addEventListener('click', function(){
                ob.removeEntry(ob.removeBtns[x]);
            })
        }
    }


    removeEntry(ob){
        let entryId = parseInt(ob.getAttribute('entryId'));
        let TrEntryId = parseInt(ob.getAttribute('TrEntryId'))

        var el = document.getElementById(TrEntryId);

        console.log("Usunięty klucz o id: " + entryId + " oraz Tr o id: " + TrEntryId)

        localStorage.removeItem(entryId);
        el.remove();
        el.parentElement.remove();
        this.entryId--;
    
    }

    addEntry(){
        let entryString = "";
        entryString = inp.value; 

        if(entryString  != ""){
            localStorage.setItem(this.entryId, entryString);
            this.showTable(this.entryId, entryString);
            this.entryId++;
            this.attachRemoveBtns();
        }

    }

    showTableAtStart(){
        let htmlCode = ``;
        let z = 0;
        
        let keysArray = [];
        for(let x = 0; x <= localStorage.length - 1; x++)
            keysArray[x] = localStorage.key(x);
        

        for(z = 0; z <= localStorage.length - 1; z++){
            htmlCode = `
            <tr data-pole="removeTr" id="${z}">
                <td colspan="3">
                    ${localStorage.getItem(keysArray[z])}
                    <button data-pole="remove" TrEntryId="${z}" entryId="${keysArray[z]}">-</button>
                </td>
            </tr>`
            console.log("Dodane entry id do przycisku: " + z)
            this.tab.innerHTML += htmlCode;
        }
        this.attachRemoveBtns();

    }

    showTable(entryId, entryString){
        let htmlCode = ``;
        
        for(let x = 0; x <= localStorage.length - 1; x++)

        htmlCode = `
        <tr data-pole="removeTr" id="${x}">
            <td colspan="3">
                ${localStorage.getItem(entryId, entryString)}
                <button data-pole="remove" TrEntryId="${x}" entryId="${entryId}">-</button>
            </td>
        </tr>`
        console.log("Dodane entry id do przycisku: " + entryId)
        this.tab.innerHTML += htmlCode;

    }
}

document.addEventListener('DOMContentLoaded', ()=>{
	let obiekt = new Main();
});
