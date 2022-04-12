export default class Difference {
    constructor(oldOficcer, newOfficer, items){
        try{
            this.oldOficcer = document.querySelector(oldOficcer);
            this.newOfficer = document.querySelector(newOfficer);
            this.oldItems = this.oldOficcer.querySelectorAll(items);
            this.newItems = this.newOfficer.querySelectorAll(items);
            this.items = items;
            this.oldCounter = 0;
            this.newCounter = 0;
        }catch(e){}
    }

    bindTriggers(container, items, counter){
        container.querySelector('.plus').addEventListener('click', () => {
            if(counter !== items.length - 2) {
                items[counter].style.display = 'flex';
                counter++;
            } else {
                items[counter].style.display = 'flex'; 
                items[items.length - 1].remove(); 
            }
        });
    }


    hideItems(itmes) {
        itmes.forEach((item, i, arr) => {
            if(i !== arr.length - 1){
                item.style.display = 'none';
            }
        });
    }

    init() {
        try{
            this.hideItems(this.oldItems);
            this.hideItems(this.newItems);

            this.bindTriggers(this.oldOficcer, this.oldItems, this.oldCounter);
            this.bindTriggers(this.newOfficer, this.newItems, this.newCounter);
        }catch(e){}
    }
}