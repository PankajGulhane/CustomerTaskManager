import { Component, OnInit, Input } from '@angular/core';
import { CustomerService } from '../customer.service';
import { Customer } from '../customer';

import { CustomersListComponent } from '../customers-list/customers-list.component';

@Component({
  selector: 'customer-details',
  templateUrl: './customer-details.component.html',
  styleUrls: ['./customer-details.component.css']
})
export class CustomerDetailsComponent implements OnInit {

  @Input() customer: Customer;
  
  enableEdit: boolean = true;
  constructor(private customerService: CustomerService, private listComponent: CustomersListComponent) { }

  ngOnInit() {
  }

  updateActive(isActive: boolean) {
    this.customerService.updateCustomer(this.customer.id,
      { name: this.customer.name, active: isActive , parent: this.customer.parent , priority: this.customer.priority , startDate: this.customer.startDate , dueDate: this.customer.dueDate })
      .subscribe(
        data => {
          console.log(data);
          this.customer = data as Customer;
        },
        error => console.log(error));
  }

  deleteCustomer() {
    this.customerService.deleteCustomer(this.customer.id)
      .subscribe(
        data => {
          console.log(data);
          this.listComponent.reloadData();
        },
        error => console.log(error));
  }
  
  updateCustomer(isActive: boolean) {
  this.customerService.updateCustomer(this.customer.id,
      { name: this.customer.name, active: isActive , parent: this.customer.parent , priority: this.customer.priority , startDate: this.customer.startDate , dueDate: this.customer.dueDate })
      .subscribe(
        data => {
          console.log(data);
          this.customer = data as Customer;
        },
        error => console.log(error));
  
  }
}
