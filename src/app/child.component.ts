import { Component, Input, OnInit, OnChanges, SimpleChanges, DoCheck, KeyValueDiffers  } from '@angular/core';
import { Customer } from './customer';
 
// tslint:disable-next-line: no-conflicting-lifecycle
@Component({
    selector: 'child-component',
    template: `<h2>Child  Component</h2>
               <p>Message {{ message }} </p>
               <p>Customer Name {{ customer.name }} </p>
               <p>Customer Code {{ customer.code }} </p>
               <p>Do Check count {{ DocheckCount }} </p>
               <ul><li *ngFor="let log of changelog;"> {{ log }}</li></ul> `
})
export class ChildComponent implements OnChanges, DoCheck, OnInit {
       @Input() message: string;
    @Input() customer: Customer;
    changelog: string[] = [];
    oldCustomer: Customer = new Customer();
    DocheckCount = 0;
    differ: any;
    constructor(private differs: KeyValueDiffers) {}

    ngOnInit() {
        console.log('OnInit');
        // this.oldCustomer = Object.assign({}, this.customer);
        this.differ = this.differs.find(this.customer).create();
    }

    ngDoCheck() {
        console.log('Docheck');
        this.DocheckCount++;
        const customerChanges = this.differ.diff(this.customer);
        if (customerChanges) {
            console.log(customerChanges);
            customerChanges.forEachChangedItem(r =>  this.changelog.push('changed ' + r.key + ' ' + JSON.stringify( r.currentValue)));
            customerChanges.forEachAddedItem(r =>  this.changelog.push('added: ' + r.key + ' ' + JSON.stringify( r.currentValue)));
            customerChanges.forEachRemovedItem(r =>  this.changelog.push('removed: ' + r.key + ' ' + JSON.stringify( r.currentValue)));
        }

        // if (this.oldCustomer.name !== this.customer.name || this.oldCustomer.code !== this.customer.code ) {
        //     const to  = JSON.stringify(this.customer);
        //     const from = JSON.stringify(this.oldCustomer);
        //     const changeLog = `DoCheck customer: changed from ${from} to ${to} `;
        //     this.changelog.push(changeLog);
        //     this.oldCustomer = Object.assign({}, this.customer);
        // }

    }

    ngOnChanges(changes: SimpleChanges) {
        console.log('OnChanges');
        console.log(JSON.stringify(changes));
        // tslint:disable-next-line: forin
        for (const propName in changes) {
             const change = changes[propName];
             console.log(change);
             const to  = JSON.stringify(change.currentValue);
             const from = JSON.stringify(change.previousValue);
             const changeLog = `${propName}: changed from ${from} to ${to} `;
             this.changelog.push(changeLog);
        }
    }
}