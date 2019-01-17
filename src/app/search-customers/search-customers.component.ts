import { Component, OnInit } from '@angular/core';
import { Customer } from '../customer';
import { CustomerService } from '../customer.service';

@Component({
  selector: 'search-customers',
  templateUrl: './search-customers.component.html',
  styleUrls: ['./search-customers.component.css']
})
export class SearchCustomersComponent implements OnInit {

  priority: number;
  customers: Customer[];

  constructor(private dataService: CustomerService) { }

  ngOnInit() {
    this.priority = 0;
  }

  private searchCustomers() {
    this.dataService.getCustomersByPriority(this.priority)
      .subscribe(customers => this.customers = customers);
  }

  onSubmit() {
    this.searchCustomers();
  }
}
